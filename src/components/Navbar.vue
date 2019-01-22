<template>
    <nav>
        <v-toolbar app dark color="primary">
            <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title class="headline text-uppercase">
                <span class="white--text">hexzm</span>
                <span class="font-weight-light text-lowercase">.org</span>
            </v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn class="hidden-sm-and-down" color="white darken-3" light router :to="authLinks[0].route">
                {{authLinks[0].text}}
                <v-icon dark right>{{authLinks[0].icon}}</v-icon>
            </v-btn>
            <v-btn class="hidden-sm-and-down" flat router :to="authLinks[1].route">
                <span>{{authLinks[1].text}}</span>
            </v-btn>
        </v-toolbar>
        <v-navigation-drawer app v-model="drawer" class="blue accent-2">
            <v-layout column align-center>
                <v-flex class="mt-5 mb-5">
                    <v-avatar size="100">
                        <img class="text-lg-center" src="https://randomuser.me/api/portraits/men/85.jpg">
                    </v-avatar>
                    <span class="white--text subheading ml-2">Mohamadreza Mosalli</span>
                </v-flex>
            </v-layout>
            <v-list>
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

                <v-list-tile class="hidden-md-and-up" router to="/login">
                    <v-list-tile-action>
                        <v-icon class="white--text">
                            lock
                        </v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title class="white--text">
                            Login Or Register
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
        { icon: 'contact_support', text: 'Contact me', route: '/contact_me' },
      ],
      authLinks: [
        { icon: 'lock', text: 'Login', route: '/login' },
        { text: 'Register', route: '/register' }
      ]
    }
  }
}
</script>
