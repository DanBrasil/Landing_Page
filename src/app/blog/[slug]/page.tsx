// src/app/blog/[slug]/page.tsx

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  
  return (
    <div className="min-h-screen p-8">
      <h1>Blog Post: {slug}</h1>
      <p>Em desenvolvimento...</p>
    </div>
  );
}
