import { Router } from "express"
import userMiddleware from "../middlewares/user.middleware"
import { checkToken, createToken } from "../middlewares/jwt.middleware"
const router = Router()
router.get("/list", checkToken, userMiddleware.listUsers)
router.post("/sign", userMiddleware.createUser)
router.put("/", userMiddleware.updateUser)
router.delete("/", userMiddleware.deleteUser)
router.post("/login", createToken, userMiddleware.loginUser)
export default router
