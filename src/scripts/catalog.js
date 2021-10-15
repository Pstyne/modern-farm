export const Catalog = (foodObjArr) => {
  foodObjArr.forEach( foodObj => {
    document.querySelector(".container").innerHTML += `<section class="plant">${foodObj.type}</section>`;
  });
}