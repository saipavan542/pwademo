function getfile(file,callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
getfile("data.json",function(text){
  var data = JSON.parse(text);
  console.log(data);
  career(data.career);
  education(data.education);
  skills(data.skills);
})
var child2=document.querySelector(".childOne");
function career(careerInfo){
  var careerHeading=document.createElement("h2");
  careerHeading.textContent="Career Objective:";
  child2.appendChild(careerHeading);
  var ch=document.createElement("p");
  ch.textContent=careerInfo.info;
  child2.appendChild(ch);
}
function education(edu){
  var eduHeading=document.createElement("h2");
  eduHeading.textContent="Education:"
  child2.appendChild(eduHeading);

  var careerhr=document.createElement("hr");
  child2.appendChild(careerhr);

  var eduTable=document.createElement("table");
  eduTable.border="1";
  eduTable.align="center";
  var tr1="<tr><td>Degree</td><td>Institute</td><td>Duration</td><td>Marks</td></tr>";
  eduTable.innerHTML=tr1;
  child2.appendChild(eduTable);

  for (var i = 0; i <edu.length; i++) {
  tr1+="<tr><td>"+edu[i].Degree+"</td><td>"+edu[i].Institute+"</td><td>"+edu[i].Duration+"</td><td>"+edu[i].Marks+"</td></tr>"
}
eduTable.innerHTML=tr1;
child2.appendChild(eduTable);
}
function skills(skill){
  var ul=document.createElement("ul");
  child2.appendChild(ul);
  for (var i = 0; i < skill.length; i++) {
    var li=document.createElement("li");
    li.textContent=skill[i].title+":"+skill[i].content;
    ul.appendChild(li);
  }
}
