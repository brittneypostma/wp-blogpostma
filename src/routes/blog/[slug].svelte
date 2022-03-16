<script context="module">
  const query = `
  query getPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
    }
  }
  `
  export async function load({ params, fetch }) {
    const res = await fetch('https://sveltepress.wpengine.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: {
          slug: params.slug,
        },
      }),
    })

    if (res.ok) {
      const resObj = await res.json()
      const post = resObj.data
      return {
        props: post,
      }
    }
  }
</script>

<script>
  export let post
</script>

<article>
  <h1>{post.title}</h1>
  {@html post.content}
</article>
