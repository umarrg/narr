<template>
  <v-container style="max-width: 600px;">
    <v-timeline dense clipped>
      <v-timeline-item
        fill-dot
        class="white--text mb-12"
        color="green"
        large
      >
        <template v-slot:icon>
          <span>narr</span>
        </template>
        <v-text-field
          v-model="input"
          hide-details
          flat
          label="Leave a comment..."
          solo
          @keydown.enter="comment"
        >
          <template v-slot:append>
            <v-btn
              class="mx-0"
              depressed
              @click="comment"
            >
              Post
            </v-btn>
          </template>
        </v-text-field>
      </v-timeline-item>

      <v-slide-x-transition
        group
      >
        <v-timeline-item
          v-for="event in timeline"
          :key="event.id"
          class="mb-4"
          color="pink"
          small
        >
          <v-row justify="space-between">
            <v-col cols="7" v-text="event.text"></v-col>
            <v-col class="text-right" cols="5" v-text="event.time"></v-col>
          </v-row>
        </v-timeline-item>
      </v-slide-x-transition>

      <v-timeline-item
        class="mb-6"
        hide-dot
      >
        <span>TODAY</span>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="grey"
        icon-color="grey lighten-2"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</v-col>
          <v-col class="text-right" cols="5">15:26 pm</v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            <v-chip
              class="white--text ml-0"
              color="purple"
              label
              small
            >
              APP
            </v-chip>
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
          </v-col>
          <v-col class="text-right" cols="5">15:25 pm</v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="grey"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
          </v-col>
          <v-col class="text-right" cols="5">15:25 pm</v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        hide-dot
      >
        <v-btn
          class="mx-0"
          color="white"
        >
          email
        </v-btn>
      </v-timeline-item>

      <v-timeline-item
        class="mb-4"
        color="grey"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
          </v-col>
          <v-col class="text-right" cols="5">15:25 am</v-col>
        </v-row>
      </v-timeline-item>

      <v-timeline-item
        color="grey"
        small
      >
        <v-row justify="space-between">
          <v-col cols="7">
            Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod
          </v-col>
          <v-col class="text-right" cols="5">15:25 am</v-col>
        </v-row>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>

<script>
  export default {
      name: 'chat',
    data: () => ({
      events: [],
      input: null,
      nonce: 0,
    }),

    computed: {
      timeline () {
        return this.events.slice().reverse()
      },
    },

    methods: {
      comment () {
        const time = (new Date()).toTimeString()
        this.events.push({
          id: this.nonce++,
          text: this.input,
          time: time.replace(/:\d{2}\sGMT-\d{4}\s\((.*)\)/, (match, contents, offset) => {
            return ` ${contents.split(' ').map(v => v.charAt(0)).join('')}`
          }),
        })

        this.input = null
      },
    },
  }
</script>