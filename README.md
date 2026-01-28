# Aurora Studio - Landing Page

A modern, professional landing page for Aurora Studio software agency, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Tech Stack**: Next.js 16, TypeScript, Tailwind CSS
- **Dark Mode**: Manual toggle with next-themes integration
- **Smooth Animations**: Framer Motion for elegant transitions
- **Fully Responsive**: Optimized for all device sizes
- **SEO Optimized**: Built-in metadata and OpenGraph tags
- **Accessibility**: ARIA labels and semantic HTML
- **Form Validation**: Contact form with console logging

## 📋 Sections

1. **Navigation** - Sticky header with smooth scroll links and dark mode toggle
2. **Hero** - Compelling headline with primary and secondary CTAs
3. **Services** - Four service cards highlighting key offerings
4. **Process** - Four-step process visualization
5. **Pricing** - Three pricing tiers with detailed features
6. **FAQ** - Accordion with six frequently asked questions
7. **Contact** - Form with validation and success feedback
8. **Footer** - Company info, legal links, and social media

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ or higher
- Yarn package manager

### Installation

```bash
# Install dependencies
yarn install

# Run development server
yarn dev

# Build for production
yarn build

# Start production server
yarn start
```

The application will be available at `http://localhost:3000`

## 🎨 Customization

### Colors & Styling

The design uses a professional blue color scheme. Modify `app/globals.css` and Tailwind classes in components to customize:

- Primary color: Blue (#2563eb / blue-600)
- Dark mode colors are defined in the `:root` and `.dark` classes

### Content

Update content in component files located in the `/components` directory:
- Services: `components/Services.tsx`
- Process steps: `components/Process.tsx`
- Pricing tiers: `components/Pricing.tsx`
- FAQ items: `components/FAQ.tsx`

### Icons

The project uses React Icons (FontAwesome). Import additional icons from `react-icons/fa` as needed.

## 📦 Dependencies

- **next**: ^16.1.6 - React framework
- **react**: ^19.2.4 - UI library
- **typescript**: ^5.9.3 - Type safety
- **tailwindcss**: ^4.1.18 - Utility-first CSS
- **framer-motion**: ^12.29.2 - Animation library
- **next-themes**: ^0.4.6 - Dark mode support
- **react-icons**: ^5.5.0 - Icon library

## 🎯 Features Implemented

### Requirements Met

✅ Next.js with TypeScript
✅ Responsive design
✅ All 8 required sections
✅ Dark mode with manual toggle
✅ Framer Motion animations
✅ Professional/corporate styling
✅ FontAwesome icons
✅ Form validation with console logging
✅ CTA click tracking
✅ SEO metadata
✅ Builds without errors

### Additional Features

- Smooth scroll navigation
- Mobile-friendly hamburger menu
- Hover effects and transitions
- Loading states on form submission
- Success message feedback
- Accessibility attributes (data-testid)
- Trust indicators on hero section
- Highlighted "Popular" pricing tier

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 🔍 Testing

All interactive elements include `data-testid` attributes for easy testing:

```typescript
// Example test IDs
- "logo"
- "nav-link-services"
- "theme-toggle"
- "hero-cta-primary"
- "contact-form"
- "contact-submit-button"
```

## 📄 License

This project is private and proprietary to Aurora Studio.

## 🤝 Contributing

This is a standalone project. For changes or improvements, please contact the development team.

---

Built with ❤️ by Aurora Studio
