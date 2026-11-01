
export const site = {
  name:"Terra Medicals",
  tagline:"Care that's carefully considered.",
  url:"https://terra-medical.vercel.app",
  description:"Terra Medicals — an original hospital website experience. Thoughtfully designed around people, clarity, and better care. An interactive concept demonstration by Bespoke Technologies.",
  disclaimer:"Concept demonstration by Bespoke Technologies. Terra Medicals is a fictional hospital. Clinicians, departments, facilities, appointments, availability, and content are illustrative. No medical services are offered here.",
  maker:"Bespoke Technologies",
  makerUrl:"https://www.bespoketech.com.ng",
};
export const images={
  hospital:"https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1800&q=83",
  hero:"https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=1800&q=82",
  doctors:"https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1400&q=82",
  nurse:"https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=1400&q=82",
  nurse2:"https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=1400&q=82",
  team:"https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1400&q=82",
  labs:"https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=1400&q=82",
  research:"https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=1400&q=82",
  eye:"https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=82",
  care:"https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1400&q=82",
  theatre:"https://images.unsplash.com/photo-1551190822-a9333d879b1f?auto=format&fit=crop&w=1400&q=82",
  heart:"https://images.unsplash.com/photo-1628595351029-c2bf17511435?auto=format&fit=crop&w=1400&q=82",
  mothers:"https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1400&q=82",
  nutrition:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?auto=format&fit=crop&w=1400&q=82",
  wellness:"https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=1400&q=82",
};
export type Specialty={slug:string;name:string;eyebrow:string;summary:string;description:string;icon:string;image:string;services:string[];idealFor:string;};
export const specialties:Specialty[]=[
 {slug:"family-medicine",name:"Family Medicine",eyebrow:"01 / EVERYDAY CARE",icon:"heart-pulse",summary:"The everyday questions, answered with care.",description:"A thoughtful first point of contact for ongoing wellbeing, preventive visits and general medical concerns.",image:images.care,services:["General consultations","Wellness assessments","Preventive guidance","Chronic care follow-up"],idealFor:"Individuals and families looking for coordinated, everyday care."},
 {slug:"cardiology",name:"Cardiology",eyebrow:"02 / HEART HEALTH",icon:"activity",summary:"Every heartbeat deserves attention.",description:"A specialist-led care pathway focused on heart health, risk awareness and continued monitoring.",image:images.heart,services:["Cardiac consultations","Heart health screening","ECG assessments","Ongoing monitoring"],idealFor:"People seeking a specialist evaluation of cardiovascular concerns."},
 {slug:"women-health",name:"Women's Health",eyebrow:"03 / WELLNESS THROUGH LIFE",icon:"flower-2",summary:"Every season of life, understood.",description:"Care designed to listen first and guide women through preventive health and important life stages.",image:images.nurse2,services:["Women's wellness visits","Preventive consultations","Reproductive health guidance","Follow-up care"],idealFor:"Women seeking thoughtful, respectful healthcare conversations."},
 {slug:"paediatrics",name:"Paediatrics",eyebrow:"04 / GROWING WELL",icon:"baby",summary:"A little reassurance goes a long way.",description:"Family-centred care for children, built around trust, clarity and gentle communication.",image:images.mothers,services:["Child wellness","Growth reviews","Child health consultations","Parent guidance"],idealFor:"Parents and caregivers looking for child-focused care."},
 {slug:"diagnostics",name:"Diagnostics & Imaging",eyebrow:"05 / CLARITY",icon:"scan",summary:"Better answers begin with understanding.",description:"An illustrative diagnostic journey designed around clear preparation guidance and comprehensible reports.",image:images.labs,services:["Laboratory testing","Basic imaging referrals","Preventive screening","Results explanation"],idealFor:"People seeking support understanding testing options."},
 {slug:"orthopaedics",name:"Orthopaedics",eyebrow:"06 / MOVEMENT",icon:"accessibility",summary:"Helping life stay in motion.",description:"An approach to bone, joint and muscle concerns that considers mobility, comfort and everyday living.",image:images.hospital,services:["Orthopaedic consultations","Joint health assessments","Injury follow-up","Mobility guidance"],idealFor:"People with concerns about joints, mobility or injury recovery."},
];
export type Doctor={slug:string;name:string;title:string;specialty:string;credential:string;bio:string;photo:string;focus:string[];days:string;experience:string;};
export const doctors:Doctor[]=[
 {slug:"amara-obi",name:"Dr. Amara Obi",title:"Consultant Family Physician",specialty:"Family Medicine",credential:"MBBS · FWACP (fictional)",bio:"An example profile centred on thoughtful listening, preventive care and long-term relationships with families.",photo:images.doctors,focus:["Preventive medicine","Coordinated care","Wellness consultations"],days:"Mon · Wed · Fri",experience:"Profile for demonstration"},
 {slug:"tobi-adebayo",name:"Dr. Tobi Adebayo",title:"Consultant Cardiologist",specialty:"Cardiology",credential:"MBBS · FMCP (fictional)",bio:"An illustrative specialist profile emphasizing accessible explanations and considered heart-health conversations.",photo:images.nurse,focus:["Cardiovascular assessment","Risk prevention","Follow-up care"],days:"Tue · Thu",experience:"Profile for demonstration"},
 {slug:"zara-bello",name:"Dr. Zara Bello",title:"Women's Health Specialist",specialty:"Women's Health",credential:"MBBS · FWACS (fictional)",bio:"A fictional clinician profile representing dignified care through life's transitions and important decisions.",photo:images.nurse2,focus:["Women's wellness","Preventive screening","Consultation"],days:"Mon · Thu · Sat",experience:"Profile for demonstration"},
 {slug:"chike-okafor",name:"Dr. Chike Okafor",title:"Consultant Paediatrician",specialty:"Paediatrics",credential:"MBBS · FWACP (fictional)",bio:"An illustrative child-health clinician with a focus on building confidence and understanding for caregivers.",photo:images.nurse,focus:["Child wellness","Growth guidance","Family support"],days:"Tue · Wed · Fri",experience:"Profile for demonstration"},
];
export type Test={name:string;type:string;detail:string;preparation:string;duration:string;};
export const tests:Test[]=[
 {name:"Full Blood Count",type:"Laboratory",detail:"A common blood test used as part of many health evaluations.",preparation:"Ask your clinician whether preparation is needed.",duration:"Sample collection"},
 {name:"Lipid Profile",type:"Laboratory",detail:"A collection of measurements related to cholesterol and heart health.",preparation:"Follow the specific fasting instructions provided by a clinician.",duration:"Sample collection"},
 {name:"Blood Glucose",type:"Laboratory",detail:"A test used to measure the level of glucose in the blood.",preparation:"Preparation depends on the test ordered.",duration:"Sample collection"},
 {name:"ECG",type:"Cardiac",detail:"A recording of the heart's electrical activity.",preparation:"Wear comfortable clothing and follow staff instructions.",duration:"Brief assessment"},
 {name:"Ultrasound Scan",type:"Imaging",detail:"Uses sound waves to create images of structures inside the body.",preparation:"Preparation depends on the area being examined.",duration:"By examination"},
 {name:"Urinalysis",type:"Laboratory",detail:"An evaluation of a urine sample for several health indicators.",preparation:"Follow the collection guidance given by your clinician.",duration:"Sample collection"},
 {name:"Blood Pressure Check",type:"Wellness",detail:"A simple measurement frequently used in general health assessments.",preparation:"Follow the measurement guidance given by your clinician.",duration:"Brief assessment"},
];
export type Article={slug:string;eyebrow:string;title:string;summary:string;image:string;readTime:string;paras:string[];};
export const articles:Article[]=[
 {slug:"the-value-of-listening",eyebrow:"THE HUMAN SIDE OF CARE",title:"Good care begins with being heard.",summary:"Why clarity and listening should be part of every patient's experience.",image:images.care,readTime:"4 MIN READ",paras:["For many people, the hardest part of visiting a hospital is not knowing what to expect. Good communication begins by making room for questions, worries and the details that matter to each individual.","A considered care journey puts listening before assumptions. It explains the purpose of each next step and encourages people to participate in decisions about their wellbeing.","This editorial illustration is not medical advice. Its purpose is to show how a hospital can communicate humanity and clarity."]},
 {slug:"making-sense-of-screening",eyebrow:"PREVENTIVE WELLNESS",title:"Making sense of preventive screening.",summary:"An accessible introduction to having informed conversations about routine checks.",image:images.research,readTime:"5 MIN READ",paras:["Screening is not a one-size-fits-all checklist. Whether a test is appropriate depends on age, risk factors, symptoms and clinical guidance.","A good appointment explains what a test is for, what preparation may involve, and how follow-up decisions are made. That clarity reduces unnecessary confusion.","This sample article is general educational content for a fictional hospital website, not a personal screening recommendation."]},
 {slug:"a-better-patient-journey",eyebrow:"THE TERRA PERSPECTIVE",title:"What a calmer patient journey could feel like.",summary:"From finding information to knowing what comes next, small design decisions make a difference.",image:images.hospital,readTime:"3 MIN READ",paras:["A hospital website should answer useful questions before someone needs to ask them: where to go, what to bring, who they might see and how to prepare.","Clear navigation, thoughtful language and transparent steps are not decorations. They are part of making services easier to understand and access.","This is a service-design perspective presented as part of a demonstration concept."]},
];
export const demoAppointments=[
 {id:"TM-1024",person:"Demo Patient A",service:"Family Medicine",doctor:"Dr. Amara Obi",date:"2026-11-06",time:"09:30",status:"Confirmed"},
 {id:"TM-1025",person:"Demo Patient B",service:"Cardiology",doctor:"Dr. Tobi Adebayo",date:"2026-11-07",time:"11:00",status:"Pending"},
 {id:"TM-1026",person:"Demo Patient C",service:"Women's Health",doctor:"Dr. Zara Bello",date:"2026-11-09",time:"14:00",status:"Confirmed"},
 {id:"TM-1027",person:"Demo Patient D",service:"Paediatrics",doctor:"Dr. Chike Okafor",date:"2026-11-10",time:"10:15",status:"Pending"},
];
export const nav=[{label:"About",href:"/about"},{label:"Specialties",href:"/specialties"},{label:"Our doctors",href:"/doctors"},{label:"Diagnostics",href:"/diagnostics"},{label:"Patient guide",href:"/patient-guide"},{label:"Journal",href:"/insights"}];
