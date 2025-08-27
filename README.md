# Apex Meridian Website

A professional website for Apex Meridian, showcasing ventures Signalyze and Apex Labs.

## Features

- Modern, responsive design with Tailwind CSS
- Multi-page layout (Home, About, Ventures, Contact)
- Contact form with Supabase database integration
- Professional venture showcase with custom logos

## Tech Stack

- **Frontend**: Static HTML with Tailwind CSS
- **Backend**: Express.js with TypeScript
- **Database**: Supabase PostgreSQL
- **Deployment**: Vercel

## Deployment to Vercel

This project is configured for Vercel deployment:

1. **Push to Git**: Push your code to GitHub/GitLab
2. **Import to Vercel**: Import the repository in your Vercel dashboard  
3. **Set Environment Variables**: Add `DATABASE_URL` in Vercel project settings
4. **Deploy**: Vercel will serve static files and serverless API functions

### Environment Variables

Set the following in your Vercel project settings:

- **Variable Name**: `DATABASE_URL`
- **Value**: `postgresql://postgres.fqymvbrxkajxcrmjamya:PASSWORD@aws-1-us-east-2.pooler.supabase.com:5432/postgres`

### Build Configuration

The project uses static HTML files with no build step required. Vercel will automatically:
- Serve static files (HTML, CSS, assets) directly
- Handle API routes via serverless functions
- Connect to your Supabase database

## Local Development

```bash
npm install
npm run dev
```

## Project Structure

```
├── pages/           # HTML pages
├── css/            # Stylesheets
├── assets/         # Images and logos
├── api/            # Vercel serverless API functions
├── server/         # Express.js backend
└── shared/         # Shared types and schemas
```

## Contact Form

Contact form submissions are stored in Supabase and can be viewed in your project dashboard under the `contact_submissions` table.