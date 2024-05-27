import mongoose, { Schema, Document, Model } from "mongoose";

interface UserInterface extends Document {
  name: string;
  email: string;
  password: string;
  gender: string;
}

const UserSchema: Schema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gender: { type: String, required: true },
});

const User: Model<UserInterface> = mongoose.model<UserInterface>(
  "User",
  UserSchema
);

export default User;
