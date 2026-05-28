import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
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

    const savedColleges =
      await prisma.savedCollege.findMany({
        where: {
          userId: decoded.userId,
        },
        include: {
          college: true,
        },
      });

    return NextResponse.json(savedColleges);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}