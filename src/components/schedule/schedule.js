import React, { useState, useEffect } from 'react'
import Games from '../../api/games.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function Schedule() {
  const [games, setGames] = useState([])
  const [newGameFormActive, setNewGameFormActive] = useState(false)
  const [newGame, setNewGame] = useState({})

  useEffect(() => {
    Games.get()
    .then(games => setGames(games))
  }, [])

  const handleNewGameFormSubmit = (e) => {
    e.preventDefault()
    ///handle submit here
  }

  function renderGames() {
    return games.map(game => {
      return (
        <tr>
          <td>edit</td>
          <td>{game.id}</td>
          <td>{new Date(game.dateTime).toLocaleString()}</td>
          <td>{game.site}</td>
          <td>{game.sport.name} {game.level.name}</td>
          <td>{game.homeTeam.name}</td>
          <td>{game.awayTeam.name}</td>
        </tr>
      )
    })
  }

  function renderNewGameForm() {
    return (
      <Form onSubmit={handleNewGameFormSubmit}>
        <Form.Control as='select'>
          
        </Form.Control>
        <Button type='submit'>Create Game</Button>
      </Form>
    )
  }

  return (
    <Container className='p-3'>
      <Row>
        <Col className='border rounded'>
          <h1>Games</h1>
          {renderNewGameForm()}
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
              {renderGames()}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  )
}
