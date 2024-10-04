import express from "express";
import helmet from "helmet";
import { rateLimit } from "express-rate-limit";
import cors from "cors";

const app = express();

const limiter = rateLimit({
  windowMs: 15 * 1000,
  limit: 3,
  standardHeaders: "draft-7",
  legacyHeaders: false,
  message: "Vous pouvez ressayer après 15 secondes",
});

app.use(limiter);
app.use(helmet());
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000/api/hello" }));

const port = 3000;

app.get("/api/hello", (req, res) => {
  res.json({ mesage: "Hello World" });
});

app.listen(port, () => {
  console.log("Express listen port " + port);
});
