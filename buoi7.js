
/* const fetchData = async () => {
    try{
const response =  await fetch("https://jsonplaceholder.typicode.com/todos/1");
const data = await response.json();
// console.log(data)

let userId= document.createElement('h2');
let tittle = document.createElement('h2');
let completeTask =document.createElement('h2');

userId.textContent= data.userId;
tittle.textContent = data.title;
completeTask.textContent= data.completed;

const dataElement= document.getElementById('data');
dataElement.appendChild(userId);
dataElement.appendChild(tittle);
dataElement.appendChild(completeTask);
    }
    catch(e){
conse.log(e)
    }
    
}

fetchData() */

 const fetchData = async() => {
 try{
    const response= await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();

    let userId = document.createElement('h2');
    let id = document.createElement('h2')
    let title = document.createElement('h2')
    let body = document.createElement('h2')

    userId.textContent= data.userId
    id.textContent=data.id
    title.textContent=data.title
    body.textContent=data.body

    const ele =document.getElementById('data2');
    ele.appendChild(userId)
    ele.appendChild(id)
    ele.appendChild(title)
    ele.appendChild(body)
    
 }
 catch(e){
  console.log(e)
      
 }


}
fetchData()

