const menu_data = [
  {
    title: "For Students",
    link: "/blog-details",   // ⭐ Updated to direct page
    mega_menu: false,
    submenus: []             // ❌ Removed all dropdown structure
  },

  { title: "For Universities", link: "/gallery-masonry", mega_menu: false, submenus: [] },
  { title: "For Schools", link: "/event-grid", mega_menu: false, submenus: [] },
  { title: "For Corporates", link: "/event-list", mega_menu: false, submenus: [] },
  { title: "For Government", link: "/event-details", mega_menu: false, submenus: [] },

  // { title: "For Partners (B2B)", link: "#", mega_menu: false, submenus: [] }, // ❌ removed

  { title: "About Us", link: "/contact-us", mega_menu: false, submenus: [] }
];

export default menu_data;