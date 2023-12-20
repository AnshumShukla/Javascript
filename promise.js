const promiseone = new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("Async is complete");
        resolve()
    },9000)
  
})
  



promiseone.then(function(){
 console.log("promise is consumed");
}) 