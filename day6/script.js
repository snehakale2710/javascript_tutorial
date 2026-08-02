fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then((users)=>
   {
      users.map((user)=>
         {
            console.log(`Id: ${user.id} Name: ${user.name}
            UserName : ${user.username} Email: ${user.email}
            Address : ${user.address.city}`)
         })
   }
)