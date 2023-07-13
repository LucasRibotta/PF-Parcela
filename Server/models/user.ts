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
  isCompany: { type: Boolean, default: false }
})

export default model<User>("User", userSchema, "user")
