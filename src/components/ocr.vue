<template>
  <div>
    <div class="text-center mb-4">
      <v-btn
        color="green"
        @click="alert = !alert"
      >
        OCR
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
      name: 'ocr',
    data () {
      return {
        alert: true,
      }
    },
  }
</script>