const {
    createApp
} = Vue

createApp({

    data(){
        return {
            // array delle mail inizialmente vuoto
            arrayMails: [],
        }
    },
    methods: {
        //creo il metodo per generare le 10 mail e inserirle nell'array
        generateMails(){
            // ciclo for con 10 iterazioni 
            for(i=0; i<10; i++){
                // utilizzo l'API per generare una mail casuale 
                axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((result) => {
                    // definisco la mail in una costante 
                    const mail = result.data.response;
                    // pusho la mail generata nell'array 
                    this.arrayMails.push(mail)
                })
            }
            console.log(this.arrayMails);
        }
    },

}, ).mount('#app')