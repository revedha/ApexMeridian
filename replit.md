# Overview

Apex Meridian is a modern full-stack web application built as a parent company website showcasing two key ventures: Signalyze (data strategy and customer insights) and Apex Labs (rapid prototyping and development). The application features a clean, professional landing page with sections for company information, venture details, and a contact form for lead generation. The company is officially registered as Apex Meridian Private Limited.

# Recent Changes

## August 28, 2025 - Clean URLs Implementation
- **Modernized URL Structure**: Removed .html extensions from all URLs for modern web standards
- **Updated vercel.json**: Added redirects from .html to clean URLs and rewrites for proper serving
- **Updated All Internal Links**: Changed all href references across the entire site:
  - `/about.html` → `/about`
  - `/ventures.html` → `/ventures` 
  - `/labs.html` → `/labs`
  - `/contact.html` → `/contact`
  - `/index.html` → `/`
- **SEO Benefits**: Permanent 301 redirects ensure old .html URLs redirect to clean versions
- **User Experience**: Professional URLs without file extensions matching modern web standards

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

The frontend is built with **React 18** using **TypeScript** and follows a component-based architecture:

- **UI Framework**: Uses shadcn/ui components built on top of Radix UI primitives for consistent, accessible design
- **Styling**: Tailwind CSS with custom design tokens and CSS variables for theming
- **Routing**: Client-side routing implemented with Wouter for lightweight navigation
- **State Management**: React Query (TanStack Query) for server state management with optimistic updates
- **Form Handling**: React Hook Form with Zod validation for type-safe form management
- **Build Tool**: Vite for fast development and optimized production builds

## Backend Architecture

The backend follows a **REST API** pattern using **Express.js**:

- **Server Framework**: Express.js with TypeScript for type safety
- **Database Layer**: Drizzle ORM configured for PostgreSQL with schema-first approach
- **Storage Pattern**: Abstracted storage interface allowing for multiple implementations (currently includes in-memory storage for development)
- **API Design**: RESTful endpoints with proper error handling and validation
- **Development**: Hot reload support with Vite integration for seamless full-stack development

## Data Storage

- **Database**: PostgreSQL configured through Drizzle ORM
- **Schema Management**: Drizzle Kit for migrations and schema synchronization
- **Connection**: Neon Database serverless driver for cloud-native database connectivity
- **Session Storage**: PostgreSQL session storage using connect-pg-simple

The database schema includes:
- Users table for potential authentication features
- Contact submissions table for lead capture and management

## Authentication & Authorization

The application includes a foundation for user authentication:
- User schema with username/password fields
- Session management infrastructure in place
- Storage abstraction ready for user management features

# External Dependencies

## Database Services
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle ORM**: Modern TypeScript ORM for database operations
- **connect-pg-simple**: PostgreSQL session store for Express sessions

## UI & Design System
- **shadcn/ui**: Complete component library built on Radix UI
- **Radix UI**: Accessible, unstyled UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography

## Development & Build Tools
- **Vite**: Frontend build tool and development server
- **TypeScript**: Type safety across the entire application
- **ESBuild**: Fast JavaScript bundler for production builds
- **Replit Integration**: Development environment optimization for Replit platform

## Form & Validation
- **React Hook Form**: Performant form library with minimal re-renders
- **Zod**: Schema validation library for runtime type checking
- **@hookform/resolvers**: Integration between React Hook Form and Zod

## Utilities & Libraries
- **date-fns**: Date manipulation and formatting
- **clsx & class-variance-authority**: Conditional CSS class management
- **nanoid**: Unique ID generation for entities