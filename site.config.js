export const siteConfig = {
  site: {
    name: "Akash Danda",
    title: "Akash Danda",
    description: "CS student at UIUC | Software Engineer | Building cool stuff",
    url: "https://akashdanda.dev",
    author: "Akash Danda"
  },
  
  nav: [
    { name: "home", title: "Home", url: "/" },
    { name: "contact", title: "Contact", url: "/contact" }
  ],
  
  directories: [
    { name: "projects", title: "Projects", url: "/projects" }
  ],
  
  theme: "blue",
  
  // Navigation bar configuration
  navbar: {
    siteTitle: "Akash Danda",
    logo: null,
    defaultNavItems: [
      { title: 'Home', url: '/' },
      { title: 'About', url: '/about' }
    ],
    hiddenFromNav: []
  },
  
  // Contact information (required by content-processor)
  contact: {
    email: "akashdanda06@gmail.com",
    privacyEmail: "akashdanda06@gmail.com",
    supportEmail: "akashdanda06@gmail.com",
    phone: "",
    address: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: ""
    }
  },
  
  // Social media links
  social: {
    github: "https://github.com/akashdanda",
    linkedin: "https://linkedin.com/in/akash-danda",
    email: "akashdanda06@gmail.com"
  },
  
  // Legal pages specific settings (required by content-processor)
  legal: {
    privacyPolicyLastUpdated: "2024-01-15",
    termsLastUpdated: "2024-01-15",
    doNotSell: {
      processingTime: "15 business days"
    }
  },
  
  // Search configuration
  search: {
    enabled: true,
    placeholder: 'Search...',
    noResultsText: 'No results found',
    debounceMs: 300,
    minQueryLength: 2,
    maxResults: 10,
    showCategories: true,
    showDates: true,
    showExcerpts: true,
    excerptLength: 30
  },
  
  footer: {
    copyright: "© 2026 Akash Danda. Built with Statue",
    columns: [
      {
        title: "Navigation",
        links: [
          { text: "Home", url: "/" },
          { text: "About", url: "/about" }
        ]
      },
      {
        title: "Connect",
        links: [
          { text: "GitHub", url: "https://github.com/akashdanda" },
          { text: "LinkedIn", url: "https://linkedin.com/in/akash-danda" },
          { text: "Email", url: "mailto:akashdanda06@gmail.com" }
        ]
      }
    ]
  }
};