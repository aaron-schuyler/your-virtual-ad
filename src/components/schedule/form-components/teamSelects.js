import React, { useState, useEffect } from 'react'
import { useLazyQuery } from '@apollo/client'
import { Teams } from '../../../gql/index.js'
import Form from 'react-bootstrap/Form'

export default function TeamSelects(props) {
  const [selectedOrganizationId, setSelectedOrganizationId] = useState()

  const [getTeams, {called, loading, data}] = useLazyQuery(Teams.GET_BY_SPORT_AND_LEVEL)

  useEffect(() => {
    props.callback('')
    if (props.variables.levelId && props.variables.sportId) {
      getTeams({variables: props.variables})
    }
  }, [props.variables.levelId, props.variables.sportId])

  function OrganizationsOptions() {
    if (called && loading) return <option>Loading Data...</option>
    if (!called) return <option>Select Sport and Level</option>
    return data.teams.map(team => {
      return (
        <option key={team.id} value={team.id} disabled={props.blockedTeamIds.includes(team.id)}>
          {team.organization.name}
        </option>
      )
    })
  }

  return (
        <Form.Control
          as='select'
          disabled={!(props.variables.levelId && props.variables.sportId)}
          value={props.value}
          onChange={e => props.callback(e.target.value)}
          >
          <option value='' disabled>Select an Organization</option>
          <OrganizationsOptions />
        </Form.Control>
  )
}
