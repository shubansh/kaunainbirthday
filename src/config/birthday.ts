export const CONFIG = {
  // General Info
  name: "Kaunain",
  age: 15,
  birthdayDate: "1 July",
  birthdayYear: 2026, // For the countdown logic

  // Music
  musicUrl: "/audio/birthday-instrumental.mp3", // Make sure this exists in public/audio/

  // Hero Section
  hero: {
    title: "Happy 15th",
    subtitle: "Princess Kaunain",
    description: "Celebrating 15 wonderful years filled with love, dreams, happiness, laughter and unforgettable memories.",
    image: "/images/hero/hero.jpg",
  },

  // About Section
  about: {
    title: "15 Beautiful Years",
    paragraphs: [
      "From the day you were born, our home has been filled with a light that shines brighter every year. Watching you grow from a beautiful baby into a graceful, intelligent, and kind-hearted young lady has been the greatest joy of our lives.",
      "Your beautiful smile can light up the darkest rooms, and your caring nature makes everyone around you feel loved. As you turn 15, we celebrate not just how much you've grown, but the amazing person you are becoming."
    ],
    quote: "May your kindness always be your strength, and your dreams always guide you forward."
  },

  // Timeline Section
  timeline: [
    { id: 1, title: "A Star is Born", date: "July 1", desc: "The day our world became brighter.", icon: "👶", image: "/images/timeline/baby.jpg", yOffset: 0 },
    { id: 2, title: "Childhood Magic", date: "Early Years", desc: "Walking into our hearts with endless curiosity.", icon: "🎈", image: "/images/timeline/childhood.jpg", yOffset: 50 },
    { id: 3, title: "School Days", date: "Kindergarten", desc: "The start of a beautiful journey of learning.", icon: "🎒", image: "/images/timeline/school.jpg", yOffset: -30 },
    { id: 4, title: "Birthday Joy", date: "Growing Up", desc: "Every year more beautiful than the last.", icon: "🎂", image: "/images/timeline/birthday.jpg", yOffset: 60 },
    { id: 5, title: "Today", date: "15 Years", desc: "Our magnificent princess.", icon: "👑", image: "/images/timeline/present.jpg", yOffset: -20 },
  ],

  // Gallery Section (List image paths and captions)
  gallery: [
    { id: 1, src: "/images/gallery/1.jpg", caption: "Sweet Memories", height: "h-64" },
    { id: 2, src: "/images/gallery/2.jpg", caption: "Beautiful Smile", height: "h-96" },
    { id: 3, src: "/images/gallery/3.jpg", caption: "Our Princess", height: "h-80" },
    { id: 4, src: "/images/gallery/4.jpg", caption: "Happy Moments", height: "h-72" },
    { id: 5, src: "/images/gallery/5.jpg", caption: "Shining Star", height: "h-96" },
    { id: 6, src: "/images/gallery/6.jpg", caption: "Unforgettable", height: "h-64" },
  ],

  // Memory Wall Section
  memories: [
    { id: 1, src: "/images/memories/1.jpg", note: "Best day ever!", type: "polaroid", rotation: -5 },
    { id: 2, src: "/images/memories/2.jpg", note: "Always smiling 😊", type: "sticky", rotation: 3 },
    { id: 3, src: "/images/memories/3.jpg", note: "Family vacation", type: "polaroid", rotation: 6 },
    { id: 4, src: "/images/memories/4.jpg", note: "We love you", type: "sticky", rotation: -4 },
    { id: 5, src: "/images/memories/5.jpg", note: "So proud of you", type: "polaroid", rotation: 2 },
  ],

  // 15 Reasons Section
  reasons: [
    "Your radiant smile",
    "Your boundless kindness",
    "Your beautiful dreams",
    "Your pure heart",
    "Your inner strength",
    "Your natural confidence",
    "Your infectious happiness",
    "Your caring nature",
    "Your bright creativity",
    "Your endless positivity",
    "Your sweet innocence",
    "Your sharp intelligence",
    "Your inspiring courage",
    "Your loving soul",
    "You complete our family",
  ],

  // Family Wishes Section
  family: [
    { name: "Mom", message: "You are my greatest blessing. I love you endlessly, my beautiful girl.", image: "/images/family/mom.jpg", relation: "Mother" },
    { name: "Dad", message: "Always stay happy and keep shining like the star you are. So proud of you.", image: "/images/family/dad.jpg", relation: "Father" },
    { name: "Sumaiya Aunt", message: "My partner in crime and my best friend. Happy birthday!", image: "/images/family/aunt.jpg", relation: "Aunt" },
    { name: "Sister", message: "To the most amazing sister. May all your dreams come true.", image: "/images/family/sister.jpg", relation: "Sister" },
    { name: "Sufiya Aunt", message: "May God bless you with a beautiful, long, and healthy life ahead.", image: "/images/family/family2.jpg", relation: "Aunt" },
    { name: "Nani Nanu", message: "May God bless you with a beautiful, long, and healthy life ahead.", image: "/images/family/grandparents.jpg", relation: "Nani Nanu" },
    { name: "Dada Dadi", message: "May God bless you with a beautiful, long, and healthy life ahead.", image: "/images/family/dada-dadi.jpg", relation: "Dada dadi" },
    { name: "Uncle", message: "May God bless you with a beautiful, long, and healthy life ahead.", image: "/images/family/mamu.jpg", relation: "Uncle" },
  ],

  // Final Letter Section
  letter: {
    greeting: "Dear Kaunain,",
    paragraphs: [
      "As you turn 15 today, we want you to know how incredibly proud we are of the person you have become. You bring so much joy, laughter, and light into our lives.",
      "Never stop dreaming big, never lose your beautiful smile, and always remember that no matter where life takes you, we will always be here for you, cheering you on.",
      "Happy 15th Birthday, our precious princess."
    ],
    signoff: "With all our love,\nYour Family ❤️"
  },

  // Final Celebration Section
  final: {
    title: "Happy 15th Birthday",
    subtitle: "Princess Kaunain",
    message: "May every candle bring a new dream.\nMay every dream come true.",
    image: "/images/final/final.jpg"
  }
};
