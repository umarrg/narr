<template>
  <v-app >
    <navbar />
   <v-content>
      <router-view></router-view>
    </v-content>

  </v-app>
</template>
<script>
import navbar from '../src/components/navbar'


export default {
  name: 'app', 
  components: {
    navbar,
   
  }

}
</script>