import React from 'react';
import { Table, Header, Segment } from 'semantic-ui-react';

const History = (props) => {
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

                    </Table.Body>
                </Table>
            </Segment>
        </>
    )
}

export default History