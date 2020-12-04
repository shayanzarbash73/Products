function myfunc(){
   const req = 'https://.typicode.com/todos/1';

   fetch(req)
   .then(function(response){
        if(response.status !== 200 ){
            console.log("doroste");
            return;
        }

        response.json().then(function(data){
console.log(data);
        });

   }      
   )
.catch(function(err) {

    console.log("eroor");
    
})

}