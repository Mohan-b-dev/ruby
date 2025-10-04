import { connectDB } from "@/lib/mongodb";
import About from "@/models/About";

export async function GET() {
  try {
    await connectDB();
    const aboutData = await About.findOne();
    return new Response(
      JSON.stringify(aboutData || { paragraph1: "", paragraph2: "" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("GET /api/about error:", err.message, err.stack);
    return new Response(
      JSON.stringify({ error: "Failed to fetch about data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function POST(req) {
  try {
    const { paragraph1, paragraph2, password } = await req.json();

    if (!password) {
      console.warn("POST /api/about: Password is required");
      return new Response(JSON.stringify({ error: "Password is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!process.env.ADMIN_PASSWORD) {
      console.error("POST /api/about: ADMIN_PASSWORD is not set in .env.local");
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (password !== process.env.ADMIN_PASSWORD) {
      console.warn("POST /api/about: Invalid password attempt");
      return new Response(JSON.stringify({ error: "Invalid password" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    await connectDB();

    let about = await About.findOne();
    if (about) {
      about.paragraph1 =
        paragraph1 !== undefined ? paragraph1 : about.paragraph1;
      about.paragraph2 =
        paragraph2 !== undefined ? paragraph2 : about.paragraph2;
      await about.save();
    } else {
      about = new About({
        paragraph1: paragraph1 || "",
        paragraph2: paragraph2 || "",
      });
      await about.save();
    }

    return new Response(JSON.stringify(about), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("POST /api/about error:", err.message, err.stack);
    return new Response(
      JSON.stringify({ error: "Failed to save about data" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}

export async function DELETE(req) {
  try {
    const { paragraph, password } = await req.json();

    if (!password) {
      console.warn("DELETE /api/about: Password is required");
      return new Response(JSON.stringify({ error: "Password is required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!process.env.ADMIN_PASSWORD) {
      console.error(
        "DELETE /api/about: ADMIN_PASSWORD is not set in .env.local"
      );
      return new Response(
        JSON.stringify({ error: "Server configuration error" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    if (password !== process.env.ADMIN_PASSWORD) {
      console.warn("DELETE /api/about: Invalid password attempt");
      return new Response(JSON.stringify({ error: "Invalid password" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }

    if (!["paragraph1", "paragraph2"].includes(paragraph)) {
      console.warn("DELETE /api/about: Invalid paragraph key", paragraph);
      return new Response(JSON.stringify({ error: "Invalid paragraph key" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    await connectDB();
    const about = await About.findOne();
    if (!about) {
      console.warn("DELETE /api/about: No about data found");
      return new Response(JSON.stringify({ error: "No about data found" }), {
        status: 404,
        headers: { "Content-Type": "application/json" },
      });
    }

    about[paragraph] = "";
    await about.save();

    return new Response(
      JSON.stringify({ message: "Paragraph deleted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (err) {
    console.error("DELETE /api/about error:", err.message, err.stack);
    return new Response(
      JSON.stringify({ error: "Failed to delete paragraph" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
