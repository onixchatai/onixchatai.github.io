# 🚀 Complete Setup Guide for OnixChatAI Website

## Step 1: Create the Main HTML File

1. **Create a new folder** on your computer called `onixchatai-website`
2. **Create a file** called `index.html` inside this folder
3. **Copy the entire HTML code** from the artifact above and paste it into `index.html`
4. **Save the file**

## Step 2: Create Supporting Files

### Create `manifest.json` (for PWA functionality)
Create a file called `manifest.json` in the same folder:

```json
{
  "name": "OnixChatAI - Smart Business Solutions",
  "short_name": "OnixChatAI",
  "description": "AI-powered chatbots and mobile ordering for small businesses",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#667eea",
  "icons": [
    {
      "src": "icon.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```

### Create an Icon
You'll need an `icon.png` file (192x192 pixels minimum). You can:
- Use a free icon creator online
- Create one in Canva or similar tools
- Use a simple "O" logo for now

## Step 3: Test Locally

### Option A: Simple File Opening
1. **Double-click** the `index.html` file
2. It should open in your default web browser
3. Test all the interactive features

### Option B: Local Server (Recommended)
If you have Python installed:
```bash
# Navigate to your folder
cd onixchatai-website

# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```
Then visit `http://localhost:8000`

## Step 4: Deploy Online

### Option A: Netlify (Easiest - Free)
1. Go to [netlify.com](https://netlify.com)
2. Sign up for free
3. Drag your folder into the deploy area
4. Get instant live URL
5. Can connect custom domain later

### Option B: GitHub Pages (Free)
1. Create GitHub account
2. Create new repository called `onixchatai-website`
3. Upload your files
4. Enable GitHub Pages in repository settings
5. Get URL like `username.github.io/onixchatai-website`

### Option C: Vercel (Free)
1. Go to [vercel.com](https://vercel.com)
2. Sign up and connect GitHub
3. Deploy directly from your repository
4. Get instant live URL

## Step 5: Custom Domain (Optional)

### Buy a Domain
- **Namecheap**: ~$10/year
- **GoDaddy**: ~$12/year
- **Google Domains**: ~$12/year

### Connect Domain
1. Buy domain (e.g., `onixchatai.com`)
2. In your hosting platform (Netlify/Vercel), add custom domain
3. Update DNS settings as instructed
4. Wait 24-48 hours for propagation

## Step 6: Essential Customizations

### Update Contact Information
Replace these in the HTML:
```html
<!-- Current phone -->
<button onclick="window.open('tel:8183358825')">

<!-- Update to your real number -->
<button onclick="window.open('tel:YOUR_PHONE_NUMBER')">
```

### Add Real Email
Replace `victor@onixchatai.com` with your actual email address

### Customize Chat Responses
In the JavaScript section, modify the `getBotResponse()` function to match your business

### Add Google Analytics (Optional)
Add this before `</head>`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## Step 7: SEO Optimization

### Update Meta Tags
- Change business name/description if needed
- Add local SEO keywords
- Update Open Graph images

### Add Schema Markup
Add this before `</head>` for local business SEO:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "OnixChatAI",
  "description": "AI-powered chatbots and mobile ordering for small businesses",
  "telephone": "+1-818-335-8825",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Burbank",
    "addressRegion": "CA",
    "addressCountry": "US"
  }
}
</script>
```

## Step 8: Testing Checklist

✅ **Desktop Testing:**
- [ ] All navigation links work
- [ ] Mobile menu toggles properly
- [ ] Demo modal opens/closes
- [ ] Chat functionality works
- [ ] Phone number clicks work
- [ ] Smooth scrolling works

✅ **Mobile Testing:**
- [ ] Responsive design looks good
- [ ] Touch interactions work
- [ ] Text is readable
- [ ] Buttons are large enough

✅ **Performance:**
- [ ] Page loads quickly
- [ ] Images load properly
- [ ] No console errors

## Step 9: Ongoing Maintenance

### Regular Updates
- Update business information
- Add new features/testimonials
- Keep contact information current
- Monitor and respond to inquiries

### Analytics
- Track visitor numbers
- Monitor popular pages
- Analyze user behavior
- Optimize based on data

## 🎉 Your Website is Ready!

Once you follow these steps, you'll have a fully functional, professional website for OnixChatAI that includes:
- ✅ Working chatbot demo
- ✅ Mobile-responsive design
- ✅ Professional appearance
- ✅ SEO optimization
- ✅ Fast loading
- ✅ Contact integration

## Need Help?

If you run into issues:
1. Check browser console for errors (F12)
2. Verify all files are in the correct location
3. Test on different devices/browsers
4. Make sure all links and phone numbers are correct

**Ready to launch your business online!** 🚀