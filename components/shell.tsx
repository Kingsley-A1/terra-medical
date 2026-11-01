
"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {useEffect,useRef,useState} from "react";
import {ArrowUpRight,ArrowRight,Menu,X,MapPin,HeartPulse,ChevronDown,Plus,Instagram} from "lucide-react";
import {site,nav} from "@/lib/data";
export function Emblem({light=false}:{light?:boolean}){
 return <span className={"emblem "+(light?"emblem-light":"")} aria-hidden="true"><svg viewBox="0 0 44 44" fill="none"><path d="M22 4v36M4 22h36" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/><circle cx="22" cy="22" r="12" stroke="currentColor" strokeWidth="1.6"/><circle cx="22" cy="22" r="3" fill="currentColor"/><path d="M10 9c6-8 19-8 25 0M9 34c6 8 20 8 26 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg></span>;
}
export function Wordmark({light=false}:{light?:boolean}){
 return <Link href="/" aria-label="Terra Medicals home" className={"wordmark "+(light?"wordmark-light":"")}><Emblem light={light}/><span><strong>terra<span>.</span></strong><small>MEDICALS</small></span></Link>;
}
export function Header(){
 const path=usePathname(),[open,setOpen]=useState(false),[scrolled,setScrolled]=useState(false),trigger=useRef<HTMLButtonElement>(null);
 useEffect(()=>{setOpen(false)},[path]);
 useEffect(()=>{const fn=()=>setScrolled(window.scrollY>24);fn();window.addEventListener("scroll",fn,{passive:true});return()=>window.removeEventListener("scroll",fn)},[]);
 useEffect(()=>{document.body.classList.toggle("menu-lock",open);return()=>document.body.classList.remove("menu-lock")},[open]);
 useEffect(()=>{if(!open)return;const onKey=(e:KeyboardEvent)=>{if(e.key==="Escape"){setOpen(false);trigger.current?.focus()}};document.addEventListener("keydown",onKey);return()=>document.removeEventListener("keydown",onKey)},[open]);
 if(path==="/admin")return null;
 return <header className={"site-header "+(scrolled?"is-scrolled":"")}>
 <div className="wide header-row"><Wordmark/><nav className="desktop-nav" aria-label="Primary navigation">{nav.map(n=><Link key={n.href} className={path===n.href?"current":""} href={n.href}>{n.label}</Link>)}</nav>
 <Link href="/book" className="header-book"><span>Book a visit</span><span className="header-book-icon"><ArrowUpRight size={17}/></span></Link>
 <button ref={trigger} className="menu-button" type="button" aria-controls="mobile-menu" aria-expanded={open} aria-label={open?"Close navigation":"Open navigation"} onClick={()=>setOpen(v=>!v)}>{open?<X size={26}/>:<Menu size={26}/>}</button></div>
 <div id="mobile-menu" className={"mobile-menu "+(open?"open":"")} aria-hidden={!open}><nav aria-label="Mobile navigation">{nav.map((n,i)=><Link tabIndex={open?0:-1} href={n.href} key={n.href}><span>0{i+1}</span>{n.label}<ArrowUpRight size={19}/></Link>)}<Link tabIndex={open?0:-1} href="/book"><span>07</span>Book a visit<ArrowUpRight size={19}/></Link><Link tabIndex={open?0:-1} href="/admin"><span>08</span>Staff demo<ArrowUpRight size={19}/></Link></nav><p>Care that's carefully considered.</p></div>
 </header>;
}
export function Eyebrow({children,light=false}:{children:React.ReactNode,light?:boolean}){return <span className={"eyebrow "+(light?"is-light":"")}><i/> {children}</span>}
export function ActionLink({href,children,light=false}:{href:string;children:React.ReactNode;light?:boolean}){return <Link href={href} className={"action-link "+(light?"action-light":"")}>{children}<ArrowUpRight size={19}/></Link>}
export function ButtonLink({href,children,variant="dark"}:{href:string;children:React.ReactNode;variant?:"dark"|"lime"|"outline"|"white"}){return <Link href={href} className={"pill-btn pill-"+variant}><span>{children}</span><span className="pill-arrow"><ArrowUpRight size={18}/></span></Link>}
export function Photo({src,alt,cls="",eager=false}:{src:string;alt:string;cls?:string;eager?:boolean}){return <img className={cls} src={src} alt={alt} loading={eager?"eager":"lazy"} decoding="async"/>}
export function SectionHead({label,title,desc,href,link}:{label:string;title:React.ReactNode;desc?:string;href?:string;link?:string}){return <div className="section-head"><div><Eyebrow>{label}</Eyebrow><h2>{title}</h2></div><div className="section-side">{desc&&<p>{desc}</p>}{href&&<ActionLink href={href}>{link||"Explore more"}</ActionLink>}</div></div>}
export function DemoNotice({compact=false}:{compact?:boolean}){return <div className={"demo-notice "+(compact?"compact":"")}><span className="demo-dot"/> <strong>INTERACTIVE CONCEPT</strong> <span>Illustrative hospital experience. Not an operating healthcare provider.</span></div>}
export function Footer(){
 const path=usePathname();
 if(path==="/admin")return null;
 return <footer className="site-footer"><div className="wide"><div className="footer-hero"><div><Eyebrow light>YOUR NEXT STEP</Eyebrow><h2>Better care starts<br/><em>with a conversation.</em></h2></div><ButtonLink href="/book" variant="lime">Explore booking</ButtonLink></div>
 <div className="footer-rule"/><div className="footer-columns"><div><Wordmark light/><p>A thoughtfully imagined medical experience where expertise meets empathy.</p><span className="footer-bespoke">A concept by <a href={site.makerUrl} target="_blank" rel="noopener noreferrer">Bespoke Technologies ↗</a></span></div><div className="footer-nav"><div><small>EXPLORE</small>{nav.slice(0,3).map(n=><Link href={n.href} key={n.href}>{n.label}</Link>)}</div><div><small>DISCOVER</small>{nav.slice(3).map(n=><Link href={n.href} key={n.href}>{n.label}</Link>)}<Link href="/contact">Contact</Link></div><div><small>DEMO EXPERIENCE</small><Link href="/book">Appointment walkthrough</Link><Link href="/admin">Staff dashboard</Link><Link href="/patient-guide">Patient information</Link></div></div></div>
 <div className="footer-bottom"><span>© 2026 Terra Medicals — Experience concept</span><span>Designed & engineered with intention.</span></div><p className="footer-fine">{site.disclaimer} All photography is illustrative; no photographed person is identified as a Terra Medicals employee. No patient information or payment is collected by this demo.</p></div></footer>
}
export function Callout({title="Your wellbeing deserves thoughtful care.",copy="Explore a care journey that puts understanding first.",dark=false}:{title?:string;copy?:string;dark?:boolean}){return <section className={"section-cta "+(dark?"dark":"")}><div className="wide cta-inner"><Eyebrow light>THE TERRA APPROACH</Eyebrow><h2>{title}</h2><p>{copy}</p><ButtonLink href="/book" variant="lime">Book a demo visit</ButtonLink></div><div className="cta-orbit" aria-hidden="true"/></section>}
export function RevealProvider(){
 const path=usePathname();
 useEffect(()=>{
 const els=[...document.querySelectorAll<HTMLElement>("[data-reveal]")];
 if(!("IntersectionObserver" in window)){els.forEach(el=>el.classList.add("in-view"));return;}
 const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting){(e.target as HTMLElement).classList.add("in-view");observer.unobserve(e.target)}})},{threshold:0.09,rootMargin:"0px 0px -28px 0px"});
 document.documentElement.classList.add("motion-ready");els.forEach(e=>observer.observe(e));return()=>{observer.disconnect();document.documentElement.classList.remove("motion-ready")};
 },[path]);
 return null;
}
