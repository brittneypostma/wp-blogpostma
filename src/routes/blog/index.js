import { queryPosts } from '$lib/queries'

export const get = async () => {
  try {
    const res = await fetch('https://sveltepress.wpengine.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query: queryPosts }),
    })
    const resObj = await res.json()
    const posts = resObj.data.posts.nodes

    return {
      status: 200,
      body: { posts },
    }
  } catch (e) {
    return {
      status: 404,
      body: e.message,
    }
  }
}
