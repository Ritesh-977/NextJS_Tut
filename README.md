# Next.js Tutorial - Beginner to Advanced 🚀

Welcome to the comprehensive Next.js tutorial repository! This project covers everything you need to learn Next.js from the ground up, starting with the basics and moving all the way to advanced concepts.

## 📁 Repository Structure

This repository is divided into different demo projects, each focusing on specific Next.js features and patterns:

- **[`routing-demo`](./routing-demo)**: Deep dive into the Next.js App Router. Covers file-system based routing, nested routes, dynamic routes, layout files, and navigation.
- **[`route-handlers-demo`](./route-handlers-demo)**: Learn how to build APIs within Next.js using Route Handlers. Covers REST API creation, dynamic route segments, headers, and cookies.
- **[`rendering-demo`](./rendering-demo)**: Understanding Client vs. Server Components. Covers Server-Side Rendering (SSR), Static Site Generation (SSG), caching, and mixing client/server components effectively.

*(More topics will be added as we progress!)*

## 🛠️ Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** CSS Modules / Tailwind CSS
- **Environment:** Node.js v18.17 or later

## 🚀 Getting Started

To run any of the demo projects locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/NextJS_Tut.git
   cd NextJS_Tut
   ```

2. **Navigate to the specific demo folder:**
   ```bash
   cd routing-demo # or rendering-demo, route-handlers-demo
   ```

3. **Install dependencies:**
   ```bash
   npm install
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the running application.

## 📚 Course Curriculum

### Beginner Concepts
- Understanding the App Router architecture
- File-based Routing (`page.tsx`, `layout.tsx`, `template.tsx`)
- Linking and Navigation (`next/link`, `useRouter`)
- Error Handling (`error.tsx`, `not-found.tsx`)
- Loading UI & Streaming (`loading.tsx`, React Suspense)

### Intermediate Concepts
- Route Handlers for backend API creation
- Middleware for request interception
- Data Fetching patterns (Server vs Client side)
- Image Optimization (`next/image`)
- Font Optimization (`next/font`)
- Metadata and SEO Best Practices

### Advanced Concepts
- Advanced Routing Patterns (Parallel Routes, Intercepting Routes)
- Rendering Strategies (SSR, SSG, ISR)
- React Server Components (RSC) vs Client Components
- Server Actions & Mutations
- Next.js Caching Mechanisms
- Authentication patterns

## 🤝 Contributing

Contributions, issues, and feature requests are always welcome! Feel free to fork the repository and submit a pull request.

## 📝 License

This project is open-source and available under the [MIT License](LICENSE).
