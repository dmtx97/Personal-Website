const express = require("express");
const next = require("next");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3000;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const db = require("./db");
const cors = require('cors');

app
    .prepare()
    .then(()=>{
        const server = express();
        const showRoutes = require("./routes/index.js");
        server.use(cors());
        server.use(bodyParser.json());
        server.use(bodyParser.urlencoded({extended: true}));
        server.use("/api", showRoutes);
        // server.use("/admin", "./routes/admin");

        server.get("*", (req, res)=>{
            return handle(req, res);
        });

        server.listen(PORT, err =>{
            if (err) throw err;
            console.log(`> Ready on ${PORT}`);
        });
    })
    .catch(ex => {
        console.error(ex.stack);
        process.exit(1);
    });