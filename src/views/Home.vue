<template>
  <v-container fluid>
    <PostCard v-for="post in posts" :post="post" :key="post.id"/>
  </v-container>
</template>

<script>
// @ is an alias to /src
import PostCard from '@/components/PostCard.vue'

export default {
  name: 'Home',
  components: {
    PostCard
  },
  computed: {

    posts() {
      console.log ( this.$store.getters.posts );
      return this.$store.getters.posts;
    },
    // loading() {
    //   return this.$store.getters.loading;
    // },

  },
}
</script>
