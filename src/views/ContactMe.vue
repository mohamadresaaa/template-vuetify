<template>
  <div>
    <h1 class="subheading ">my contacts</h1>
    <v-container fluid class="my-1">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="contact in contacts" :key="contact.name">
          <v-card class="text-xs-center ma-3">
            <v-responsive class="pa-3">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="contact.image" :alt="contact.name">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">
                {{ contact.name }}
              </div>
              <div class="grey--text">
                {{ contact.role }}
              </div>
            </v-card-text>
            <v-card-actions>
              <v-btn small flat color="gery">
                <v-icon small left>message</v-icon>
                <span class="text-lowercase">Message</span>
              </v-btn>
            </v-card-actions>
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
        { name: 'mohamadreza mosalli', role: 'web developer', image: 'https://randomuser.me/api/portraits/men/83.jpg' },
        { name: 'ali', role: 'CEO', image: 'https://randomuser.me/api/portraits/men/84.jpg' },
        { name: 'mohamad', role: 'web designer', image: 'https://randomuser.me/api/portraits/men/85.jpg' }
      ]
    }
  }
}
</script>

