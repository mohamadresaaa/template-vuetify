<template>
  <div>
    <h1 class="font-weight-medium text-capitalize">about me</h1>
    <v-card v-for="(todo, index) in todoes" :key="index" class="mt-3">
        <v-layout row wrap class="pa-3">
          <v-flex xs12 md2>
            <v-responsive class="pa-3">
              <v-avatar size="150" class="grey lighten-2">
                <img :src="todo.image" :alt="todo.title">
              </v-avatar>
            </v-responsive>
          </v-flex>
          <v-flex xs12 md10>
            <div class="grey--text mb-1">Mohamadreza Mosalli</div>
            <v-divider></v-divider>
            <div class="mt-3">{{todo.content}}</div>
          </v-flex>
        </v-layout>
    </v-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todoes: [
        { 
          title: 'Design a new website',
          image: 'https://avatars3.githubusercontent.com/u/41260098?s=460&v=4',
          due: '1st Jan 2019',
          status: 'uncomplete',
          content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'
        }
      ]
    }
  }
}
</script>