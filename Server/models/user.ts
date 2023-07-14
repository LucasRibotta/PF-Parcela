import { Schema, model, Document } from "mongoose"

export interface User extends Document {
  name: string
  lastname: string
  phone: number
  date: string
  email: string
  password: string
  provider?: string
  accessToken?: string
  isAdmin: boolean
  isCompany: boolean
  image: string
}

const userSchema = new Schema<User>({
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: Number, required: false },
  date: { type: String, required: false, default: Date() },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  provider: {type: String, required: false, default: "local"},
  accessToken: { type: String, required: false},
  isAdmin: { type: Boolean, default: false },
  isCompany: { type: Boolean, default: false },
  image: { type: String, required: false, default: "https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png"}
})

export default model<User>("User", userSchema, "user")
