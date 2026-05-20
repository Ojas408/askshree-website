# ⚡ Quick Reference Card - AskShree Website

**Save this for quick access!**

---

## 🚀 Essential Commands

```bash
# Install dependencies (first time only)
npm install

# Start development server
npm run dev
# Then open: http://localhost:5173

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔑 Admin Access

**Local:** `http://localhost:5173#admin`  
**Live:** `yoursite.com#admin`  
**Password:** `askshree2024` ⚠️ CHANGE THIS!

**Where to change password:**  
File: `src/components/AdminDashboard.tsx`  
Line: 9

---

## 📞 Your Contact Information

**Phone:** +91 9004929362  
**Email:** princepasi060@gmail.com  
**Company:** AskShree

**Where it appears:**
- `src/components/Hero.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`

---

## 🌐 Domain Options

### Check Availability:
1. [Namecheap](https://www.namecheap.com/domains/registration/results/?domain=askshree.com)
2. [Porkbun](https://porkbun.com/checkout/search?q=askshree)
3. [GoDaddy](https://www.godaddy.com/domainsearch/find?checkAvail=1&domainToCheck=askshree)

### Recommended Domains:
- ✅ askshree.com ($10-15/year)
- ✅ askshree.in ($8-12/year)
- ✅ askshree.io ($30-40/year)

---

## 🚀 Deploy in 3 Steps

### Vercel (Easiest):
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com) → Import
3. Click Deploy → Done! ✅

### Netlify (Drag & Drop):
1. Run: `npm run build`
2. Go to [netlify.com](https://netlify.com/drop)
3. Drag `dist` folder → Done! ✅

---

## 📁 Important Files

| File | What It Does |
|------|--------------|
| `src/App.tsx` | Main app structure |
| `src/components/Hero.tsx` | Homepage hero section |
| `src/components/Contact.tsx` | Contact form |
| `src/components/AdminDashboard.tsx` | Admin panel |
| `src/utils/database.ts` | Database functions |
| `index.html` | Page title & meta tags |

---

## ✏️ Quick Edits

### Change Your Name/Info:
Search all files for:
- "Prince Pasi"
- "9004929362"
- "princepasi060@gmail.com"

### Change Colors:
Find and replace in all files:
- `blue-600` → your color
- `purple-600` → your color

### Change Logo Text:
File: `src/components/Navbar.tsx`  
Line: 24 (change "AskShree")

---

## 📧 Email Setup

### Free Option (Forwarding):
In your domain registrar:
- Forward: `info@askshree.com` → `princepasi060@gmail.com`

### Professional Option:
- **Zoho Mail:** FREE for 5 users
- **Google Workspace:** $6/month

---

## 🔧 Common Issues

### "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Site not loading locally
```bash
# Kill process on port 5173
# Windows:
taskkill /F /IM node.exe
# Mac/Linux:
killall node

# Then try again
npm run dev
```

### Build fails
```bash
npm run build
# Read the error message
# Usually: syntax error or missing dependency
```

---

## 📊 Contact Form Data

### View Submissions:
1. Go to `yoursite.com#admin`
2. Enter password
3. View all submissions

### Export Data:
1. Open admin dashboard
2. Click "Export JSON" button
3. Save file to computer

### Access Programmatically:
```javascript
// In browser console (F12)
const data = localStorage.getItem('askshree_contacts');
console.log(JSON.parse(data));
```

---

## 🎯 After Launch

### Daily:
- [ ] Check admin dashboard for new inquiries
- [ ] Respond to messages within 24 hours

### Weekly:
- [ ] Export contact data backup
- [ ] Check website is loading properly

### Monthly:
- [ ] Review Google Analytics
- [ ] Update testimonials if you have new ones
- [ ] Check domain renewal date

---

## 📱 Test Checklist

Before launching:
- [ ] Open on Chrome
- [ ] Open on Firefox/Safari
- [ ] Open on your phone
- [ ] Click all navigation links
- [ ] Submit test contact form
- [ ] Check admin dashboard
- [ ] Call phone number link
- [ ] Click email link

---

## 💰 Cost Summary

**First Year:**
- Domain: $10-15
- Hosting: FREE (Vercel)
- SSL: FREE (included)
- **Total: ~$15**

**Every Year After:**
- Domain renewal: $10-15
- Everything else: FREE
- **Total: ~$15/year**

---

## 🆘 Emergency Contacts

### Website Down?
1. Check [status.vercel.com](https://status.vercel.com)
2. Try accessing from different network
3. Contact Vercel support

### Domain Issues?
- Namecheap: 24/7 Live Chat
- Check domain expiration date
- Verify DNS settings

### Can't Remember Admin Password?
- Check `src/components/AdminDashboard.tsx` line 9
- Default is `askshree2024`

---

## 📚 Documentation Files

1. **SETUP_INSTRUCTIONS.md** - Complete setup guide
2. **DOMAIN_INFO.md** - Domain registration details
3. **DEPLOYMENT_GUIDE.md** - How to deploy
4. **README.md** - Technical documentation
5. **PROJECT_SUMMARY.md** - Overview of everything
6. **This file** - Quick reference

---

## 🎓 Learn More

### React:
- [react.dev](https://react.dev)
- YouTube: "React Tutorial for Beginners"

### Tailwind CSS:
- [tailwindcss.com/docs](https://tailwindcss.com/docs)
- YouTube: "Tailwind CSS Tutorial"

### Deployment:
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- YouTube: "Deploy React to Vercel"

---

## ✅ Success Checklist

Launch Day:
- [ ] Domain registered ✅
- [ ] Website deployed ✅
- [ ] HTTPS working ✅
- [ ] Contact form tested ✅
- [ ] Admin password changed ✅
- [ ] Email setup ✅
- [ ] Shared on LinkedIn ✅
- [ ] Added to email signature ✅

---

## 🎯 Quick Goals

### Week 1:
- Get 50 website visitors
- Receive 2 contact form submissions
- Share with 10 people

### Month 1:
- Get 200 website visitors
- Receive 10 inquiries
- Convert 2 clients

---

## 💡 Pro Tips

1. **Respond Fast:** Reply to inquiries within 1 hour if possible
2. **Track Everything:** Use Google Analytics from day 1
3. **Test Often:** Check your site weekly
4. **Backup Data:** Export contacts monthly
5. **Update Content:** Add new testimonials regularly
6. **Mobile First:** Most visitors use phones
7. **Social Proof:** Share client success stories
8. **SEO Basics:** Use keywords in your content

---

## 📞 Your Services (Quick Copy-Paste)

**For social media posts:**

```
🚀 Need qualified leads for your tech startup?

AskShree helps IoT, SaaS, and Tech companies grow through:
✅ Cold Calling
✅ Email Campaigns  
✅ LinkedIn Outreach

Let's scale your sales together!

📞 +91 9004929362
📧 princepasi060@gmail.com
🌐 askshree.com

#SalesConsultancy #LeadGeneration #B2BSales
```

---

## 🔐 Security Reminders

- [ ] Change admin password before launch
- [ ] Enable WHOIS privacy on domain
- [ ] Use strong domain account password
- [ ] Enable 2FA on Vercel/Netlify account
- [ ] Never share admin password
- [ ] Keep this file private

---

## 🎉 You're Ready!

Everything you need is in this project:
- ✅ Professional website
- ✅ Complete documentation
- ✅ Easy to deploy
- ✅ Free to host
- ✅ Easy to manage

**Next step:** Read SETUP_INSTRUCTIONS.md and launch!

**Good luck with AskShree!** 🚀

---

**Print this page and keep it handy!**

_Last updated: 2024_
