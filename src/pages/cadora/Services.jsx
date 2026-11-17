// import React from 'react'
// import PageHero from '../../components/PageHero'
// import { ArrowUpRight } from 'lucide-react'
// import { Link } from 'react-router-dom'
// import { ArtFrame, CTA, PageIntro, Reveal, SectionLabel } from '../../components/Site'
// import { services } from '../../data/content'
// export default function Services(){return <>
//  <PageIntro number="02" kicker="Our services" title="Experiences thoughtfully conceived. Carefully delivered." description="Our services are connected by one purpose: to create experiences that are thoughtfully conceived and carefully delivered. Each project is shaped around its brief, scale, destination and needs."/>
//  <section className="container-shell pb-24 md:pb-32"><ArtFrame src="/images/services-overview.jpg" alt="Event design atmosphere" className="h-[300px] md:h-[560px]" caption="Add approved Cadaora event photography"/><div className="mt-16">{services.map((s,i)=><Reveal key={s.n} className="grid gap-5 border-t border-line py-9 md:grid-cols-[100px_1fr_1fr] md:gap-10 md:py-12"><span className="eyebrow text-gold">{s.n} / SERVICE</span><h2 className="display text-3xl md:text-4xl">{s.title}</h2><div><p className="text-sm leading-7 text-muted">{s.detail}</p><Link to="/contact" className="mt-6 inline-flex items-center gap-3 text-[9px] uppercase tracking-[.16em]">Discuss your event <ArrowUpRight size={14}/></Link></div></Reveal>)}</div></section>
//  <CTA title="Have an occasion in mind? Let’s start with a conversation." copy="Share a little about the gathering you are imagining and we can explore what it might become."/>
// </>}

import React from "react";
import PageHero from "../../components/PageHero";
import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import {
  ArtFrame,
  CTA,
  PageIntro,
  Reveal,
  SectionLabel,
} from "../../components/Site";
import { services } from "../../data/content";
import Footer from "../../components/Footer";

export default function Services() {
  return (
    <>
      <PageIntro
        
        title="Experiences thoughtfully conceived. Carefully delivered."
        description="Our services are connected by one purpose: to create experiences that are thoughtfully conceived and carefully delivered. Each project is shaped around its brief, scale, destination and needs."
      />

      {/* SERVICES OVERVIEW IMAGE */}
      <section className="container-shell pb-24 md:pb-32">
        <div className="relative mb-20">
          {/* IMAGE PLACEHOLDER 01
              Suggested image: Luxury event tablescape,
              elegant floral installation or sophisticated venue.
              Replace the empty space with your image.
          */}
          <div className="h-[300px] md:h-[560px] w-full overflow-hidden bg-[#e9e5dc]">
            {/* INSERT SERVICES OVERVIEW IMAGE HERE */}
          </div>

          <p className="mt-3 text-[9px] uppercase tracking-[.18em] text-muted">
            The art of bringing occasions to life
          </p>
        </div>

        {/* INDIVIDUAL SERVICES */}
        <div className="mt-16">
          {services.map((s, i) => (
            <Reveal
              key={s.n}
              className="grid gap-5 border-t border-line py-9 md:grid-cols-[100px_1fr_1fr] md:gap-10 md:py-12"
            >
              <span className="eyebrow text-gold">{s.n} / SERVICE</span>

              <h2 className="display text-3xl md:text-4xl">{s.title}</h2>

              <div>
                <p className="text-sm leading-7 text-muted">{s.detail}</p>

                <Link
                  to="/contact"
                  className="mt-6 inline-flex items-center gap-3 text-[9px] uppercase tracking-[.16em]"
                >
                  Discuss your event
                  <ArrowUpRight size={14} />
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        {/* SERVICE GALLERY IMAGE PLACEHOLDERS */}
        <div className="mt-24 grid gap-5 md:grid-cols-2">
          {/* IMAGE PLACEHOLDER 02
              Suggested image: Luxury wedding reception.
          */}
          <div className="h-[320px] md:h-[460px] bg-[#e9e5dc] overflow-hidden">
            {/* INSERT WEDDING IMAGE HERE */}
          </div>

          {/* IMAGE PLACEHOLDER 03
              Suggested image: Elegant private celebration,
              luxury dinner or corporate event.
          */}
          <div className="h-[320px] md:h-[460px] bg-[#e9e5dc] overflow-hidden md:mt-20">
            <img
              src="/media/gallery/balloon-party.jpg"
              alt="Elegant private celebration"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <CTA
        title="Have an occasion in mind? Let’s start with a conversation."
        copy="Share a little about the gathering you are imagining and we can explore what it might become."
      />

      <Footer />
    </>
  );
}
