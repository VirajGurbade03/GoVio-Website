# GoVio Website - Setup Instructions (Step by Step)

## 🚨 समस्या: npm install command काम नहीं कर रहा

आपके folder के path में **spaces** हैं (`TecBus Data`), जिसकी वजह से npm command stuck हो रहा है।

---

## ✅ Solution - 3 तरीके:

### **तरीका 1: PowerShell से Install करें (Recommended)**

1. **PowerShell** open करें (Administrator mode में)
2. ये commands run करें:

```powershell
cd "d:\Project\TecBus Data\GoVio Company Website"
npm install
```

3. अगर error आए तो ये try करें:
```powershell
npm install --legacy-peer-deps
```

---

### **तरीका 2: Project को बिना Space वाले Path में Move करें**

1. Project folder को copy करें
2. इस path में paste करें: `D:\Project\GoVioWebsite` (बिना spaces के)
3. फिर वहां से install करें:

```bash
cd D:\Project\GoVioWebsite
npm install
npm run dev
```

---

### **तरीका 3: VS Code Terminal से Install करें**

1. VS Code में **Terminal** open करें (Ctrl + `)
2. ये command run करें:

```bash
npm install
```

अगर error आए:
```bash
npm install --force
```

या:
```bash
npm install --legacy-peer-deps
```

---

## 📋 Install होने के बाद क्या होगा?

जब `npm install` successfully complete होगा:

1. ✅ `node_modules` folder बन जाएगा
2. ✅ सभी red errors गायब हो जाएंगे
3. ✅ TypeScript properly काम करने लगेगा
4. ✅ आप website run कर पाएंगे

---

## 🚀 Website कैसे Run करें?

Install होने के बाद:

```bash
npm run dev
```

फिर browser में open करें:
```
http://localhost:3000
```

---

## 🐛 Common Errors & Solutions

### Error 1: "npm is not recognized"
**Solution:** Node.js install करें: https://nodejs.org/

### Error 2: "EACCES: permission denied"
**Solution:** Terminal को Administrator mode में open करें

### Error 3: "Port 3000 already in use"
**Solution:** 
```bash
npm run dev -- -p 3001
```

### Error 4: Install stuck/hanging
**Solution:** 
1. Ctrl+C से cancel करें
2. ये try करें:
```bash
npm cache clean --force
npm install --legacy-peer-deps
```

---

## 📊 Current Status

| Item | Status |
|------|--------|
| Code Files | ✅ Ready |
| TypeScript Errors | ✅ Fixed |
| Assets (Images) | ✅ Integrated |
| Dependencies | ❌ Not Installed |
| Website | ⏳ Waiting for npm install |

---

## 💡 Quick Fix Commands

अगर कुछ भी काम नहीं कर रहा, ये सब एक साथ try करें:

```bash
# Step 1: Clean cache
npm cache clean --force

# Step 2: Delete old files (if any)
rmdir /s /q node_modules
del package-lock.json

# Step 3: Fresh install
npm install --legacy-peer-deps

# Step 4: Run dev server
npm run dev
```

---

## 🎯 Expected Output

जब सब कुछ सही होगा, आपको ये दिखेगा:

```
> govio-website@1.0.0 dev
> next dev

  ▲ Next.js 14.1.0
  - Local:        http://localhost:3000
  - Network:      http://192.168.x.x:3000

 ✓ Ready in 2.5s
```

---

## 📞 अगर फिर भी Problem हो?

1. Screenshot share करें error का
2. या ये command run करके output share करें:
```bash
node --version
npm --version
```

---

**सभी code errors fix हो चुके हैं। बस dependencies install करनी हैं! 🚀**
