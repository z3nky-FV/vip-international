import { NextResponse } from 'next/server';
import fs from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file received.' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Save in public/images
    const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`;
    const publicImagesDir = path.join(process.cwd(), 'public', 'images');
    
    // Ensure directory exists
    try {
      await fs.access(publicImagesDir);
    } catch {
      await fs.mkdir(publicImagesDir, { recursive: true });
    }

    const filepath = path.join(publicImagesDir, filename);
    await fs.writeFile(filepath, buffer);

    return NextResponse.json({ url: `/images/${filename}` });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Failed to upload file.' }, { status: 500 });
  }
}
