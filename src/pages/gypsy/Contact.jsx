import { useState } from 'react'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { PageHero } from '../../components/Shared'

export default function Contact(){
  const [submitted,setSubmitted]=useState(false)
  const [form,setForm]=useState({name:'',email:'',phone:'',role:'',interest:'',event:'',date:'',guests:'',message:''})
  const update=e=>setForm({...form,[e.target.name]:e.target.value})
  const submit=e=>{e.preventDefault();setSubmitted(true)}
  return <main><PageHero compact eyebrow="Contact & enquiries" title={<>Where are you<br/><em>dreaming of going?</em></>} text="Tell us what kind of place you are looking for, or get in touch about a venue or destination featured on The Venue Gypsy. We would love to hear what you are hoping to discover." image="photo-1499793983690-e29da59ef1c2"/>
    <section className="container-wide grid gap-16 py-20 md:grid-cols-[.7fr_1.3fr] md:py-28"><div><p className="eyebrow text-olive">Start a conversation</p><h2 className="display-title mt-5 text-5xl">Tell us a little about what you have in mind.</h2><p className="mt-6 text-sm leading-8 text-muted">Whether you are exploring a destination, considering a particular venue or simply beginning to imagine what is possible, this is a good place to start.</p><div className="mt-12 border-t border-line pt-6"><p className="eyebrow text-muted">A note on enquiries</p><p className="mt-3 text-xs leading-6 text-muted">This form is a front-end demonstration. Connect it to an approved email address or enquiry service before publishing so submissions reach the right person.</p></div></div>
      <div>{submitted ? <div className="border border-line bg-white/50 p-10"><CheckCircle2 className="text-olive" size={30}/><h3 className="mt-5 font-serif text-3xl">Thank you for reaching out.</h3><p className="mt-3 text-sm leading-7 text-muted">Your message has been prepared in this demo. Connect a submission service to deliver enquiries to your team.</p><button onClick={()=>setSubmitted(false)} className="text-link mt-7">Send another enquiry <ArrowUpRight size={14}/></button></div> : <form onSubmit={submit} className="grid gap-x-6 gap-y-7 sm:grid-cols-2">
        <Field label="Full name" name="name" value={form.name} onChange={update} required/><Field label="Email address" name="email" type="email" value={form.email} onChange={update} required/><Field label="Telephone / WhatsApp (optional)" name="phone" value={form.phone} onChange={update}/>
        <label className="block"><span className="eyebrow text-muted">I am enquiring as</span><select name="role" value={form.role} onChange={update} className="form-control" required><option value="">Please select</option>{['Couple','Private client','Event professional','Corporate or brand','Venue or hospitality representative','Other'].map(x=><option key={x}>{x}</option>)}</select></label>
        <Field label="Venue or destination of interest" name="interest" value={form.interest} onChange={update}/><Field label="Type of event or experience" name="event" value={form.event} onChange={update}/><Field label="Proposed date or date range (optional)" name="date" value={form.date} onChange={update}/><Field label="Estimated guest count (optional)" name="guests" value={form.guests} onChange={update}/>
        <label className="block sm:col-span-2"><span className="eyebrow text-muted">Your message</span><textarea name="message" value={form.message} onChange={update} rows="5" required placeholder="Tell us what you would like to discover..." className="form-control resize-y"/></label>
        <div className="sm:col-span-2"><button className="inline-flex items-center gap-3 bg-ink px-7 py-4 text-[10px] font-semibold uppercase tracking-[.17em] text-white transition hover:bg-olive">Send enquiry <ArrowUpRight size={15}/></button></div>
      </form>}</div>
    </section>
  </main>
}
function Field({label,name,value,onChange,type='text',required=false}){return <label className="block"><span className="eyebrow text-muted">{label}</span><input name={name} value={value} onChange={onChange} type={type} required={required} className="form-control"/></label>}
