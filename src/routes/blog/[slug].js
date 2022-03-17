import { queryPost } from '$lib/queries'

export const get = async (req) => {
  const { slug } = req.params
  try {
    const res = await fetch('https://sveltepress.wpengine.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: queryPost,
        variables: {
          slug,
        },
      }),
    })
    const resObj = await res.json()
    const post = resObj.data

    return {
      status: 200,
      body: post,
    }
  } catch (e) {
    return {
      status: 404,
      body: e.message,
    }
  }
}
