# Navdeep Resort — Website

A multi-page website for Navdeep Resort, Mukerian, Punjab. Built with Next.js 14, TypeScript, Tailwind CSS, and **bun**.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **bun** as the package manager
- **Google Fonts** — Cormorant Garamond + DM Sans

## Pages

| Page | Route |
|------|-------|
| Home | `/` |
| Packages | `/packages` |
| Gallery | `/gallery` |
| About | `/about` |
| Contact | `/contact` |

## Setup & Run

**Requirements:** [bun](https://bun.sh) installed on your system.

```bash
# Install dependencies
bun install

# Run development server
bun run dev
# Open http://localhost:3000

# Build for production
bun run build
bun run start
```

## Key Features

- Fixed WhatsApp FAB button (bottom-right, all pages)
- All enquiry CTAs redirect to WhatsApp: +91 85670 98852
- Interactive gallery with category filters and lightbox
- Alternating layout packages page
- Fully responsive (mobile → desktop)
- Accessible keyboard navigation
- `prefers-reduced-motion` respected

## Customisation

### Replace placeholder images
Images currently come from Unsplash. To use your own:
1. Put your images in `/public/images/`
2. Replace the `src` URLs in each page file with `/images/your-photo.jpg`
3. Remove the `remotePatterns` block from `next.config.js` if you no longer need Unsplash

### Update WhatsApp number
Search for `918567098852` across all files and replace with your number (include country code, no `+` or spaces).

### Add/edit packages
Open `src/app/page.tsx` and `src/app/packages/page.tsx` — both have a `packages` array at the top you can edit directly.

## Deployment

### Vercel (recommended)
```bash
bunx vercel
```

Vercel auto-detects bun from the `packageManager` field in `package.json`.

### Self-hosted
```bash
bun run build
bun run start
```
# client-navdeepresort
