import { gql } from '@apollo/client'

const GET = gql`
  query getLevels {
    levels {
      id,
      gender,
      ageGroup {
        name
      }
    }
  }
`

export default {
  GET
}
