<template>
  <div>
    <h1 class="font-weight-medium text-capitalize">todoes</h1>
    <v-card v-for="(todo, index) in todoes" :key="index" class="mt-3">
        <v-layout row wrap :class="`pa-3 project ${todo.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Content</div>
            <div>{{todo.content}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{todo.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div>
              <v-chip small :class="`${todo.status} white--text caption`">{{todo.status}}</v-chip>
            </div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div class="text-xs-center">
              <v-btn router to="/todoes/edit" fab dark small color="primary">
                <v-icon dark>edit</v-icon>
              </v-btn>
              <v-btn fab dark small color="red">
                <v-icon dark>delete</v-icon>
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
    </v-card>
  </div>
</template>

<style>
  .project.complete{
    border-left: 4px solid #2ecc71;
  }
  .project.ongoing{
    border-left: 4px solid #f39c12;
  }
  .project.overdue{
    border-left: 4px solid #e74c3c;
  }

  .v-chip.complete{
    background-color: #2ecc71;
  }
  .v-chip.ongoing{
    background-color: #f39c12;
  } 
  .v-chip.overdue{
    background-color: #e74c3c;
  }
</style>

<script>
export default {
  data() {
    return {
      todoes: [
        { title: 'Design a new website', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  }
}
</script>