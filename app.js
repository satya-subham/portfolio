// About Section
const data = ["Full Stack Developer", "Frontend Developer", "Backend Developer", "Mobile App Developer", "Web Developer"]
let count = 0;
function changeName(data){
  const elements = document.querySelectorAll("span");
  
  setInterval(()=>{
    elements.forEach((element) => {
      element.innerText = data[count];
      element.classList.add("span")
      count += 1;
      if(count > data.length - 1){
        count = 0;
      }
    });
  }, 2000);
}
changeName(data);







// My Skills Section
const linksArr = [
  "front-end",
  "back-end",
  "data-base",
  "other-tools",
  "version-control",
];
(function show() {
  const element = document.getElementById(linksArr[0]);
  element.classList.add("active");
})();
function showSkills(e) {
  console.log(e);
  const text = e.target.innerText.toLowerCase().replace(" ", "-");
  const element = document.getElementById(text);
  element.classList.add("active");
  let filtered = linksArr.filter((item) => item !== text);
  filtered.forEach((item) => {
    document.getElementById(item).classList.remove("active");
  });
}
