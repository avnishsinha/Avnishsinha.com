'use client'

import type { FormEvent } from 'react'
import { useState } from 'react'

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    const formData = new FormData(e.currentTarget)

    try {
      const response = await fetch('https://formspree.io/f/6088a248-cf43-4276-ab7e-e8603436647f', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        setIsSubmitting(false)
        setSubmitMessage('Thanks! I\'ll get back to you within 24 hours.')
        ;(e.target as HTMLFormElement).reset()
      } else {
        setIsSubmitting(false)
        setSubmitMessage('Oops! Something went wrong. Please try emailing me directly.')
      }
    } catch (error) {
      setIsSubmitting(false)
      setSubmitMessage('Oops! Something went wrong. Please try emailing me directly.')
    }
  }

  return (
    <main className="pt-24 min-h-screen">
      {/* Hero */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block bg-primary text-white px-4 py-1 mb-8 font-bold uppercase tracking-widest text-sm">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-8xl font-800 uppercase tracking-tighter mb-8">
            Let&apos;s Build Something
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-medium max-w-3xl mx-auto">
            Choose your preferred way to connect. I respond to everything within 24 hours.
          </p>
        </div>
      </section>

      {/* Quick Contact Methods */}
      <section className="px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://calendly.com/avnishkumarsinha69/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white p-10 hover:bg-primary group transition-all text-center"
            >
              <span className="material-symbols-outlined text-5xl mb-4 group-hover:text-white block">calendar_today</span>
              <h3 className="text-2xl font-800 uppercase mb-2 group-hover:text-white">Calendly</h3>
              <p className="text-gray-400 group-hover:text-white/80 text-sm font-bold uppercase tracking-wider">
                Schedule a Call
              </p>
            </a>

            <a
              href="mailto:avnishkumarsinha69@gmail.com"
              className="border-2 border-white p-10 hover:bg-primary group transition-all text-center"
            >
              <span className="material-symbols-outlined text-5xl mb-4 group-hover:text-white block">mail</span>
              <h3 className="text-2xl font-800 uppercase mb-2 group-hover:text-white">Email</h3>
              <p className="text-gray-400 group-hover:text-white/80 text-sm font-bold uppercase tracking-wider">
                Direct Contact
              </p>
            </a>

            <a
              href="https://github.com/avnishsinha"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white p-10 hover:bg-primary group transition-all text-center"
            >
              <span className="material-symbols-outlined text-5xl mb-4 group-hover:text-white block">code</span>
              <h3 className="text-2xl font-800 uppercase mb-2 group-hover:text-white">GitHub</h3>
              <p className="text-gray-400 group-hover:text-white/80 text-sm font-bold uppercase tracking-wider">
                View Code
              </p>
            </a>

            <a
              href="https://www.instagram.com/avnish_7742/"
              target="_blank"
              rel="noopener noreferrer"
              className="border-2 border-white p-10 hover:bg-primary group transition-all text-center"
            >
              <span className="material-symbols-outlined text-5xl mb-4 group-hover:text-white block">photo_camera</span>
              <h3 className="text-2xl font-800 uppercase mb-2 group-hover:text-white">Instagram</h3>
              <p className="text-gray-400 group-hover:text-white/80 text-sm font-bold uppercase tracking-wider">
                DM Me
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 py-20 bg-white dark:bg-zinc-950 border-y-2 border-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-800 uppercase tracking-tighter mb-4 text-center">
            Or Fill This Form
          </h2>
          <p className="text-center text-gray-400 mb-12 font-bold uppercase text-sm">
            Tell me about your project
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-800 uppercase tracking-widest mb-2">
                Your Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full bg-transparent border-2 border-white px-6 py-4 text-lg font-medium focus:border-primary focus:outline-none transition-colors"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-800 uppercase tracking-widest mb-2">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-transparent border-2 border-white px-6 py-4 text-lg font-medium focus:border-primary focus:outline-none transition-colors"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label htmlFor="project" className="block text-sm font-800 uppercase tracking-widest mb-2">
                Project Type *
              </label>
              <select
                id="project"
                name="project"
                required
                className="w-full bg-black border-2 border-white px-6 py-4 text-lg font-medium focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Select a type</option>
                <option value="landing">Landing Page</option>
                <option value="ecommerce">E-Commerce</option>
                <option value="portfolio">Portfolio</option>
                <option value="business">Business Website</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="timeline" className="block text-sm font-800 uppercase tracking-widest mb-2">
                Timeline *
              </label>
              <select
                id="timeline"
                name="timeline"
                required
                className="w-full bg-black border-2 border-white px-6 py-4 text-lg font-medium focus:border-primary focus:outline-none transition-colors"
              >
                <option value="">Select timeline</option>
                <option value="asap">ASAP (This Week)</option>
                <option value="week">Next Week</option>
                <option value="flexible">Flexible</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-800 uppercase tracking-widest mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                className="w-full bg-transparent border-2 border-white px-6 py-4 text-lg font-medium focus:border-primary focus:outline-none transition-colors resize-none"
                placeholder="Tell me about your project, goals, and any specific requirements..."
              />
            </div>

            {submitMessage && (
              <div className="bg-primary text-white p-6 font-bold uppercase text-center tracking-wider">
                {submitMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white py-6 text-2xl font-800 uppercase tracking-tighter hover:bg-white hover:text-primary border-2 border-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </section>

      {/* Additional Info */}
      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <div className="border-2 border-primary p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-800 uppercase tracking-tighter mb-6">
              Response Time
            </h3>
            <p className="text-xl text-gray-400 font-medium mb-8">
              I check messages every 4-6 hours during business days. You&apos;ll hear from me within 24 hours max.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <p className="text-sm font-800 uppercase tracking-widest text-primary mb-2">Calendly</p>
                <p className="font-bold">Instant booking</p>
              </div>
              <div>
                <p className="text-sm font-800 uppercase tracking-widest text-primary mb-2">Email</p>
                <p className="font-bold">~24 hours</p>
              </div>
              <div>
                <p className="text-sm font-800 uppercase tracking-widest text-primary mb-2">Instagram</p>
                <p className="font-bold">~12 hours</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
