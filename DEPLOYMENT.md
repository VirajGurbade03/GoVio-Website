# GoVio Website - Deployment Checklist

## ✅ Pre-Deployment Checklist

### 1. Install Dependencies
```bash
npm install
```
**Status:** ⏳ Pending (Run this first!)

### 2. Test Locally
```bash
npm run dev
```
**Expected:** Website runs on http://localhost:3000
**Status:** ⏳ Pending

### 3. Update Contact Information

#### Files to Update:
- [ ] `components/Contact.tsx` - Update email, phone, address
- [ ] `components/Footer.tsx` - Update email, phone, address, social links
- [ ] `components/WhatsAppButton.tsx` - Update WhatsApp number

#### Current Placeholders:
- Email: sales@govio.app
- Phone: +91 98765 43210
- Address: 123 Tech Park, Innovation Drive, Bangalore
- WhatsApp: +919876543210

### 4. Update External Links

#### Files to Update:
- [ ] `components/MobileApp.tsx` - Update Play Store & App Store links
- [ ] `components/WebAppAccess.tsx` - Update admin dashboard URL
- [ ] `components/Footer.tsx` - Update social media links

#### Current Links:
- Play Store: https://play.google.com/store (placeholder)
- App Store: https://apps.apple.com (placeholder)
- Admin Dashboard: https://admin.govio.app (placeholder)
- Social Media: All placeholder links

### 5. Verify Assets

- [x] Logo: `/assests/logo/logo.png` ✅
- [x] App Screenshots: `/assests/GoVio App Image/` (5 images) ✅
- [x] Portal Screenshots: `/assests/GoVio Portal Image/` (6 images) ✅

### 6. SEO Verification

- [x] Google verification meta tag: Already added ✅
- [ ] Update Google Analytics ID (if needed)
- [ ] Update OpenGraph image (optional)
- [ ] Update Twitter card image (optional)

### 7. Build for Production
```bash
npm run build
```
**Expected:** Successful build with no errors
**Status:** ⏳ Pending

### 8. Test Production Build
```bash
npm start
```
**Expected:** Production site runs on http://localhost:3000
**Status:** ⏳ Pending

---

## 🚀 Deployment Options

### Option 1: Vercel (Recommended - Easiest)

#### Steps:
1. Push code to GitHub
   ```bash
   git init
   git add .
   git commit -m "Initial commit - GoVio website"
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

**Deployment Time:** ~2 minutes
**Auto-deploy on push:** ✅ Yes
**Custom domain:** ✅ Supported
**SSL:** ✅ Automatic

### Option 2: Netlify

#### Steps:
1. Build the project
   ```bash
   npm run build
   ```

2. Go to [netlify.com](https://netlify.com)
3. Drag and drop the `.next` folder
4. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

**Deployment Time:** ~3 minutes
**Auto-deploy on push:** ✅ Yes (with Git integration)
**Custom domain:** ✅ Supported
**SSL:** ✅ Automatic

### Option 3: Traditional Hosting (cPanel, etc.)

#### Requirements:
- Node.js support (v18+)
- SSH access

#### Steps:
1. Build the project locally
   ```bash
   npm run build
   ```

2. Upload files via FTP/SSH
3. Install dependencies on server
   ```bash
   npm install --production
   ```

4. Start the server
   ```bash
   npm start
   ```

5. Configure reverse proxy (Nginx/Apache)

---

## 🔧 Post-Deployment Tasks

### 1. Test Website
- [ ] Homepage loads correctly
- [ ] All sections visible
- [ ] Images load (logo, app screenshots, portal screenshots)
- [ ] Forms work
- [ ] Links work
- [ ] Mobile responsive
- [ ] WhatsApp button works

### 2. SEO Setup
- [ ] Submit sitemap to Google Search Console
- [ ] Verify Google Search Console
- [ ] Set up Google Analytics
- [ ] Test OpenGraph tags (share on social media)

### 3. Performance Check
- [ ] Run Lighthouse audit (aim for 90+ score)
- [ ] Check page load speed
- [ ] Verify images are optimized
- [ ] Test on different devices

### 4. Security
- [ ] Enable HTTPS/SSL
- [ ] Configure security headers
- [ ] Set up CORS if needed
- [ ] Review environment variables

---

## 📊 Monitoring & Analytics

### Recommended Tools:
- **Google Analytics** - Track visitors and conversions
- **Google Search Console** - Monitor SEO performance
- **Hotjar** - User behavior tracking
- **Vercel Analytics** - If using Vercel

### Key Metrics to Track:
- Page views
- Demo requests (form submissions)
- App download clicks
- WhatsApp inquiries
- Bounce rate
- Average session duration

---

## 🐛 Troubleshooting

### Issue: Images not loading
**Solution:** Check that `/assests` folder is deployed correctly

### Issue: Build fails
**Solution:** 
1. Delete `node_modules` and `.next`
2. Run `npm install`
3. Run `npm run build` again

### Issue: Port 3000 already in use
**Solution:** Use different port
```bash
npm run dev -- -p 3001
```

### Issue: Styles not applying
**Solution:**
1. Clear browser cache
2. Restart dev server
3. Check Tailwind classes are valid

---

## 📞 Support

For deployment issues:
- Check Next.js docs: https://nextjs.org/docs/deployment
- Vercel support: https://vercel.com/support
- Email: sales@govio.app

---

## ✅ Final Checklist Before Going Live

- [ ] All contact information updated
- [ ] All external links updated
- [ ] Tested locally
- [ ] Production build successful
- [ ] Deployed to hosting
- [ ] SSL/HTTPS enabled
- [ ] Custom domain configured (if applicable)
- [ ] Google Analytics set up
- [ ] SEO verified
- [ ] Mobile tested
- [ ] Forms tested
- [ ] Performance optimized

---

**🎉 Once all items are checked, your GoVio website is LIVE!**
