import express from "express";
import routes from "./routes/postsRoutes.js";

const port = 3000;

const app = express();
app.use(express.static("uploads"));
routes(app);

app.listen(port, () => {
  console.log("Rodando na porta 3000");
});
