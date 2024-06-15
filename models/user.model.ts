import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
  {
    username: String,
    email: {
      type: String,
      required: [true, 'Must provide an email'],
      unique: true,
    },
    password: {
      type: String,
      rquired: [true, 'Password must be provided'],
    },
  },
  { timestamps: true },
);

const userModel =
  mongoose.models.User || mongoose.model<any>('User', userSchema);
export default userModel;
