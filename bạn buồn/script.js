var pull      = document.querySelector("span.pull");
var curve     = document.querySelector("div.curve");
var text      = document.querySelector("span.text");
var drop_down = document.querySelector("div.drop-down");
var section   = document.querySelector("section");
var section_p = section.querySelector("p");

var drop_down_kids = Array.from(document.querySelectorAll(".drop-down > div"));

pull.addEventListener("click", function(){ pullDown(); });
curve.addEventListener("click", function(){ pullDown(); });
text.addEventListener("click", function(){ pullDown(); });

section.addEventListener("click", function(){
  drop_down.style.height = "0%";
  //Remove animation classes from children and the other
  drop_down_kids[0].classList.remove("classforone");
  drop_down_kids[1].classList.remove("classfortwo");
  drop_down_kids[2].classList.remove("classforthree");
  
  section_p.classList.remove("fade");
});

function pullDown(){
  drop_down.style.height = "100%";
  //Add animation classes to children and the other
  drop_down_kids[0].classList.add("classforone");
  drop_down_kids[1].classList.add("classfortwo");
  drop_down_kids[2].classList.add("classforthree");
  
  section_p.classList.add("fade");
}