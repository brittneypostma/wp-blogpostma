<script context="module">
  const query = `
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
  export async function load({ fetch }) {
    const res = await fetch('https://sveltepress.wpengine.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })

    if (res.ok) {
      const resObj = await res.json()
      const posts = resObj.data.posts.nodes
      return {
        props: {
          posts,
        },
      }
    }
  }
</script>

<script>
  export let posts
</script>

<h1>Blog Postma</h1>

{#each posts as post}
  <a href="{`/blog${post.uri}`}">
    <h2>{post.title}</h2>
  </a>
  {@html post.excerpt}
{/each}
