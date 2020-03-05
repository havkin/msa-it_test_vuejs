<template>
  <v-container fluid v-if="!loading">
    <PostCard v-for="post in posts" :post="post" :key="post.id"/>
  </v-container>
  <v-container v-else>
    <Loading />
  </v-container>
</template>

<script>
import PostCard from '@/components/PostCard.vue'
import Loading from '@/components/Loading.vue'

export default {
  name: 'Home',

  computed: {

    posts() {
      console.log ( this.$store.getters.posts );
      return this.$store.getters.posts;
    },
    loading() {
      return this.$store.getters.loading;
    },

  },
  components: {
    PostCard,
    Loading,
  },
}
</script>
