export const queryPosts = `
  query Posts {
    posts {
      nodes {
        databaseId
        uri
        title
        excerpt
        date
        featuredImage {
          node {
            sourceUrl
            altText
            mediaDetails {
              width
              height
            }
          }
        }
      }
    }
  }
`

export const queryPost = `
  query getPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
    }
  }
`
