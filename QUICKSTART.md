# GoVio Website - Quick Start Guide

## 🚀 Getting Started

### Option 1: Using the Batch File (Easiest)
1. Double-click `setup-and-run.bat`
2. Wait for dependencies to install
3. The dev server will start automatically
4. Open http://localhost:3000 in your browser

### Option 2: Manual Setup
1. Open terminal in this directory
2. Run: `npm install`
3. Run: `npm run dev`
4. Open http://localhost:3000 in your browser

## 📋 Available Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization Guide

### Colors
Edit `tailwind.config.ts` to change the color scheme:
- `primary` - Main brand color (currently blue)
- `secondary` - Accent color (currently orange)

### Content
All sections are in separate component files in `/components`:
- `Hero.tsx` - Main hero section
- `About.tsx` - About section
- `Services.tsx` - Services cards
- `HowItWorks.tsx` - Process timeline
- `WebAppAccess.tsx` - Web dashboard section
- `MobileApp.tsx` - Mobile app section
- `Pricing.tsx` - Pricing information
- `Security.tsx` - Security features
- `Contact.tsx` - Contact form
- `Footer.tsx` - Footer section

### Images
To add custom images:
1. Place images in `/public` folder
2. Reference them as `/image-name.jpg` in components

### Fonts
Currently using Google Fonts (Inter & Outfit).
To change fonts, edit the import in `app/globals.css`

## 🔧 Configuration

### SEO
Edit metadata in `app/layout.tsx`:
- Title
- Description
- Keywords
- Open Graph tags

### Contact Information
Update contact details in:
- `components/Contact.tsx`
- `components/Footer.tsx`
- `components/WhatsAppButton.tsx`

### Links
Update app store links in `components/MobileApp.tsx`
Update web dashboard link in `components/WebAppAccess.tsx`

## 📱 Responsive Design

The website is fully responsive and tested on:
- Mobile (320px - 768px)
- Tablet (768px - 1024px)
- Desktop (1024px+)

## 🚀 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Deploy automatically

### Other Platforms
Build the project first:
```bash
npm run build
```

Then deploy the `.next` folder to your hosting provider.

## 💡 Tips

1. **Performance**: Images are optimized automatically by Next.js
2. **Analytics**: Add Google Analytics ID in layout.tsx
3. **Forms**: Integrate with your backend API in Contact.tsx
4. **Animations**: Adjust animation delays in component files

## 🆘 Troubleshooting

### Port 3000 already in use
Run: `npm run dev -- -p 3001` to use port 3001

### Build errors
1. Delete `node_modules` and `.next` folders
2. Run `npm install` again
3. Run `npm run dev`

### Styling issues
1. Clear browser cache
2. Restart dev server
3. Check Tailwind classes are valid

## 📞 Support

For questions or issues:
- Email: sales@govio.app
- Phone: +91 98765 43210

---

Built with ❤️ using Next.js 14, TypeScript, and Tailwind CSS
