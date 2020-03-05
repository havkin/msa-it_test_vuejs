<template>
  <v-card class="mx-auto my-2" color="#26c6da" dark max-width="100%">
    <v-card-title>
      <span class="title font-weight-light">{{post.title}}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">{{ post.body }}</v-card-text>

    <v-card-actions>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>User: {{ post.userId }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-btn
        color="blue-grey"
        outlined
        class="ma-2 white--text"
        fab
        @click="removePost(post.id)"
      >
        <v-icon dark>mdi-delete-forever</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["post"],
    methods: {
    removePost ( post ) {
      this.$store.commit('removePost', post)
    }
  }
};
</script>

<style>
</style>