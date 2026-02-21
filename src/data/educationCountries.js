// src/data/educationCountries.js

export const educationCountries = {
  netherlands: {
  slug: "netherlands",
  name: "Netherlands",
  hero: {
    title: "Study in Netherlands",
    subtitle: "High-quality, innovative, globally recognized European education",
    backgroundImage: "/assets/images/about/default-hero.jpg",
  },

  navItems: [
    { id: "about", label: "About Netherlands" },
    { id: "highlights", label: "Highlights" },
    { id: "affordability", label: "Affordability" },
    { id: "lifestyle", label: "Lifestyle & Safety" },
    { id: "careers", label: "Career & Skills" },
    { id: "stem", label: "STEM Focus" },
    { id: "programs", label: "Programs" },
    { id: "advantages", label: "Advantages" },
    { id: "cities", label: "Cities" }
  ],

  sections: [
    {
      type: "info",
      id: "about",
      layout: "image-left",
      badge: "Europe",
      heading: "About Netherlands",
      description: `The Netherlands is one of Europe’s most popular study destinations, known for its high-quality education system, innovative teaching methods, multicultural environment, and strong focus on research and technology. Dutch universities consistently rank among the top in the world and offer a large number of English-taught programs, making it one of the easiest European countries for international students.

The Netherlands is also recognized for its safe society, modern lifestyle, vibrant student cities, and strong job market, especially in Engineering, IT, Business, Health Sciences, and Creative Industries.`,
      imageUrl: "/assets/images/about/placeholder1.jpg"
    },

    {
      type: "list",
      id: "highlights",
      layout: "image-right",
      badge: "Highlights",
      heading: "Highlights of Education in Netherlands",
      items: [
        "Top universities such as University of Amsterdam, TU Delft, Utrecht University, Erasmus University Rotterdam, Leiden University, University of Groningen, Eindhoven University of Technology.",
        "Engineering & Technology, AI, Business, Life Sciences, Architecture, Design, Social Sciences programs.",
        "Over 2,000 English-taught Bachelor’s, Master’s, and PhD programs.",
        "Globally recognized degrees with strong career pathways worldwide."
      ],
      imageUrl: "/assets/images/about/placeholder2.jpg"
    },

    {
      type: "list",
      id: "affordability",
      layout: "image-left",
      badge: "Costs & Scholarships",
      heading: "Affordability & Scholarships",
      items: [
        "Tuition fees: €6,000–€15,000 per year.",
        "Living costs: €800–€1,200 per month.",
        "Scholarships available: Holland Scholarship, Orange Tulip, Erasmus+, University Excellence Scholarships, research-based grants."
      ],
      imageUrl: "/assets/images/about/placeholder3.jpg"
    },

    {
      type: "list",
      id: "lifestyle",
      layout: "image-right",
      badge: "Lifestyle & Safety",
      heading: "Lifestyle, Safety & Accessibility",
      items: [
        "One of Europe’s most global and open societies.",
        "Easy access to Germany, Belgium, France, and the UK.",
        "Bicycles widely used for travel; superb transportation system.",
        "Extremely high English proficiency.",
        "Modern, student-friendly cities with rich culture."
      ],
      imageUrl: "/assets/images/about/placeholder4.jpg"
    },

    {
      type: "list",
      id: "careers",
      layout: "image-left",
      badge: "Career Focus",
      heading: "Practical Skills & Career Opportunities",
      items: [
        "Career fields: IT, Data Science, Engineering, Business, Healthcare, Agriculture, Creative Industries.",
        "Strong university–industry partnerships.",
        "Internships integrated into many programs.",
        "Post-study residence permits available for graduates."
      ],
      imageUrl: "/assets/images/about/placeholder5.jpg"
    },

    {
      type: "list",
      id: "stem",
      layout: "image-right",
      badge: "STEM Excellence",
      heading: "Attractiveness for STEM Students",
      items: [
        "Artificial Intelligence & Robotics",
        "Renewable Energy & Environmental Engineering",
        "Biomedical & Life Sciences",
        "Nanotechnology",
        "Chemical & Mechanical Engineering"
      ],
      imageUrl: "/assets/images/about/placeholder6.jpg"
    },

    {
      type: "programs",
      id: "programs",
      heading: "Programs, Duration & Streams",
      bachelors: {
        duration: "3–4 years",
        streams: [
          "Engineering", "Technology", "IT", "Business", "Economics", 
          "Architecture", "Arts", "Humanities", "Psychology", "Media",
          "Life Sciences", "Agriculture", "Commerce"
        ]
      },
      masters: {
        duration: "1–2 years",
        streams: [
          "Engineering", "AI", "Data Science", "Cybersecurity",
          "Business Analytics", "Law", "Policy", "Environmental Studies"
        ]
      },
      phd: {
        duration: "3–5 years",
        streams: [
          "Science", "Technology", "Engineering", "Medicine", 
          "Management", "Humanities", "Social Sciences"
        ]
      }
    },

    {
      type: "list",
      id: "advantages",
      heading: "Advantages of Studying in Netherlands",
      items: [
        "World-class universities with global rankings.",
        "One of the highest numbers of English-taught programs in Europe.",
        "Strong job market with global employability.",
        "Scholarship availability for international students.",
        "Schengen travel freedom.",
        "1-year post-study orientation visa (zoekjaar).",
        "Part-time work allowed (16–20 hours/week)."
      ]
    },

    {
      type: "cities",
      id: "cities",
      heading: "Major Student Cities",
      items: [
        "Amsterdam", "Rotterdam", "Eindhoven", "Utrecht",
        "Groningen", "Leiden", "Delft", "Tilburg", "The Hague"
      ]
    }
  ]
},

"south-korea": {
  slug: "south-korea",
  name: "South Korea",
  hero: {
    title: "Study in South Korea",
    subtitle: "World-class education, innovation, technology & cultural excellence",
    backgroundImage: "/assets/images/about/default-hero.jpg",
  },

  navItems: [
    { id: "about", label: "About South Korea" },
    { id: "highlights", label: "Highlights" },
    { id: "affordability", label: "Affordability" },
    { id: "lifestyle", label: "Lifestyle & Safety" },
    { id: "careers", label: "Career & Skills" },
    { id: "stem", label: "STEM Focus" },
    { id: "programs", label: "Programs" },
    { id: "advantages", label: "Advantages" },
    { id: "cities", label: "Cities" },
  ],

  sections: [
    {
      type: "info",
      id: "about",
      layout: "image-left",
      badge: "Asia",
      heading: "About South Korea",
      description: `South Korea is one of Asia’s most advanced education destinations, known for its world-class universities, cutting-edge technology, vibrant culture, and strong global reputation. With top rankings in innovation, research output, and academic excellence, South Korea attracts students seeking high-quality education and strong career opportunities.

The country offers a wide range of English-taught programs in Engineering, IT, Business, Medicine, Arts, and Social Sciences. Its modern infrastructure, competitive tuition, safe environment, and globally recognized degrees make South Korea a top choice for international students.`,
      imageUrl: "/assets/images/about/placeholder1.jpg",
    },

    {
      type: "list",
      id: "highlights",
      layout: "image-right",
      badge: "Highlights",
      heading: "Highlights of Education in South Korea",
      items: [
        "Top universities: SNU, Korea University, Yonsei University, KAIST, POSTECH, Hanyang University, SKKU, Ewha Womans University.",
        "Strong academic programs in Engineering, IT, AI, Medicine, Business, Arts, and Humanities.",
        "Large number of programs taught in English.",
        "Top global ranking for innovation, research, and technology leadership.",
      ],
      imageUrl: "/assets/images/about/placeholder2.jpg",
    },

    {
      type: "list",
      id: "affordability",
      layout: "image-left",
      badge: "Costs & Scholarships",
      heading: "Affordability & Scholarships",
      items: [
        "Tuition fees: $3,000–$8,000 per year.",
        "Manageable living costs with student discounts and subsidized housing.",
        "Scholarships available: Global Korea Scholarship (GKS), university merit scholarships, department research awards, tuition waivers, government grants.",
      ],
      imageUrl: "/assets/images/about/placeholder3.jpg",
    },

    {
      type: "list",
      id: "lifestyle",
      layout: "image-right",
      badge: "Lifestyle & Culture",
      heading: "Lifestyle, Safety & Accessibility",
      items: [
        "One of the safest countries globally with advanced public services.",
        "High-tech infrastructure and efficient transportation systems.",
        "Rich culture, cuisine, K-pop, entertainment, and festivals.",
        "English increasingly used in universities and major cities.",
        "Close access to Japan, China, and Southeast Asia.",
      ],
      imageUrl: "/assets/images/about/placeholder4.jpg",
    },

    {
      type: "list",
      id: "careers",
      layout: "image-left",
      badge: "Career Opportunities",
      heading: "Practical Skills & Career Opportunities",
      items: [
        "Major sectors: IT, AI, Semiconductors, Robotics, Engineering, Business, Healthcare, Media.",
        "Home to global giants: Samsung, LG, Hyundai, SK Group, Lotte, POSCO.",
        "Strong internship and industry collaboration opportunities.",
        "High employability for technical and STEM graduates.",
      ],
      imageUrl: "/assets/images/about/placeholder5.jpg",
    },

    {
      type: "list",
      id: "stem",
      layout: "image-right",
      badge: "STEM Excellence",
      heading: "Attractiveness for STEM Students",
      items: [
        "Semiconductor technology leadership.",
        "Robotics & automation expertise.",
        "Artificial Intelligence & Machine Learning.",
        "Biotechnology & Biomedical Engineering.",
        "Renewable energy & environmental engineering.",
        "Nanoscience & advanced material research.",
      ],
      imageUrl: "/assets/images/about/placeholder6.jpg",
    },

    {
      type: "programs",
      id: "programs",
      heading: "Programs, Duration & Streams",
      bachelors: {
        duration: "4 years",
        streams: [
          "Engineering", "Technology", "IT", "Computer Science", "Business",
          "Economics", "Architecture", "Arts", "Humanities", "Life Sciences",
          "Media", "Hospitality", "Psychology", "Law", "Design",
          "Biotechnology", "Medicine"
        ],
      },
      masters: {
        duration: "2 years",
        streams: [
          "Management", "Data Science", "AI", "Cybersecurity", "Engineering",
          "Sciences", "Law", "Social Sciences", "Public Policy",
          "Creative Arts", "Biotechnology"
        ],
      },
      phd: {
        duration: "3–5 years",
        streams: [
          "Engineering", "Medicine", "Technology", "Sciences",
          "Humanities", "Social Sciences", "Creative Arts"
        ],
      },
    },

    {
      type: "list",
      id: "advantages",
      heading: "Advantages of Studying in South Korea",
      items: [
        "High-quality, globally recognized education.",
        "Affordable tuition & strong scholarship opportunities.",
        "Increasing number of English-taught programs.",
        "Minimum 55% accepted in many universities.",
        "IELTS/TOEFL/PTE recommended (waivers possible).",
        "Safe, clean, technologically advanced environment.",
        "Access to high-demand global industries.",
        "Part-time work permitted during studies.",
        "Post-study work options available.",
      ],
    },

    {
      type: "cities",
      id: "cities",
      heading: "Major Student Cities",
      items: [ "Seoul", "Busan", "Incheon", "Daegu", "Daejeon" ],
    },
  ],
},
uae: {
  slug: "uae",
  name: "United Arab Emirates",
  hero: {
    title: "Study in UAE",
    subtitle: "Globally connected, innovative, safe & future-ready education destination",
    backgroundImage: "/assets/images/about/default-hero.jpg",
  },

  navItems: [
    { id: "about", label: "About UAE" },
    { id: "highlights", label: "Highlights" },
    { id: "affordability", label: "Affordability" },
    { id: "lifestyle", label: "Lifestyle & Safety" },
    { id: "careers", label: "Career & Skills" },
    { id: "stem", label: "STEM Focus" },
    { id: "programs", label: "Programs" },
    { id: "advantages", label: "Advantages" },
    { id: "cities", label: "Cities" },
  ],

  sections: [
    {
      type: "info",
      id: "about",
      layout: "image-left",
      badge: "Middle East",
      heading: "About UAE",
      description: `The United Arab Emirates (UAE) has become one of the world’s fastest-growing education destinations, offering globally accredited universities, advanced infrastructure, multicultural campuses, and strong industry partnerships.

With branch campuses of top global universities, high-quality local institutions, and excellent student facilities, the UAE provides world-class education in a safe, innovative, and globally connected environment.`,
      imageUrl: "/assets/images/about/placeholder1.jpg",
    },

    {
      type: "list",
      id: "highlights",
      layout: "image-right",
      badge: "Highlights",
      heading: "Highlights of Education in UAE",
      items: [
        "Top universities: Khalifa University, University of Dubai, AUD, AUS, Birmingham Dubai, Heriot-Watt Dubai, Middlesex Dubai, University of Sharjah.",
        "Academic strengths: Business, Finance, Engineering, AI, Aviation, Hospitality, Design, Media, Law, Healthcare.",
        "Large number of English-taught programs.",
        "International branch campuses with globally recognized degrees.",
      ],
      imageUrl: "/assets/images/about/placeholder2.jpg",
    },

    {
      type: "list",
      id: "affordability",
      layout: "image-left",
      badge: "Costs & Scholarships",
      heading: "Affordability & Scholarships",
      items: [
        "Tuition fees: AED 30,000–AED 90,000 per year.",
        "Multiple accommodation options available.",
        "Scholarships: Merit, need-based, academic excellence, corporate, athletic, early-bird, UAE emirate-specific grants.",
      ],
      imageUrl: "/assets/images/about/placeholder3.jpg",
    },

    {
      type: "list",
      id: "lifestyle",
      layout: "image-right",
      badge: "Lifestyle & Culture",
      heading: "Lifestyle, Safety & Accessibility",
      items: [
        "One of the safest countries in the world.",
        "English widely spoken on campuses & workplaces.",
        "Multicultural environment with residents from 200+ nationalities.",
        "Global travel hub with world-class transport & healthcare.",
        "Modern entertainment, beaches, skyscrapers, cultural centers.",
      ],
      imageUrl: "/assets/images/about/placeholder4.jpg",
    },

    {
      type: "list",
      id: "careers",
      layout: "image-left",
      badge: "Career Opportunities",
      heading: "Practical Skills & Career Opportunities",
      items: [
        "Major fields: Business, Finance, IT, Cybersecurity, Engineering, Aviation, Hospitality, Healthcare, Real Estate, Media.",
        "Strong internship, part-time work, and corporate partnerships.",
        "Home to major companies: Emirates, Etihad, ADNOC, DP World, Amazon, Google, IBM, PwC, Deloitte.",
        "High employability in Dubai & Abu Dhabi business hubs.",
      ],
      imageUrl: "/assets/images/about/placeholder5.jpg",
    },

    {
      type: "list",
      id: "stem",
      layout: "image-right",
      badge: "STEM Excellence",
      heading: "Attractiveness for STEM Students",
      items: [
        "Strong focus on AI, robotics, smart cities, and sustainability.",
        "Major research areas: Renewable energy, aerospace, biotechnology, fintech, automation.",
        "Government-supported innovation labs & research centers.",
      ],
      imageUrl: "/assets/images/about/placeholder6.jpg",
    },

    {
      type: "programs",
      id: "programs",
      heading: "Programs, Duration & Streams",
      bachelors: {
        duration: "3–4 years",
        streams: [
          "Engineering", "Technology", "IT", "Business", "Economics", "Finance",
          "Architecture", "Arts", "Humanities", "Psychology", "Media", "Aviation",
          "Life Sciences", "Law", "Mathematics", "Communication", "Healthcare"
        ],
      },
      masters: {
        duration: "1–2 years",
        streams: [
          "Management", "Cybersecurity", "Data Science", "AI", "Engineering",
          "Economics", "Law", "Psychology", "Public Policy",
          "Hospitality & Tourism", "Logistics", "Aviation Studies"
        ],
      },
      phd: {
        duration: "3–5 years",
        streams: [
          "Sciences", "Engineering", "Technology", "Medicine",
          "Management", "Humanities", "Social Sciences", "Arts"
        ],
      },
    },

    {
      type: "list",
      id: "advantages",
      heading: "Advantages of Studying in UAE",
      items: [
        "World-class, globally accredited universities.",
        "English-taught programs at all levels.",
        "Highly safe, modern, and student-friendly.",
        "Opportunities for internships & part-time work.",
        "Minimum 55% accepted in many institutions.",
        "Fast-track visa processing.",
        "Strong job market & global business exposure.",
        "Proximity to India, Pakistan, GCC, Africa & Europe.",
      ],
    },

    {
      type: "cities",
      id: "cities",
      heading: "Major Student Cities",
      items: [
        "Dubai",
        "Abu Dhabi",
        "Sharjah",
        "Ajman",
        "Ras Al Khaimah"
      ],
    },
  ],
},


};
export default educationCountries;
 
