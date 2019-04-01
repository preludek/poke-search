import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Header, Segment, Image } from 'semantic-ui-react';

class History extends Component {
    state = {
        searchResults: [],
        historySearches: [],
        errors: [],
    };

    render() {
        let result = null
        if (this.props.pkmSearches.id) {
            result = (
                <Segment
                    textAlign="center"
                    style={{ width: '600px', margin: '20px auto', minHeight: '300px' }}
                >
                    <Header style={{ margin: '20px auto', fontSize: '1.6rem' }}>{this.props.pkmSearches.name.toUpperCase()}</Header>
                    <Table basic='very' celled collapsing style={{ width: '41%', display: 'inline-block' }} >
                        <Table.Row>
                            <Table.Cell style={{ fontWeight: 'bold' }}>Id</Table.Cell>
                            <Table.Cell>{this.props.pkmSearches.id}</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell style={{ fontWeight: 'bold' }}>Type</Table.Cell>
                            <Table.Cell>{
                                this.props.pkmSearches.types.map((type => <Table.Cell key={type} style={{ borderTop: 'none' }}>{type.type.name}</Table.Cell>))
                            }</Table.Cell>
                        </Table.Row>
                        <Table.Row>
                            <Table.Cell style={{ fontWeight: 'bold' }}>Height/ Weight</Table.Cell>
                            <Table.Cell>{this.props.pkmSearches.height * 10} cm / {this.props.pkmSearches.weight / 10} kg</Table.Cell>
                        </Table.Row>
                    </Table>
                    <Image src={this.props.pkmSearches.sprites.front_default} size='small' floated='right' style={{ marginRight: '50px' }} />
                </Segment>
            )
        } else if (!this.props.pkmSearches.id && this.props.errors) {
            result = (<Header>{this.props.errors}</Header>)
        }
        const history = this.props.historySearches.map((search => (
            <Table.Row key={search.id}>
                <Table.Cell>{search.id}</Table.Cell>
                <Table.Cell>{search.name}</Table.Cell>
                <Table.Cell>{
                    search.types.map((type => <Table.Cell key={type} style={{ borderTop: 'none' }}>{type.type.name}</Table.Cell>))
                }</Table.Cell>
                <Table.Cell>{search.height * 10} cm / {search.weight / 10} kg</Table.Cell>
            </Table.Row>

        )))
        return (
            <>
                <Segment
                    textAlign="center"
                    style={{ minHeight: '50vh', width: '900px', margin: '100px auto 0 auto' }}
                    vertical
                >
                    {result}
                    <Header>Search History:</Header>
                    <Table celled>
                        <Table.Header style={{ textAlign: 'center' }}>
                            <Table.Row>
                                <Table.HeaderCell>Id</Table.HeaderCell>
                                <Table.HeaderCell>Name</Table.HeaderCell>
                                <Table.HeaderCell>Type</Table.HeaderCell>
                                <Table.HeaderCell>Height/ Weight</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>
                        <Table.Body>
                            {history}
                        </Table.Body>
                    </Table>
                </Segment>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        pkmSearches: state.searchResults,
        historySearches: state.historySearches,
        errors: state.errors
    };
};

export default connect(mapStateToProps)(History)
