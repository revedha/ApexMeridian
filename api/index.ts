import express from "express";
import { registerRoutes } from '../server/routes';

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Initialize routes for Vercel
registerRoutes(app);

export default app;