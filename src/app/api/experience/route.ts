import { NextResponse } from "next/server";
import { experienceData } from "@/features/experience/data";

export async function GET() {
  return NextResponse.json(experienceData);
}