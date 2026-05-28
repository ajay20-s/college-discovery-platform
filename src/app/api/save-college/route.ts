import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  try {
    const token =
      req.headers
        .get("cookie")
        ?.split("token=")[1];

    if (!token) {
      return NextResponse.json(
        { error: "Unauthorized" },
        { status: 401 }
      );
    }

    const decoded: any = jwt.verify(
      token,
      process.env.JWT_SECRET!
    );

    const body = await req.json();

    const { collegeId } = body;

    const alreadySaved =
      await prisma.savedCollege.findFirst({
        where: {
          userId: decoded.userId,
          collegeId,
        },
      });

    if (alreadySaved) {
      return NextResponse.json(
        { error: "College already saved" },
        { status: 400 }
      );
    }

    await prisma.savedCollege.create({
      data: {
        userId: decoded.userId,
        collegeId,
      },
    });

    return NextResponse.json({
      message: "College saved",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}