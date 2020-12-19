import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Games } from '../../gql/index.js'
import NewGameForm from './newGameForm.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'


export default function Schedule() {
  const [newGameFormActive, setNewGameFormActive] = useState(false)

  function RenderGames() {
    const {loading, error, data} = useQuery(Games.GET)
    if (loading) return <p>Loading Data...</p>
    if (error) return <p>Error.</p>
    return data.games.map(game => {
      return (
        <tr key={game.id}>
          <td>edit</td>
          <td>{game.id}</td>
          <td>{new Date(game.startTime).toLocaleString()}</td>
          <td>TBD</td>
          <td>{game.level.gender} {game.level.ageGroup.name} {game.sport.name}</td>
          <td>{game.homeTeam.organization.name}</td>
          <td>{game.awayTeam.organization.name}</td>
        </tr>
      )
    })
  }

  return (
    <Container className='p-3'>
      <Row>
        <Col className='border rounded'>
          <h1>Games</h1>
          <NewGameForm />
          <Table striped bordered hover responsive>
            <thead>
              <th>+</th>
              <th>Game</th>
              <th>Date</th>
              <th>Site</th>
              <th>Sport & Level</th>
              <th>Home</th>
              <th>Away</th>
            </thead>
            <tbody>
              {RenderGames()}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}
