import { useState } from 'react'
import Seo from '../../components/Seo.jsx'
import PageHero from '../../components/PageHero.jsx'
import Reveal from '../../components/Reveal.jsx'
import Button, { Arrow } from '../../components/Button.jsx'
import { SplitHeading } from '../../components/Motion.jsx'

// TODO approved contact details — the copy document lists these as "to confirm".
const CONTACT_EMAIL = 'hello@cadaoraevents.com'
const CONTACT_PHONE = '+234 800 000 0000'

const eventTypes = [
  'Wedding',
  'Milestone celebration',
  'Private gathering',
  'Corporate experience',
  'Destination event',
  'Experiential design & production',
  'Other',
]

const heardFrom = ['Instagram', 'Referral from a friend or client', 'Venue or partner', 'Press or feature', 'Search', 'Other']

const initial = {
  name: '',
  email: '',
  phone: '',
  eventType: '',
  date: '',
  location: '',
  guests: '',
  vision: '',
  heard: '',
}

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)

  const update = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  async function handleSubmit(e) {
    e.preventDefault()
    if (sending) return
    setSending(true)
    // TODO: replace with a real submission (Formspree, EmailJS or an API route).
    await new Promise((r) => setTimeout(r, 600))
    console.log('Cadaora enquiry:', form)
    setSending(false)
    setSent(true)
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div>
      <Seo
        title="Contact | Cadaora Exquisite Events"
        description="Let's begin with a conversation. Tell us a little about the occasion you have in mind and our team will be in touch about the next steps."
      />
      <PageHero
        motion
        eyebrow="Contact"
        title="Let’s begin with a conversation."
        subtitle="Whether you have a clear vision or are still exploring possibilities, we would love to hear about the occasion you have in mind. Tell us a little about it and our team will be in touch about the next steps."
        image="/media/gallery/candelabra.jpg"
        imageAlt="A crystal candelabra centrepiece under stage lighting"
        height="min-h-[56vh]"
      />

      <section id="enquiry" className="mx-auto grid max-w-7xl scroll-mt-24 gap-16 px-6 py-20 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <p className="eyebrow text-aqua-deep">Enquire</p>
          <SplitHeading className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl">Tell us what you’re envisioning.</SplitHeading>
          <div className="mt-10 text-midnight/70">
            <p className="eyebrow text-midnight/40">Contact details</p>
            <p className="mt-3 text-base leading-relaxed">
              Lagos, Nigeria
              <br />
              Working across destinations
              <br />
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-aqua-deep">
                {CONTACT_EMAIL}
              </a>
              <br />
              <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-aqua-deep">
                {CONTACT_PHONE}
              </a>
            </p>
          </div>
        </Reveal>

        <Reveal delay={100}>
          {sent ? (
            <div role="status" aria-live="polite" className="rounded-sm bg-aqua-tint p-10 sm:p-14">
              <p className="eyebrow text-aqua-deep">Enquiry received</p>
              <h3 className="mt-4 font-display text-4xl">Thank you{form.name ? `, ${form.name.split(' ')[0]}` : ''}.</h3>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-midnight/70">
                Our team will be in touch about the next steps.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(initial)
                  setSent(false)
                }}
                className="eyebrow mt-8 border-b border-midnight pb-1 hover:text-aqua-deep"
              >
                Send another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-9">
              <div className="grid gap-9 sm:grid-cols-2">
                <Field label="Full name" name="name" value={form.name} onChange={update} required autoComplete="name" />
                <Field label="Email address" name="email" type="email" value={form.email} onChange={update} required autoComplete="email" />
              </div>
              <div className="grid gap-9 sm:grid-cols-2">
                <Field label="Telephone / WhatsApp" name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" placeholder="+234…" />
                <Select label="Type of event" name="eventType" value={form.eventType} onChange={update} options={eventTypes} required />
              </div>
              <div className="grid gap-9 sm:grid-cols-2">
                <Field label="Proposed event date or date range" name="date" value={form.date} onChange={update} placeholder="e.g. June 2027, or spring 2028" />
                <Field label="Event location / destination" name="location" value={form.location} onChange={update} placeholder="e.g. Lagos, Lake Como, undecided" />
              </div>
              <Field label="Estimated guest count" name="guests" type="number" min="1" inputMode="numeric" value={form.guests} onChange={update} />
              <div>
                <Label htmlFor="vision">A little about your vision or requirements</Label>
                <textarea
                  id="vision"
                  name="vision"
                  rows={6}
                  value={form.vision}
                  onChange={update}
                  placeholder="The occasion, the feeling you are after, anything that helps us picture it."
                  className="field resize-none leading-relaxed"
                />
              </div>
              <Select label="How did you hear about Cadaora?" name="heard" value={form.heard} onChange={update} options={heardFrom} />

              <Button type="submit" disabled={sending} className="disabled:opacity-60">
                {sending ? 'Sending…' : 'Send Enquiry'} {!sending && <Arrow />}
              </Button>
            </form>
          )}
        </Reveal>
      </section>
    </div>
  )
}

function Label({ htmlFor, children, required }) {
  return (
    <label htmlFor={htmlFor} className="eyebrow mb-1 block text-midnight/50">
      {children} {required && <span className="text-aqua-deep">*</span>}
    </label>
  )
}

function Field({ label, name, required, ...rest }) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <input id={name} name={name} required={required} className="field" {...rest} />
    </div>
  )
}

function Select({ label, name, options, required, value, onChange }) {
  return (
    <div>
      <Label htmlFor={name} required={required}>
        {label}
      </Label>
      <select id={name} name={name} required={required} value={value} onChange={onChange} className="field">
        <option value="">Select…</option>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}
