import React from 'react';
import Header from './screens/header/header';
import Main from './Main';
import { BrowserRouter as Router } from "react-router-dom";



function App() {
  return (

    <Router>
      <Header />
      <Main />

    </Router>

  );
}

export default App;
