//your JS code here. If required.
function promise(age,name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(age >= 18){
                resolve(`Welcome, ${name}. You can vote.`)
            } else{
                reject(`Oh sorry, ${name}. You aren't old enough.`)
            }
        })
    })
}

document.getElementById("userForm").addEventListener("submit", (Event)=>{
    Event.preventDefault();

    let name =document.getElementById("name").value
    let age = document.getElementById("age").value

    if(!age || !name){
        alert("Please fill out both fields.")
        return;
    }

    promise(age,name)
        .then(massage => {alert(massage)})
        .catch(error =>{alert(error)})
})