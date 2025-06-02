import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Vindra",
  lastName: "August",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Developer",
  avatar: "https://i.imgur.com/AkVSsCA.jpeg",
  email: "nopindraaugustiar@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["Arabic", "Bahasa"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
     bismillah and alhamdulillah
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Vindra999",
  },
  {
    name: "Instagram",
    icon: "instagram",
    link: "https://www.instagram.com/vvindraa_",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/novindraaugustiarrr",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Welcome to my Website</>,
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Once UI</strong></>,
    href: "/work/building-once-ui-a-customizable-design-system",
  },
  subline: (
    <>
      I'm Vindra, a design engineer, where I craft intuitive
      <br /> user experiences. After hours, I build my own projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
       Saya Novindra Augustiar mahasiswa informatika Universitas Jambi
      </>
    ),
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "University jambi",
        description: <>studied computer science.</>,
      },
      {
        name: "MAN 1 BUNGO",
        description: <>studied alquran .</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "hobi",
    skills: [
      {
        title: "Futsal",
        description: <>Able to prototype in Figma with Once UI with unnatural speed.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "https://i.imgur.com/XzljWPd.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "https://i.imgur.com/uF0chpH.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Python",
        description: <>building program ai.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "https://i.imgur.com/xiqbSpi.jpeg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "Mengerjakan dan melakukan sesuatu yang bermanfaat",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "https://i.imgur.com/o3coNom.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "https://i.imgur.com/OugMlWM.jpeg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, gallery };
