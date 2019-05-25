import React, {Component, Fragment} from 'react';
import logo from './logo.svg';
import './App.css';
import Alperen from './components/Alperen';

import Header from './container/Header';

const styles = {
  backgroundImage: "url(https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/softail/fxdr-114/overview/dom/19-softail-fxdr114-hero.jpg)",
  minHeight: "100vh",
  backgroundSize: "cover",
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};

function App() {
  return (
    <Fragment>
      <Header/>
      <div style={styles}>
        <Alperen/>
      </div>
    </Fragment>
  );
}

export default App;
