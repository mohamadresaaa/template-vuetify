<template>
  <v-app>
    <v-toolbar app dark color="blue-grey darken-4">
      <v-toolbar-title class="headline text-uppercase">
        <span class="amber--text">{ mosalli }</span>
        <span class="font-weight-light text-lowercase">.org</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn color="yellow darken-3" dark>login
        <v-icon dark right>lock</v-icon>
      </v-btn>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
        <span class="mr-2">register</span>
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view>
      </router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      //
    }
  }
}
</script>
