import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Sports, Levels } from '../../../gql/index.js'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function SportAndLevelSelects(props) {
  function SportsOptions() {
    const {loading, error, data} = useQuery(Sports.GET)
    if (loading) return <option disabled>Loading Sports...</option>
    if (error) return <option disabled>Error Fetching Sports...</option>
    return data.sports.map(sport => {
      return (
        <option key={sport.id} value={sport.id}>{sport.name}</option>
      )
    })
  }

  function RenderLevelsOptions() {
    const {loading, error, data} = useQuery(Levels.GET)
    if (loading) return <option disabled>Loading Levels...</option>
    if (error) return <option disabled>Error Fetching Levels...</option>
    return data.levels.map(level => {
      return (
        <option key={level.id} value={level.id}>{level.gender} {level.ageGroup.name}</option>
      )
    })
  }

  return (
    <Row>
      <Col>
        <Form.Control as='select' onChange={e => props.sportCallback(e.target.value)}>
          <option disbaled='true'>Select a Sport</option>
          {SportsOptions()}
        </Form.Control>
      </Col>
      <Col>
        <Form.Control as='select' onChange={e => props.levelCallback(e.target.value)}>
          <option disbaled='true'>Select a Level</option>
          {RenderLevelsOptions()}
        </Form.Control>
      </Col>
    </Row>
  )
}
