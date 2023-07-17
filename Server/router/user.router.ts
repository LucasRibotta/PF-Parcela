import { Router } from "express"
const router = Router()

import { register, login, wishList } from "../userControlers/userController"

router.post("/register", register)
router.post("/login", login)
router.post("/wishlist", wishList)

export default router
