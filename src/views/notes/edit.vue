<template>
    <div>
        <v-card>
            <v-card-title>
                <h2>Edit : '{title note}'</h2>
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field v-model="title" label="Title" prepend-icon="title"></v-text-field>
                    <v-textarea v-model="content" label="Content" prepend-icon="edit"></v-textarea>
                    <v-spacer></v-spacer>
                    <v-btn flat @click="submit" class="orange white--text mt-3 mr-1">Edit</v-btn>
                    <v-btn flat router to="/notes" class="black white--text mt-3 mx-1">Back</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
export default {

}
</script>