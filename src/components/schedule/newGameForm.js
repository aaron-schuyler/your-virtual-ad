import React, { useState } from 'react'
// import { useLazyQuery } from '@apollo/client'
import { Teams } from '../../gql/index.js'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
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
        <Form.Group>
          <SportAndLevelSelects
            sportCallback={setSportId}
            levelCallback={setLevelId}
            />
        </Form.Group>
        <Form.Group>
          <Form.Label>Home Team</Form.Label>
          <TeamSelects
            callback={setHomeTeamId}
            variables={{levelId: levelId, sportId: sportId}}
            blockedTeamIds={[awayTeamId]}
            />
        </Form.Group>
        <Form.Group>
          <Form.Label>Away Team</Form.Label>
          <TeamSelects
            callback={setAwayTeamId}
            variables={{levelId: levelId, sportId: sportId}}
            blockedTeamIds={[homeTeamId]}
            />
        </Form.Group>
        <Form.Group>

        </Form.Group>
        <Form.Group className='text-right'>
          <Button type='submit'>Create Game</Button>
        </Form.Group>
      </Form>
    )

}
