export const resetPortfolio = () => {
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
        }
      ]
    }
  }
};

export const switchCategory = (category) => {
  return {
    type: 'SWITCH_CATEGORY',
    category
  }
};