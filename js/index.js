let today = new Date ()
console.log(today)
let thisYear= today.getFullYear() 

let footer = document.querySelector("footer")

let copyright = document.createElement("p")

copyright.innerHTML =  `Cynthia Delevante ${thisYear}`

footer.appendChild(copyright) 

let skillsSection = document.getElementById('skills') 
console.log(skillsSection) 

let skillsList = skillsSection.querySelector( "ul") 

let skills = ["critical thinking", "Communication", "Javascript"] 

for(let i = 0 ; i < skills.length; i++) {
    let skill = document.createElement("li") 
    skill.innerHTML = skills[i] 
    skillsList.appendChild(skill)
}

let messageForm = document.querySelector('form[name = "leave_message"]'); 
messageForm.addEventListener("submit", (event) => { 
    event.preventDefault();
let usersName= event.target.usersName.value
let usersEmail= event.target.usersEmail.value
let usersMessage = event.target.usersMessage.value
console.log("hello", usersName, usersEmail, usersMessage)
let messageSection = document.getElementById ('messages');
let messageList = messageSection.querySelector('ul');
let newMessage = document.createElement('li') ;

newMessage.innerHTML=  
`
    <a href="mailto:${usersEmail}">${usersName}</a>
    <span>${usersMessage}</span>
  `;

  const removeButton = document.createElement('button'); 
  removeButton.innerText = 'Remove' ;
  removeButton.type = 'button'; 

  removeButton.addEventListener('click', function(event) {
    const entry = event.target.parentNode;
    entry.remove();
  }); 

  messageList.append(newMessage);
  newMessage.appendChild(removeButton) ;
  event.target.reset (); 
}); 



  

fetch('https://api.github.com/users/cdelevante5/repos') 
 .then(function(response){
  return response.json()
 }) 
.then(function(repositories) {


    var projectSection= document.getElementById("projects") 
    var projectList = projectSection.querySelector("ul")

for (var i=0; i<repositories.length; i+=1) {
  var project= document.createElement("li")
  project.innerText = repositories[i]['name']
  projectList.appendChild (project)
}
})
  
