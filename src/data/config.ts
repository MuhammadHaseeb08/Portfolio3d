const config = {
  title: "Muhammad Haseeb | Full-Stack Developer",
  description: {
    long: "Explore the portfolio of Haseeb, a full-stack developer and creative technologist specializing in interactive web & app  experiences, 3D animations, and innovative projects. Discover my latest work, including Shoe Store, Uber Clone , Sora Clone, and more. Let's build something amazing together!",
    short:
      "Discover the portfolio of Haseeb, a full-stack developer creating interactive web & app experiences and innovative projects.",
  },
  keywords: [
    "Haseeb",
    "portfolio",
    "full-stack developer",
    "creative technologist",
    "web development",
    "3D animations",
    "interactive websites",
    "Uber Clone",
    "Shoe Store",
    "Sora Clone",
    "web design",
    "GSAP",
    "React",
    "Next.js",
    "Spline",
    "Framer Motion",
  ],
  author: "Muhammad Haseeb",
  email: "haseebshabir31@gmail.com",
  site: "https://nareshkhatri.site",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "https://x.com/nothotchaddi",
    linkedin: "https://www.linkedin.com/in/haseeb-shabbir-79a166284/",
    instagram: "https://www.instagram.com/haseebshabir31/",
    facebook: "https://www.facebook.com/profile.php?id=100010635046738",
    github: "https://github.com/MuhammadHaseeb08",
  },
};
export { config };
