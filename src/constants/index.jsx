import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Inicio", href: "#inicio" }, // Agregar #
  { label: "Servicios", href: "#servicios" }, // Ya está correcto
  { label: "Como trabajamos", href: "#como-trabajamos" }, // Agregar #
  { label: "Contacto", href: "#contacto" }, // Ya está correcto
  { label: "Sobre mi", href: "#sobre-mi" }, // Agregar #
];

export const testimonials = [
  {
    user: "John Doe",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Michael Wilson",
    company: "Visionary Creations",
    image: user5,
    text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Cobro de seguros",
    description:
      "Cuando las aseguradoras no cumplen con lo pactado, nosotros nos encargamos de gestionar y reclamar el cobro de tu seguro, ya sea por daños materiales, accidentes o cualquier otra cobertura. Te acompañamos en el proceso para que obtengas lo que te corresponde de manera rápida y efectiva.",
  },
  {
    icon: <Fingerprint />,
    text: "Accidente de automóvil",
    description:
      "Si sufriste un accidente de tránsito, te asesoramos para que puedas reclamar una indemnización justa por daños físicos, materiales o psicológicos. Nos ocupamos de todo el proceso legal para que puedas enfocarte en tu recuperación.",
  },
  {
    icon: <ShieldHalf />,
    text: "Jubilaciones",
    description:
      "Te ayudamos a gestionar y reclamar tu jubilación, asegurándonos de que recibas todos los beneficios a los que tienes derecho. Si hay demoras o inconvenientes, nosotros nos encargamos de resolverlos de manera eficiente.",
  },
  {
    icon: <BatteryCharging />,
    text: "Accidentes de trabajo",
    description:
      "Si sufriste un accidente laboral, te asesoramos para que puedas reclamar una indemnización por lesiones o incapacidades. Nos ocupamos de todo el proceso legal para garantizar que tus derechos como trabajador sean respetados.",
  },
  {
    icon: <PlugZap />,
    text: "Divorcios",
    description:
      "Cuando la relación amorosa no funcionó, nosotros nos encargamos de resolver el vínculo legal establecido de la forma más sencilla posible, siempre con empatía y contención desde el lado jurídico, entendiendo que no son momentos sencillos para la persona que lo está transitando.",
  },
  {
    icon: <GlobeLock />,
    text: "Cuota alimentaria",
    description:
      "Te ayudamos a gestionar y reclamar la cuota alimentaria para tus hijos, asegurándonos de que se respeten los montos y plazos establecidos. Nos ocupamos de todo el proceso legal para garantizar el bienestar de los menores.",
  },
  {
    icon: <GlobeLock />,
    text: "Violencia familiar",
    description:
      "Si estás atravesando una situación de violencia familiar, te brindamos asesoramiento legal y acompañamiento para que puedas protegerte y proteger a tus seres queridos. Nos ocupamos de obtener las medidas de protección necesarias.",
  },
  {
    icon: <GlobeLock />,
    text: "Régimen de comunicación",
    description:
      "Te ayudamos a establecer o modificar el régimen de comunicación con tus hijos, asegurándonos de que se respeten tus derechos y los de los menores. Buscamos soluciones que prioricen el bienestar familiar.",
  },
  {
    icon: <GlobeLock />,
    text: "Compra de inmuebles",
    description:
      "Te asesoramos en todo el proceso de compra de un inmueble, desde la revisión de contratos hasta la escrituración, para garantizar que la transacción sea segura y transparente. Nos ocupamos de que tus intereses estén protegidos en cada etapa.",
  },
];

export const checklistItems = [
  {
    title: "1 - PRIMER CONTACTO",
    description:
      "Contactáme por mensaje privado de Instagram o Whatsapp. Dialogamos un poco y te pido información para comprender tu situación. Así, puedo comentarte si tu caso necesita una consulta.",
  },
  {
    title: "2 - CONSULTAS Y ENTREVISTAS",
    description:
      "Te pido tus horarios para ver en qué momento podemos coincidir y realizar una entrevista virtual para conocer tu caso. Trabajo con entrevistas virtuales para ser más eficiente y tener una cantidad de horarios disponibles más amplia. Excepto que sea un caso de despido laboral o ART, la consulta es arancelada.",
  },
  {
    title: "3 - PRESUPUESTOS",
    description:
      "Por último, te envío un presupuesto por escrito detallando honorarios, gastos y posibilidades de pagos. Si nos das el OK, comenzamos con tu carpeta. Te acompañamos durante todo el proceso y te avisamos de cada novedad con términos claros y simples.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
