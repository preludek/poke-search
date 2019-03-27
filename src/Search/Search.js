import React, { Component } from 'react';

import { Button, Form, Segment, Container, Header, Icon, } from 'semantic-ui-react';

const API = "http://pokeapi.co/api/v2/pokemon/";

class Search extends Component {
    state = {
        searchInput: '',
        searchResults: []
    }

    handleSearchPhraseChange = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }

    handlePokemonSearch = () => {
        fetch(API + `${this.state.searchInput}`)
            .then(response => {
                if (response.ok) {
                    return response
                }
                throw Error(response.status)
            })
            .then(response => response.json())
            .then(data => {
                const a = [...this.state.searchResults]
                a.unshift(data)
                this.setState({
                    searchResults: a
                })
            })
            .catch(error => console.log(error))

    }

    render() {

        const results = <p style={{ marginTop: '50px' }}>trolololo</p>
        return (
            <>
                <Segment
                    textAlign="center"
                    style={{ minHeight: '50vh', marginTop: '200px' }}
                    vertical
                >
                    <Container text>
                        <Header
                            content="Pokemon Gen-1 Search"
                        />
                        <Form>
                            <Form.Group>
                                <Form.Input label="Search for cards" placeholder="Type search phrase" width={16} value={this.state.searchPhrase} onChange={this.handleSearchPhraseChange} />
                            </Form.Group>
                            <Button onClick={this.handlePokemonSearch}>
                                Submit
                               <Icon name="right arrow" />
                            </Button>
                            <Button onClick={this.handleLol}>
                                <Icon name="random" />
                                Random!
                              </Button>
                        </Form>
                    </Container>
                    {results}
                </Segment>
            </>
        );
    }
}

export default Search;
