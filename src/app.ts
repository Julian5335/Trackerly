import express from "express"
import dotenv from "dotenv"

// Setup .env
dotenv.config()

const app = express()

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`App started on port ${PORT}`);
})