let string = "";
let btns = document.querySelectorAll(".button");
// console.log(btns)
Array.from(btns).forEach((button) => {
  // console.log(button)
  button.addEventListener("click", (e) => {
    e.preventDefault();
    if(e.target.innerHTML == "="){
      string = eval(string)
      document.querySelector("#input").value = string;
    }
    else if(e.target.innerHTML == "C"){
      document.querySelector("#input").value = "";
      string=''
    }
    else{
      string = string + e.target.innerHTML;
  
      document.querySelector("#input").value = string;
      // console.log(e.target.innerHTML);
    }
  });
});
// console.log(btns)
