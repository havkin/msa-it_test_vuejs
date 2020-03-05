<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Posts</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>

            <v-text-field
              label="Search"
              outlined
              dense
              hide-details
              class="my-auto mx-5"
              v-model.trim="value"
              @input="filter(value)"
              @blur="clearFilter"
            ></v-text-field>

        <v-btn
          text
          height="100%"
          tile
          to="/new"
        >
          New post
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: "App",

  data() {
    return {
      value: '',
    };
  },
  methods: {
    filter( str ) {
      this.$store.commit( 'filterPosts', str );
    },
    clearFilter() {
      this.value = '';
      this.$store.commit( 'filterPosts', '' );
    },
  },
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
