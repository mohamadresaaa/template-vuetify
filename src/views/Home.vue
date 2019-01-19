<template>
  <div>
    <h1>home page</h1>
    <v-container fluid class="my-5">
      <h1>sample for note :)</h1>
      <v-layout row wrap class="mb-3">
        <v-tooltip top>
          <v-btn slot="activator" small flat color="grey" @click="sortBy('title')">
            <v-icon small left>folder</v-icon>
            <span class="caption text-lowercase">By title</span>
          </v-btn>
          <span>Sort by title of note</span>
        </v-tooltip>

        <v-tooltip top>
          <v-btn slot="activator" small flat color="grey" @click="sortBy('person')">
            <v-icon small left>person</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
          <span>Sort by person of note</span>
        </v-tooltip>
      </v-layout>
      <v-card v-for="note in notes" :key="note.notes" class="mb-3">
        <v-layout row wrap :class="`pa-3 project ${note.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Note title</div>
            <div>{{note.title}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{note.person}}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{note.due}}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div>
              <v-chip small :class="`${note.status} white--text caption`">{{note.status}}</v-chip>
            </div>
          </v-flex>
        </v-layout>
      </v-card>

    </v-container>
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
        { title: 'Design a new website', person: 'The Net Ninja', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person: 'Chun Li', due: '10th Jan 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person: 'Ryu', due: '20th Dec 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person: 'Gouken', due: '20th Oct 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
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