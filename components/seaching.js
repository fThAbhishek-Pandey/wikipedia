import fetchPages from "./fetchWikiAPI.js";

const form = document.querySelector(".form");
const input = document.querySelector(".form-input");
function CreatingURL (){
        console.log("I am going to Creating search value");
        console.log("form : ",form);
        console.log("input : ",input);
        form.addEventListener("submit",function(evt){
          evt.preventDefault();
          const value =input.value;
          console.log("value : ",value);
          fetchPages(value);
         return;
});
       
}
export default  CreatingURL;
