# Curricular

A full-stack application built with Nx monorepo, featuring Express.js backend and React frontend.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) and [Docker Compose](https://docs.docker.com/compose/install/)
  - For Windows & Mac: Install [Docker Desktop](https://www.docker.com/products/docker-desktop/)
  - For Linux: Install [Docker Engine](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/linux/)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/curricular.git
cd curricular
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

There are two main ways to start the application:

#### 1. Starting All Services (First Time Setup)
First, start the database and set it up:
```bash
npm run db:up
```
This command will:
- Start the database container using Docker
- Push the Prisma schema to the database
- Seed the database with initial data

Then, start both frontend and backend services:
```bash
npm start
```
This will concurrently run both the frontend and backend development servers.
frontend app url : http://localhost:4200
backend app url : http://localhost:3000

#### 2. Individual Services

If you need to run services individually:

```bash
# Start backend development server
npm run backend:dev

# Start frontend development server
npm run frontend:dev
```

## Project Structure

```
├── apps/
│   ├── backend/    # Backend application (Express.js)
│   └── frontend/   # Frontend application (React)
├── libs/          # Shared libraries
├── prisma/        # Database schema and migrations
└── docker-compose.yml
```

## Development

### Available Scripts

- `npm run db:up` - Start database container, push schema, and seed data
- `npm run prisma:seed` - Seed the database
- `npm run backend:dev` - Start backend in development mode (using Nx)
- `npm run frontend:dev` - Start frontend in development mode (using Nx)
- `npm start` - Run frontend and backend concurrently

### Working with Nx

This project uses Nx for managing the monorepo. Some useful Nx commands:

```bash
# Run tests
nx test backend
nx test frontend

# Build applications
nx build backend
nx build frontend
```

## Database

The project uses Prisma as the ORM with a PostgreSQL database managed through Docker.

### Database Commands

```bash
# Generate Prisma client
npx prisma generate

# Push schema changes to database
npx prisma db push

# Run database seed
npx prisma db seed
```

## Technologies

- **Frontend**: React with Vite
- **Backend**: Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Testing**: Jest
- **Styling**: TailwindCSS
- **Monorepo Management**: Nx
- **Development Tools**: ESLint, Prettier, TypeScript