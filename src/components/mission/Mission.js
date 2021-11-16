/* eslint-disable no-unused-vars */
/** @format */

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Container, Table } from 'react-bootstrap';
import { getMissions } from '../../redux/missions/missions';

const Mission = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state);

  return (
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
};

export default Mission;
