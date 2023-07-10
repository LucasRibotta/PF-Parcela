import { Request, Response } from "express"
import User from "../models/user"
import bcrypt from "bcrypt"

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {

  const { name, lastname, email, password, image, provider, accessToken} = req.body

  if (!password || !email) {
    return res
      .status(400)
      .json({ message: "Please, send your email and password" })
  }
  const user = await User.findOne({ email })
  if (user) {
    if(user.provider === 'local') return res.status(400).json({ message: "The user already exists" })
    else return res.status(200).json(user)
  }
  const newHashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10))

  const newUser = new User({ ...req.body, password: newHashedPassword })
  await newUser.save()
  return res.status(201).json(newUser)
}

export const login = async (req: Request, res: Response) => {
  const { email, password, name, tel } = req.body

  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please. Send your email and password" })
  }
  const user = await User.findOne({ email })
  console.log("esto es server:",user)
  if (!user) {
    return res.status(400).json({ message: "The user does not exist" })
  }

  const isMatch = bcrypt.compareSync(password, user.password)
  console.log(isMatch)

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" })
  }
    return res.status(200).json({ email, isAdmin: user.isAdmin, isCompany: user.isCompany })
}
