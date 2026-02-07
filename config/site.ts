// Site Configuration
// Update these values to customize your website

export const siteConfig = {
  // Contact Information
  whatsappNumber: "919876543210", // Your WhatsApp number with country code (no + or spaces)
  calendlyLink: "https://calendly.com/avnishsinha/15min", // Your Calendly booking link
  email: "hello@avnishsinha.com",
  
  // Social Media Links
  social: {
    linkedin: "https://linkedin.com/in/avnishsinha",
    github: "https://github.com/avnishsinha",
    twitter: "https://twitter.com/avnishsinha",
  },

  // Business Information
  businessName: "Avnish Sinha",
  tagline: "Solo Developer Studio",
  
  // Pricing
  pricing: {
    starting: "₹8,000",
    range: {
      min: 8000,
      max: 20000,
    }
  },

  // Service Details
  delivery: {
    days: 7,
    guarantee: true,
  },

  // WhatsApp Default Messages
  whatsappMessages: {
    general: "Hi! I'm interested in getting a website for my business.",
    custom: "I need something custom for my website",
    question: "I have a question about the Website-in-a-Week service",
    getStarted: "Hi Avnish! I want to get started with a website for my business.",
  },
}

// Helper function to create WhatsApp link
export const getWhatsAppLink = (message?: string) => {
  const msg = message || siteConfig.whatsappMessages.general
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(msg)}`
}
