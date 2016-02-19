Telescope.config.addCustomPrefix("scr_");

Telescope.modules.add("primaryNav", {
   template: "tagline",
   order: 2
 });

Telescope.modules.remove("primaryNav", "pages_menu");
Telescope.modules.remove("primaryNav", "search");
Telescope.modules.remove("primaryNav", "views_menu");
Telescope.modules.remove("primaryNav", "categories_menu");
Telescope.modules.remove("secondaryNav", "defaultMenuLabel");
Telescope.modules.remove("footer", "footer_social");

Telescope.modules.add("footer", {
  template: "pages_menu",
  order: 2
});

// Telescope.modules.add("postsListTop", {
//   template: "sidebar",
//   order: 1,
//   only: ["postsDefault"]
// });

Telescope.modules.add("sidebar", [
 

  {
    template: "categories_menu",
    order: 0
  },
//    {
//    template: "views_menu",
//    order: 1
//  },
    {
     template: "intro",
     order: 2
   },
     {
    template: "search",
    order: 3 
  },
       {
    template: "footer-social",
    order: 4 
  },
]);

Telescope.colorElements.add(".sidebar .menu-item .menu-item-label-wrapper", "accentColor", "border-color");
Telescope.colorElements.add(".sidebar .menu-item svg.icon", "accentColor", "stroke");
Telescope.colorElements.add(".sidebar .menu-item-label-text", "accentColor", "color");

Telescope.colorElements.add(".sidebar .menu-item:hover .menu-item-label-wrapper", "accentColor", "background-color");
Telescope.colorElements.add(".sidebar .menu-item:hover .menu-item-label-text", "accentContrastColor", "color");
Telescope.colorElements.add(".sidebar .menu-item:hover svg.icon", "accentContrastColor", "stroke");

Telescope.colorElements.add(".footer-social .social-link", "accentColor", "color");
Telescope.colorElements.add(".footer-social .social-link:hover", "accentColor", "background");
Telescope.colorElements.add(".footer-social .social-link:hover", "accentContrastColor", "color");
Telescope.colorElements.add(".footer-social .social-link:hover", "accentColor", "border-color");


Telescope.utils.icons.comment = "pencil-square-o";
