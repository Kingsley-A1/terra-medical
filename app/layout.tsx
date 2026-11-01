
import "./globals.css";
import {Header,Footer,RevealProvider} from "@/components/shell";
import {site} from "@/lib/data";
import type {Metadata,Viewport} from "next";
export const metadata:Metadata={
 metadataBase:new URL(site.url),
 title:{default:"Terra Medicals — Care that's carefully considered.",template:"%s | Terra Medicals"},
 description:site.description,
 openGraph:{type:"website",siteName:site.name,title:"Terra Medicals — Care that's carefully considered.",description:site.description,images:[{url:"/opengraph-image",width:1200,height:630,alt:"Terra Medicals hospital concept by Bespoke Technologies"}]},
 twitter:{card:"summary_large_image",title:site.name,description:site.description,images:["/opengraph-image"]},
 robots:{index:true,follow:true},
};
export const viewport:Viewport={width:"device-width",initialScale:1,themeColor:"#154d41"};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><a href="#main" className="skip-link">Skip to content</a><Header/><RevealProvider/>{children}<Footer/></body></html>}
