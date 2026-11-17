
import React, { useState } from 'react'
import { ArrowUpRight, Check, Send } from 'lucide-react'
import { PageIntro, SectionLabel } from '../../components/Site'
import Footer from '../../components/Footer'

const initial = {
  name: '',
  email: '',
  phone: '',
  type: '',
  date: '',
  location: '',
  guests: '',
  budget: '',
  vision: '',
  source: '',
}

const eventTypes = [
  'Wedding',
  'Milestone celebration',
  'Corporate experience',
  'Destination event',
  'Experiential design',
  'Private celebration',
  'Other',
]

const budgets = [
  'Below ₦5 million',
  '₦5 million – ₦10 million',
  '₦10 million – ₦20 million',
  '₦20 million – ₦50 million',
  '₦50 million and above',
  'Prefer to discuss',
]

export default function Contact() {
  const [form, setForm] = useState(initial)
  const [submitted, setSubmitted] = useState(false)

  const update = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const submit = (e) => {
    e.preventDefault()

    // Connect your approved form endpoint here before launch.
    setSubmitted(true)
  }

  return (
    <>
      <PageIntro
        number="05"
        kicker="Contact"
        title="Let’s begin with a conversation."
        description="Whether you have a clear vision or are still exploring possibilities, we would love to hear about the occasion you have in mind. Tell us a little about it and our team will be in touch about the next steps."
      />

      <section className="container-shell grid gap-16 pb-24 md:grid-cols-[0.7fr_1.3fr] md:gap-20 md:pb-32">

        {/* LEFT INFORMATION */}
        <aside className="md:sticky md:top-32 md:h-fit">
          <SectionLabel>Start a conversation</SectionLabel>

          <h2 className="display mt-6 text-4xl leading-tight md:text-5xl">
            A little about your plans.
          </h2>

          <p className="mt-6 max-w-sm text-sm leading-8 text-muted">
            Every remarkable occasion begins somewhere. Share a little
            about what you have in mind. The details can evolve;
            this is simply a place to begin.
          </p>

          <div className="mt-14 border-t border-line pt-7">
            <p className="eyebrow text-gold">Based in</p>
            <p className="mt-4 text-base">Lagos, Nigeria</p>
            <p className="mt-2 text-xs tracking-wide text-muted">
              Working across destinations
            </p>
          </div>

          <div className="mt-9 border-t border-line pt-7">
            <p className="eyebrow text-gold">Our approach</p>
            <p className="mt-4 max-w-xs text-sm leading-7 text-muted">
              Thoughtful planning, considered details and experiences
              that feel entirely your own.
            </p>
          </div>

          <div className="mt-9 border-t border-line pt-7">
            <p className="eyebrow text-gold">Enquiries</p>
            <p className="mt-4 text-sm leading-7 text-muted">
              For private celebrations, weddings, corporate gatherings
              and destination experiences.
            </p>
          </div>
        </aside>

        {/* FORM */}
        <div className="bg-[#eee9df] p-6 sm:p-10 md:p-12">

          {submitted ? (
            <div className="py-20 text-center">

              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold text-gold">
                <Check size={24} />
              </div>

              <p className="eyebrow mt-8 text-gold">
                Enquiry received
              </p>

              <h2 className="display mt-5 text-4xl">
                Thank you for sharing.
              </h2>

              <p className="mx-auto mt-5 max-w-md text-sm leading-8 text-muted">
                Your enquiry has been prepared. Once the website's
                submission service is connected, our team will be
                able to receive and respond to your details.
              </p>

              <button
                onClick={() => {
                  setForm(initial)
                  setSubmitted(false)
                }}
                className="btn-dark mt-9"
              >
                Submit another enquiry
              </button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-12">

              <div>
                <p className="eyebrow text-gold">01 / Your details</p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">
                  <Field
                    label="Full name"
                    name="name"
                    value={form.name}
                    onChange={update}
                    required
                  />

                  <Field
                    label="Email address"
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={update}
                    required
                  />

                  <Field
                    label="Telephone / WhatsApp"
                    name="phone"
                    value={form.phone}
                    onChange={update}
                    required
                  />

                  <SelectField
                    label="How did you hear about Cadaora?"
                    name="source"
                    value={form.source}
                    onChange={update}
                    options={[
                      'Instagram',
                      'Pinterest',
                      'Google',
                      'Referral',
                      'Previous client',
                      'Other',
                    ]}
                  />
                </div>
              </div>

              <div className="border-t border-line pt-10">
                <p className="eyebrow text-gold">02 / Your occasion</p>

                <div className="mt-8 grid gap-8 sm:grid-cols-2">

                  <SelectField
                    label="Type of event"
                    name="type"
                    value={form.type}
                    onChange={update}
                    options={eventTypes}
                    required
                  />

                  <Field
                    label="Proposed date or date range"
                    name="date"
                    value={form.date}
                    onChange={update}
                  />

                  <Field
                    label="Event location / destination"
                    name="location"
                    value={form.location}
                    onChange={update}
                  />

                  <Field
                    label="Estimated guest count"
                    name="guests"
                    value={form.guests}
                    onChange={update}
                  />

                  <div className="sm:col-span-2">
                    <SelectField
                      label="Estimated event investment"
                      name="budget"
                      value={form.budget}
                      onChange={update}
                      options={budgets}
                    />
                  </div>
                </div>
              </div>

              <div className="border-t border-line pt-10">
                <p className="eyebrow text-gold">03 / Your vision</p>

                <label className="mt-8 block">
                  <span className="eyebrow text-muted">
                    Tell us a little about what you are imagining
                  </span>

                  <textarea
                    name="vision"
                    value={form.vision}
                    onChange={update}
                    rows="6"
                    placeholder="The atmosphere, the feeling, the details that matter to you..."
                    className="mt-5 w-full resize-y border-b border-line bg-transparent py-4 text-sm leading-7 outline-none transition-colors placeholder:text-[#a39b8d] focus:border-gold"
                  />
                </label>
              </div>

              <div className="border-t border-line pt-8">
                <button
                  type="submit"
                  className="btn-dark flex items-center gap-5"
                >
                  Send your enquiry
                  <ArrowUpRight size={16} />
                </button>

                <p className="mt-6 max-w-md text-[10px] leading-6 text-muted">
                  Your information will be treated with care and used
                  solely in connection with your enquiry. Connect a
                  form submission service before publishing this website.
                </p>
              </div>

            </form>
          )}
        </div>
      </section>
      <Footer />
    </>
  )
}

function Field({
  label,
  name,
  value,
  onChange,
  type = 'text',
  required = false,
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-muted">
        {label}{required ? ' *' : ''}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-4 w-full border-b border-line bg-transparent py-3 text-sm outline-none transition-colors focus:border-gold"
      />
    </div>
  )
}

function SelectField({
  label,
  name,
  value,
  onChange,
  options,
  required = false,
}) {
  return (
    <div>
      <label htmlFor={name} className="eyebrow text-muted">
        {label}{required ? ' *' : ''}
      </label>

      <select
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="mt-4 w-full border-b border-line bg-transparent py-3 text-sm outline-none transition-colors focus:border-gold"
      >
        <option value="">Please select</option>

        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
