import { NextResponse } from "next/server";

interface Data {
  content: string;
  type: "url" | "pic" | "text";
}

function isImage(url: string) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

export async function POST(req: Request) {
  const body: { content: string } = await req.json();
  const data: Data = { ...body, type: "text" };
  if (body.content.startsWith("http")) {
    data.type = isImage(body.content) ? "pic" : "url";
  } else {
    data.type = "text";
  }
  return NextResponse.json(data);
}
// k28iap5fGTOaero2
