import express from "express";
// import bodyParser from "body-parser";

import placesRoutes from "./routes/placesRoute.js";

const app = express();

app.use(placesRoutes);

app.listen(5000);
