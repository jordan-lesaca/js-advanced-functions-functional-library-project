const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arr, cb) {
      Object.values(arr).forEach(x => cb(x))
      return arr
    },

    map: function(arr, cb) {
      let newArr = []
      Object.values(arr).forEach( x => newArr.push(cb(x)))
      return newArr
    },

    reduce: function(arr, cb, acc) {
      let newArr = arr.slice()
      if(!acc) {
        acc = newArr[0]
        newArr = arr.slice(1)
      }

      for (let i=0; i<newArr.length; i++){
        acc = cb(acc, newArr[i], arr);
      }
      return acc
    },

    find: function(arr, predicate){
      return arr.find(predicate)
    },

    filter: function(arr, predicate){
      return arr.filter(predicate)
    },

    size: function(arr){
      return Object.values(arr).length
    },

    first: function(arr, n){
      return !n ? arr[0] : arr.slice(0,n)
    },

    last: function(arr, n){
      return !n ? arr[arr.length -1] : arr.slice(arr.length- n)
    },

    compact: function(arr){
      let newArr = []
      for (let i=0; i<arr.length; i++){
        arr[i] && newArr.push(arr[i])
      }
      return newArr
    },

    sortBy: function(arr, cb){
      let sortArr = arr.slice().sort((a,b)=>cb(a) - cb(b))
      return sortArr
    },

    flatten: function(arr, shallow){
      if (!shallow){
      return arr.flat(Infinity)
      } else {
        return arr.flat()
      }
    },

    uniq: function(arr, bool, cb) {
      let array = arr instanceof Array ? collection : Object.values(arr)
      let newArr = []

      for (let i = 0; i < array.length; i++) {
        if (cb) {
          if (!newArr.find(e => cb(e) === cb(array[i]))) newArr.push(array[i])
        } else {
          if (!newArr.find(e => e === array[i])) newArr.push(array[i])
        }
      }
      return newArr
    },

    keys: function(obj){
      return Object.keys(obj)
    },

    values: function(obj){
      return Object.values(obj)
    },

    functions: function(obj) {
      let fnName = []
      for (let key in obj){
        if (typeof obj[key] === 'function'){
          fnName.push(key).sort
        }        
      }
      return fnName
    },


  }
})()

fi.libraryMethod()