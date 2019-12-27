<template>
  <v-card class="mx-auto" max-width="744" outlined>
    <v-col class="main-theme">
      <p class="float-right">
        <v-img
          class="icons"
          src="@/assets/img/iconfinder_Adventure_Map_2913095.png"
        />
      </p>
      <p class="float-right">
        <v-img class="icons" src="@/assets/img/Spell_Scroll_2913111.png" />
      </p>
    </v-col>
    <v-list-item three-line>
      <v-list-item-avatar tile size="100" color="grey">
        <v-img src="@/assets/img/iconfinder_Orc_2913114.png" />
      </v-list-item-avatar>

      <v-list-item-content>
        <div class="overline mb-4">Perfil</div>

        <v-list-item-title class="headline mb-1">
          {{ cardData.display_name }}</v-list-item-title
        >
        <p>{{ cardData.username }} - Nível 2 - Front end</p>
        <v-list-item-subtitle>{{
          cardData.human_readable_website
        }}</v-list-item-subtitle>
        <v-list-item-subtitle
          ><i class="devicon-visualstudio-plain f-z-25"></i> -<b>
            Plugin usado :</b
          >
          {{ cardData.last_plugin_name }}</v-list-item-subtitle
        >
        <v-list-item-subtitle>
          <i class="devicon-vuejs-plain-wordmark colored f-z-25"></i>
          <i class="devicon-javascript-plain colored f-z-25"></i>
          <b> último Check In em :</b>
          {{ cardData.last_heartbeat_at | formatDate }}</v-list-item-subtitle
        >
      </v-list-item-content>
    </v-list-item>
    <v-card-title> <span class="text-center"> Atributos </span> </v-card-title>
    <v-card-text>
      <ve-radar :data="chartData" :settings="chartSettings"></ve-radar>
    </v-card-text>

    <v-card-actions>
      <v-btn text> Editar </v-btn>
      <v-btn text> Convidar </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import Api from "@/services/api.js";
import VeRadar from "v-charts/lib/radar.common";
export default {
  props: {
    source: String
  },
  components: {
    VeRadar
  },
  data() {
    this.chartSettings = {
      dimension: ["js"],
      metrics: ["cost", "profit", "growthRate"],
      dataType: { growthRate: "percent" }
    };
    return {
      drawer: null,
      cardData: {},
      perfil: "src/assets/img/iconfinder_Werewolf_2913109.png",
      chartData: {
        columns: ["js", "scrum", "projects", "framework", "people"],
        rows: [
          {
            js: "01/01",
            cost: 1523,
            profit: 1523,
            growthRate: 0.12,
            people: 100
          },
          {
            js: "01/02",
            cost: 1223,
            profit: 1523,
            growthRate: 0.345,
            people: 100
          },
          {
            js: "01/03",
            cost: 2123,
            profit: 1523,
            growthRate: 0.7,
            people: 100
          }
        ]
      }
    };
  },

  async created() {
    const service = await Api.get("http://localhost:3000/data");
    this.cardData = service.data;
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
.f-z-25 {
  font-size: 25px !important;
}
.icons {
  width: 45px !important;
  height: 45px !important;
}
.main-theme {
  background: #a03774;
}
.float-right {
  float: right;
}
</style>
