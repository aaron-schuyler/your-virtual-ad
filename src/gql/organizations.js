import { gql } from '@apollo/client'

const GET = gql`
  query getOrganizations {
    organizations {
      id,
      name
    }
  }
`

export default {
  GET
}
