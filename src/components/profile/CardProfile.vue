<template>
  <v-card class="mx-auto" max-width="644" outlined>
    <v-list-item three-line>
      <v-list-item-avatar tile size="100" color="grey"></v-list-item-avatar>

      <v-list-item-content>
        <div class="overline mb-4">Perfil</div>
        <v-list-item-title class="headline mb-1"></v-list-item-title>
        <v-list-item-subtitle
          >Greyhound divisely hello coldly fonwderfully</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>

    <v-card-actions>
      <v-btn text>Button</v-btn>
      <v-btn text>Button</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    cardData: {},
    perfil: "src/assets/img/iconfinder_Werewolf_2913109.png"
  }),
  async created() {
    await axios.get("http://localhost:3000/data").then(function(response) {
      const card = response.data;
      console.log(card)
      this.cardData = card;
    });
  }
};
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none;
}

.t-w {
  color: white !important;
}
</style>
