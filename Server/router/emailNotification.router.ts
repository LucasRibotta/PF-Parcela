import { Router } from "express"
const router = Router()

import emailNotification  from "../userControlers/emailNotification"
import {emailRegister, confirm} from "../userControlers/emailRegister"
import userVeri from "../userControlers/userVeri"

router.post("/emailNotification", emailNotification)
router.post("/emailRegister", emailRegister)
router.get("/confirm/:token", confirm)
router.post("/userVeri", userVeri)


export default router
