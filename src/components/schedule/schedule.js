import React, { useState } from 'react'
import NewGameForm from './newGameForm.js'
import GamesTable from './gamesTable.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Schedule() {
  const [newGameFormActive, setNewGameFormActive] = useState(false)

  return (
    <Container className='p-3'>
      <Row>
        <Col className='border rounded'>
          <h1>Games</h1>
          <NewGameForm />
          <GamesTable />
        </Col>
      </Row>
    </Container>
  )
}
