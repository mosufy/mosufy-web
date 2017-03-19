const portfolioCategory = (state = '', action) => {
  switch (action.type) {
    case 'TOGGLE_CATEGORY':
      return action.category;
    default:
      return state
  }
};

export default portfolioCategory;