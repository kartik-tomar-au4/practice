import React from 'react';

import ShopInput from '../src/components/shop-input/shop-input';
import Search from '../src/components/search/search';

import './App.css';

class App extends React.Component {
  render(){
    return (
      <div>
      <ShopInput/>
      <Search/>
      </div>
    )
  }
}

export default App;
