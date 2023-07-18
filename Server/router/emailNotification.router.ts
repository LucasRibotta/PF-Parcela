import { Router } from "express"
const router = Router()

import confirm from "../userControlers/confirm";
import emailNotification  from "../userControlers/emailNotification"

router.post("/emailNotification", emailNotification)
router.get("/confirm",confirm)


export default router
