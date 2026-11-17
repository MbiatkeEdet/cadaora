// import { Link } from "react-router-dom";
// import { ArrowUpRight } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="bg-[#201f1b] px-6 py-12 text-[#f5f0e8] md:px-12 lg:px-16">
//       <div className="mx-auto grid max-w-[1240px] gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_.7fr_.9fr]">
//         <div>
//           <Link to="/" className="inline-flex items-center">
//             <img
//               src="/media/gallery/cadora1-logo.jpg"
//               alt="Cadaora Events"
//               className="h-12 w-auto object-contain"
//             />
//           </Link>

//           <p className="mt-5 max-w-xs text-xs leading-6 text-white/45">
//             Where the occasion meets its setting. Thoughtful planning,
//             considered design and celebrations made to be remembered.
//           </p>
//         </div>
//         <div>
//           <p className="text-[9px] uppercase tracking-[.2em] text-[#c5aa87]">
//             Explore
//           </p>
//           <div className="mt-5 flex flex-col gap-3 text-xs text-white/60">
//             <Link to="/about" className="hover:text-white">
//               About Cadaora
//             </Link>
//             <Link to="/services" className="hover:text-white">
//               Our services
//             </Link>
//             <Link to="/our-work" className="hover:text-white">
//               Selected work
//             </Link>
//             <Link to="/contact" className="hover:text-white">
//               Contact
//             </Link>
//           </div>
//         </div>
//         <div>
//           <p className="text-[9px] uppercase tracking-[.2em] text-[#c5aa87]">
//             Start a conversation
//           </p>
//           <a
//             href="mailto:hello@cadaoraevents.com"
//             className="mt-5 inline-flex items-center gap-2 font-display text-2xl hover:text-[#c5aa87]"
//           >
//             Get in touch <ArrowUpRight size={15} />
//           </a>
//           <p className="mt-3 text-xs text-white/40">
//             Replace this placeholder with the official business email.
//           </p>
//           {/* <div className="mt-5 flex gap-4 text-white/55"><a href="#" aria-label="Instagram"><Instagram size={16}/></a><a href="#" aria-label="Facebook"><Facebook size={16}/></a></div> */}
//         </div>
//       </div>
//       <div className="mx-auto flex max-w-[1240px] flex-col justify-between gap-3 pt-6 text-[9px] text-white/30 sm:flex-row">
//         <span>
//           © {new Date().getFullYear()} Cadaora Events. All rights reserved.
//         </span>
//         <span>Designed with intention.</span>
//       </div>
//     </footer>
//   );
// }



import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#201f1b] px-6 py-12 text-[#f5f0e8] md:px-12 lg:px-16">
      <div className="mx-auto grid max-w-[1240px] gap-12 border-b border-white/10 pb-10 md:grid-cols-[1.3fr_.8fr_.9fr_.9fr]">

        {/* Brand */}
        <div>
          <Link to="/cadora" className="inline-flex items-center">
            <img
              src="/media/gallery/cadora1-logo.jpg"
              alt="Cadaora Events"
              className="h-12 w-auto object-contain"
            />
          </Link>

          <p className="mt-5 max-w-xs text-xs leading-7 text-white/45">
            Where the occasion meets its setting. Thoughtful planning,
            considered design and celebrations made to be remembered.
          </p>
        </div>

        {/* Explore */}
        <div>
          <p className="text-[9px] uppercase tracking-[.2em] text-[#c5aa87]">
            Explore
          </p>

          <div className="mt-5 flex flex-col gap-3 text-xs text-white/60">
            <Link to="/about" className="transition-colors hover:text-white">
              About
            </Link>
            <Link to="/cadora/services" className="transition-colors hover:text-white">
              Services
            </Link>
            <Link to="/cadora/approach" className="transition-colors hover:text-white">
              Our Approach
            </Link>
            <Link to="/cadora/work" className="transition-colors hover:text-white">
              Our Work
            </Link>
            <Link to="/cadora/contact" className="transition-colors hover:text-white">
              Contact
            </Link>
          </div>
        </div>

        {/* Elsewhere */}
        <div>
          <p className="text-[9px] uppercase tracking-[.2em] text-[#c5aa87]">
            Elsewhere
          </p>

          <ul className="mt-5 flex flex-col gap-3 text-xs text-white/60">
            <li>
              <Link
                to="/gypsy"
                className="transition-colors hover:text-white"
              >
                Venue Gypsy — the atlas
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="transition-colors hover:text-white"
              >
                Back to the entrance
              </Link>
            </li>
            <li>
              <Link
                to="/cadora/enquire"
                className="transition-colors hover:text-white"
              >
                Start an enquiry
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <p className="text-[9px] uppercase tracking-[.2em] text-[#c5aa87]">
            Start a conversation
          </p>

          <a
            href="mailto:hello@cadaoraevents.com"
            className="mt-5 inline-flex items-center gap-2 font-display text-2xl transition-colors hover:text-[#c5aa87]"
          >
            Get in touch <ArrowUpRight size={15} />
          </a>

          <p className="mt-3 text-xs leading-6 text-white/40">
            We would love to hear about the occasion you have in mind.
          </p>
        </div>
      </div>

      {/* Bottom section */}
      <div className="mx-auto mt-10 max-w-[1240px]">

        <div className="hairline text-white/10" />

        <div className="mt-10 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-end">

          {/* Footer Logo */}
          {/* <Link
            to="/cadora"
            aria-label="Cadaora Events home"
            className="inline-flex shrink-0 items-center rounded-sm bg-white p-2"
          >
            <img
              src="/media/gallery/cadaora-image.jpg"
              alt="Cadaora Events"
              className="w-24 object-contain invert mix-blend-multiply sm:w-32"
            />
          </Link> */}

          {/* Copyright and credits */}
          <div className="flex flex-col gap-5 text-xs text-white/35 sm:items-end">

            <div className="text-left sm:text-right">
              <a
                href="https://lemtechweb.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors duration-300 hover:text-[#c5aa87]"
              >
                Built by Lemtech Hub
              </a>

              <a
                href="tel:+2348036265605"
                className="mt-2 block transition-colors duration-300 hover:text-white"
              >
                +2348036265605
              </a>
            </div>

            <div className="text-left sm:text-right">
              <p>
                © {new Date().getFullYear()} Cadaora Events.
                All rights reserved.
              </p>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
