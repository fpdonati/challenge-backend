import express from "express";
import postsRoutes from "./routes/posts.js";


const app = express();
app.use(express.json());

app.use(postsRoutes);


export default app;
