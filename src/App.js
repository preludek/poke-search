import React, { Component } from 'react';
import { Menu } from 'semantic-ui-react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Search from './Search/Search';
import History from './History/History';

class App extends Component {

  state = {}

  render() {
    return (
      <BrowserRouter>
        <>
          <Menu
            color={'blue'}
            inverted
            widths={2}>
            <Menu.Item
              name='home'
              as={Link}
              to='/' />
            <Menu.Item
              name='History'
              as={Link}
              to='/history'
            />
          </Menu>
          <Route path="/" exact component={Search} />
          <Route path="/history" component={History} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
