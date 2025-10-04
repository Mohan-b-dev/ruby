export async function POST(request) {
  try {
    const { password } = await request.json();
    if (!password) {
      console.warn("POST /api/verify-password: Password is required");
      return new Response(JSON.stringify({ error: "Password is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }
    if (!process.env.ADMIN_PASSWORD) {
      console.error(
        "POST /api/verify-password: ADMIN_PASSWORD is not set in .env.local"
      );
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }
    const isValid = password === process.env.ADMIN_PASSWORD;
    if (!isValid) {
      console.warn("POST /api/verify-password: Invalid password attempt");
    }
    return new Response(JSON.stringify({ isValid }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("POST /api/verify-password error:", err.message, err.stack);
    return new Response(JSON.stringify({ error: "Error verifying password" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
