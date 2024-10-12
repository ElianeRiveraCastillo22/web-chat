import express from "express";
import path from "node:path"
const __dirname = import.meta.dirname;

const router = express.Router()

const views = path.join(__dirname, "/../views")

router.get("/", (req, res)=>{
    res.sendFile(views + "/index.html")
})

export { router }
