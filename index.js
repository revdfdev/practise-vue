new Vue({
  el: "#app",
  data: {
    title: "Hello world!",
    link: "https://google.com",
    finishLink: '<a href="https://google.com">Google 2</a>'
  },
  methods: {
    sayHello: function() {
      this.title = "Hello";
      return this.title;
    }
  }
});

new Vue({
  el: "#app2",
  data: {
    counter: 0,
    x: 0,
    y: 0,
    buttonX: 0,
    buttonY: 0
  },
  methods: {
    increaseCounter: function(step, event) {
      this.counter += step + 11;
    },

    hoverButton: function(event) {
      this.buttonX = event.clientX;
      this.buttonY = event.clientY;
    },

    updateCoordinates: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    },

    alertMe: function(event) {
      alert(event.target.value);
    }
  }
});

new Vue({
  el: "#app3",
  data: {
    name: "Rehan"
  }
});

new Vue({
  el: "#app4",
  data: {
    counter: 0,
    secondCounter: 0
  },

  computed: {
    output: function() {
      return this.counter > 5 ? "Greater than 5" : "Less than 5";
    }
  },

  methods: {
    result: function() {
      return this.counter > 5 ? "Greater than 5" : "Less than 5";
    }
  }
});

new Vue({
  el: "#app5",
  data: {
    counter: 0,
    secondCounter: 0
  },

  computed: {
    output: function() {
      return this.counter > 5 ? "Greater than 5" : "Less than 5";
    }
  },

  watch: {
      counter: function(value) {
          var vm = this;
          setTimeout(function() {
              vm.counter = 0;
          }, 2000); 
      }
  },

  methods: {
    result: function() {
      return this.counter > 5 ? "Greater than 5" : "Less than 5";
    }
  }
});
