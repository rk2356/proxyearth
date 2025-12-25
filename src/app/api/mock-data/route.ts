import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const mobile = searchParams.get('mobile');
  const email = searchParams.get('email');

  // Mock data for demo purposes
  if (mobile) {
    return NextResponse.json({
      status: "success",
      mobile: mobile,
      name: "DEMO USER",
      address: "123, Demo Street, Mumbai, Maharashtra - 400001, India",
      circle: "Maharashtra",
      email: "demo@example.com",
      fname: "Demo Father Name",
      id: "123456789012",
      alt: "9876543210",
      lat: 19.0760,
      lon: 72.8777
    });
  }

  if (email) {
    return NextResponse.json({
      status: "success",
      email: email,
      breaches: [
        {
          name: "Demo Breach 2024",
          domain: "example.com",
          date: "2024-01-15",
          records: 1000000
        }
      ],
      compromised: true
    });
  }

  return NextResponse.json({ 
    error: "Please provide mobile or email parameter" 
  }, { status: 400 });
}
