import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    // Path to the CV file in the public directory
    const filePath = join(process.cwd(), 'public', 'CV.pdf');
    
    // Read the file
    const fileBuffer = await readFile(filePath);
    
    // Create response with proper headers for download
    const response = new NextResponse(fileBuffer);
    
    // Set headers to force download
    response.headers.set('Content-Type', 'application/octet-stream');
    response.headers.set('Content-Disposition', 'attachment; filename="Inioluwa_Atanda_CV.pdf"');
    response.headers.set('Content-Length', fileBuffer.length.toString());
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate');
    response.headers.set('Pragma', 'no-cache');
    response.headers.set('Expires', '0');
    
    return response;
  } catch (error) {
    console.error('Error serving CV file:', error);
    return NextResponse.json(
      { error: 'CV file not found' },
      { status: 404 }
    );
  }
}
