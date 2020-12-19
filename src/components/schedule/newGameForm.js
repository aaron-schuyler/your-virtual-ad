import React, { useState } from 'react'
// import { useLazyQuery } from '@apollo/client'
import { Teams } from '../../gql/index.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import TeamSelects from './form-components/teamSelects.js'
import SportAndLevelSelects from './form-components/sportAndLevelSelects.js'

export default function NewGameForm() {
  const [newGame, setNewGame] = useState({})
  // const [selectedOrganizationId, setSelectedOrganizationId] = useState()
  const [sportId, setSportId] = useState()
  const [levelId, setLevelId] = useState()
  const [homeTeamId, setHomeTeamId] = useState()
  const [awayTeamId, setAwayTeamId] = useState()

  const handleNewGameFormSubmit = (e) => {
    e.preventDefault()
    ///handle submit here
  }

    return (
      <Form onSubmit={handleNewGameFormSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <SportAndLevelSelects
                sportCallback={setSportId}
                levelCallback={setLevelId}
                />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label>Home Team</Form.Label>
              <TeamSelects
                callback={setHomeTeamId}
                variables={{levelId: levelId, sportId: sportId}}
                blockedTeamIds={[awayTeamId]}
                value={homeTeamId}
                />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label>Away Team</Form.Label>
              <TeamSelects
                callback={setAwayTeamId}
                variables={{levelId: levelId, sportId: sportId}}
                blockedTeamIds={[homeTeamId]}
                value={awayTeamId}
                />
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col>
            <Form.Group>
              <Form.Control type='dateTime' />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className='text-right'>
              <Button type='submit'>Create Game</Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    )

}
