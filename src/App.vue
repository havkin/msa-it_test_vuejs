<template>
  <v-app>
    <v-app-bar app dense color="primary" dark>
      <v-toolbar-title>
        <router-link to="/" tag="span" class="pointer">Posts</router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text height="100%" tile>
          <!-- <v-icon left>mdi-{{item.icon}}</v-icon> -->
          New post
        </v-btn>
        <v-btn text height="100%" tile>
          <!-- <v-icon left>mdi-exit-to-app</v-icon>Logout -->
          Search
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

  components: {
  },

  data: () => ({
    //
  })
};
</script>

<style scoped>
.pointer {
  cursor: pointer;
}
</style>
