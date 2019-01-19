<template>
  <div>
    <h1 class="subheading ">my contacts</h1>
    <v-container fluid class="my-1">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="contact in contacts" :key="contact.name">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pa-3">
              conatact image
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ contact.name }}
              </div>
              <div class="grey--text">
                {{ contact.role }}
              </div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contacts: [
        { name: 'mohamadreza mosalli', role: 'web developer' },
        { name: 'ali', role: 'CEO' },
        { name: 'mohamad', role: 'web designer' }
      ]
    }
  }
}
</script>

