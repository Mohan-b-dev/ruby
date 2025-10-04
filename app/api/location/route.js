import { connectDB } from "@/lib/mongodb";
import Location from "../../../models/location";

export async function GET() {
  try {
    await connectDB();
    const locations = await Location.find().sort({ _id: 1 }); // sort by creation
    return new Response(JSON.stringify(locations), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify([]), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// api/location/route.js (POST)
export async function POST(req) {
  try {
    await connectDB();
    const { location, amTime, pmTime } = await req.json();

    if (!location && !amTime && !pmTime) {
      return new Response(JSON.stringify({ error: "At least one field required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const newLocation = await Location.create({
      location: location || null,
      amTime: amTime || null,
      pmTime: pmTime || null,
    });

    return new Response(JSON.stringify(newLocation), {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to create" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}




// DELETE route remains the same
export async function DELETE(req) {
  try {
    await connectDB();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id)
      return new Response(JSON.stringify({ error: "ID required" }), {
        status: 400,
      });

    await Location.findByIdAndDelete(id);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: "Failed to delete" }), {
      status: 500,
    });
  }
}
