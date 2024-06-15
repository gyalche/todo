//@ts-ignore
import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { connectDB } from '../../../../utils/db';
import userModel from '../../../../models/user.model';
export async function POST(req: any) {
  try {
    await connectDB();
    const { username, email, password } = await req.json();
    console.log(username, email, password);
    const exists = await userModel.findOne({ $or: [{ email }] });
    if (exists) {
      return NextResponse.json(
        { message: 'Email already exists' },
        { status: 500 },
      );
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    await userModel.create({ username, email, password: hashedPassword });
    return NextResponse.json({ message: 'User registered' }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
