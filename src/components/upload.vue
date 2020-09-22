<template>
<div class=" d-flex justify-center align-center upload">
  <v-row>
    <v-col fill-height cols="12">
      <v-card align-center height="400" width="500" mb-4 justify-center centered class="teal darken-4">
        <v-file-input
          v-model="files"
          placeholder="multiple upload"
          label
          multiple
          prepend-icon="mdi-upload"
          width="400"
        >
          <template v-slot:selection="{ text }">
            <v-chip small label color="primary">{{ text }}</v-chip>
          </template>
        </v-file-input>
      </v-card>
      </v-col>
  </v-row>
</div>
</template>

<script>
export default {
  name: "upload",
  data: () => ({
    files: [],
  }),
};
</script>
<style scoped>
.upload {
    margin-top: 250px !important;
    margin-left: 300px !important;
}
</style>