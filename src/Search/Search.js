import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from '../store/actions';

import { Button, Form, Segment, Container, Header, Icon, } from 'semantic-ui-react';

class Search extends Component {
    state = {
        searchInput: '',
    }

    handleSearchPhraseChange = (e) => {
        this.setState({
            searchInput: e.target.value
        })
    }

    handlePokemonSearch = () => {
        if (this.state.searchInput) {
            const inputValue = this.state.searchInput;
            this.props.pokemonUserSearch(inputValue);
            this.props.history.push(`/history`)
        } else { alert('Please type pokemon to search') }
    }

    handleRandomSearch = () => {
        const randomValue = Math.floor(Math.random() * 807 + 1)
        this.props.pokemonRandomSearch(randomValue)
        this.props.history.push(`/history`)
    }

    render() {
        return (
            <>
                <Segment
                    textAlign="center"
                    style={{ minHeight: '50vh', marginTop: '200px' }}
                    vertical
                >
                    <Container text>
                        <Header
                            content="Pokemon Search"
                        />
                        <Form>
                            <Form.Group>
                                <Form.Input label="Search for cards" placeholder="Type search phrase" width={16}
                                    onChange={(e) => this.handleSearchPhraseChange(e)}
                                    value={this.props.value} />
                            </Form.Group>
                            <Button onClick={this.handlePokemonSearch}>
                                Submit
                               <Icon name="right arrow" />
                            </Button>
                            <Button onClick={this.handleRandomSearch} >
                                <Icon name="random" />
                                Random!
                              </Button>
                        </Form>
                    </Container>
                </Segment>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        pkmSearches: state.searchResults,
        historySearches: state.historySearches
    };
};

const mapDispatchToProps = dispatch => {
    return {
        pokemonUserSearch: (inputValue) => dispatch(actionCreators.inputSearch(inputValue)),
        pokemonRandomSearch: (randomValue) => dispatch(actionCreators.randomSearch(randomValue))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
