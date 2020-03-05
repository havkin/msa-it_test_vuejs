<template>
  <v-container fluid v-if="!loading">
    <PostCard v-for="post in posts" :post="post" :key="post.id" />
    <div class="text-center">
      <v-pagination 
        v-model="page"
        :length="pagesQnt"
        :total-visible="7"
      ></v-pagination>
    </div>
  </v-container>
  <v-container v-else>
    <Loading />
  </v-container>
</template>

<script>
import PostCard from "@/components/PostCard.vue";
import Loading from "@/components/Loading.vue";

export default {
  name: "Home",
  data() {
    return {
      page: 1,
      postsOnPage: 10,
    };
  },

  computed: {
    posts() {
      const allPosts = this.$store.getters.posts;
      const start = (this.page - 1) * this.postsOnPage;

      return allPosts.slice(start, (start + this.postsOnPage));
    },
    pagesQnt () {
      const allPosts = this.$store.getters.posts;
      return Math.ceil(allPosts.length / this.postsOnPage)
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
  components: {
    PostCard,
    Loading
  }
};
</script>
