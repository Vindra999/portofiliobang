import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Vindra",
  lastName: "Augustiar",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Computer Science",
  avatar: "/images/projects/project-01/potoalmetunja.jpg",
  email: "nopindraaugustiar@gmail.com",
  location: "Asia/Jakarta", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["bahasa", "Indonesia"], // optional: Leave the array empty if you don't want to display languages
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
  description: `Portfolio website menunjukan kegiatan gueh ${person.role}`,
  headline: <>Selamat datang di website gueh </>,
  featured: {
    display: true,
    title: <>My project: <strong className="ml-4">Coming soon</strong></>,
    href: "",
  },
  subline: (
    <>
     My name is Vindra, I am a beginner Computer science student who still needs experience.
      <br />"Allah tidak membebani seseorang melainkan sesuai dengan kesanggupannya."(QS. Al-Baqarah 2:286)".
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
       Saya Novindra Augustiar mahasiswa informatika Universitas Jambi.
        <br /> saya berasal dari merangin, jambi, Indonesia.
        <br /> saya sangat menyukai dunia teknologi, terutama dalam bidang pemgramanan komputer, dan masih banyak lagi hal yang ingin dipelajari di dunia ini.
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
    ],
  },

  techStack: {
    display: true,
    title: "Tech Stack",
    icons: [
      {
        name: "JavaScript",
        icon: <img src="/trademark/javascript-original.svg" alt="JavaScript" style={{ width: 32, height: 32 }} />,
      },
      {
        name: "Python",
         icon: <img src="/trademark/python-original.svg" alt="Python" style={{ width: 32, height: 32 }} />,
      },

      {
        name: "CSS",
        icon: <img src="/trademark/css3-original.svg" alt="CSS" style={{ width: 32, height: 32 }} />,
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "BLOG GUWEH",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `koleksi poto informatika ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/projects/project-01/futsal.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/masjid.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/batik.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/bukber.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/project-01/billiard.jpg",
      alt: "image",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, gallery};
