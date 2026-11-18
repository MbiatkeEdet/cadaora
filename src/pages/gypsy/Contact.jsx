import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import Seo from '../../components/Seo.jsx'
import PageHero from '../../components/PageHero.jsx'
import Reveal from '../../components/Reveal.jsx'
import Button, { Arrow } from '../../components/Button.jsx'
import { SplitHeading } from '../../components/Motion.jsx'

// TODO approved contact details — the copy document lists these as "to confirm".
const CONTACT_EMAIL = 'hello@thevenuegypsy.com'

const enquiringAs = [
  'Couple',
  'Private client',
  'Event professional',
  'Corporate or brand',
  'Venue or hospitality representative',
  'Other',
]

const experienceTypes = [
  'Wedding',
  'Celebration or milestone',
  'Corporate retreat, dinner or launch',
  'Private experience',
  'Not sure yet',
]

export default function Contact() {
  const [params] = useSearchParams()
  const prefill = params.get('venue') || params.get('destination') || ''

  const initial = {
    name: '',
    email: '',
    phone: '',
    enquiringAs: '',
    interest: prefill,
    eventType: '',
    date: '',
    guests: '',
    message: '',
  }

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
    console.log('Venue Gypsy enquiry:', form)
    setSending(false)
    setSent(true)
    document.getElementById('enquiry')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div>
      <Seo
        title="Contact | The Venue Gypsy"
        description="Where are you dreaming of going? Tell us what kind of place you are looking for, or get in touch about a venue or destination featured on The Venue Gypsy."
      />
      <PageHero
        motion
        eyebrow="Contact & enquiries"
        title={<em>Where are you dreaming of going?</em>}
        subtitle="Tell us what kind of place you are looking for, or get in touch about a venue or destination featured on The Venue Gypsy. We would love to hear what you are hoping to discover."
        image="https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=2000&q=80"
        imageAlt="A small boat on clear water beneath cliffs"
        height="min-h-[56vh]"
      />

      <section id="enquiry" className="mx-auto grid max-w-7xl scroll-mt-24 gap-16 px-6 py-20 sm:py-28 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
        <Reveal className="lg:sticky lg:top-28 lg:self-start">
          <SplitHeading className="font-display text-4xl leading-[1.05] sm:text-5xl">Contact details</SplitHeading>
          <div className="mt-8 text-sm text-coffee/70">
            <a href={`mailto:${CONTACT_EMAIL}`} className="mt-2 block text-base hover:text-deep-blue">
              {CONTACT_EMAIL}
            </a>
          </div>
          <p className="mt-8 text-sm leading-relaxed text-coffee/60">We do not handle bookings, availability or payments.</p>
        </Reveal>

        <Reveal delay={100}>
          {sent ? (
            <div role="status" aria-live="polite" className="rounded-sm bg-deep-blue-tint p-10 sm:p-14">
              <p className="eyebrow text-deep-blue">Enquiry received</p>
              <h3 className="mt-4 font-display text-4xl italic">Thank you{form.name ? `, ${form.name.split(' ')[0]}` : ''}.</h3>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-coffee/75">
                We will be in touch about what you are hoping to discover.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(initial)
                  setSent(false)
                }}
                className="eyebrow mt-8 border-b border-coffee pb-1 hover:text-deep-blue"
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
                <Field label="Telephone / WhatsApp" name="phone" type="tel" value={form.phone} onChange={update} autoComplete="tel" hint="optional" />
                <Select label="I am enquiring as" name="enquiringAs" value={form.enquiringAs} onChange={update} options={enquiringAs} required />
              </div>
              <Field label="Venue or destination of interest" name="interest" value={form.interest} onChange={update} placeholder="A place you have seen here, or a type of place" />
              <div className="grid gap-9 sm:grid-cols-2">
                <Select label="Type of event or experience" name="eventType" value={form.eventType} onChange={update} options={experienceTypes} />
                <Field label="Proposed date or date range" name="date" value={form.date} onChange={update} hint="optional" placeholder="e.g. September 2027" />
              </div>
              <Field label="Estimated guest count" name="guests" type="number" min="1" inputMode="numeric" value={form.guests} onChange={update} hint="optional" />
              <div>
                <Label htmlFor="message" required>
                  Message / what you would like to know
                </Label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={form.message}
                  onChange={update}
                  placeholder="The kind of place you are looking for, or your question about a venue or destination."
                  className="field resize-none leading-relaxed"
                />
              </div>

              <Button type="submit" variant="accent" disabled={sending} className="disabled:opacity-60">
                {sending ? 'Sending…' : 'Send Enquiry'} {!sending && <Arrow />}
              </Button>
            </form>
          )}
        </Reveal>
      </section>
    </div>
  )
}

function Label({ htmlFor, children, required, hint }) {
  return (
    <label htmlFor={htmlFor} className="eyebrow mb-1 block text-coffee/50">
      {children} {required && <span className="text-deep-blue">*</span>}
      {hint && <span className="ml-2 normal-case tracking-normal text-coffee/40">({hint})</span>}
    </label>
  )
}

function Field({ label, name, required, hint, ...rest }) {
  return (
    <div>
      <Label htmlFor={name} required={required} hint={hint}>
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
