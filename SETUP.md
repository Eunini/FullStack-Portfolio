# Portfolio Setup Guide

## Email Configuration (Contact Form)

To enable the contact form functionality, you need to set up email service using Resend:

### 1. Create a Resend Account
1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

### 2. Add Your Domain (Optional but Recommended)
1. In your Resend dashboard, go to "Domains"
2. Add your domain (e.g., yourdomain.com)
3. Follow the DNS setup instructions
4. Verify your domain

### 3. Get Your API Key
1. Go to "API Keys" in your Resend dashboard
2. Click "Create API Key"
3. Give it a name (e.g., "Portfolio Contact Form")
4. Copy the generated API key

### 4. Configure Environment Variables
1. Create a `.env.local` file in your project root
2. Add the following variables:

```env
# Get your API key from https://resend.com/api-keys
RESEND_API_KEY=re_your_actual_api_key_here

# The email address you want to receive contact form submissions
# Use your verified domain email for best results
FROM_EMAIL=contact@yourdomain.com
```

### 5. Test the Contact Form
1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the message

## Download CV Button

The download CV button should work automatically. Make sure:

1. Your CV file is named `CV.pdf` and located in the `public` folder
2. The file is accessible at `http://localhost:3000/CV.pdf`
3. Update the filename in `HeroSection.jsx` if you use a different name

## Troubleshooting

### Contact Form Issues:
- **"Email service not configured"**: Check your environment variables
- **Network errors**: Verify your API key and FROM_EMAIL
- **Domain verification issues**: Use a verified domain email for FROM_EMAIL

### CV Download Issues:
- **File not found**: Ensure CV.pdf exists in the public folder
- **Download not starting**: Check browser settings for downloads
- **File name**: Update the download attribute in HeroSection.jsx if needed

## Alternative Email Setup

If you prefer not to use Resend, you can:

1. Use Nodemailer with Gmail/Outlook
2. Use EmailJS for client-side email sending
3. Integrate with your own email server

The API route is modular and can be easily modified for different email services.
