<script>
  export let post
  console.log(post)
</script>

<article>
  <h1>{post.title}</h1>
  {@html post.content}
</article>
