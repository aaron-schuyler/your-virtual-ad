import { gql } from '@apollo/client'

const GET = gql`
  query getGames {
    games {
      id,
      startTime
      sport {
          id,
          name
      },
      level {
          id,
          gender,
          ageGroup {
              id,
              name
          }
      },
      homeTeam {
          organization {
              name
          }
      },
      awayTeam {
          organization {
              name
          }
       }
   }
  }
`

export default {
  GET
}
