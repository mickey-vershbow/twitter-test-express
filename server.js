// Import express
const express = require("express")

// create application object
const app = express()

// register static file serving middleware
app.use(express.static("website_goes_here"))

// get port from env, if not variable in env then use 3000
const PORT = process.env.PORT || 3000

// start server
app.listen(PORT, () => console.log(`listening on port ${PORT}`))