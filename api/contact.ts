import type { VercelRequest, VercelResponse } from '@vercel/node';
import { drizzle } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { contactSubmissions, insertContactSubmissionSchema } from '../shared/schema.js';
import { z } from 'zod';

const sql = postgres(process.env.DATABASE_URL!);
const db = drizzle(sql);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const validatedData = insertContactSubmissionSchema.parse(req.body);
    
    const [submission] = await db
      .insert(contactSubmissions)
      .values(validatedData)
      .returning();
      
    res.json({ success: true, id: submission.id });
  } catch (error) {
    if (error instanceof z.ZodError) {
      res.status(400).json({ 
        success: false, 
        message: "Validation error", 
        errors: error.errors 
      });
    } else {
      console.error('Contact form error:', error);
      res.status(500).json({ 
        success: false, 
        message: "Internal server error"
      });
    }
  }
}