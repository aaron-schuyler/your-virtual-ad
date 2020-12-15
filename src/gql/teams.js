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

export default {
  GET
}
