import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Search from './Search/Search';
import History from './History/History';
import About from './About/About';



class App extends Component {

  state = {}

  render() {
    return (
      <BrowserRouter>
        <>
          <Menu color={'blue'} inverted widths={3}>
            <Menu.Item
              name='home'
              as={Link}
              to='/' />
            <Menu.Item
              name='History'
              as={Link}
              to='/history'
            />
            <Menu.Item
              name='About'
              as={Link}
              to='/about'
            />
          </Menu>
          <Route path="/" exact component={Search} />
          <Route path="/history" component={History} />
          <Route path="/about" component={About} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
