var myapp = new Vue({
  el: '#app',
  data: {
    totalSalary:257000,
    examples: [
      { price: 250000},
      { price: 300000},
      { price: 350000},
      { price: 400000},
      { price: 650000},
      { price: 900000},
      { price: 1200000},
    ],
    flokkur: [
    { ratio:1,   jobs: 'Verkamenn'},
    { ratio:1.5, jobs: 'Kennarar, lögreglan'},
    { ratio:2,   jobs: 'Sjúkraliðar'},
    { ratio:3,   jobs: 'Læknar'},
    { ratio:10,  jobs: 'Forstjórar lífeyrissjóða. Bankastjórar'},
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
  }
})
