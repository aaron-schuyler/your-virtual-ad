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

const GET_FROM_ORGANIZATION = gql`
  query getLevels($organizationId: ID) {
    levels(organization_id: $organizationId) {
      id,
      gender,
      ageGroup {
        name
      }
    }
  }
`

export default {
  GET,
  GET_FROM_ORGANIZATION
}
