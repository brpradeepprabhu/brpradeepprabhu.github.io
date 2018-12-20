<template>
  <v-app :dark="dark">
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <span>Shopping cart</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-select :items="items" label="Themes" @change="updateThemes($event)"></v-select>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
    <template>
      <v-footer class="pa-3">
        <div>
          Developed by brpradeepprabhu
        </div>
        <v-spacer></v-spacer>
        <div>&copy; {{ new Date().getFullYear() }}</div>
      </v-footer>
    </template>
  </v-app>
</template>

<script>
export default {
    name: "App",
    components: {},
    data() {
        return {
            items: ["light", "dark"],
            dark: false
        };
    },
    methods: {
        updateThemes: function ($event) {
            this.dark = $event === "dark";
        }
    }
};
</script>
