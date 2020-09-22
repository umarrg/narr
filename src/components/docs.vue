<template>
  <div>
    <div class="text-center mb-4">
      <v-btn
        color="green"
        @click="alert = !alert"
      >
        DOCUMENT CONVERTION
      </v-btn>
    </div>
    <v-alert
      :value="alert"
      color="teal darken-4"
      dark
      border="top"
      icon="mdi-home"
      transition="scale-transition"
    >
      Under construction
    </v-alert>
  </div>
</template>

<script>
  export default {
      name: 'docs',
    data () {
      return {
        alert: true,
      }
    },
  }
</script>