import { NextResponse } from 'next/server';

export async function GET() {
  // This is a mock implementation. In a real-world scenario, you would fetch this data from the Down Detector API.
  const mockData = {
    orionHealthStatus: Math.random() < 0.5 ? 'Good' : 'Bad', // Randomly choose 'Good' or 'Bad'
    totalOutages: 15,
    services: [
      { name: 'AWS', outages: 3 },
      { name: 'Google Cloud', outages: 1 },
      { name: 'Azure', outages: 2 },
      { name: 'Cloudflare', outages: 0 },
      { name: 'GitHub', outages: 1 },
    ],
  };

  return NextResponse.json(mockData);
}