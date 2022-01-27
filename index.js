const form = document.querySelector(".form .main-form");
const inputs = document.querySelectorAll(".form-control input")

form.addEventListener("submit", (e)=>{
  e.preventDefault();
  inputs.forEach((input) => {
    if(!input.value){
      input.parentElement.classList.add("error")
    }else{
      input.parentElement.classList.remove("error")
      if(input.type == "email"){
        if (validateEmail(input.value)){
          input.parentElement.classList.remove("error")
        }else{
          input.parentElement.classList.add("error")
        }
      }
    }
  });
});

function validateEmail(email){
  var re =  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return re.test(String(email).toLowerCase());
}
