# Project Name

A full-stack application built with Nx monorepo, featuring a Express.js backend and React frontend.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm (v9 or higher)
- Docker and Docker Compose
- [Nx CLI](https://nx.dev/getting-started/nx-setup) (optional, but recommended)

## Getting Started

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kabbash/curricular.git
cd curricular
```

2. Install dependencies:
```bash
npm install
```

### Running the Application

You can start all services (database, backend, and frontend) with a single command:

```bash
npm start
```

This command will:
1. Start the database container using Docker
2. Run database migrations and seed initial data
3. Start both backend and frontend development servers

### Individual Services

If you need to run services individually:

```bash
# Start database
npm run db:up

# Seed database
npm run prisma:seed

# Start backend development server
npm run backend:dev

# Start frontend development server
npm run frontend:dev
```

## Project Structure

```
├── apps/
│   ├── backend/    # Backend application
│   └── frontend/   # Frontend application
├── libs/          # Shared libraries
├── prisma/        # Database schema and migrations
└── docker-compose.yml
```

## Development

### Available Commands

- `npm start` - Start all services
- `npm run db:up` - Start database container
- `npm run prisma:seed` - Seed the database
- `npm run backend:dev` - Start backend in development mode
- `npm run frontend:dev` - Start frontend in development mode

## Database

The project uses Postgres managed through Docker. Database migrations are handled using Prisma.

### Database Commands

```bash
# Generate Prisma client
npx prisma generate

# Run migrations
npx prisma migrate dev

# Reset database
npx prisma migrate reset
```