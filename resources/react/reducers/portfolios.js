const portfolios = (state = [], action) => {
  switch (action.type) {
    case 'RESET_PORTFOLIO':
      let portfolios = action.payload.data;
      let category = action.category;
      let items = [];

      for (let i = 0; i < portfolios.length; i++) {
        if (category == "portfolio-category-all" || category == "portfolio-category-" + action.payload.data[i].category) {
          items.push({
            id: i,
            title: portfolios[i].title,
            snippet: portfolios[i].snippet,
            category: portfolios[i].category,
            img: portfolios[i].img,
            link: portfolios[i].link
          });
        }
      }

      return items;
    default:
      return state
  }
};

export default portfolios;