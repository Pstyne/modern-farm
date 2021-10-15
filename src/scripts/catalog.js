export const Catalog = (foodObjArr) => {
  
  // Ordering the Harvest
  // --------------------------------------------------------------------------
  // Your first optional challenge is to display the list of food to be sold in 
  // alphabetical order. That is, all corn should be listed first, then all potatoes, 
  // then soybean, sunflower and wheat.
  
  const sortedFood = foodObjArr.sort((a, b) => a.type.localeCompare(b.type));

  // Display Once With Quantity
  // --------------------------------------------------------------------------
  // Instead of displaying all object individually, show only one HTML 
  // representation of each plant type and display the quantity that you are 
  // selling of that type.

  const foodWithQuantity = {};

  sortedFood.forEach(food => {
    if (!foodWithQuantity[food.type]) {
      foodWithQuantity[food.type] = { quantity: 1, icon: food.icon };
    } else {
      foodWithQuantity[food.type].quantity++;
    }
  });

  // console.log(foodWithQuantity)

  // sortedFood.forEach( foodObj => {
  //   document.querySelector(".container").innerHTML += `<section class="plant">${foodObj.icon}</section>`;
  // });

  for (const food in foodWithQuantity) {
    document.querySelector(".container").innerHTML += `<section class="plant">${foodWithQuantity[food].icon}: ${foodWithQuantity[food].quantity}</section>`;
  }

}