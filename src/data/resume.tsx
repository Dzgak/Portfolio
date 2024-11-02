import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "DzGak",
  initials: "DG",
  url: "https://dillion.io",
  location: "Germany, Frankfurt",
  locationLink: "https://www.google.com/maps/place/Frankfurt",
  description:
    "Fullstack mid-level developer, love to create and help, quite active in Discord.",
  summary:
    "I work as a freelance developer, [there are a lot of projects that I do or have done](/#projects), I don't have much education in the IT field only high school and now I'm in college studying law, [I have experience working in a team](/#work).",
  avatarUrl: "/me.webp",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Lua",
    "Postgres",
    "Docker",
    "C++",
    "C#",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "none",
    tel: "none",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Dzgak",
        icon: Icons.github,

        navbar: true,
      },
      Discord: {
        name: "Discord",
        url: "https://discord.gg/M3HS7MCxhX",
        icon: Icons.discord,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "KeyGuardian",
      href: "https://keyguardian.org",
      badges: [],
      location: "",
      title: "Key Service For Monotize Project.",
      logoUrl: "/keyguardian.png",
      start: "Sep 2024",
      end: "None Data",
      description: "Key Service For Monotize Project.",
    },
  ],
  // education: [
  //   {
  //     school: "Buildspace",
  //     href: "https://buildspace.so",
  //     degree: "s3, s4, sf1, s5",
  //     logoUrl: "/buildspace.jpg",
  //     start: "2023",
  //     end: "2024",
  //   },
  // ],
  projects: [
    {
      title: "KeyGuardian",
      href: "https://keyguardian.org",
      dates: "Sep 2024",
      active: true,
      description: "",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://keyguardian.org",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/imageKeyguardian.png",
      video: "",
    },
  ],
  // hackathons: [
  //   {
  //     title: "DeveloperWeek Hackathon",
  //     dates: "February 3rd - 4th, 2018",
  //     location: "San Francisco, California",
  //     description:
  //       "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
  //     image:
  //       "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
  //     links: [
  //       {
  //         title: "Github",
  //         icon: <Icons.github className="h-4 w-4" />,
  //         href: "https://github.com/cryptotrends/cryptotrends",
  //       },
  //     ],
  //   },
  // ],
} as const;
