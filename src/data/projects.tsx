import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill, } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiAppwrite,
  SiNeo4J
  
  
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  neonDb: {
    title: "Neon DB",
    bg: "black",
    fg: "white",
    icon: <SiNeo4J />,
  },
  reactNative: {
    title: "React Native",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  Appwrite: {
    title: "Appwrite",
    bg: "black",
    fg: "white",
    icon: <SiAppwrite />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "shoeStore",
    category: "E-Comerce platform",
    title: "Shoe Store",
    src: "/assets/projects-screenshots/shoeStore/banner.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.reactQuery,
        
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
       
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sockerio,
      ],
    },
    live: "https://shoe-store-front-ruddy.vercel.app/",
    github: "https://github.com/MuhammadHaseeb08/Shoe_Store_MERN.git",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center">
            Shoe Store = Amazon + Shopify
          </TypographyP>
          <TypographyP className="font-mono ">
            Shoe store is minimal blend of Shopify and Amazon. Users can easily go through the latest offers and new articles . Ready to quack the code?
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">Home Page </TypographyH3>
          <p className="font-mono mb-2">
            Gives the latest and trending articles updates of all the categories listed
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/shoeStore/halfFi.png`,
              `${BASE_PATH}/shoeStore/haflsec.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Men</TypographyH3>
          <p className="font-mono mb-2">
            You can browse through the category of men  you like to focus on priorities and things you like most :)
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/shoeStore/men.png`,
              `${BASE_PATH}/shoeStore/menDetail.png`,
              
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Women</TypographyH3>

          <p className="font-mono mb-2">
            Challenge yourself to choose one of the most hot product . I know it will be very hard so that's why we have listed number of products which have there own charm
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/shoeStore/women.png`,
              `${BASE_PATH}/shoeStore/womenDetail.png`,
              
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Cart </TypographyH3>
          <p className="font-mono mb-2">
            Organize you cart easily by deleating or paying for the items are in your cart
          </p>
          <SlideShow images={[`${BASE_PATH}/shoeStore/cart.png`]} />
          <TypographyH3 className="my-4 mt-8">Payment Gateway </TypographyH3>
          <p className="font-mono mb-2">
            Test and execute Payemnts with the help of stripe 
          </p>
          <SlideShow images={[`${BASE_PATH}/shoeStore/stripe.png`]} />
          <TypographyH3 className="my-4 mt-8">Users</TypographyH3>

          <p className="font-mono mb-2">
            Track your progress, earn badges, and climb the rankings with
            detailed user profiles and activity tracking.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/shoeStore/users.png`,
              
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "blogSite",
    category: "Blog site",
    title: "Global Blogs",
    src: "/assets/projects-screenshots/blogSite/banner.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png", "5.png"],
    live: "https://blog-site-drab-eta.vercel.app/",
    github:"https://github.com/MuhammadHaseeb08/Blog_Site_MERN.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.js,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.react,
      ],
      backend: [
        PROJECT_SKILLS.node,
        PROJECT_SKILLS.express,
       PROJECT_SKILLS.js,
        PROJECT_SKILLS.mongo,
        PROJECT_SKILLS.sockerio,
      ],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono ">
            Global Blogs is your go-to destination for reading the best articals
            without lifting a finger. Whether you&apos;re hunting for the latest
            discounts or trying to save a buck at your favorite stores,
            Global Blogs&apos;s got you covered. You can also publish your thoughts as well 
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-4">
            As soon as you land, boom! You&apos;re greeted with the freshest
            blogs and top-tier crypto updates that&apos;ll make your wallet happy.
          </p>
          <SlideShow images={[`${BASE_PATH}/blogSite/banner.png`]} />
          <TypographyH3 className="my-4 ">Crypto</TypographyH3>
          <p className="font-mono mb-2">
            Dive into a comprehensive list of crypto currencies, each packed with exclusive
            details. It&apos;s like having a VIP pass to every sale
            in town.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/blogSite/crypto.png`,
              
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Authentication</TypographyH3>

          <p className="font-mono mb-2">
            Whatever you&apos;re into—fashion, tech, food—you&apos;ll find it
            neatly organized here. No more endless scrolling; just pick a
            category and get the best blog instantly.It has seemless Authentication
          </p>
          <SlideShow images={[`${BASE_PATH}/blogSite/signUp.png`,`${BASE_PATH}/blogSite/signIn.png`]} />
          <TypographyH3 className="my-4 mt-8">What do think  </TypographyH3>
          <p className="font-mono mb-2">
            Powered by React.js, Global Blogs also take care of what do you think and your brainstorming. We will give you a platform where you can tell your tales and your experiences
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/blogSite/create.png`,
              `${BASE_PATH}/blogSite/file.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-5">
            Plus, I&apos;ve sprinkled in some extra magic like personalized
            deal recommendations, user-friendly search features, and a sleek,
            responsive design that works like a charm on any device.
          </p>
          <p className="font-mono mb-2">
            Global Blogs isn&apos;t just a website; it&apos;s your personal thought-hunting
            assistant, ensuring you never miss out on a new news!
          </p>
          {/* <TypographyP className="my-4 mt-8">
          <strong>Misc:</strong>
          Hosted not one, not two, but THREE coding contests (Codemacha) during
          college. Safe to say, Coding Ducks passed the vibe check.
        </TypographyP>
        <TypographyP className="my-4 mt-8">
          <strong>Target Audience:</strong>
          For all the novice coders out there ready to make their mark.
        </TypographyP> */}
        </div>
      );
    },
  },
  {
    id: "the-booking-desk",
    category: "Travel",
    title: "The Booking Desk",
    src: "/assets/projects-screenshots/the-booking-desk/landing.png",
    screenshots: ["1.png"],
    live: "https://thebookingdesk.com/",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.tailwind,
      ],
      backend: [PROJECT_SKILLS.sanity],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            The Booking Desk is your ultimate travel consultation hub, designed
            to turn your wanderlust dreams into reality. With a focus on smooth
            and visually captivating animations, navigating the site feels like
            a breeze—it&apos;s almost as if the destinations are calling you.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <p className="font-mono mb-2 mt-8">
            A sleek, modern interface greets you, featuring the latest travel
            tips, deals, and must-visit spots around the globe.
          </p>
          <SlideShow images={[`${BASE_PATH}/the-booking-desk/landing.png`]} />
          <TypographyH3 className="my-4 mt-8">Blogs</TypographyH3>
          <p className="font-mono mb-2">
            Dive into the curated articles written by travel experts. Whether
            you&apos;re looking for hidden gems or travel hacks, our blog section has
            you covered.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/blogs.png`,
              `${BASE_PATH}/the-booking-desk/blog.png`,
            ]}
          />
          <TypographyH3 className="my-4 mt-8">Sanity CMS</TypographyH3>

          <p className="font-mono mb-2">
            Keeping everything fresh and up-to-date, I&apos;ve integrated Sanity CMS
            to manage all the content with ease, ensuring you always get the
            latest and greatest information.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/the-booking-desk/cms-1.png`,
              `${BASE_PATH}/the-booking-desk/cms-2.png`,
            ]}
          />
          <p className="font-mono mb-2 my-8">
            With a stunning 100% score on Lighthouse, The Booking Desk isn&apos;t
            just beautiful—it&apos;s built to perform. Whether you&apos;re planning your
            next adventure or just daydreaming, our site delivers a top-notch
            experience that&apos;s both informative and enjoyable.
          </p>
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/portfolio/landing.png",
    screenshots: ["1.png"],
    live: "http://nareshkhatri.vercel.app",
    github:"https://github.com/MuhammadHaseeb08/Portfolio3d.git",
    skills: {
      frontend: [
        PROJECT_SKILLS.ts,
        PROJECT_SKILLS.next,
        PROJECT_SKILLS.shadcn,
        PROJECT_SKILLS.aceternity,
        PROJECT_SKILLS.framerMotion,
        PROJECT_SKILLS.tailwind,
        PROJECT_SKILLS.spline,
      ],
      backend: [],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Welcome to my digital playground, where creativity meets code in the
            dopest way possible.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <TypographyH3 className="my-4 mt-8">
            Beautiful 3D Objects{" "}
          </TypographyH3>
          <p className="font-mono mb-2">
            Did you see that 3D keyboard modal? Yeah! I made that. That
            interactive keyboard is being rendered in 3D on a webpage 🤯, and
            pressing each keycap reveals a skill in a goofy way. It&apos;s like
            typing, but make it art.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/landing.png`,
              `${BASE_PATH}/portfolio/skills.png`,
            ]}
          />
          <TypographyH3 className="my-4 ">Space Theme</TypographyH3>
          <p className="font-mono mb-2">
            Dark background + floating particles = out-of-this-world cool.
          </p>
          <SlideShow images={[`${BASE_PATH}/portfolio/navbar.png`]} />
          <TypographyH3 className="my-4 mt-8">Projects</TypographyH3>

          <p className="font-mono mb-2">
            My top personal and freelance projects — no filler, all killer.
          </p>
          <SlideShow
            images={[
              `${BASE_PATH}/portfolio/projects.png`,
              `${BASE_PATH}/portfolio/project.png`,
            ]}
          />
          <p className="font-mono mb-2 mt-8 text-center">
            This site&apos;s not just a portfolio — it&apos;s a whole vibe.
          </p>
        </div>
      );
    },
  },
  {
    id: "Astra",
    category: "Social Media (Mobile App)",
    title: "Astra",
    src: "/assets/projects-screenshots/aura/cover.png",
    screenshots: ["1.png", "2.png", "3.png", "4.png"],
    live: "https://drive.google.com/file/d/17XxfJzYa9K1_Ql2bRv31IX_DVXEI94Hs/view?usp=sharing",
    github:"https://github.com/MuhammadHaseeb08/Sora_Clone.git",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.reactNative, PROJECT_SKILLS.tailwind,PROJECT_SKILLS.ts],
      backend: [PROJECT_SKILLS.Appwrite],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            Astra is your go-to spot for sending AI genrated videos with thumbnails with
            leaving a trace. Powered by Appwrite, it&apos;s all about keeping things
            low-key and secure. Whether you&apos;re sharing secrets, giving feedback,
            or just having some fun, Astra ensures your identity stays
            out reached, while your voice is heard. Say what you want, without the
            worry.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/aura/cover.png`,
              `${BASE_PATH}/aura/upload.png`,
              `${BASE_PATH}/aura/login.png`,
              `${BASE_PATH}/aura/homeFir.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "ryde",
    category: "Ride Booking(Mobile App)",
    title: "Ryde",
    src: "/assets/projects-screenshots/ryde/banner.png",
    screenshots: ["1.png"],
    live: "https://github.com/MuhammadHaseeb08/Uber_Clone.git",
    github:"https://github.com/MuhammadHaseeb08/Uber_Clone.git",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.ts,PROJECT_SKILLS.reactNative,PROJECT_SKILLS.tailwind,PROJECT_SKILLS.shadcn],
      backend: [
        PROJECT_SKILLS.postgres,
        PROJECT_SKILLS.neonDb,

       
      ],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          Looking for the best ride-hailing app? Our app offers a seamless ride booking experience with features like easy onboarding, secure email/password authentication with verification, and Google oAuth login. Enjoy real-time ride tracking on a home screen powered by Google Maps, search for rides with Google Places Autocomplete, and easily pay using Stripe. Whether you're on Android or iOS, our app is fully optimized and responsive. Manage your profile, review past rides in your ride history, and get secure payments with detailed fare breakdowns. Download now and experience hassle-free ride bookings with advanced security and live location tracking.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/ryde/signUp.png`,
              `${BASE_PATH}/ryde/login.png`,
              `${BASE_PATH}/ryde/homeFir.png`,
              `${BASE_PATH}/ryde/homeSec.png`,
              `${BASE_PATH}/ryde/allRides.png`,
              `${BASE_PATH}/ryde/messages.png`,
              `${BASE_PATH}/ryde/ride.png`,
              `${BASE_PATH}/ryde/confirmRide.png`,
              `${BASE_PATH}/ryde/selectDriver.png`,
              `${BASE_PATH}/ryde/stripe.png`,






            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
