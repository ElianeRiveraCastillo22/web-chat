import express from "express";
import { createServer } from 'node:http';
import path from "node:path";
import { httpServerIo } from "./realtimeServer.js";
import { router } from "./routes/index.js";

const __dirname = import.meta.dirname;

const app = express()
const httpServer = createServer(app)

app.set("port", process.env.PORT || 3000)
app.set("views", path.join(__dirname, "views"))
//app.use("/", router) ""
app.use(router)
app.use(express.static(path.join(__dirname, "public")))

httpServer.listen(app.get("port"), ()=>{
    console.log("el servidor esta corriendo en el puerto", app.get("port"))
})
httpServerIo(httpServer)
