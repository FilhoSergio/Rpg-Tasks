<template>
  <v-container style="max-width: 800px">
    <h2 class="display-1 success--text pl-4">
      Tasks:&nbsp;
      <v-fade-transition leave-absolute>
        <span :key="`tasks-${tasks.length}`">
          {{ tasks.length }}
        </span>
      </v-fade-transition>
    </h2>

    <v-text-field
      v-model="task"
      label="Adicionar Task"
      solo
      @keydown.enter="create"
    >
      <v-fade-transition v-slot:append>
        <v-icon v-if="task" @click="create">
          add_circle
        </v-icon>
      </v-fade-transition>
    </v-text-field>
    <!-- <v-toolbar color="#a03774" dark>
      <v-toolbar-title></v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-view-module</v-icon>
      </v-btn>
    </v-toolbar> -->

    <v-divider class="mt-4"></v-divider>

    <v-row class="my-1" align="center">
      <strong class="mx-4 info--text text--darken-3">
        Restantes: {{ remainingTasks }}
      </strong>

      <v-divider vertical></v-divider>

      <strong class="mx-4 black--text">
        Completas: {{ completedTasks }}
      </strong>

      <v-spacer></v-spacer>

      <v-progress-circular :value="progress" class="mr-2"></v-progress-circular>
    </v-row>

    <v-divider class="mb-4"></v-divider>

    <v-card v-if="tasks.length > 0">
      <v-slide-y-transition class="py-0" group tag="v-list">
        <template v-for="(task, i) in tasks">
          <v-divider v-if="i !== 0" :key="`${i}-divider`"></v-divider>

          <v-list-item :key="`${i}-${task.text}`">
            <v-list-item-action>
              <v-checkbox v-model="task.done" color="info darken-3">
                <template v-slot:label>
                  <div
                    :class="(task.done && 'grey--text') || 'text--primary'"
                    class="ml-4"
                    v-text="task.text"
                  ></div>
                </template>
              </v-checkbox>
            </v-list-item-action>

            <v-spacer></v-spacer>

            <v-scroll-x-transition>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-icon color="grey" class="pointer" dark v-on="on">
                    more_vert
                  </v-icon>
                </template>
                <span>Opções</span>
              </v-tooltip>
              <v-icon v-if="task.done" color="success">
                check
              </v-icon>
              <v-icon v-if="!task.done" class="pointer" color="red">
                close
              </v-icon>
            </v-scroll-x-transition>
          </v-list-item>
        </template>
      </v-slide-y-transition>
    </v-card>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          done: false,
          text: "Tarefa a"
        },
        {
          done: false,
          text: "Tarefa b"
        }
      ],
      dialog: false,
      task: null
    };
  },
  computed: {
    completedTasks() {
      return this.tasks.filter(task => task.done).length;
    },
    progress() {
      return (this.completedTasks / this.tasks.length) * 100;
    },
    remainingTasks() {
      return this.tasks.length - this.completedTasks;
    }
  },

  methods: {
    // TODO: DELETE METHODS
    // delete(){

    // },
    create() {
      this.tasks.push({
        done: false,
        text: this.task
      });

      this.task = null;
    }
  }
};
</script>
<style>
.pointer {
  cursor: pointer !important;
}
</style>
