import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { Teams } from '../../../gql/index.js'
import Form from 'react-bootstrap/Form'

export default function TeamSelects(props) {
  const [selectedOrganizationId, setSelectedOrganizationId] = useState()
  const [teams, setTeams] = useState()

  const [getTeams, {called, loading, data}] = useLazyQuery(Teams.GET_BY_SPORT_AND_LEVEL)

  useEffect(() => {
    if (props.variables.levelId && props.variables.sportId) {
      getTeams({variables: props.variables})
    }
  }, [props.variables])

  function OrganizationsOptions() {
    if (called && loading) return <option>Loading Data...</option>
    if (!called) return <option>Select Sport and Level</option>
    return (
      <>
        <option selected disabled>Select an Organization</option>
        {
          data.teams.map(team => {
            return (
              <option value={team.id} disabled={props.blockedTeamIds.includes(team.id)}>
                {team.organization.name}
              </option>
            )
          })
        }
      </>
    )
  }

  return (
        <Form.Control as='select' disabled={!(props.variables.levelId && props.variables.sportId)} onChange={e => props.callback(e.target.value)}>
          <OrganizationsOptions />
        </Form.Control>
  )
}
