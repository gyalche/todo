import mongoose from 'mongoose';
export async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log('connected to db.');
  } catch (error) {
    console.log(error);
    setTimeout(() => {
      connectDB();
    }, 500);
  }
}
