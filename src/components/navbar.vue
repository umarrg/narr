<template>
<nav>
    <v-navigation-drawer v-model="drawer" dark="" app class="teal darken-2">
        <v-layout colomn align-center>
            <v-flex class="at-10 mb-1">
                <v-avatar>
                    
                </v-avatar>
            </v-flex>
        </v-layout>
        <v-list>
        <v-list-item v-for="link in links" :key="link.text" route  link :to="link.path" active-class="border">
        <v-list-item-action>
            <v-icon>{{link.icon}}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title>{{link.text}}</v-list-item-title>
             </v-list-item-content>
        </v-list-item >
        </v-list>
    </v-navigation-drawer>
</nav>
    
</template>
<script>

export default {
    data:()=>({
        drawer : true,
        links:[
            {icon:'fas fa-home', text:'home', path: '/'},
            {icon:'fas fa-upload', text:'upload', path: '/upload'},
            {icon:'fas fa-comment-alt', text:'chat', path: '/chat'},
            {icon:'far fa-user', text:'profile', path: '/profile'},
            {icon:'fab fa-accessible-icon', text:'ocr', path: '/ocr'},
            {icon:'fas fa-book', text:'document convertion', path: '/docs'},
            {icon:'fas fa-video', text:'video coference', path: '/video'},
        ]
    })
}
</script>
<style scope>

P {
   color: honeydew,
   
   
}
</style>
