<template>
  <div>
    <h1 class="font-weight-medium text-capitalize">todoes</h1>
    <v-layout row wrap class="mb-3">
        <v-tooltip bottom>
            <v-btn router to="/todoes/add" slot="activator" flat color="grey">
                <v-icon small left>create_new_folder</v-icon>
                <span class="caption text-capitalize">new todo</span>
            </v-btn>
            <span>Create a new todo</span>
        </v-tooltip>
    </v-layout>
    <v-card v-for="(todo, index) in todoes" :key="index" class="mb-3">
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
                <v-btn v-if="todo.status == 'uncomplete'" fab dark small color="success">
                    <v-icon dark>done</v-icon>
                </v-btn>
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
  .project.uncomplete{
    border-left: 4px solid #e74c3c;
  }

  .v-chip.complete{
    background-color: #2ecc71;
  }
  .v-chip.uncomplete{
    background-color: #e74c3c;
  }
</style>

<script>
export default {
  data() {
    return {
      todoes: [
        { title: 'Design a new website', due: '1st Jan 2019', status: 'uncomplete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', due: '20th Oct 2018', status: 'uncomplete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  }
}
</script>