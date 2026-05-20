<<<<<<< HEAD
# AskShree - Sales Consultancy Website

Professional website for AskShree, a sales consultancy firm specializing in lead generation for IoT, SaaS, and Tech companies.

## 🎯 About AskShree

**Founder:** Prince Pasi  
**Services:** Cold Calling, Cold Email Campaigns, LinkedIn Outreach  
**Contact:** 
- Phone: +91 9004929362
- Email: princepasi060@gmail.com

## 🌐 Domain Recommendations

Based on availability research, here are recommended domain options for AskShree:

### Primary Options:
1. **askshree.com** - Check availability at [Namecheap](https://www.namecheap.com) or [GoDaddy](https://www.godaddy.com)
2. **askshree.in** - Perfect for Indian market presence
3. **askshree.io** - Modern tech-focused domain

### Alternative Options:
- **getaskshree.com** - If primary .com is taken
- **askshree.co** - Short and professional
- **askshreeconsulting.com** - Descriptive option
- **askshree.ai** - Tech-forward branding

### Recommended Registrars:
1. **Namecheap** - Best overall value ($10-15/year for .com)
2. **Porkbun** - Cheapest option ($10.37/year for .com)
3. **GoDaddy** - Popular choice with good support
4. **Google Domains** - Simple and reliable

### Hosting Recommendations:
1. **Vercel** - Free tier, perfect for React/Vite apps
2. **Netlify** - Free tier with excellent features
3. **Cloudflare Pages** - Free with CDN included
4. **AWS Amplify** - Scalable solution
5. **DigitalOcean** - If you need more control ($5/month)

## 🚀 Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Built with Tailwind CSS
- **Contact Form** - With local storage database
- **Admin Dashboard** - View and manage submissions
- **Multi-Section Layout**:
  - Hero section with clear CTA
  - About section
  - Services showcase
  - How it works process
  - Client testimonials
  - Contact form
  - Professional footer

## 📦 Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Icons:** Heroicons
- **Animations:** Framer Motion
- **Form Handling:** React Hook Form
- **Database:** LocalStorage (can be upgraded to MongoDB, PostgreSQL, etc.)

## 🛠️ Installation & Setup

### Prerequisites
- Node.js 16+ installed
- npm or yarn package manager

### Installation Steps

1. Clone the repository:
```bash
git clone <repository-url>
cd askshree-website
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

5. Preview production build:
```bash
npm run preview
```

## 📱 Admin Dashboard

Access the admin dashboard to view contact form submissions:

- URL: Add `/admin` to your routes or access via AdminDashboard component
- Default Password: `askshree2024`

**Note:** Change the password in `src/components/AdminDashboard.tsx` before deploying to production!

## 🔧 Configuration

### Email Notifications

The current implementation uses a mock email service. To enable real email notifications:

1. Choose an email service:
   - **SendGrid** (Recommended)
   - **AWS SES**
   - **Mailgun**
   - **Nodemailer with SMTP**

2. Update `src/utils/database.ts` with your email service API

Example with SendGrid:
```typescript
import sgMail from '@sendgrid/mail';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export const sendEmailNotification = async (submission: ContactSubmission) => {
  const msg = {
    to: 'princepasi060@gmail.com',
    from: 'noreply@askshree.com',
    subject: \`New Contact from \${submission.name}\`,
    html: \`
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> \${submission.name}</p>
      <p><strong>Email:</strong> \${submission.email}</p>
      <p><strong>Phone:</strong> \${submission.phone}</p>
      <p><strong>Company:</strong> \${submission.company}</p>
      <p><strong>Message:</strong> \${submission.message}</p>
    \`
  };
  
  await sgMail.send(msg);
};
```

### Database Upgrade

To replace LocalStorage with a real database:

1. **MongoDB** (Recommended for scaling):
```bash
npm install mongodb mongoose
```

2. **PostgreSQL**:
```bash
npm install pg
```

3. **Firebase**:
```bash
npm install firebase
```

4. Update `src/utils/database.ts` with your database connection

## 🌍 Deployment

### Deploying to Vercel (Recommended)

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite
5. Click "Deploy"
6. Connect your custom domain (askshree.com)

### Deploying to Netlify

1. Build the project: `npm run build`
2. Drag the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
3. Or connect your GitHub repository for continuous deployment

### Deploying to Traditional Hosting

1. Build: `npm run build`
2. Upload contents of `dist` folder to your web server
3. Configure server to serve `index.html` for all routes

## 📧 Contact Form Data

All contact submissions are stored in browser's LocalStorage under the key `askshree_contacts`.

To access submissions programmatically:
```javascript
const submissions = JSON.parse(localStorage.getItem('askshree_contacts') || '[]');
console.log(submissions);
```

## 🔒 Security Notes

1. **Change Admin Password** - Update password in AdminDashboard.tsx
2. **Enable HTTPS** - Use SSL certificate (free with Vercel/Netlify)
3. **Add Rate Limiting** - Prevent spam on contact form
4. **Implement CAPTCHA** - Use Google reCAPTCHA for form protection
5. **Environment Variables** - Store sensitive data in .env files

## 📈 SEO Optimization

The website includes:
- Semantic HTML structure
- Meta descriptions
- Optimized headings (H1-H6)
- Alt text for images
- Fast loading times
- Mobile-responsive design

To further improve SEO:
1. Add Google Analytics
2. Submit sitemap to Google Search Console
3. Add Open Graph tags for social sharing
4. Implement structured data (Schema.org)

## 🎨 Customization

### Colors
Main colors are defined in Tailwind classes:
- Primary: `blue-600` (Can be changed globally)
- Secondary: `purple-600`
- Accent: `green-500`

### Content
Update content in respective component files:
- Hero: `src/components/Hero.tsx`
- About: `src/components/About.tsx`
- Services: `src/components/Services.tsx`
- Testimonials: `src/components/Testimonials.tsx`

## 📞 Support

For technical support or questions:
- Email: princepasi060@gmail.com
- Phone: +91 9004929362

## 📄 License

© 2024 AskShree. All rights reserved.

---

**Built with ❤️ for AskShree by Prince Pasi**
=======
# askshree-website
website
>>>>>>> 1da03d4ebe21a5cff2b709de2f1530941bb1f3c1
