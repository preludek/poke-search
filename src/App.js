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
              to='/poke_search' />
            <Menu.Item
              name=' Search History'
              as={Link}
              to='/poke_search/history'
            />
          </Menu>
          <Route path="/poke_search" exact component={Search} />
          <Route path="/poke_search/history" component={History} />
        </>
      </BrowserRouter>
    );
  }
}

export default App;
