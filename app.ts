import dotenv from "dotenv"
import express from "express"
import path from "path"

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime 
// as if it were an environment variable
const port = process.env.SERVER_PORT

const app = express()

// Configure Express to use EJS
// app.set("views", path.join(__dirname, "views"))
// app.set("view engine", "ejs")

// define a route handler for the default home page
app.get("/", (req, res) => {
    // render the index template
    res.send('well done')
})

// start the express server
app.listen(port, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at ${process.env.APP_URL}:${process.env.SERVER_PORT}`)
})
