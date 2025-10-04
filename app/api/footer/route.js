import { NextResponse } from "next/server";

let footerData = {
  address: "Avadi Railway Station Road, Chennai, TN",
  phone: "+91 98765 43210",
  email: "rubyfruits@email.com",
  timing: "Daily 8:00 AM - 10:00 PM",
  promises: [
    "100% Fresh Quality Guarantee",
    "Daily Fresh Stock Arrivals",
    "Best Prices in Chennai",
    "Customer Satisfaction Priority",
    "Local & Exotic Fruit Varieties",
  ],
};

export async function GET() {
  return NextResponse.json(footerData);
}

export async function POST(request) {
  const body = await request.json();
  const { password, ...data } = body;

  // Debug logs
  console.log("Entered password:", password);
  console.log("Env password:", process.env.ADMIN_PASSWORD);

  if (password !== process.env.ADMIN_PASSWORD) {
    return NextResponse.json(
      { success: false, msg: "Unauthorized" },
      { status: 401 }
    );
  }

  footerData = { ...footerData, ...data };

  return NextResponse.json({
    success: true,
    msg: "Footer updated successfully",
    footerData,
  });
}
