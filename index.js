var myapp = new Vue({
  el: '#app',
  data: {
    totalSalary:257000,
    examples: [
      { price: 257000},
      { price: 300000},
      { price: 350000},
      { price: 400000},
      { price: 650000},
      { price: 900000},
      { price: 1200000},
    ],
    category: [
    { ratio:1.0,      jobs: 'Verkamenn'},
    { ratio:1.5,      jobs: 'Lögreglumenn?'},
    { ratio:1.6,      jobs: 'Grunnskólakennarar'},
    { ratio:1.712062, jobs: 'Flugvirkjar 2017 (ekki opinbert starf)'},
    { ratio:1.8,      jobs: 'Læknar'},
    { ratio:4.0,      jobs: 'Alþingismenn'},
    { ratio:5.027,    jobs: 'Skálholtsbiskup'},
    { ratio:6.042,    jobs: 'Biskup Íslands'},
    { ratio:7.1,      jobs: 'Ráðherra'},
    { ratio:7.9,      jobs: 'Forsætisráðherra'},
    { ratio:7.1,      jobs: 'Forseti Alþingis'},
    { ratio:10.0,     jobs: 'Forstjórar lífeyrissjóða. Bankastjórar'},
    { ratio:11.5,     jobs: 'Forseti Íslands'},
    ],
  },
  computed: {
    personalMonth: function(){
      return Math.round(this.personalDiscountYear / 12);
    },
  },
  methods: {
    updateTotalSal: function(number){
      this.totalSalary = number;
    },
    increment: function(index){
      var temp = this.category[index].ratio * 10;
      temp += 1;
      temp /= 10;

      this.category[index].ratio = temp.toPrecision(3);
    },
    decrement: function(index){
      this.category[index].ratio -= 0.1
      this.category[index].ratio = this.category[index].ratio.toPrecision(3);
    }
  }
})
