<template>
    <div>
        <h1 class="font-weight-medium text-capitalize">my notes</h1>
        <v-layout row wrap class="mb-3">
            <v-tooltip bottom>
              <v-btn router to="/notes/add" slot="activator" flat color="grey">
                  <v-icon small left>create_new_folder</v-icon>
                  <span class="caption text-capitalize">new note</span>
              </v-btn>
              <span>Create a new note</span>
            </v-tooltip>
            <v-tooltip bottom>
                <v-btn slot="activator" flat color="grey" @click="sortBy('title')">
                    <v-icon small left>sort_by_alpha</v-icon>
                    <span class="caption text-capitalize">sort title</span>
                </v-btn>
                <span>Sort by title of note</span>
            </v-tooltip>
        </v-layout>

      <v-card v-for="note in notes" :key="note.notes" class="mb-3">
        <v-layout row wrap :class="`pa-3 project ${note.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Note title</div>
            <div class="primary--text">{{note.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{note.due}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="text-xs-center">
              <v-btn fab dark small color="black">
                <v-icon dark>visibility</v-icon>
              </v-btn>
              <v-btn router to="/notes/edit" fab dark small color="primary">
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
      notes: [
        { title: 'Design a new website', due: '1st Jan 2019', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', due: '10th Jan 2019', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', due: '20th Dec 2018', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', due: '20th Oct 2018', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  },
  methods: {
    sortBy(prop) {
      return this.notes.sort((a, b) => a[prop] < b[prop] ? -1 : 1);
    }
  },
}
</script>