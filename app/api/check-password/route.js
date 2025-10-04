export async function POST(req) {
  const { password } = await req.json();

  // Real password stored in .env
  const correctPassword = process.env.ADMIN_PASSWORD;

  if (password === correctPassword) {
    return Response.json({ success: true });
  }

  return Response.json({ success: false }, { status: 401 });
}
