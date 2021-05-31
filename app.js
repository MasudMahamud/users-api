document.getElementById("search-user").addEventListener("click",function () {
            const userInput = document.getElementById("user-input").value;
            const count= parseInt(userInput);
                 fetch('https://jsonplaceholder.typicode.com/users')
                 .then(res => res.json())
                 .then (data => {
                     document.getElementById("user").innerText ="";
                     data =data.slice(0,count);
                     for (let i = 0; i < data.length; i++) {
                     const user = data[i];
                     const p = document.createElement("p");
                     p.innerHTML =`
                         <strong> ${user.name}</strong>
                         <button onclick= "userDetails(${user.id})"> Details: </button>
                         `;
                     document.getElementById("user").appendChild((p));    
                  }})
            document.getElementById("user-input").value="";
       })

        

   function userDetails(userId) {
            fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(res=> res.json())
            .then(data =>{
                document.getElementById('show-details').innerText ="";
                const p =document.createElement("p");
                p.innerHTML = `
                <h2>${data.name} - ${data.id}</h2>
                 Nick Name: ${data.username}<br>
                 Phone: ${data.phone}<br>
                 Email: ${data.email}<br>
                 City: ${data.address.city}<br>
                 Company: ${data.company.name}<br>
                `; 
                document.getElementById('show-details').appendChild(p);
                document.getElementById('show-details').style.backgroundColor ="tomato"
                document.getElementById('show-details').style.color ="white"
                document.getElementById('show-details').style.padding ="20px"
            })            
        }     