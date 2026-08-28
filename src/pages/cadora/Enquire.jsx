// import { useState } from 'react'
// import PageHero from '../../components/PageHero.jsx'

// const initial = {
//   name: '',
//   email: '',
//   eventType: 'Wedding',
//   date: '',
//   guests: '',
//   location: '',
//   message: '',
// }

// export default function Enquire() {
//   const [form, setForm] = useState(initial)
//   const [sent, setSent] = useState(false)
//   const [error, setError] = useState('')

//   function update(field, value) {
//     setForm((f) => ({ ...f, [field]: value }))
//   }

//   function handleSubmit(e) {
//     e.preventDefault()
//     if (!form.name.trim() || !form.email.trim()) {
//       setError('Please share your name and email so we can reach you.')
//       return
//     }
//     setError('')
//     setSent(true)
//   }

//   if (sent) {
//     return (
//       <div className="mx-auto flex min-h-[70vh] max-w-xl flex-col items-center justify-center px-6 text-center">
//         <p className="eyebrow text-gold-soft">Enquiry received</p>
//         <h1 className="mt-4 font-display text-3xl italic text-ivory sm:text-4xl">Thank you, {form.name.split(' ')[0]}.</h1>
//         <p className="mt-4 text-sm text-ivory/65">
//           We've noted every detail. A member of the Cadora team will reach out at {form.email} within two business
//           days to arrange a first conversation.
//         </p>
//         <button
//           onClick={() => {
//             setForm(initial)
//             setSent(false)
//           }}
//           className="mt-8 border border-ivory/30 px-6 py-3 eyebrow text-[0.65rem] text-ivory hover:bg-ivory/10"
//         >
//           Send another enquiry
//         </button>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <PageHero
//         eyebrow="Enquire"
//         title="Tell us about the occasion"
//         subtitle="A few details help us understand what you're picturing before we speak."
//         image="/media/gallery/gold-hall.jpg"
//         height="h-[48vh]"
//       />

//       <section className="mx-auto max-w-2xl px-6 py-20">
//         {error && (
//           <p className="mb-6 border border-wine-soft/60 bg-wine/10 px-4 py-3 text-sm text-wine-soft">{error}</p>
//         )}
//         <form onSubmit={handleSubmit} className="space-y-6" noValidate>
//           <div className="grid gap-6 sm:grid-cols-2">
//             <Field label="Full name" value={form.name} onChange={(v) => update('name', v)} required />
//             <Field label="Email" type="email" value={form.email} onChange={(v) => update('email', v)} required />
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2">
//             <div>
//               <label className="eyebrow text-ivory/50">Event type</label>
//               <select
//                 value={form.eventType}
//                 onChange={(e) => update('eventType', e.target.value)}
//                 className="mt-2 w-full border border-ink-line bg-ink px-4 py-3 text-sm text-ivory outline-none focus:border-gold"
//               >
//                 <option>Wedding</option>
//                 <option>Private Party</option>
//                 <option>Destination Celebration</option>
//                 <option>Corporate / Brand Event</option>
//                 <option>Other</option>
//               </select>
//             </div>
//             <Field label="Preferred date" type="date" value={form.date} onChange={(v) => update('date', v)} />
//           </div>

//           <div className="grid gap-6 sm:grid-cols-2">
//             <Field label="Estimated guest count" type="number" value={form.guests} onChange={(v) => update('guests', v)} />
//             <Field label="Location or region" value={form.location} onChange={(v) => update('location', v)} placeholder="e.g. Lagos, or undecided" />
//           </div>

//           <div>
//             <label className="eyebrow text-ivory/50">Tell us more</label>
//             <textarea
//               rows={5}
//               value={form.message}
//               onChange={(e) => update('message', e.target.value)}
//               placeholder="Vision, inspiration, must-haves — anything that helps us picture the day."
//               className="mt-2 w-full resize-none border border-ink-line bg-ink px-4 py-3 text-sm text-ivory outline-none placeholder:text-ivory/30 focus:border-gold"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full border border-gold bg-gold px-8 py-4 eyebrow text-[0.65rem] text-ink transition-colors hover:bg-transparent hover:text-gold sm:w-auto"
//           >
//             Send enquiry
//           </button>
//         </form>
//       </section>
//     </div>
//   )
// }

// function Field({ label, type = 'text', value, onChange, required, placeholder }) {
//   return (
//     <div>
//       <label className="eyebrow text-ivory/50">
//         {label} {required && <span className="text-gold">*</span>}
//       </label>
//       <input
//         type={type}
//         value={value}
//         placeholder={placeholder}
//         onChange={(e) => onChange(e.target.value)}
//         className="mt-2 w-full border border-ink-line bg-ink px-4 py-3 text-sm text-ivory outline-none placeholder:text-ivory/30 focus:border-gold"
//       />
//     </div>
//   )
// }

import { useState } from "react";
import PageHero from '../../components/PageHero.jsx'
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ChevronUp,
  Facebook,
  Instagram,
  Mail,
  Menu,
  Phone,
  X,
} from "lucide-react";

const faqs = [
  {
    question: "How far in advance should I enquire about my event?",
    answer:
      "We recommend getting in touch as early as possible, particularly for weddings, destination celebrations and large-scale events. Ideally, enquiries should be made 12–24 months ahead, although we may be able to accommodate shorter timelines depending on availability.",
  },
  {
    question: "What types of events do you plan?",
    answer:
      "We create and manage a wide range of celebrations and experiences, including luxury weddings, milestone birthdays, anniversaries, private parties, corporate events, destination celebrations and bespoke occasions.",
  },
  {
    question: "Do you plan events outside Nigeria?",
    answer:
      "Yes. We work with clients to create exceptional celebrations both locally and internationally. Depending on your destination, we can coordinate venues, suppliers, logistics, guest experiences and event production.",
  },
  {
    question: "What is the minimum budget for an event?",
    answer:
      "Every celebration is different and our approach is completely bespoke. Your enquiry helps us understand your expectations, guest numbers, location and overall vision so that we can recommend the right scope and investment.",
  },
  {
    question: "Do you help with venue sourcing?",
    answer:
      "Yes. We can assist with discovering and securing venues that align with your concept, guest experience, location preferences and overall event vision.",
  },
  {
    question: "Can you manage the entire event?",
    answer:
      "Absolutely. Depending on your requirements, we can provide full-service planning and production, from initial concept development and venue selection through supplier management, design, logistics and execution.",
  },
  {
    question: "What happens after I submit my enquiry?",
    answer:
      "A member of our team will review your enquiry and contact you to understand your plans in greater detail. We can then arrange a consultation and discuss how best to bring your vision to life.",
  },
];

const initialForm = {
  eventType: "",
  name: "",
  email: "",
  phone: "",
  guests: "",
  year: "",
  season: "",
  budget: "",
  vision: "",
};

export default function Enquire() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [formData, setFormData] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Cadaora Events enquiry:", formData);

    setSubmitted(true);

    window.scrollTo({
      top: document.getElementById("enquiry")?.offsetTop - 80 || 0,
      behavior: "smooth",
    });
  };

  const closeMobileMenu = () => {
    setMobileMenu(false);
  };

  return (
    <div className="min-h-screen bg-[#f8f5ef] text-[#211e1b]">
      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <header className="absolute left-0 top-0 z-50 w-full">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-7 md:px-10 lg:px-16">
          {/* LOGO */}
          <a
            href="#top"
            onClick={closeMobileMenu}
            className="relative z-[60] block"
          >
            <div className="font-serif text-[30px] leading-none tracking-wide text-white md:text-[34px]">
              Cadaora
            </div>

            <div className="mt-1 text-[7px] uppercase tracking-[0.55em] text-[#cbbd9f]">
              Events
            </div>
          </a>

          {/* DESKTOP NAVIGATION */}
          <nav className="hidden items-center gap-8 lg:flex">
            <a
              href="#weddings"
              className="text-[10px] uppercase tracking-[0.22em] text-white/75 transition hover:text-white"
            >
              Weddings
            </a>

            <a
              href="#events"
              className="text-[10px] uppercase tracking-[0.22em] text-white/75 transition hover:text-white"
            >
              Events
            </a>

            <a
              href="#destinations"
              className="text-[10px] uppercase tracking-[0.22em] text-white/75 transition hover:text-white"
            >
              Destinations
            </a>

            <a
              href="#about"
              className="text-[10px] uppercase tracking-[0.22em] text-white/75 transition hover:text-white"
            >
              About
            </a>

            <a
              href="#faq"
              className="text-[10px] uppercase tracking-[0.22em] text-white/75 transition hover:text-white"
            >
              FAQ
            </a>

            <a
              href="#enquiry"
              className="group ml-3 flex items-center gap-2 border border-white/30 px-5 py-3 text-[10px] uppercase tracking-[0.22em] text-white transition duration-300 hover:bg-white hover:text-[#211e1b]"
            >
              Enquire

              <ArrowUpRight
                size={14}
                strokeWidth={1.4}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            type="button"
            onClick={() => setMobileMenu(!mobileMenu)}
            aria-label="Toggle navigation"
            className="relative z-[60] flex h-11 w-11 items-center justify-center border border-white/30 text-white lg:hidden"
          >
            {mobileMenu ? (
              <X size={20} strokeWidth={1.4} />
            ) : (
              <Menu size={20} strokeWidth={1.4} />
            )}
          </button>
        </div>

        {/* MOBILE NAVIGATION */}
        <div
          className={`fixed inset-0 z-50 bg-[#211e1b] transition-all duration-500 lg:hidden ${
            mobileMenu
              ? "visible opacity-100"
              : "invisible opacity-0"
          }`}
        >
          <div className="flex h-full flex-col justify-center px-8">
            <div className="mb-12">
              <p className="text-[9px] uppercase tracking-[0.35em] text-[#cbbd9f]">
                Cadaora Events
              </p>

              <div className="mt-4 h-px w-12 bg-[#cbbd9f]/50" />
            </div>

            <nav className="space-y-6">
              <a
                href="#weddings"
                onClick={closeMobileMenu}
                className="block font-serif text-5xl text-white"
              >
                Weddings
              </a>

              <a
                href="#events"
                onClick={closeMobileMenu}
                className="block font-serif text-5xl text-white"
              >
                Events
              </a>

              <a
                href="#destinations"
                onClick={closeMobileMenu}
                className="block font-serif text-5xl text-white"
              >
                Destinations
              </a>

              <a
                href="#about"
                onClick={closeMobileMenu}
                className="block font-serif text-5xl text-white"
              >
                About
              </a>

              <a
                href="#faq"
                onClick={closeMobileMenu}
                className="block font-serif text-5xl text-white"
              >
                FAQ
              </a>
            </nav>

            <a
              href="#enquiry"
              onClick={closeMobileMenu}
              className="mt-12 inline-flex w-fit items-center gap-4 border border-[#cbbd9f] px-7 py-4 text-[10px] uppercase tracking-[0.25em] text-[#cbbd9f]"
            >
              Begin an enquiry

              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </header>

      {/* =====================================================
          HERO
      ====================================================== */}
      <section
        id="top"
        className="relative flex min-h-[88vh] items-end overflow-hidden bg-[#211e1b] px-6 pb-20 pt-40 text-white md:min-h-screen md:px-10 md:pb-24 lg:px-16"
      >
        {/* Decorative circles */}
        <div className="pointer-events-none absolute -right-[180px] -top-[180px] h-[550px] w-[550px] rounded-full border border-white/[0.08] md:h-[700px] md:w-[700px]" />

        <div className="pointer-events-none absolute -right-[90px] -top-[90px] h-[400px] w-[400px] rounded-full border border-white/[0.07] md:h-[500px] md:w-[500px]" />

        <div className="pointer-events-none absolute bottom-0 left-1/2 h-px w-[90%] -translate-x-1/2 bg-white/[0.08]" />

        <div className="mx-auto w-full max-w-[1440px]">
          <div className="max-w-5xl">
            <p className="mb-7 text-[10px] uppercase tracking-[0.4em] text-[#cbbd9f]">
              Begin your story
            </p>

            <h1 className="font-serif text-[64px] leading-[0.84] tracking-[-0.02em] sm:text-[80px] md:text-[105px] lg:text-[140px]">
              Exceptional
              <br />
              begins here.
            </h1>

            <p className="mt-9 max-w-xl text-sm leading-8 text-white/60 md:text-base">
              Tell us about your plans and let us create
              an extraordinary celebration that feels
              entirely yours.
            </p>
          </div>

          <a
            href="#enquiry"
            className="mt-14 inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.3em] text-white/60 transition hover:text-white"
          >
            Start your enquiry

            <ArrowDown
              size={15}
              strokeWidth={1.3}
            />
          </a>
        </div>
      </section>

      {/* =====================================================
          CONTACT STRIP
      ====================================================== */}
      <section className="border-b border-[#ddd6ca] bg-[#f8f5ef] px-6 py-10 md:px-10 lg:px-16">
        <div className="mx-auto grid max-w-[1440px] gap-8 md:grid-cols-2">
          <a
            href="tel:+2348000000000"
            className="group flex items-center gap-5"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#cfc7ba] transition duration-300 group-hover:bg-[#211e1b] group-hover:text-white">
              <Phone
                size={17}
                strokeWidth={1.3}
              />
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#81796d]">
                Call us
              </p>

              <p className="mt-1 text-sm">
                +234 800 000 0000
              </p>
            </div>
          </a>

          <a
            href="mailto:hello@cadaoraevents.com"
            className="group flex items-center gap-5"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#cfc7ba] transition duration-300 group-hover:bg-[#211e1b] group-hover:text-white">
              <Mail
                size={17}
                strokeWidth={1.3}
              />
            </div>

            <div>
              <p className="text-[9px] uppercase tracking-[0.3em] text-[#81796d]">
                Email us
              </p>

              <p className="mt-1 text-sm">
                hello@cadaoraevents.com
              </p>
            </div>
          </a>
        </div>
      </section>

      {/* =====================================================
          ENQUIRY SECTION
      ====================================================== */}
      <section
        id="enquiry"
        className="px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-36"
      >
        <div className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-[0.7fr_1.3fr] lg:gap-24">
          {/* LEFT CONTENT */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#9b8b72]">
              Enquire
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-[0.95] sm:text-6xl md:text-7xl">
              Let's create
              <br />
              something
              <br />
              unforgettable.
            </h2>

            <p className="mt-9 max-w-md text-sm leading-8 text-[#70695f]">
              Whether you're planning an intimate
              celebration or a spectacular occasion,
              we'd love to hear what you're imagining.
            </p>

            <div className="mt-10 h-px w-20 bg-[#9b8b72]" />

            <p className="mt-8 max-w-md text-xs leading-7 text-[#81796d]">
              Please complete the form with as much
              detail as possible. This helps our team
              understand your event and begin creating a
              truly bespoke experience.
            </p>
          </div>

          {/* FORM */}
          <div>
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="space-y-10"
              >
                {/* EVENT TYPE */}
                <div>
                  <label
                    htmlFor="eventType"
                    className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-[#70695f]"
                  >
                    Event type *
                  </label>

                  <select
                    id="eventType"
                    name="eventType"
                    value={formData.eventType}
                    onChange={handleChange}
                    required
                    className="w-full border-b border-[#bbb3a7] bg-transparent px-0 py-4 text-sm text-[#211e1b] transition focus:border-[#211e1b]"
                  >
                    <option value="">
                      Select event type
                    </option>

                    <option value="Wedding">
                      Wedding
                    </option>

                    <option value="Milestone Celebration">
                      Milestone Celebration
                    </option>

                    <option value="Private Party">
                      Private Party
                    </option>

                    <option value="Corporate Event">
                      Corporate Event
                    </option>

                    <option value="Destination Event">
                      Destination Event
                    </option>

                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                {/* NAME + EMAIL */}
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-[#70695f]"
                    >
                      Name *
                    </label>

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full border-b border-[#bbb3a7] bg-transparent px-0 py-4 text-sm placeholder:text-[#aaa296] transition focus:border-[#211e1b]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-[#70695f]"
                    >
                      Email address *
                    </label>

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full border-b border-[#bbb3a7] bg-transparent px-0 py-4 text-sm placeholder:text-[#aaa296] transition focus:border-[#211e1b]"
                    />
                  </div>
                </div>

                {/* PHONE + GUESTS */}
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-[#70695f]"
                    >
                      Contact number *
                    </label>

                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+234..."
                      className="w-full border-b border-[#bbb3a7] bg-transparent px-0 py-4 text-sm placeholder:text-[#aaa296] transition focus:border-[#211e1b]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="guests"
                      className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-[#70695f]"
                    >
                      Guest numbers *
                    </label>

                    <input
                      id="guests"
                      type="number"
                      name="guests"
                      value={formData.guests}
                      onChange={handleChange}
                      min="1"
                      required
                      placeholder="Number of guests"
                      className="w-full border-b border-[#bbb3a7] bg-transparent px-0 py-4 text-sm placeholder:text-[#aaa296] transition focus:border-[#211e1b]"
                    />
                  </div>
                </div>

                {/* YEAR + SEASON */}
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label
                      htmlFor="year"
                      className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-[#70695f]"
                    >
                      Year
                    </label>

                    <select
                      id="year"
                      name="year"
                      value={formData.year}
                      onChange={handleChange}
                      className="w-full border-b border-[#bbb3a7] bg-transparent px-0 py-4 text-sm transition focus:border-[#211e1b]"
                    >
                      <option value="">
                        Select year
                      </option>

                      <option value="2026">
                        2026
                      </option>

                      <option value="2027">
                        2027
                      </option>

                      <option value="2028">
                        2028
                      </option>

                      <option value="2029">
                        2029
                      </option>

                      <option value="2030">
                        2030
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="season"
                      className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-[#70695f]"
                    >
                      Season
                    </label>

                    <select
                      id="season"
                      name="season"
                      value={formData.season}
                      onChange={handleChange}
                      className="w-full border-b border-[#bbb3a7] bg-transparent px-0 py-4 text-sm transition focus:border-[#211e1b]"
                    >
                      <option value="">
                        Select season
                      </option>

                      <option value="Spring">
                        Spring
                      </option>

                      <option value="Summer">
                        Summer
                      </option>

                      <option value="Autumn">
                        Autumn
                      </option>

                      <option value="Winter">
                        Winter
                      </option>
                    </select>
                  </div>
                </div>

                {/* BUDGET */}
                <div>
                  <label
                    htmlFor="budget"
                    className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-[#70695f]"
                  >
                    Estimated budget
                  </label>

                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full border-b border-[#bbb3a7] bg-transparent px-0 py-4 text-sm transition focus:border-[#211e1b]"
                  >
                    <option value="">
                      Select budget range
                    </option>

                    <option value="₦5m - ₦10m">
                      ₦5m - ₦10m
                    </option>

                    <option value="₦10m - ₦20m">
                      ₦10m - ₦20m
                    </option>

                    <option value="₦20m - ₦50m">
                      ₦20m - ₦50m
                    </option>

                    <option value="₦50m+">
                      ₦50m+
                    </option>
                  </select>
                </div>

                {/* VISION */}
                <div>
                  <label
                    htmlFor="vision"
                    className="mb-3 block text-[10px] uppercase tracking-[0.25em] text-[#70695f]"
                  >
                    Share your vision
                  </label>

                  <textarea
                    id="vision"
                    name="vision"
                    value={formData.vision}
                    onChange={handleChange}
                    rows="7"
                    placeholder="Tell us about your plans, ideas, preferred location, style and anything else you'd like us to know..."
                    className="w-full resize-none border-b border-[#bbb3a7] bg-transparent px-0 py-4 text-sm leading-7 placeholder:text-[#aaa296] transition focus:border-[#211e1b]"
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="group inline-flex items-center gap-7 bg-[#211e1b] px-8 py-5 text-[10px] uppercase tracking-[0.28em] text-white transition duration-300 hover:bg-[#403b35]"
                >
                  Submit enquiry

                  <ArrowRight
                    size={16}
                    strokeWidth={1.3}
                    className="transition-transform duration-300 group-hover:translate-x-2"
                  />
                </button>
              </form>
            ) : (
              /* SUCCESS MESSAGE */
              <div className="border border-[#d8d0c4] bg-white p-10 md:p-16">
                <div className="flex h-16 w-16 items-center justify-center rounded-full border border-[#9b8b72]">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-7 w-7"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.3"
                  >
                    <path
                      d="M5 12.5l4 4L19 7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>

                <p className="mt-8 text-[10px] uppercase tracking-[0.3em] text-[#9b8b72]">
                  Enquiry received
                </p>

                <h3 className="mt-4 font-serif text-5xl">
                  Thank you.
                </h3>

                <p className="mt-6 max-w-lg text-sm leading-8 text-[#70695f]">
                  Your enquiry has been received. A member
                  of the Cadaora Events team will review your
                  plans and be in touch shortly.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setFormData(initialForm);
                    setSubmitted(false);
                  }}
                  className="mt-9 border-b border-[#211e1b] pb-1 text-[10px] uppercase tracking-[0.25em]"
                >
                  Submit another enquiry
                </button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* =====================================================
          FAQ
      ====================================================== */}
      <section
        id="faq"
        className="bg-[#eee9df] px-6 py-20 md:px-10 md:py-28 lg:px-16 lg:py-36"
      >
        <div className="mx-auto max-w-5xl">
          {/* FAQ HEADER */}
          <div className="mb-16 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#9b8b72]">
              Frequently asked
            </p>

            <h2 className="mt-6 font-serif text-5xl leading-none sm:text-6xl md:text-7xl">
              Questions & answers
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#70695f]">
              Everything you need to know before
              beginning your event planning journey with
              Cadaora Events.
            </p>
          </div>

          {/* FAQ ITEMS */}
          <div className="border-t border-[#cfc7ba]">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;

              return (
                <div
                  key={faq.question}
                  className="border-b border-[#cfc7ba]"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenFaq(
                        isOpen ? null : index
                      )
                    }
                    className="flex w-full items-center justify-between gap-8 py-7 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="max-w-3xl font-serif text-xl leading-tight md:text-2xl">
                      {faq.question}
                    </span>

                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center">
                      {isOpen ? (
                        <ChevronUp
                          size={19}
                          strokeWidth={1.2}
                        />
                      ) : (
                        <ChevronDown
                          size={19}
                          strokeWidth={1.2}
                        />
                      )}
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="max-w-3xl pb-7 pr-10 text-sm leading-8 text-[#70695f] md:text-base">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          OTHER ENQUIRIES
      ====================================================== */}
      <section className="bg-[#211e1b] px-6 py-20 text-white md:px-10 md:py-28 lg:px-16 lg:py-32">
        <div className="mx-auto max-w-[1440px]">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#b9aa8e]">
            Other enquiries
          </p>

          <div className="mt-14 grid gap-12 md:grid-cols-3 md:gap-10">
            {/* PRESS */}
            <div>
              <div className="mb-7 h-px w-10 bg-[#b9aa8e]/60" />

              <h3 className="font-serif text-3xl">
                Press & Speaking
              </h3>

              <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
                For media enquiries, interviews,
                features and speaking opportunities.
              </p>

              <a
                href="mailto:press@cadaoraevents.com"
                className="mt-6 inline-block border-b border-white/30 pb-1 text-xs transition hover:border-white"
              >
                press@cadaoraevents.com
              </a>
            </div>

            {/* PARTNERS */}
            <div>
              <div className="mb-7 h-px w-10 bg-[#b9aa8e]/60" />

              <h3 className="font-serif text-3xl">
                Venues & Partners
              </h3>

              <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
                For venue owners, suppliers and event
                partnership opportunities.
              </p>

              <a
                href="mailto:hello@cadaoraevents.com"
                className="mt-6 inline-block border-b border-white/30 pb-1 text-xs transition hover:border-white"
              >
                hello@cadaoraevents.com
              </a>
            </div>

            {/* CAREERS */}
            <div>
              <div className="mb-7 h-px w-10 bg-[#b9aa8e]/60" />

              <h3 className="font-serif text-3xl">
                Careers
              </h3>

              <p className="mt-5 max-w-xs text-sm leading-7 text-white/50">
                Interested in joining the Cadaora Events
                team?
              </p>

              <a
                href="mailto:careers@cadaoraevents.com"
                className="mt-6 inline-block border-b border-white/30 pb-1 text-xs transition hover:border-white"
              >
                careers@cadaoraevents.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <section
        id="about"
        className="bg-[#f8f5ef] px-6 py-24 text-center md:px-10 md:py-32 lg:px-16 lg:py-40"
      >
        <div className="mx-auto max-w-4xl">
          <p className="text-[10px] uppercase tracking-[0.35em] text-[#9b8b72]">
            Your celebration starts here
          </p>

          <h2 className="mt-7 font-serif text-5xl leading-[0.95] sm:text-6xl md:text-8xl">
            Exceptional begins
            <br />
            with a conversation.
          </h2>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-8 text-[#70695f]">
            Share your plans with us and let's begin
            creating something extraordinary.
          </p>

          <a
            href="#enquiry"
            className="group mt-10 inline-flex items-center gap-5 bg-[#211e1b] px-8 py-5 text-[10px] uppercase tracking-[0.28em] text-white transition hover:bg-[#403b35]"
          >
            Begin your enquiry

            <ArrowRight
              size={16}
              strokeWidth={1.3}
              className="transition-transform duration-300 group-hover:translate-x-2"
            />
          </a>
        </div>
      </section>

      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="bg-[#211e1b] text-[#f7f3eb]">
        {/* FOOTER CTA */}
        <div className="border-b border-white/10 px-6 py-20 md:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto max-w-[1440px]">
            <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
              <div>
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#b9aa8e]">
                  Cadaora Events
                </p>

                <h2 className="mt-6 max-w-3xl font-serif text-5xl leading-none md:text-7xl">
                  Moments made
                  <br />
                  extraordinary.
                </h2>
              </div>

              <a
                href="#top"
                className="group flex w-fit items-center gap-4 border-b border-white/30 pb-3 text-[10px] uppercase tracking-[0.25em] transition hover:border-white"
              >
                Back to top

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.3}
                  className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>

        {/* FOOTER CONTENT */}
        <div className="px-6 py-16 md:px-10 lg:px-16">
          <div className="mx-auto grid max-w-[1440px] gap-14 md:grid-cols-2 lg:grid-cols-4">
            {/* BRAND */}
            <div>
              <div className="font-serif text-4xl">
                Cadaora
              </div>

              <div className="mt-1 text-[7px] uppercase tracking-[0.55em] text-[#b9aa8e]">
                Events
              </div>

              <p className="mt-7 max-w-xs text-sm leading-7 text-white/45">
                Bespoke celebrations, beautifully imagined
                and thoughtfully executed.
              </p>
            </div>

            {/* EXPLORE */}
            <div>
              <h3 className="text-[9px] uppercase tracking-[0.3em] text-[#b9aa8e]">
                Explore
              </h3>

              <div className="mt-7 space-y-4">
                <a
                  href="#weddings"
                  className="block text-sm text-white/60 transition hover:text-white"
                >
                  Weddings
                </a>

                <a
                  href="#events"
                  className="block text-sm text-white/60 transition hover:text-white"
                >
                  Events
                </a>

                <a
                  href="#destinations"
                  className="block text-sm text-white/60 transition hover:text-white"
                >
                  Destinations
                </a>

                <a
                  href="#faq"
                  className="block text-sm text-white/60 transition hover:text-white"
                >
                  FAQ
                </a>
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h3 className="text-[9px] uppercase tracking-[0.3em] text-[#b9aa8e]">
                Contact
              </h3>

              <div className="mt-7 space-y-4">
                <a
                  href="tel:+2348000000000"
                  className="block text-sm text-white/60 transition hover:text-white"
                >
                  +234 800 000 0000
                </a>

                <a
                  href="mailto:hello@cadaoraevents.com"
                  className="block text-sm text-white/60 transition hover:text-white"
                >
                  hello@cadaoraevents.com
                </a>
              </div>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="text-[9px] uppercase tracking-[0.3em] text-[#b9aa8e]">
                Follow us
              </h3>

              <div className="mt-7 flex gap-3">
                <a
                  href="#"
                  aria-label="Instagram"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:bg-white hover:text-[#211e1b]"
                >
                  <Instagram
                    size={16}
                    strokeWidth={1.4}
                  />
                </a>

                <a
                  href="#"
                  aria-label="Facebook"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition hover:bg-white hover:text-[#211e1b]"
                >
                  <Facebook
                    size={16}
                    strokeWidth={1.4}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-white/10 px-6 py-6 md:px-10 lg:px-16">
          <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-4 text-[9px] uppercase tracking-[0.16em] text-white/30 md:flex-row">
            <p>
              © {new Date().getFullYear()} Cadaora Events.
              All rights reserved.
            </p>

            <div className="flex gap-6">
              <a
                href="#"
                className="transition hover:text-white/70"
              >
                Privacy Policy
              </a>

              <a
                href="#"
                className="transition hover:text-white/70"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}