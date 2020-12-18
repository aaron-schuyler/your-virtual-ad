import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Games, Organizations, Levels } from '../../gql/index.js'

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Table from 'react-bootstrap/Table'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function Schedule() {
  const [newGameFormActive, setNewGameFormActive] = useState(false)
  const [newGame, setNewGame] = useState({})
  const [selectedOrganizationId, setSelectedOrganizationId] = useState()

  const handleNewGameFormSubmit = (e) => {
    e.preventDefault()
    ///handle submit here
  }

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

  function RenderOrganizationsOptions() {
    const {loading, error, data} = useQuery(Organizations.GET)
    if (loading) return <option>Loading Data...</option>
    if (error) return <option>Error loading data.</option>
    return data.organizations.map(organization => {
      return (<option value={organization.id}>{organization.name}</option>)
    })
  }

  function RenderLevelsOptions(organizationId) {
    let query, options
    if (organizationId) {
      options = {variables: {organizationId: organizationId}}
      query = Levels.GET_FROM_ORGANIZATION
    } else {
      options = {}
      query = Levels.GET
    }
    const {loading, error, data} = useQuery(query, options)
    if (loading) return <option>Loading Data...</option>
    if (error) return <option>Error loading data.</option>
    return data.levels.map(level => {
      return (<option value={level.id}>{level.gender} {level.ageGroup.name}</option>)
    })
  }

  function RenderNewGameForm() {
    return (
      <Form onSubmit={handleNewGameFormSubmit}>
        <Form.Control as='select' onChange={e => setSelectedOrganizationId(e.target.value)}>
          <option selected disabled>Select an Organization</option>
          {RenderOrganizationsOptions()}
        </Form.Control>
        <Form.Control as='select'>
          <option selected disabled>Select an age group</option>
          {RenderLevelsOptions(selectedOrganizationId)}
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
          {RenderNewGameForm()}
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
