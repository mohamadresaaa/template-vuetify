<template>
    <nav>
        <v-toolbar app dark color="blue-grey darken-4">
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span class="amber--text">{ mosalli }</span>
                <span class="font-weight-light text-lowercase">.org</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn color="yellow darken-3" dark href="/login">
                login
                <v-icon dark right>lock</v-icon>
            </v-btn>
            <v-btn flat href="/register">
                <span>register</span>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="blue-grey darken-3">
            <v-list>
                <v-list-tile avatar>
                    <v-list-tile-avatar>
                        <img src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-list-tile-avatar>
                </v-list-tile>
                <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
                    <v-list-tile-action>
                        <v-icon class="white--text">
                            {{link.icon}}
                        </v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">
                            {{link.text}}
                        </v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
    </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      links: [
        { icon: 'home', text: 'Home', route: '/' },
        { icon: 'library_books', text: 'Blog', route: '/Blog' },
        { icon: 'person', text: 'About me', route: '/about_me' },
        { icon: 'contact_support', text: 'Contact me', route: '/contact_me' }
      ]
    }
  }
}
</script>
