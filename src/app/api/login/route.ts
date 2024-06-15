//@ts-ignore
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { connectDB } from '../../../../utils/db';
import userModel from '../../../../models/user.model';
export async function POST(req: any) {
  try {
    await connectDB();
    const { email, password } = await req.json();
    const user = await userModel.findOne({ $or: [{ email }] });
    if (!user) {
      return NextResponse.json(
        { message: 'Email doesnt exists' },
        { status: 500 },
      );
    }
    const hashedPassword = await bcrypt.compare(
      password as string,
      user?.password as string,
    );
    if (hashedPassword) {
      return NextResponse.json(
        { message: 'Login successfull', data: user },
        { status: 201 },
      );
    } else {
      return NextResponse.json(
        { message: 'Invalid password' },
        { status: 400 },
      );
    }
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
