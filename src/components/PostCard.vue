<template>
  <v-card class="mx-auto" color="#26c6da" dark max-width="100%">
    <v-card-title>
      <span class="title font-weight-light">{{post.title}}</span>
    </v-card-title>

    <v-card-text class="headline font-weight-bold">{{ post.body }}</v-card-text>

    <v-card-actions>
      <v-list-item>
        <!-- <v-list-item-avatar color="grey darken-3">
          <v-img
            class="elevation-6"
            src="https://avataaars.io/?avatarStyle=Transparent&topType=ShortHairShortCurly&accessoriesType=Prescription02&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=White&eyeType=Default&eyebrowType=DefaultNatural&mouthType=Default&skinColor=Light"
          ></v-img>
        </v-list-item-avatar>-->

        <v-list-item-content>
          <v-list-item-title>User: {{ post.userId }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-btn
        color="blue-grey"
        class="ma-2 white--text"
        fab
      >
        <v-icon dark>mdi-delete-forever</v-icon>
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["post"]
};
</script>

<style>
</style>