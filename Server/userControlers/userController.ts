import { Request, Response } from "express"
import User from "../models/user"
import { secretKey, adminSecretKey } from "../config/config"
import jwt from "jsonwebtoken"

export const register = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { email, password } = req.body
  if (!password || !email) {
    return res
      .status(400)
      .json({ message: "Please, send your email and password" })
  }
  const user = await User.findOne({ email })
  if (user) {
    return res.status(400).json({ message: "The user already exists" })
  }

  const newUser = new User(req.body)
  await newUser.save()
  return res.status(201).json(newUser)
}

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "Please. Send your email and password" })
  }
  const user = await User.findOne({ email })
  if (!user) {
    return res.status(400).json({ message: "The user does not exist" })
  }
  const isMatch = user.comparePassword(password)

  if (!isMatch) {
    return res.status(401).json({ message: "Invalid password" })
  }

  if (user.isAdmin) {
    // const adminToken = jwt.sign({ userId: user._id }, adminSecretKey, {
    //   expiresIn: 86400
    // })

    return res
      .status(200)
      .json({ email, password, isAdmin: true, isCompany: false })
  } else {
    // const token = jwt.sign({ userId: user._id }, secretKey, {
    //   expiresIn: 86400
    // })

    return res
      .status(200)
      .json({ email, password, isAdmin: false, isCompany: false })
  }
}
