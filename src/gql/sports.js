import { gql } from '@apollo/client'

const GET = gql`
  query getSports {
    sports {
      id,
      name
    }
  }
`

export default {
  GET
}
