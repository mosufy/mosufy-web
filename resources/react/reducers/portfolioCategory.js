const portfolioCategory = (state = 'all', action) => {
  switch (action.type) {
    case 'SWITCH_CATEGORY':
      return action.category;
    default:
      return state
  }
};

export default portfolioCategory;