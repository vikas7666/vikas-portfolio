# Vikas Shukla — Portfolio

A modern, dark-themed portfolio built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

---

## 📁 Project Structure

```
src/
  app/
    components/
      Cursor.tsx       ← Custom animated cursor
      Navbar.tsx       ← Fixed navigation bar
      Hero.tsx         ← Landing hero section
      Skills.tsx       ← Tech stack grid
      Projects.tsx     ← Featured projects
      About.tsx        ← About me section
      Contact.tsx      ← Contact section
      Footer.tsx       ← Footer
    globals.css        ← Global styles + animations
    layout.tsx         ← Root layout + metadata
    page.tsx           ← Main page
```

---

## ✏️ Customization

| What to change | Where |
|---|---|
| Your name | `About.tsx`, `Footer.tsx`, `layout.tsx` |
| Email | `Contact.tsx` |
| Projects | `Projects.tsx` → `projects` array |
| Skills | `Skills.tsx` → `skills` array |
| Stats (years/projects) | `Hero.tsx` |
| Social links | `Contact.tsx` |

---

## 🌐 Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Or push to GitHub and import at [vercel.com](https://vercel.com) — it auto-detects Next.js.

---

## 🎨 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + custom CSS
- **Fonts**: Syne, DM Mono, Outfit (Google Fonts)
- **Animations**: CSS keyframes + IntersectionObserver
