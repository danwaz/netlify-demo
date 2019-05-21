<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title">
        {{ content.title }}
      </h1>
      <h2 class="subtitle">{{ content.intro }}</h2>
      <img :src="content.photo" />

      <h3>All Posts</h3>
      <ul>
        <li v-for="post in allBlogPosts" :key="post._path">
          <img :src="post.image" />
          <nuxt-link :to="post._path">{{ post.title }}</nuxt-link>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import content from '@/content/home.json'

export default {
  data() {
    return {
      content: content
    }
  },

  computed: {
    allBlogPosts() {
      return this.$store.state.blogPosts
    }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

img {
  max-width: 800px;
  margin: 0 auto;
}
</style>
