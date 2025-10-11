import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import express from "express";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Serve static files
  const rootPath = path.resolve(import.meta.dirname, "..");
  
  // Serve CSS files
  app.use('/css', express.static(path.join(rootPath, 'css')));
  
  // Serve assets (logos, images)
  app.use('/assets', express.static(path.join(rootPath, 'assets')));
  
  // Serve pages
  app.use('/pages', express.static(path.join(rootPath, 'pages')));
  
  // Serve the main index file
  app.get('/', (req, res) => {
    res.sendFile(path.join(rootPath, 'index.html'));
  });

  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      const submission = await storage.createContactSubmission(validatedData);
      res.json({ success: true, id: submission.id });
    } catch (error) {
      console.error("Contact submission error:", error);
      if (error instanceof z.ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      } else {
        res.status(500).json({ 
          success: false, 
          message: "Internal server error"
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      res.status(500).json({ 
        success: false, 
        message: "Internal server error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
