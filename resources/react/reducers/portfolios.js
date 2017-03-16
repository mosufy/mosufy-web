const portfolios = (state = [], action) => {
  switch (action.type) {
    case 'RESET_PORTFOLIO':
      let portfolios = action.payload.data;
      let items = [];

      for (let i = 0; i < portfolios.length; i++) {
        items.push({
          id: i,
          title: action.payload.data[i].title,
          snippet: action.payload.data[i].snippet,
          category: action.payload.data[i].category,
          img: action.payload.data[i].img,
          link: action.payload.data[i].link
        });
      }

      return items;
    default:
      return state
  }
};

export default portfolios;