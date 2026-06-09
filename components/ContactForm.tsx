'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { CheckCircle } from 'lucide-react'
import Link from 'next/link'

interface FormData {
  website: string
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

const GHL_WEBHOOK =
  'https://services.leadconnectorhq.com/hooks/boSlI2IAx383qv6awG2E/webhook-trigger/8405d3a6-b211-44e6-b0af-b6e9d652611b'

const subjects = [
  'Executive Coaching',
  'Team Coaching & Facilitation',
  'Motorsport & Engineering Mentoring',
  'Other',
]

const inputBase =
  'w-full border rounded-sm px-4 py-3 text-base text-charcoal bg-white placeholder-charcoal/35 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green/30'
const inputNormal = `${inputBase} border-charcoal/20 focus:border-green`
const inputError = `${inputBase} border-red-400 focus:border-red-400 focus:ring-red-200`

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [submittedName, setSubmittedName] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>()

  const onSubmit = async (data: FormData) => {
    /* Honeypot check */
    if (data.website) return

    const firstName = data.name.split(' ')[0]

    try {
      const res = await fetch(GHL_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          firstName,
          email: data.email,
          phone: data.phone || '',
          subject: data.subject,
          message: data.message,
        }),
      })
      if (!res.ok) throw new Error(`GHL returned ${res.status}`)
    } catch {
      /* Fallback: open mailto if webhook fails */
      const body = [
        `Name: ${data.name}`,
        `Email: ${data.email}`,
        `Phone: ${data.phone || 'Not provided'}`,
        '',
        `Subject: ${data.subject}`,
        '',
        'Message:',
        data.message,
      ].join('\n')

      const a = document.createElement('a')
      a.href = `mailto:nicola@greentrackcc.com?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`
      a.click()
    }

    setSubmittedName(firstName)
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="py-10 text-center" role="status" aria-live="polite">
        <div className="w-16 h-16 bg-green/10 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle size={32} className="text-green" aria-hidden="true" />
        </div>
        <h2 className="font-display text-3xl text-charcoal mb-4">
          Thank you{submittedName ? `, ${submittedName}` : ''}
        </h2>
        <p className="text-charcoal/65 text-base leading-relaxed mb-3 max-w-sm mx-auto">
          Thank you for getting in touch. Nicola will be in touch within 24 hours.
        </p>
        <p className="text-charcoal/45 text-sm leading-relaxed mb-10 max-w-sm mx-auto">
          If you have an urgent query, email directly at{' '}
          <a href="mailto:nicola@greentrackcc.com" className="text-green hover:underline underline-offset-2">
            nicola@greentrackcc.com
          </a>.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 min-h-[44px] bg-green text-white text-sm font-medium hover:bg-darkGreen transition-colors duration-200 rounded-sm"
        >
          Back to home
        </Link>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate aria-label="Contact Nicola Nevill">
      {/* Honeypot — hidden from real users, traps bots */}
      <input
        type="text"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
        {...register('website')}
      />

      <div className="space-y-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-charcoal/80 mb-1.5">
            Name <span className="text-green" aria-hidden="true">*</span>
          </label>
          <input
            {...register('name', { required: 'Please enter your name' })}
            id="name"
            type="text"
            autoComplete="name"
            placeholder="Your full name"
            className={errors.name ? inputError : inputNormal}
            aria-required="true"
            aria-invalid={errors.name ? 'true' : 'false'}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" role="alert" className="text-red-500 text-xs mt-1.5">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-charcoal/80 mb-1.5">
            Email address <span className="text-green" aria-hidden="true">*</span>
          </label>
          <input
            {...register('email', {
              required: 'Please enter your email address',
              pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address' },
            })}
            id="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            className={errors.email ? inputError : inputNormal}
            aria-required="true"
            aria-invalid={errors.email ? 'true' : 'false'}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" role="alert" className="text-red-500 text-xs mt-1.5">
              {errors.email.message}
            </p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-charcoal/80 mb-1.5">
            Phone number{' '}
            <span className="text-charcoal/35 font-normal text-xs">(optional)</span>
          </label>
          <input
            {...register('phone')}
            id="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+44 7700 000000"
            className={inputNormal}
          />
        </div>

        {/* Subject */}
        <div>
          <label htmlFor="subject" className="block text-sm font-medium text-charcoal/80 mb-1.5">
            Subject <span className="text-green" aria-hidden="true">*</span>
          </label>
          <select
            {...register('subject', { required: 'Please select a subject' })}
            id="subject"
            className={`${errors.subject ? inputError : inputNormal} cursor-pointer`}
            defaultValue=""
            aria-required="true"
            aria-invalid={errors.subject ? 'true' : 'false'}
            aria-describedby={errors.subject ? 'subject-error' : undefined}
          >
            <option value="" disabled>Select a subject…</option>
            {subjects.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
          {errors.subject && (
            <p id="subject-error" role="alert" className="text-red-500 text-xs mt-1.5">
              {errors.subject.message}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-charcoal/80 mb-1.5">
            Message <span className="text-green" aria-hidden="true">*</span>
          </label>
          <textarea
            {...register('message', {
              required: 'Please enter your message',
              minLength: { value: 10, message: 'Please write a little more, at least 10 characters' },
            })}
            id="message"
            rows={5}
            placeholder="Tell Nicola a little about what you're looking for…"
            className={`${errors.message ? inputError : inputNormal} resize-y min-h-[120px]`}
            aria-required="true"
            aria-invalid={errors.message ? 'true' : 'false'}
            aria-describedby={errors.message ? 'message-error' : undefined}
          />
          {errors.message && (
            <p id="message-error" role="alert" className="text-red-500 text-xs mt-1.5">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}
        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 min-h-[48px] bg-green text-white text-sm font-medium tracking-wide hover:bg-darkGreen disabled:opacity-60 disabled:cursor-not-allowed transition-colors duration-200 rounded-sm cursor-pointer"
          >
            {isSubmitting ? 'Sending…' : 'Send Message'}
          </button>
        </div>
      </div>
    </form>
  )
}
