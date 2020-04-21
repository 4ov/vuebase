# vuebase
a basic firebase plugin for vue
***

## basic example

```js
Vue.use(Vuebase, firebaseConfig)

const vm = new Vue({
  el : '#app',
  data : { },
  
  database : {
  name : 'path/to/data'
  }
})
```
