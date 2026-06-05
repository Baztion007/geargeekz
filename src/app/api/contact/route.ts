import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory store for contact messages (replace with email service or database in production)
interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  timestamp: number;
  ip: string;
}

const contactMessages: ContactMessage[] = [];
const MAX_MESSAGES = 500;

// Rate limiting: max 3 messages per IP per hour
const contactRateLimit = new Map<string, { count: number; resetAt: number }>();
const MAX_MESSAGES_PER_HOUR = 3;

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) return forwarded.split(',')[0].trim();
  const realIP = request.headers.get('x-real-ip');
  if (realIP) return realIP.trim();
  return 'unknown';
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = contactRateLimit.get(ip);

  if (!record || record.resetAt < now) {
    contactRateLimit.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 });
    return true;
  }

  if (record.count >= MAX_MESSAGES_PER_HOUR) {
    return false;
  }

  record.count += 1;
  return true;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || typeof name !== 'string' || name.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'Name must be at least 2 characters' },
        { status: 400 }
      );
    }

    if (!email || typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Please provide a valid email address' },
        { status: 400 }
      );
    }

    if (!message || typeof message !== 'string' || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Message must be at least 10 characters' },
        { status: 400 }
      );
    }

    if (message.length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Message is too long (max 5000 characters)' },
        { status: 400 }
      );
    }

    // Rate limiting
    const ip = getClientIP(request);
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: 'Too many messages. Please try again later.' },
        { status: 429 }
      );
    }

    // Store message
    const contactMessage: ContactMessage = {
      id: `msg_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      name: name.trim(),
      email: email.trim(),
      subject: (subject || '').trim(),
      message: message.trim(),
      timestamp: Date.now(),
      ip,
    };

    contactMessages.push(contactMessage);
    if (contactMessages.length > MAX_MESSAGES) {
      contactMessages.splice(0, contactMessages.length - MAX_MESSAGES);
    }

    // In production, you would also:
    // 1. Send an email notification to the admin
    // 2. Send a confirmation auto-reply to the user
    // 3. Store in a database for the admin panel

    return NextResponse.json({
      success: true,
      message: 'Your message has been received. We\'ll get back to you as soon as possible.',
    });
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid request' },
      { status: 400 }
    );
  }
}

// GET endpoint for admin to retrieve messages (protected by admin session)
export async function GET(request: NextRequest) {
  try {
    // Simple auth check — verify admin cookie
    const token = request.cookies.get('gs_admin_token')?.value;
    if (!token) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const url = new URL(request.url);
    const limit = parseInt(url.searchParams.get('limit') || '50');

    const messages = contactMessages
      .slice(-limit)
      .reverse()
      .map(({ ip, ...rest }) => rest); // Don't expose IPs via API

    return NextResponse.json({
      messages,
      total: contactMessages.length,
    });
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
