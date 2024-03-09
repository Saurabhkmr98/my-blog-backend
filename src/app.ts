import express from "express";
import { blogRouter } from "./routes/blog";
import { errorHandler } from "./middleware/errorHandler";

const app = express();

app.use(errorHandler);

app.use(express.json());
app.use("/api/blog", blogRouter);

export default app;
