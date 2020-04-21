import 'https://unpkg.com/vue'
import { Core as Vuebase } from './vuebase.js'

var firebaseConfig = { 
    //get it from your firebase console :)
}

Vue.use(Vuebase, firebaseConfig)

window.vm = new Vue({
    el : '#app',
    data : {  },
    database:{
        name : 'testData/name'
    },
})