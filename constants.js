// Define colors
export const COLORS = {
  primary: "#E91E63",
  secondary: "#424242",
  bg: "#000000",
  link: "#FFD2D8",
  bg1:"#FFF000"
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
  performer_section_title:'Our Performers'
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


export const PERFORMERS = [
  { id: 1, name: 'Performer 1', exam: '10th', marks: '400', max_marks: '500', image:'/placeholders/student.jpg' },
  { id: 2, name: 'Performer 2', exam: '10th', marks: '490', max_marks: '500', image:'/placeholders/student.jpg' },
  { id: 3, name: 'Performer 3', exam: '10th', marks: '498', max_marks: '500', image:'/placeholders/student.jpg' },
  { id: 4, name: 'Performer 4', exam: '10th', marks: '400', max_marks: '500', image:'/placeholders/student.jpg' },
  { id: 5, name: 'Performer 5', exam: '10th', marks: '490', max_marks: '500', image:'/placeholders/student.jpg' },
  { id: 6, name: 'Performer 6', exam: '10th', marks: '498', max_marks: '500', image:'/placeholders/student.jpg' },
  { id: 7, name: 'Performer 7', exam: '10th', marks: '400', max_marks: '500', image:'/placeholders/student.jpg' },
  { id: 8, name: 'Performer 8', exam: '10th', marks: '490', max_marks: '500', image:'/placeholders/student.jpg' },
  { id: 9, name: 'Performer 9', exam: '10th', marks: '498', max_marks: '500', image:'/placeholders/student.jpg' },
  { id: 10, name: 'Performer 10', exam: '10th', marks: '498', max_marks: '500', image:'/placeholders/student.jpg' },
  { id: 11, name: 'Performer 11', exam: '10th', marks: '498', max_marks: '500', image:'/placeholders/student.jpg' },
  { id: 12, name: 'Performer 12', exam: '10th', marks: '498', max_marks: '500', image:'/placeholders/student.jpg' },
]
