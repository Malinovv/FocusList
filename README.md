# FocusList

Small full-stack learning project built from scratch to stay small and beginner-friendly:

- Next.js frontend
- Express + TypeScript backend
- PostgreSQL + Prisma

## Workspaces

- `apps/web` - Next.js frontend
- `apps/api` - Express API
- `packages/db` - Prisma schema and client

## Environment Files

The repo keeps a root `.env.example` as a simple reference for all required values.

Runtime tools read env files from their own workspace:

- `apps/web/.env.local`
- `apps/api/.env`
- `packages/db/.env`

## Local Node Runtime

This machine did not have Node.js on `PATH`, so the repo includes a local runtime in `.tools/node-v24.14.1-win-x64`.

Use `.\npm-local.cmd` from the repo root if you want to run project commands without installing Node globally.

## Getting Started

Fastest local start:

- `npm run dev`
- If Node is not installed globally, run `.\npm-local.cmd run dev`

1. Install dependencies with `npm install`
   If Node is not installed globally, run `.\npm-local.cmd install`
2. Start PostgreSQL with `npm run db:up`
   If Node is not installed globally, run `.\npm-local.cmd run db:up`
3. Run `npm run db:generate`
   If Node is not installed globally, run `.\npm-local.cmd run db:generate`
4. Run `npm run db:push`
   If Node is not installed globally, run `.\npm-local.cmd run db:push`
5. Run `npm run dev:api`
   If Node is not installed globally, run `.\npm-local.cmd run dev:api`
6. Run `npm run dev:web`
   If Node is not installed globally, run `.\npm-local.cmd run dev:web`
