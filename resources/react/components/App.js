import React from 'react';
import Footer from './Footer';

const App = ({children}) => {
  return (
    <div>
      {children}
      <Footer/>
    </div>
  )
};

export default App;