import { gql } from '@apollo/client'

const GET = gql`
  query getTeams {
    teams {
      id,
      organization {
        name
      }
    }
  }
`

const GET_BY_SPORT_AND_LEVEL = gql`
  query getTeams ($sportId: ID, $levelId: ID) {
    teams (sportId: $sportId, levelId: $levelId) {
      id,
      organization {
        name
      }
    }
  }
`

export default {
  GET,
  GET_BY_SPORT_AND_LEVEL
}
