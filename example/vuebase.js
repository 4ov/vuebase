import './lib/firebase-app.js'
import './lib/firebase-database.js'


  
  
  


var core = {
    install(Vue, config){
        var FB =   firebase.initializeApp(config);
        var db = FB.database()

        Vue.prototype.$set =  (key, value) =>{
            console.log(this.$watch);
            
        }
        

        Vue.mixin({

            data(){
                var x = this.$options.database
                var r = {}
                for(let i in x){ r[i] = null}                
                return r
            },
            beforeCreate(){     
                var desired = this.$options.database
                for(let i in desired){
                    db.ref(desired[i]).on('value', data =>{
                        this[i] = data.val()  
                        
                        if(typeof this[i] != 'object'){                            
                            
                            
                            this.$watch(i, ev=>{
                                db.ref(desired[i]).set(ev)
                                
                            })
                        }
                        
                        
                    })  
                }   
            },

            
        })

    }
}


export {
    core as Core
}


