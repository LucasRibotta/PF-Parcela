import { Schema, model } from "mongoose"

export interface User {
  id: number
  name: string
  lastname: string
  phone: number
  date: string
  email: string
  password: string
  isAdmin: boolean
  isCompany: boolean
}

const userSchema = new Schema<User>({
  id: { type: Number },
  name: { type: String, required: true },
  lastname: { type: String, required: true },
  phone: { type: Number, required: false },
  date: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  isAdmin: { type: Boolean, default: false },
  isCompany: { type: Boolean, default: false }
})

export default model<User>("User", userSchema, "user")
