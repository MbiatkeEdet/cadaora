// import { Link } from 'react-router-dom'
// import PageHero from '../../components/PageHero.jsx'
// import Footer from '../../components/Footer.jsx'
// const steps = [
//   { n: '01', title: 'Listen', copy: 'A long, unhurried conversation about how you want the day to feel, not just look.' },
//   { n: '02', title: 'Design', copy: 'A full concept — palette, flow, tablescape, lighting — presented before a single vendor is booked.' },
//   { n: '03', title: 'Build', copy: 'Florists, chefs, musicians and craftspeople assembled and briefed against one vision.' },
//   { n: '04', title: 'Direct', copy: 'On the day, a run-of-show timed to the minute, and a team that keeps it invisible.' },
// ]

// export default function Weddings() {
//   return (
//     <div>
//       <PageHero
//         eyebrow="Weddings"
//         title="A day built around you, not a template"
//         subtitle="Full planning, partial planning, or design-only — Cadora scales to how much of the process you want to hold."
//         image="/media/gallery/bride-card.jpg"
//       />

//       <section className="mx-auto max-w-5xl px-6 py-24">
//         <div className="grid gap-12 sm:grid-cols-2">
//           <div>
//             <p className="eyebrow text-gold-soft">The approach</p>
//             <h2 className="mt-4 font-display text-3xl italic text-ivory">Considered, not conventional</h2>
//           </div>
//           <p className="text-sm leading-relaxed text-ivory/70">
//             We start from the two of you — how you host, what you collect, what music plays in your kitchen — and
//             build outward. The result rarely looks like a "wedding style." It looks like a very good party that two
//             people happen to be getting married at.
//           </p>
//         </div>

//         <div className="mt-16 grid gap-px overflow-hidden border border-ink-line bg-ink-line sm:grid-cols-4">
//           {steps.map((s) => (
//             <div key={s.n} className="bg-ink p-6">
//               <span className="font-display text-2xl italic text-gold-soft">{s.n}</span>
//               <h3 className="mt-3 text-sm font-bold tracking-wide text-ivory">{s.title}</h3>
//               <p className="mt-2 text-xs leading-relaxed text-ivory/60">{s.copy}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       <section className="grid gap-1 sm:grid-cols-2">
//         <img src="/media/gallery/bride-card.jpg" alt="A place card reading The Bride at a wedding reception table" className="h-[420px] w-full object-cover" />
//         <img src="/media/gallery/gold-hall.jpg" alt="A wedding reception hall with gold chairs and floral centrepieces" className="h-[420px] w-full object-cover" />
//       </section>

//       <section className="mx-auto max-w-3xl px-6 py-24 text-center">
//         <p className="eyebrow text-gold-soft">Ready when you are</p>
//         <h2 className="mt-4 font-display text-3xl italic text-ivory sm:text-4xl">Let's talk about your date</h2>
//         <p className="mt-4 text-sm text-ivory/65">
//           Tell us your date, your guest count, and the feeling you're after — we'll take it from there.
//         </p>
//         <Link
//           to="/cadora/enquire"
//           className="mt-8 inline-block border border-gold bg-gold px-8 py-3 eyebrow text-[0.65rem] text-ink transition-colors hover:bg-transparent hover:text-gold"
//         >
//           Enquire about your wedding
//         </Link>
//       </section>
//       <Footer />
//     </div>
//   )
// }


import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Menu, X } from "lucide-react";

const images = {
  hero: "https://thetailorsphotography.com/wp-content/uploads/2023/12/Wedding_at_Villa_del_Balbianello-Header.jpg",
  global:
    "https://images.squarespace-cdn.com/content/v1/5e30896acfacce16509bef78/1588867413715-SV1KRTP1965VDTYPJQKV/Eventi%2BGaia%2BWedding%2BPlanner%2BTuscany%2BItaly%2B%7C%2BVilla%2BCora%2BWeddings%2B%7C%2BDestination%2BWedding%2BEvent%2BPlanner%2B%2B%2817%29.jpg",
  service:
    "https://cdn0.hitched.co.uk/vendor/7819/3_2/1280/jpg/ak45_4_337819-174695992526890.jpeg",
  design:
    "https://images.squarespace-cdn.com/content/v1/5e30896acfacce16509bef78/1588867413715-SV1KRTP1965VDTYPJQKV/Eventi%2BGaia%2BWedding%2BPlanner%2BTuscany%2BItaly%2B%7C%2BVilla%2BCora%2BWeddings%2B%7C%2BDestination%2BWedding%2BEvent%2BPlanner%2B%2B%2817%29.jpg",
  orchestration:
    "https://media.cntraveler.com/photos/69cd49e241287b6e8ef68f72/master/w_1600%2Cc_limit/HighlightT%2BJ_231.jpg",
  paris:
    "https://i0.wp.com/www.theparisphotographer.com/wp-content/uploads/2021/02/Symbolic-wedding-ceremony-in-Paris-conducted-by-a-celebrant-or-officiant.jpg?quality=100&resize=1000%2C668&ssl=1",
  tuscany:
    "https://cdn.wezoree.com/iblock/f3d/48e7s7u3zph1alyeo9irbcag3mr941fi.jpg",
};

const experiences = [
  {
    number: "01",
    title: "Global Excellence",
    subtitle: "A world of possibilities. A celebration of you.",
    image: images.global,
    reverse: false,
    paragraphs: [
      "For more than twenty years, we have worked with couples and families from around the world, shaping weddings that reflect a rich variety of cultures, traditions and ways of celebrating. This experience has given us an instinctive understanding of the nuances that make every wedding personal and every client’s needs distinct.",
      "Our clients are international, discerning and diverse, and so are the weddings we create for them. Your wedding is shaped around who you are, not a signature in house style or formula; every choice reflects your world, your traditions and your vision.",
      "Working with us feels considered, intuitive and unmistakably personal.",
    ],
  },
  {
    number: "02",
    title: "Unparalleled Service",
    subtitle: "Thoughtful service. Exceptional attention.",
    image: images.service,
    reverse: true,
    paragraphs: [
      "Service sits at the heart of everything we do; it is in our DNA, informing every detail and every interaction. From the moment we begin working together, our focus is on creating an experience that feels instinctive, attentive and beyond expectation.",
      "We lead with clarity and authority, guiding exceptional partners with the same care and consideration we bring to every decision. Much of our work happens quietly, before it is ever seen, anticipating needs, refining details and ensuring the wedding unfolds with a natural, effortless rhythm rooted in quiet luxury.",
      "For you, this means space to be present. For your guests, it means feeling welcomed, looked after and subtly delighted at each moment.",
      "This is a service not defined by visibility but by the assurance it creates: seamless, intuitive and ahead of every need.",
    ],
  },
  {
    number: "03",
    title: "Innovative Design",
    subtitle: "Every detail tells a story.",
    image: images.design,
    reverse: false,
    paragraphs: [
      "We approach design with curiosity, intention and an editorial eye. Every wedding begins with a blank page, no template, no signature style, no repetition. We take our cues from you: your story, what matters to you and the way you want your celebration to look and feel.",
      "From there, we shape an environment that is immersive, expressive and entirely personal. Our design process is collaborative and evolving, guided not by trends but by a dedication to craft and thoughtful innovation. We consider the subtle elements that define atmosphere, the small and nuanced touches that give a celebration its depth and resonance.",
      "The result is not simply a beautiful setting but a meaningful one, a wedding that feels distinctive, enduring and unmistakably yours.",
    ],
  },
  {
    number: "04",
    title: "Invisible Orchestration",
    subtitle: "Everything considered. Nothing overlooked.",
    image: images.orchestration,
    reverse: true,
    paragraphs: [
      "Our work is most powerful when it is least visible. Behind every moment lies a disciplined structure of planning, coordination and oversight, managed quietly, confidently and with an acute attention to detail.",
      "We assemble and guide a team of exceptional partners chosen specifically for you, ensuring each understands the tone and expectations of your celebration. Challenges are anticipated before they surface; when the unexpected does arise, it is handled discreetly and without interrupting the experience.",
      "What you see is a celebration unfolding with natural ease. What you feel is the assurance of being able to enjoy every moment without distraction.",
      "This is orchestration at its most exceptional: seamless, unobtrusive and expertly held.",
    ],
  },
];

const destinations = [
  {
    name: "Lake Como",
    country: "Italy",
    image: images.hero,
  },
  {
    name: "The Tuscan Countryside",
    country: "Italy",
    image: images.tuscany,
  },
  {
    name: "Paris",
    country: "France",
    image: images.paris,
  },
];

const reveal = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.85,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function Weddings() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Our Approach", href: "#approach" },
    { label: "Our Experience", href: "#experience" },
    { label: "Destinations", href: "#destinations" },
  ];

  return (
    <main className="overflow-hidden bg-[#f8f7f3] font-sans">

      {/* HERO & NAVIGATION */}
      <section className="relative flex min-h-[760px] h-screen max-h-[1050px] items-end overflow-hidden bg-[#34372e]">

        <img
          src={images.hero}
          alt="Luxury destination wedding at Lake Como"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/35" />

        <header className="absolute inset-x-0 top-0 z-50">
          <div className="flex h-24 items-center justify-between border-b border-white/25 px-6 text-white md:px-14 lg:px-20">

            <a href="/" className="font-serif text-2xl tracking-[0.15em]">
              CADAORA
              <span className="block text-center font-sans text-[8px] tracking-[0.55em]">
                EVENTS
              </span>
            </a>

            <nav className="hidden items-center gap-10 md:flex">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[10px] uppercase tracking-[0.2em] transition-opacity hover:opacity-60"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="/contact"
                className="border border-white/70 px-6 py-3 text-[10px] uppercase tracking-[0.2em] transition-colors hover:bg-white hover:text-black"
              >
                Enquire
              </a>
            </nav>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={25} /> : <Menu size={25} />}
            </button>
          </div>

          {menuOpen && (
            <nav className="absolute inset-x-0 top-24 flex flex-col gap-7 bg-[#292b25] px-8 py-10 text-white md:hidden">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-xs uppercase tracking-[0.2em]"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/contact"
                className="text-xs uppercase tracking-[0.2em]"
              >
                Enquire
              </a>
            </nav>
          )}
        </header>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={reveal}
          className="relative z-10 mx-auto w-full max-w-[1500px] px-7 pb-28 text-center text-white md:px-16 md:pb-36"
        >
          <p className="mb-7 text-[10px] uppercase tracking-[0.4em] md:text-xs">
            Cadaora Events · Weddings
          </p>

          <h1 className="mx-auto max-w-5xl font-serif text-5xl font-light leading-[1.12] md:text-7xl lg:text-[100px]">
            Celebrations
            <br />
            Beyond the Expected
          </h1>

          <p className="mx-auto mt-8 max-w-xl text-sm font-light leading-7 text-white/90 md:text-base">
            Extraordinary weddings, thoughtfully imagined and beautifully
            brought to life. Each celebration is a reflection of you.
          </p>

          <a
            href="#approach"
            className="mt-12 inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.25em]"
          >
            Discover our approach
            <ArrowDown size={15} />
          </a>
        </motion.div>
      </section>

      {/* INTRODUCTION */}
      <section
        id="approach"
        className="bg-[#f8f7f3] px-6 py-28 md:px-16 md:py-40"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={reveal}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-8 text-[10px] uppercase tracking-[0.35em] text-[#858675]">
            The Cadaora Experience
          </p>

          <h2 className="font-serif text-4xl font-light leading-tight text-[#303129] md:text-6xl">
            Your story.
            <br />
            Your world. Your celebration.
          </h2>

          <p className="mx-auto mt-9 max-w-2xl text-sm leading-8 text-[#74746c] md:text-base md:leading-9">
            We create exceptional weddings shaped by individuality,
            imagination and an understanding of what makes a celebration
            truly meaningful. From the first conversation to the final
            farewell, every detail is considered, every experience
            intentional.
          </p>
        </motion.div>
      </section>

      {/* FOUR EXPERIENCE SECTIONS */}
      <section id="experience" className="bg-[#f8f7f3]">
        <div className="mx-auto max-w-[1500px] px-6 md:px-16">

          <div className="mb-20 text-center">
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#858675]">
              What defines us
            </p>

            <h2 className="mt-5 font-serif text-4xl font-light text-[#303129] md:text-6xl">
              An Exceptional Experience
            </h2>
          </div>

          <div className="space-y-28 pb-32 md:space-y-40">

            {experiences.map((item) => (
              <motion.article
                key={item.number}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                variants={reveal}
                className={`grid items-center gap-12 md:grid-cols-2 md:gap-20 ${
                  item.reverse
                    ? "md:[&>*:first-child]:order-2"
                    : ""
                }`}
              >
                <div className="relative">
                  <div className="aspect-[4/5] overflow-hidden md:aspect-[4/5]">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-1000 hover:scale-[1.04]"
                    />
                  </div>

                  <span className="absolute -bottom-6 -right-2 font-serif text-7xl text-[#deddd4] md:-right-8 md:text-8xl">
                    {item.number}
                  </span>
                </div>

                <div className="py-6 md:px-8">
                  <p className="mb-7 text-[10px] uppercase tracking-[0.3em] text-[#858675]">
                    The Cadaora Difference · {item.number}
                  </p>

                  <h3 className="font-serif text-4xl font-light leading-tight text-[#303129] md:text-5xl lg:text-6xl">
                    {item.title}
                  </h3>

                  <p className="mt-5 font-serif text-lg italic text-[#858675]">
                    {item.subtitle}
                  </p>

                  <div className="mt-9 space-y-5 text-sm leading-8 text-[#74746c] md:text-[14px] md:leading-9">
                    {item.paragraphs.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.article>
            ))}

          </div>
        </div>
      </section>

      {/* DESTINATIONS */}
      <section
        id="destinations"
        className="bg-[#eeede7] px-6 py-28 md:px-16 md:py-36"
      >
        <div className="mx-auto max-w-[1500px]">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={reveal}
            className="mx-auto mb-16 max-w-3xl text-center"
          >
            <p className="text-[10px] uppercase tracking-[0.35em] text-[#858675]">
              Our Destinations
            </p>

            <h2 className="mt-6 font-serif text-4xl font-light text-[#303129] md:text-6xl">
              A world of beautiful possibilities
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-8 text-[#74746c]">
              Explore some of the settings that shape our work. From the UK
              to Europe and beyond, discover the destinations we bring to life.
            </p>
          </motion.div>

          <div className="grid gap-6 md:grid-cols-3">
            {destinations.map((place, index) => (
              <motion.a
                href="/contact"
                key={place.name}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                className="group block"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#d5d3ca]">
                  <img
                    src={place.image}
                    alt={`${place.name} destination wedding`}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30" />

                  <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-7 text-white">
                    <div>
                      <p className="mb-2 text-[9px] uppercase tracking-[0.3em]">
                        {place.country}
                      </p>

                      <h3 className="font-serif text-3xl font-light">
                        {place.name}
                      </h3>
                    </div>

                    <ArrowRight
                      size={20}
                      className="transition-transform group-hover:translate-x-2"
                    />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING ENQUIRY SECTION - NO FOOTER */}
      <section className="bg-[#292b25] px-6 py-28 text-center text-[#f8f7f3] md:px-16 md:py-36">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={reveal}
          className="mx-auto max-w-3xl"
        >
          <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
            Begin your story
          </p>

          <h2 className="mt-7 font-serif text-5xl font-light leading-tight md:text-7xl">
            Let us create something extraordinary.
          </h2>

          <a
            href="/contact"
            className="mt-10 inline-flex items-center gap-5 border border-white/50 px-9 py-5 text-[10px] uppercase tracking-[0.25em] transition-colors hover:bg-white hover:text-[#292b25]"
          >
            Begin an enquiry
            <ArrowRight size={15} />
          </a>
        </motion.div>
      </section>

    </main>
  );
}

