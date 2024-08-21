// Define colors
export const COLORS = {
  primary: "#E91E63",
  secondary: "#424242",
  bg: "#000000",
  link: "#FFD2D8",
};

// Define TEXTS and texts
export const TEXTS = {
  bannerAnnouncement:
    "Welcome to Hill Top Educational Institute - Shaping the Future of Ganderbal.",
  institutionName: "Hill Top",
  institutionType: "Educational Institute",
  subHeading:
    "Located in the serene valley of Darend Ganderbal, Kashmir, Hill Top Educational Institute is dedicated to providing quality education and holistic development for the youth of our community.",

  navItems: [
    { text: "Home", action: "/" },
    { text: "About", action: "/about" },
    { text: "Contact", action: "/contact" },
    { text: "Explore", action: "/explore" },
    { text: "News", action: "/news" },
    { text: "Academics", action: "/academics" },
  ],

  buttons: [
    { text: "Sign In", action: "/auth/sign-in" },
    { text: "Admission", action: "/admission" },
  ],
};

// Define subjects with possible colors and featured option
export const SUBJECTS = [
  {
    id: 1,
    name: "English",
    url: "/english",
    color: "#0000FF",
    featured: false,
  },
  {
    id: 2,
    name: "Mathematics",
    url: "/mathematics",
    color: "#FF0000",
    featured: false,
  },
  {
    id: 3,
    name: "Physics",
    url: "/physics",
    color: "#00FF00",
    featured: false,
  },
  {
    id: 4,
    name: "Chemistry",
    url: "/chemistry",
    color: "#FFA500",
    featured: false,
  },
  {
    id: 5,
    name: "Biology",
    url: "/biology",
    color: "#800080",
    featured: false,
  },
  {
    id: 6,
    name: "History",
    url: "/history",
    color: "#FFC0CB",
    featured: false,
  },
  {
    id: 7,
    name: "Geography",
    url: "/geography",
    color: "#00FFFF",
    featured: false,
  },
  { id: 8, name: "Civics", url: "/civics", color: "#FFFF00", featured: false },
  { id: 9, name: "Urdu", url: "/urdu", color: "#A52A2A", featured: false },
  {
    id: 10,
    name: "Kashmiri",
    url: "/kashmiri",
    color: "#00FF00",
    featured: false,
  },
  { id: 11, name: "Art", url: "/art", color: "#008080", featured: false },
  { id: 12, name: "Quran", url: "/quran", color: "#00FF89", featured: true },
  { id: 13, name: "Arabic", url: "/arabic", color: "#FF69B4", featured: false },
  {
    id: 14,
    name: "Computer",
    url: "/computer",
    color: "#A52A2A",
    featured: false,
  },
  { id: 15, name: "Games", url: "/games", color: "#00FFFF", featured: false },
];
