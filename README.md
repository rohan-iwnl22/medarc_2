# MedArc Clinical Research — Website

A production-ready, fully responsive ReactJS + Tailwind CSS website for **MedArc**, a global clinical research organisation.

---

## 🗂 Project Structure

```
medarc/
├── index.html                  # Vite HTML entry point
├── vite.config.js              # Vite build config
├── tailwind.config.js          # Tailwind CSS theme (brand colors, fonts, animations)
├── postcss.config.js           # PostCSS / Autoprefixer
├── package.json
└── src/
    ├── main.jsx                # ReactDOM render + BrowserRouter
    ├── App.jsx                 # Root component — routing shell
    ├── styles/
    │   └── index.css           # Tailwind directives + global component classes
    ├── hooks/
    │   └── useReveal.js        # IntersectionObserver scroll-reveal hook
    ├── components/
    │   ├── Navbar.jsx          # Responsive sticky nav with mobile menu
    │   ├── Footer.jsx          # Four-column footer
    │   └── ui.jsx              # Reusable primitives (Button, SectionHeader, StatCard…)
    └── pages/
        ├── HomePage.jsx        # Hero · Services · Why Partner · Insights · CTA
        ├── ServicesPage.jsx    # 3 service sections · 4-step process · CTA
        ├── RegulatoryPage.jsx  # Hero · Frameworks · Timeline · FAQ · Insights
        ├── AboutPage.jsx       # Hero · Story · Leadership · Approach · CTA
        └── ContactPage.jsx     # Contact form + sidebar info
```

---

## 🎨 Brand Colors

| Token            | Hex       | Usage                        |
|------------------|-----------|------------------------------|
| `primary-500`    | `#2198a0` | Primary buttons, icons, links |
| `primary-600`    | `#1f9a9f` | Hover states, secondary teal  |
| `accent-500`     | `#cd9e4e` | Accent buttons, highlights    |
| `navy-900`       | `#091524` | Dark section backgrounds      |

---

## ✨ Features

- **5 fully-built pages**: Home, Services, Regulatory, About Us, Contact
- **Responsive**: Mobile-first Tailwind CSS — works on all screen sizes
- **Sticky Navbar** with scroll blur effect + mobile hamburger drawer
- **Scroll-reveal animations** via custom `useReveal` hook (IntersectionObserver)
- **Interactive components**: FAQ accordion, contact form with loading + success states, progress bars
- **Accessible**: semantic HTML, ARIA attributes, focus-visible rings
- **Syne + DM Sans** typography (Google Fonts)
- **Client-side routing** with React Router v6

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or pnpm / yarn)

### Installation

```bash
# 1. Clone / unzip the project
cd medarc

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

The app will be available at **http://localhost:5173**

### Build for production

```bash
npm run build       # outputs to /dist
npm run preview     # preview the production build locally
```

---

## 📦 Dependencies

| Package              | Version  | Purpose                        |
|----------------------|----------|--------------------------------|
| `react`              | ^18.2.0  | UI library                     |
| `react-dom`          | ^18.2.0  | DOM rendering                  |
| `react-router-dom`   | ^6.22.0  | Client-side routing            |
| `lucide-react`       | ^0.383.0 | Icon set                       |
| `tailwindcss`        | ^3.4.1   | Utility-first CSS framework    |
| `vite`               | ^5.1.4   | Fast build tool / dev server   |
| `@vitejs/plugin-react` | ^4.2.1 | React fast-refresh for Vite    |
| `autoprefixer`       | ^10.4.17 | CSS vendor prefixing           |
| `postcss`            | ^8.4.35  | CSS processing                 |

---

## 🖼 Adding Real Images

Images are currently represented by gradient/icon placeholders. To add real images:

1. Place image files in `src/assets/images/`
2. Import them in the relevant page component:

```jsx
import heroImg from "../assets/images/hero.jpg";

// Then use as:
<img src={heroImg} alt="Clinical research lab" className="rounded-2xl w-full" />
```

---

## 🧩 Extending the Project

- **New page**: add a file in `src/pages/`, create a `<Route>` in `App.jsx`, and add a link in `Navbar.jsx`
- **New reusable component**: add to `src/components/ui.jsx` or create a new file in `src/components/`
- **Theme changes**: edit `tailwind.config.js` — all brand colors are in `theme.extend.colors`

---

## 📝 License

© 2024 MedArc Clinical Research. All rights reserved.
