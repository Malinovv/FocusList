import cors from "cors";
import express from "express";
import healthRouter from "./routes/health.js";

const app = express();

app.use(
  cors({
    origin: process.env.WEB_ORIGIN ?? "http://localhost:3000"
  })
);
app.use(express.json());

app.get("/", (_request, response) => {
  response.json({
    name: "FocusList API",
    status: "ok"
  });
});

app.use("/health", healthRouter);

export default app;
