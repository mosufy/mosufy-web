export const resetPortfolio = (category = 'portfolio-category-all') => {
  return {
    type: 'RESET_PORTFOLIO',
    payload: {
      data: [
        {
          title: "Lument-React",
          snippet: "Foundation for an API-Centric Architecture with Laravel's Lumen (API) and React (Web)",
          category: "open-source",
          img: "lumen-react.jpg",
          link: "https://github.com/mosufy/lumen-react"
        },
        {
          title: "Arena",
          snippet: "Provides quantitative metrics to help young professionals stand out for promotion through a gamified concept.",
          category: "project",
          img: "arena.jpg",
          link: "https://www.thearena.co/"
        },
        {
          title: "Maggie",
          snippet: "Automates timekeeping for hourly-based professionals, offering their clients credible and accurate invoices.",
          category: "project",
          img: "maggie.jpg",
          link: "https://www.heymaggie.com/"
        }, {
          title: "PropertyAPI",
          snippet: "Provides real estate agents the ability to have their own property listing website integrated via RESTful API.",
          category: "project",
          img: "propertyapi.jpg",
          link: "https://www.propertyapi.com/"
        },
        {
          title: "VixHub",
          snippet: "Simplifies and packages business processes into a single comprehensive and user-friendly cloud-based software.",
          category: "app",
          img: "vixhub.jpg",
          link: "http://www.vixhub.com/"
        },
        {
          title: "API coLab",
          snippet: "Tinder for Cheaper Flights concept app for Hack Day. Coded in 6 hours with a 2-min pitch.",
          category: "experiment",
          img: "apicolab.jpg",
          link: "https://github.com/mosufy/apicolab-hackday/"
        },
        {
          title: "BusWhere",
          snippet: "Search for buses near an area and know when the buses arrive at a specific bus stop using an API.",
          category: "experiment",
          img: "buswhere.jpg",
          link: "https://github.com/mosufy/bus-where"
        },
        {
          title: "PHP MVC Framework",
          snippet: "Provides basic, barebone essentials to deploy a project quickly. Hosted on GitHub.",
          category: "experiment",
          img: "php-mvc.jpg",
          link: "https://github.com/mosufy/php-mvc"
        }
      ]
    },
    category
  }
};

export const switchCategory = (category) => {
  return (dispatch, getState) => {
    dispatch(resetPortfolio(category));
    dispatch(toggleCategory(category));
  }
};

export const toggleCategory = (category) => {
  return {
    type: 'TOGGLE_CATEGORY',
    category
  }
};