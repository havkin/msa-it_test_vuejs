<template>
    <v-container>
    <v-row>
      <v-col cols="12" sm="6" offset-sm="3">
        <h1 class="text--secondary mb-3">Create new post</h1>
        <v-form v-model="valid">
         <v-text-field
            label="Your name"
            name="user"
            type="text"
            v-model="user"
            :rules="[v => !!v || 'Name is required']"
          />
          <v-text-field
            label="Post title"
            name="title"
            type="text"
            v-model="title"
            :rules="[v => !!v || 'Title is required']"
          />

          <v-textarea
            label="Post body"
            name="body"
            v-model="body"
            :rules="[v => !!v || 'Body is required']"
          />
        </v-form>
        <v-row justify="end">
           <v-btn 
            class="mr-4"
            @click="createPost"
            :disabled="!valid"
         >submit</v-btn>
            <v-btn
               @click="clearForm"
               color="warning"
            >clear</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
   data() {
    return {
      valid: false,
      user: '',
      title: '',
      body: '',
    };
  },
  methods: {
     createPost() {
        const newPost = {
           userId: this.user,
           title: this.title,
           body: this.body,
           id: this.$store.getters.lastPostId + 1
        }
        this.$store.commit( 'addPost', newPost )
        this.$router.push( '/')
     },
     clearForm() {
        this.user = ''
        this.title = ''
        this.body = ''
     },

  }
}
</script>

<style>

</style>