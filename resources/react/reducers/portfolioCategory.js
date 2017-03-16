const portfolioCategory = (state = 'portfolio-category-all', action) => {
  switch (action.type) {
    case 'TOGGLE_CATEGORY':
      return action.category;
    default:
      return state
  }
};

export default portfolioCategory;