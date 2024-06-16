import renderRes from "./render.js";
const url = 'https://en.wikipedia.org/w/api.php?action=query&list=search&srlimit=20&format=json&origin=*&srsearch=';
const fetchPages = async (searchValue) => {
       console.log("searchvalue in fetchAPI : ",searchValue);
       
      renderRes(`<div><img src="./image/swatikaAnimated.gif" alt="Loading Icon"/> </div>`);
      if (!searchValue){
         renderRes('');
         return ;
      }
      const response = await fetch(`${url}${searchValue}`);
      const data = await response.json();
      let results = data.query.search;
      if (results.length < 1) {
         results ='';
         renderRes('');
         return;
      }
      renderRes(results);
  };
  export default fetchPages;