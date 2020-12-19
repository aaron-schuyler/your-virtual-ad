import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Sports, Levels } from '../../../gql/index.js'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function SportAndLevelSelects(props) {
  function RenderSportsOptions() {

    return (
        [<option value='1'>3</option>,
      <option value='2'>2</option>]
    )
  }

  function RenderLevelsOptions() {
    return (
      [
        <option disabled>none</option>,
        <option value='1'>1</option>,
        <option value='2'>2</option>
      ]
    )
  }

  return (
    <Row>
      <Col>
        <Form.Control as='select' onChange={e => props.sportCallback(e.target.value)}>
          {RenderSportsOptions()}
        </Form.Control>
      </Col>
      <Col>
        <Form.Control as='select' onChange={e => props.levelCallback(e.target.value)}>
          {RenderLevelsOptions()}
        </Form.Control>
      </Col>
    </Row>

  )
}
// function RenderLevelsOptions(organizationId) {
//   let query, options
//   if (organizationId) {
//     options = {variables: {organizationId: organizationId}}
//     query = Levels.GET_FROM_ORGANIZATION
//   } else {
//     options = {}
//     query = Levels.GET
//   }
//   const {loading, error, data} = useQuery(query, options)
//   if (loading) return <option>Loading Data...</option>
//   if (error) return <option>Error loading data.</option>
//   return [<option selected disabled>Select an age group</option>, ...data.levels.map(level => {
//     return (<option value={level.id}>{level.gender} {level.ageGroup.name}</option>)
//   })]
// }
