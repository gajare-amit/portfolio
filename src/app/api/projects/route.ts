import { NextResponse } from "next/server";
import { projects } from "@/features/projects/data";

export async function GET() {
  return NextResponse.json(projects);
}