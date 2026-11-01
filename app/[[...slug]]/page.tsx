
import type {Metadata} from "next";
import {notFound} from "next/navigation";
import {site,specialties,doctors,articles} from "@/lib/data";
import {Home,About,Specialties,SpecialtyDetail,Doctors,DoctorDetail,Diagnostics,PatientGuide,Insights,ArticleDetail,Contact} from "@/components/pages";
import {Booking,Admin} from "@/components/interactive";
export const dynamicParams=false;
const routes=["","about","specialties","doctors","diagnostics","patient-guide","insights","contact","book","admin",...specialties.map(x=>"specialties/"+x.slug),...doctors.map(x=>"doctors/"+x.slug),...articles.map(x=>"insights/"+x.slug)];
export function generateStaticParams(){return routes.map(x=>({slug:x?x.split("/"):[]}));}
export async function generateMetadata({params}:{params:Promise<{slug?:string[]}>}):Promise<Metadata>{
 const p=(await params).slug?.join("/")||"";
 const item=specialties.find(x=>p==="specialties/"+x.slug)||doctors.find(x=>p==="doctors/"+x.slug)||articles.find(x=>p==="insights/"+x.slug);
 const named:Record<string,string>={"":"Care that's carefully considered.","about":"About Terra","specialties":"Our specialties","doctors":"Our doctors","diagnostics":"Diagnostics","patient-guide":"Patient information","insights":"The Terra journal","contact":"Contact","book":"Explore booking","admin":"Staff demo dashboard"};
 const title=item?("name" in item?item.name:item.title):named[p]||"Page not found";
 const description=item?("summary" in item?item.summary:"bio" in item?item.bio:item.description):site.description;
 const canonical=site.url+(p?"/"+p:""),image=site.url+"/opengraph-image";
 return {title,description,alternates:{canonical},openGraph:{siteName:site.name,title:title+" | Terra Medicals",description,url:canonical,type:"website",images:[{url:image,width:1200,height:630,alt:"Terra Medicals — Care that's carefully considered.",type:"image/png"}]},twitter:{card:"summary_large_image",title:title+" | Terra Medicals",description,images:[image]}};
}
export default async function Page({params}:{params:Promise<{slug?:string[]}>}){
 const p=(await params).slug?.join("/")||"";
 if(!p)return <Home/>;
 if(p==="about")return <About/>;
 if(p==="specialties")return <Specialties/>;
 if(p==="doctors")return <Doctors/>;
 if(p==="diagnostics")return <Diagnostics/>;
 if(p==="patient-guide")return <PatientGuide/>;
 if(p==="insights")return <Insights/>;
 if(p==="contact")return <Contact/>;
 if(p==="book")return <Booking/>;
 if(p==="admin")return <Admin/>;
 if(p.startsWith("specialties/")){const slug=p.slice(12);if(!specialties.some(x=>x.slug===slug))notFound();return <SpecialtyDetail slug={slug}/>;}
 if(p.startsWith("doctors/")){const slug=p.slice(8);if(!doctors.some(x=>x.slug===slug))notFound();return <DoctorDetail slug={slug}/>;}
 if(p.startsWith("insights/")){const slug=p.slice(9);if(!articles.some(x=>x.slug===slug))notFound();return <ArticleDetail slug={slug}/>;}
 notFound();
}
