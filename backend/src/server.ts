import "reflect-metadata"   
import express from 'express';
import "./database";
import { routes } from "./routes"

const app = express()
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(routes);


app.listen(PORT, () => {
    console.log(`Server is running in http://localhost:${PORT}`)
})