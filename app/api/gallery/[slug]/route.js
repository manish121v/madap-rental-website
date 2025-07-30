import fs from 'fs';
import path from 'path';

export async function GET(request, { params }) {
  const { slug } = await params;

  // Resolve folder path from the public directory
  const folderPath = path.join(process.cwd(), 'public', slug);

  try {
    const files = fs.readdirSync(folderPath);

    // Filter supported media files
    const mediaFiles = files.filter(file =>
      /\.(jpg|jpeg|png|gif|mp4|mov|avi|mkv)$/i.test(file)
    );

    // Build URLs
    const urls = mediaFiles.map(file => `/${slug}/${file}`);

    return new Response(JSON.stringify(urls), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Folder not found or inaccessible' }),
      { status: 404, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
