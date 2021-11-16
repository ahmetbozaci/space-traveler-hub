/** @format */

import React from 'react';
import { Container, Table } from 'react-bootstrap';

const Mission = () => (
  <Container>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Mission</th>
          <th>Description</th>
          <th>Status</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Thaicom</td>
          <td>Lorem ipsummm</td>
          <td>Active Member, NOT A MEMBER</td>
          <td>Join Mission, Leave Mission</td>
        </tr>
      </tbody>
    </Table>
  </Container>
);

export default Mission;
