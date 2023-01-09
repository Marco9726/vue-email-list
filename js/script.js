const {
    createApp
} = Vue

createApp({

    data(){
        return {
            arrayMails: []
        }
    },
    methods: {
        generateMails(){
            for(i=0; i<10; i++){
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    this.arrayMails.push(result.data.response)
                })
            }
            console.log(this.arrayMails);
        }
    },

}, ).mount('#app')