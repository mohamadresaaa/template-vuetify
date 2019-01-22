<template>
  <div>
    <h1 class="font-weight-medium text-capitalize">blog</h1>
    <v-container fill-height fluid>
      <v-layout justify-center align-center wrap>
        <v-flex xs12>
          <v-container grid-list-xl pa-0>
            <v-layout row wrap>
              <v-flex xs12 sm6 md4 v-for="(article, index) in articles" :key="index">
                <v-card>
                  <v-img class="white--text" height="200px" src="https://cdn.vuetifyjs.com/images/cards/docks.jpg">
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="grey--text">{{article.due}}</span><br>
                      <span>{{article.title}}</span>
                      <div class="mt-3">{{article.content}}</div>
                    </div>
                  </v-card-title>
                  <v-card-actions>
                    <v-btn disabled flat color="gery" class="text-capitalize">
                    {{ article.person }}
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn color="primary" class="text-capitalize">read more</v-btn>
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      articles: [
        { title: 'Design a new website', person:'mohamadreza mosalli', due: '1st Jan 2019', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Code up the homepage', person:'saeed oraji', due: '10th Jan 2019', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Design video thumbnails', person:'ali mohamadi', due: '20th Dec 2018', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
        { title: 'Create a community forum', person:'the ninja', due: '20th Oct 2018', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      ]
    }
  }
}
</script>
