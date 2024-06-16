
const res = document.querySelector (".results");
const loading = `<div><img src="./image/swatikaAnimated.gif" alt="Loading Icon"/> </div>`;
function renderRes (results){
  if (!results){
    res.innerHTML = '<div class="error"> please enter valid search term</div>';
    return;
  }
   else if (results === loading){
     res.innerHTML = loading;
     return;
   }
  else {
    const cardsList = results
  .map((item) => {
    const { title, snippet, pageid } = item;
    return `<a href=http://en.wikipedia.org/?curid=${pageid} target="_blank">
          <h4>${title}</h4>
          <p>
            ${snippet}
          </p>
        </a>`;
  })
  .join('');
res.innerHTML = `<div class="articles">
        ${cardsList}
      </div>`;
  } 
};
export default renderRes;