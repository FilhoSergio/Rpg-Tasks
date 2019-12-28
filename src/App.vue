<template>
  <v-app id="keep">
    <v-app-bar app clipped-left color="#a03774">
      <v-app-bar-nav-icon class="t-w" @click="drawer = !drawer" />
      <v-avatar>
        <img
          src="https://cdn3.iconfinder.com/data/icons/fantasy-and-role-play-game-adventure-quest/512/Crystal_Shard-512.png"
          alt="Logo"
        />
      </v-avatar>
      <span class="title ml-3 mr-5">
        <span class="font-weight-light t-w">Dev Rpg</span>
      </span>
      <v-spacer />
      <v-avatar color="red">
        <span class="white--text headline">FS</span>
      </v-avatar>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <v-row v-if="item.heading" :key="i" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn small text>edit</v-btn>
            </v-col>
          </v-row>
          <v-divider v-else-if="item.divider" :key="i" dark class="my-4" />
          <v-list-item v-else :key="i" link>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">
                {{ item.text }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <!-- <v-container fluid class="grey lighten-4 fill-height"> -->
      <v-row>
        <v-col sm="12" md="12">
          <CardProfile></CardProfile>
        </v-col>
      </v-row>

      <v-row>
        <v-col sm="4" class="pa-2">
          <Habits></Habits>
        </v-col>
        <v-col sm="4" class="pa-2">
          <Checklist></Checklist>
        </v-col>
        <v-col sm="4" class="pa-2">
          <Habits></Habits>
        </v-col>
      </v-row>
      <!-- </v-container> -->
    </v-content>
  </v-app>
</template>

<script>
import CardProfile from "@/components/profile/CardProfile.vue";
import Habits from "@/components/lists/Habits.vue";
import Checklist from "@/components/lists/Checklist.vue";
// import axios from "axios";

export default {
  components: {
    CardProfile,
    Habits,
    Checklist
  },
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    items: [
      { icon: "lightbulb_outline", text: "Tasks" },
      { icon: "touch_app", text: "Lembretes" },
      { divider: true },
      { icon: "archive", text: "Archive" },
      { icon: "delete", text: "Trash" },
      { divider: true },
      { icon: "settings", text: "Configurações" },
      { icon: "chat_bubble", text: "Trash" },
      { icon: "help", text: "Help" },
      { icon: "phonelink", text: "App downloads" },
      { icon: "keyboard", text: "Keyboard shortcuts" }
    ],
    cardData: {}
  }),
  created() {},
  methods: {}
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
