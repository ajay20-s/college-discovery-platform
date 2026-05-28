import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  try {
    // GET TOKEN
    const cookieStore = await cookies();

    const token =
      cookieStore.get("token")?.value;

    if (!token) {
      return NextResponse.json(
        {
          error: "Unauthorized",
        },
        { status: 401 }
      );
    }

    // VERIFY TOKEN
    const decoded: any = jwt.verify(
      token,
      process.env.JWT_SECRET!
    );

    const body = await req.json();

    const { collegeId } = body;

    // CHECK EXISTING
    const alreadySaved =
      await prisma.savedCollege.findFirst({
        where: {
          userId: decoded.id,
          collegeId,
        },
      });

    if (alreadySaved) {
      return NextResponse.json(
        {
          error: "College already saved",
        },
        { status: 400 }
      );
    }

    // SAVE COLLEGE
    await prisma.savedCollege.create({
      data: {
        userId: decoded.id,
        collegeId,
      },
    });

    return NextResponse.json({
      message:
        "College saved successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Internal server error",
      },
      { status: 500 }
    );
  }
}