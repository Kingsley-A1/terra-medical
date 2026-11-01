
import {ImageResponse} from "next/og";
export const alt="Terra Medicals — Care that's carefully considered.";
export const size={width:1200,height:630};
export const contentType="image/png";
export default function Image(){return new ImageResponse(<div style={{width:"100%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"space-between",background:"#e6f0eb",color:"#113e34",padding:"65px 70px",position:"relative",overflow:"hidden"}}>
 <div style={{width:660,height:660,position:"absolute",top:-90,right:-155,borderRadius:"50%",border:"3px solid #9ac6b344",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{width:460,height:460,borderRadius:"50%",border:"3px solid #9ac6b355",display:"flex",alignItems:"center",justifyContent:"center"}}><div style={{width:270,height:270,borderRadius:"50%",border:"3px solid #8db7a477"}}/></div></div>
 <div style={{display:"flex",alignItems:"center",gap:17,fontSize:28,fontWeight:700}}><span style={{background:"#164c3e",color:"#d7f297",width:48,height:48,display:"flex",alignItems:"center",justifyContent:"center",borderRadius:10}}>+</span><span>terra<span style={{color:"#7fae68"}}>.</span></span><span style={{fontSize:13,letterSpacing:4,color:"#47665b",marginLeft:8}}>MEDICALS</span></div>
 <div style={{display:"flex",flexDirection:"column",gap:18,zIndex:1}}><span style={{fontSize:17,letterSpacing:4,color:"#397465"}}>HEALTHCARE, CONSIDERED.</span><div style={{fontSize:78,lineHeight:1.04,letterSpacing:-4,fontWeight:600,display:"flex",flexDirection:"column"}}><span>Exceptional medicine.</span><span>Deeply human care.</span></div></div>
 <div style={{fontSize:15,color:"#658277",letterSpacing:2}}>AN INTERACTIVE CONCEPT BY BESPOKE TECHNOLOGIES</div>
 </div>,size)}
