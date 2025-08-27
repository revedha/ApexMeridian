import express from "express";
import path from "path";
import { storage } from "../server/storage";
import { insertContactSubmissionSchema } from "../shared/schema";
import { z } from "zod";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Contact form submission endpoint
app.post("/contact", async (req, res) => {
  try {
    const validatedData = insertContactSubmissionSchema.parse(req.body);
    const submission = await storage.createContactSubmission(validatedData);
    res.json({ success: true, id: submission.id });
  } catch (error) {
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
app.get("/contact-submissions", async (req, res) => {
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

export default app;