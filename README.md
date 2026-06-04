# dr Jovana Marković — zvanična web prezentacija

Official website of **dr Jovana Marković** — dentistry, skin care, and anti-aging medicine in Belgrade, Serbia.

Built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS v4**, using **shadcn/ui** components and **Radix UI** library.

## 🚀 Prerequisites

- **Node.js** 22.12 or newer
- **pnpm** (recommended package manager)

  If you don't have pnpm installed:
  ```bash
  npm install -g pnpm
  ```

## 📦 Installation

Clone the repository and install dependencies:

```bash
git clone git@github.com:kosmosoph/dr-jovana-markovic.git
cd dr-jovana-markovic
pnpm install
```

## 🖥️ Running the project

**Development server:**
```bash
pnpm dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

**Build for production:**
```bash
pnpm build
```

**Start production server:**
```bash
pnpm start
```

## 🛠️ Tech Stack

- **Next.js 15** — React framework
- **React 19** — UI library
- **TypeScript** — typed JavaScript
- **Tailwind CSS v4** — utility-first CSS
- **shadcn/ui** — component library
- **Radix UI** — headless UI primitives
- **Lucide React** — icons
- **Motion** — animations
- **next-themes** — dark/light theme
- **Montserrat** — Google Font

## 📁 Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── pricing/            # Pricing page
├── src/
│   ├── app/
│   │   ├── components/     # React components
│   │   │   ├── ui/         # shadcn/ui components
│   │   │   └── figma/      # Custom components
│   │   └── ...
│   └── styles/             # CSS files
├── public/                 # Static assets (images, video)
└── package.json
```

