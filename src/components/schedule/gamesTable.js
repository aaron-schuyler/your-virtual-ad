import React, { useState } from 'react'
import { useQuery } from '@apollo/client'
import { Games } from '../../gql/index.js'
import Table from 'react-bootstrap/Table'

export default function RenderGames() {
  const {loading, error, data} = useQuery(Games.GET)
  if (loading) return <p>Loading...</p>
  if (error) return <p>Error...</p>
  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>+</th>
          <th>Game</th>
          <th>Date</th>
          <th>Site</th>
          <th>Sport & Level</th>
          <th>Home</th>
          <th>Away</th>
        </tr>
      </thead>
      <tbody>
        {
          data.games.map(game => {
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
      </tbody>
    </Table>
  )
}
