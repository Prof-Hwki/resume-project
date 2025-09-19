//This won't run

/*Hello
You won't see me
Ever*/

console.log("HEHEHEHHEHEH");

//Define Variables
let myName = "John";
let title = "Student";
let experience = "Mcdonalds, Youth Leader, and Shift Leader";
let education = "Ohio State University";
let skills = ["C++", "Microsoft Execl", "C#"];
let skillsList = document.createElement('ul');

//Connecting Variables to HTML
for (let i = 0; i < skills.length; i++){
  let li = document.createElement('li');
  li.textContent = skills[i];
  skillsList.appendChild(li);
}

document.body.appendChild(skillsList);
document.getElementById("my-name").textContent = myName;
document.getElementById("title").textContent = title;
document.getElementById("experience").textContent = experience;
document.getElementById("education").textContent = education;
