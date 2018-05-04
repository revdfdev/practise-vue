new Vue({
  el: "#app",
  data: {
    title: "Hello world!",
    attachRed: false,
    attachGreen: false,
    attachBlue: false,
    attachYellow: false,
    color: 'green'
  },

  computed: {
      firstBlockClass: function() {
          return {
              red: this.attachRed,
              maroon: !this.attachRed
          }
      },

      secondBlockClass: function() {
          return {
              green: this.attachGreen,
              'light-green': !this.attachGreen
          }
      },

      thirdBlockClass: function() {
          return {
              blue: this.attachBlue,
              lightblue: !this.attachBlue
          }
      },

      fourthBlockClass: function() {
          return {
              yellow: this.attachYellow,
              orange: !this.attachYellow
          }
      }
  }
});