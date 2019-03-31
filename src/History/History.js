import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Table, Header, Segment } from 'semantic-ui-react';

class History extends Component {
    state = {
        searchResults: [],
        historySearches: [],
        errors: [],
    };

    render() {
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
                    <Header>Search History:</Header>
                    <Table celled>
                        <Table.Header>
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
        historySearches: state.historySearches
    };
};

export default connect(mapStateToProps)(History)

// import React from 'react';
// import { connect } from 'react-redux'
// import { Table, Header, Segment } from 'semantic-ui-react';

// const History = (props) => {
//     const result = state.pkmSearches
//     return (
//         <>
//             <Segment
//                 textAlign="center"
//                 style={{ minHeight: '50vh', width: '900px', margin: '100px auto 0 auto' }}
//                 vertical
//             >
//                 <Header>Search History:</Header>
//                 <Table celled>
//                     <Table.Header>
//                         <Table.Row>
//                             <Table.HeaderCell>Id</Table.HeaderCell>
//                             <Table.HeaderCell>Name</Table.HeaderCell>
//                             <Table.HeaderCell>Type</Table.HeaderCell>
//                             <Table.HeaderCell>Height/ Weight</Table.HeaderCell>
//                         </Table.Row>
//                     </Table.Header>
//                     <Table.Body>
//                         {result}
//                     </Table.Body>
//                 </Table>
//             </Segment>
//         </>
//     )
// }

// const mapStateToProps = state => {
//     return {
//         pkmSearches: state.searchResults,
//         historySearches: state.historySearches
//     };
// };

// export default connect(mapStateToProps)(History)