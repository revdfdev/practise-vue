new Vue({
  el: "#app",
  data: {
    title: "Hello world!",
    attachRed: false,
    attachGreen: false,
    attachBlue: false,
    attachYellow: false,
    color: "green"
  },

  computed: {
    firstBlockClass: function() {
      return {
        red: this.attachRed,
        maroon: !this.attachRed
      };
    },

    secondBlockClass: function() {
      return {
        green: this.attachGreen,
        "light-green": !this.attachGreen
      };
    },

    thirdBlockClass: function() {
      return {
        blue: this.attachBlue,
        lightblue: !this.attachBlue
      };
    },

    fourthBlockClass: function() {
      return {
        yellow: this.attachYellow,
        orange: !this.attachYellow
      };
    }
  }
});


new Vue({
    el: '#app2',
    data: {
        color: 'gray',
        width: 100,
        height: 100
    },
    computed: {
        myStyle: function() {
            return { backgroundColor: this.color, width: this.width + "px", height: this.height + "px" };
        }
    }
});