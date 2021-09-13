
const Offer = {
    data() {
      return {
        "offers": [
                {
                    "id": 1,
                    "name": "Jane Doe",
                    "offer": 100000,
                    "bonus": 9000,
                    "company": "EY",
                    "offerDate": "2021-10-05"
                },
                {
                    "id": 2,
                    "name": "Jordan St",
                    "offer": 87000,
                    "bonus": 3000,
                    "company": "IU",
                    "offerDate": "2021-09-25"
                }
            ]
        }
    }
  }
  
Vue.createApp(Offer).mount('#offerApp');