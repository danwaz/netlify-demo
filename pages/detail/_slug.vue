<template>
  <section class="container">
    <div>
      <h1 class="title">
        {{ content.title }}
      </h1>
      <div v-html="$md.render(content.body)"></div>
      <img :src="content.thumbnail" />
    </div>
  </section>
</template>

<script>
export default {
  asyncData: async ({ route }) => {
    return {
      content: await require(`@/content${route.path}.json`)
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
