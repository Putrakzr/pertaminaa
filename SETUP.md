# Setup Guide - PT. Pertamina Hulu Energi Inspection System

## Prerequisites

- Node.js 18+
- MySQL (XAMPP)
- Pusher Account (for real-time notifications)

## Installation

1. **Clone/Extract Project**
   
```
bash
   cd pertamina
   
```

2. **Install Dependencies**
   
```
bash
   npm install
   
```

3. **Setup Environment Variables**
   
   Copy `.env.example` to `.env` and configure:
   
```
env
   DATABASE_URL="mysql://root:@localhost:3306/pertamina_db?schema=public"
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-super-secret-key-change-this"
   
   # Pusher Configuration
   PUSHER_APP_ID="your-app-id"
   PUSHER_KEY="your-key"
   PUSHER_SECRET="your-secret"
   PUSHER_CLUSTER="ap1"
   NEXT_PUBLIC_PUSHER_KEY="your-key"
   NEXT_PUBLIC_PUSHER_CLUSTER="ap1"
   
```

4. **Setup Database**
   
   a. Create database in MySQL:
   
```
sql
   CREATE DATABASE pertamina_db;
   
```
   
   b. Generate Prisma Client:
   
```
bash
   npx prisma generate
   
```
   
   c. Push schema to database:
   
```
bash
   npx prisma db push
   
```

5. **Run Development Server**
   
```
bash
   npm run dev
   
```

6. **Open Browser**
   Navigate to `http://localhost:3000`

## Creating First Admin

Run this API to create first admin:
```
bash
curl -X POST http://localhost:3000/api/auth/register-admin \
  -H "Content-Type: application/json" \
  -d '{"nama":"Admin","email":"admin@pertamina.com","password":"admin123"}'
```

## User Registration

Users can register through the registration page at `/register`

## Features

### User Features
- Create inspection reports
- Upload photos
- Input raw injection data
- View report history
- Track report status

### Admin Features
- View all reports
- Approve/Reject reports
- Edit injection data
- Filter reports by date/location/user
- Export reports (PDF/Excel)
- Dashboard statistics

## Project Structure

```
pertamina/
├── prisma/
│   └── schema.prisma      # Database schema
├── src/
│   ├── app/
│   │   ├── api/          # API routes
│   │   ├── login/        # Login page
│   │   ├── register/    # Register page
│   │   ├── dashboard/   # User dashboard
│   │   └── admin/       # Admin dashboard
│   ├── components/       # React components
│   ├── lib/             # Utility functions
│   └── types/           # TypeScript types
├── package.json
├── tailwind.config.ts
└── tsconfig.json
```

## Tech Stack

- **Frontend**: Next.js 14, React, Tailwind CSS
- **Backend**: Next.js API Routes
- **Database**: MySQL with Prisma ORM
- **Auth**: NextAuth.js with JWT
- **Real-time**: Pusher
- **Charts**: Chart.js

## Deploy to Vercel

1. Push code to GitHub
2. Import project in Vercel
3. Configure environment variables
4. Deploy

## License

© 2024 PT. Pertamina Hulu Energi Ogan Komering & Raja Tempirai
