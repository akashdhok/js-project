function insert()
{
    let a = document.querySelector("#main")
    a.style.display = "none"
    let b = document.querySelector("#signup")
    b.innerHTML = `
        <input type="text" id="name1" placeholder="Enter patient name here">
        <input type="age" id="age1" placeholder="Enter patient age here">
        <input type="text" id="address1" placeholder="Enter patient address  here">
        <input type="text" id="number1" placeholder="Enter patient number here">
       <button onclick = "finalinsert()">Insert</button>
    `
    b.style.display = "grid"
    let c = document.querySelector("#table")
    c.style.display = "none" 

}
function finalinsert()
{
    let obj = {
        name: document.querySelector("#name1").value,
        age:document.querySelector("#age1").value,
        address: document.querySelector("#address1").value,
        number: document.querySelector("#number1").value
      }
      fetch("http://localhost:3000/project" , {
       method : "POST",
       body : JSON.stringify(obj)
      })
      .then(res=>alert("Inserted Successfully......!!!"))
}
function dashboard()
{
    let a = document.querySelector("#main")
    a.style.display = "block"
    let b = document.querySelector("#signup")
    b.style.display = "none"
    let c = document.querySelector("#table")
    c.style.display = "none" 

}
function table()
{
     let a = document.querySelector("#main")
    a.style.display = "none"
    let b = document.querySelector("#signup")
    b.style.display = "none"  

}
function del(id)
{
    let res = window.confirm("Do you really want to delete this information")
    if(res)
    {
        fetch(`http://localhost:3000/project/${id}` , {
            method : "DELETE"
        })
    }
    else{
        window.alert("Invalid input")
    }
}
async function run()
{
    let c = document.querySelector("#main")
    c.style.display = "none"
    let b = document.querySelector("#signup")
    b.style.display = "none"
    let d = document.querySelector("#table")
    d.style.display = "inline"  

    let res = await fetch("http://localhost:3000/project")
    let data =await res.json()
    let a = document.querySelector("#demo")
    a.innerHTML = data.map((e)=> `
       <tr>
                <td>${e.name}</td>
                <td>${e.age}</td>
                <td>${e.address}</td>
                <td>${e.number}</td>

                <td><button onclick = "del('${e.id}')">Delete</button></td>
                <td><button onclick = "edit('${e.id}')">Edit</button></td>

            </tr>` 
    ).join(" ")
}
async function edit(id)
{
    let res = await fetch(`http://localhost:3000/project/${id}`)
    let data =await  res.json()
    let a = document.querySelector("#edit")
    a.innerHTML = 
  `  <input type="text" value ="${data.id}" readonly/> </br>
    <input type="text"value ="${data.name}" id = "name2"/> </br>
    <input type="text" value ="${data.age}" id = "age2" /> </br>
    <input type="text" value ="${data.address}" id = "address2"/> </br>
    <input type="text" value ="${data.number}" id = "number2" /> </br>
    <button onclick = "update('${data.id}')">Update</button>
    `
//    a.style.display = "grid"
}
function update(id)
{
let fdata = {
    name : document.querySelector("#name2").value,
    age : document.querySelector("#age2").value,
    address : document.querySelector("#address2").value,
    number : document.querySelector("#number2").value
}
fetch(`http://localhost:3000/project/${id}` , {
    method : "PUT" , 
    body : JSON.stringify(fdata)
})
.then(res=>alert("Updated Successfully......!!!"))
}