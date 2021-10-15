import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

import { addPlant } from "./field.js";


export const plantSeeds = (currentYearPlan) => {
  
  // currentYearPlan is a 2d array which requires 2 loops
  // This is the outer loop
  currentYearPlan.forEach( seeds => {
    
    // This is the inner loop which will iterate through the seeds
    seeds.forEach( seed => {
      
      // Depending on the type of seed create each seed 
      // and plant it
      switch (seed) {
        case 'Asparagus':
          addPlant(createAsparagus());
          break;
        case 'Corn':
          addPlant(createCorn());
          break;
        case 'Potato':
          addPlant(createPotato());
          break;
        case 'Soybean':
          addPlant(createSoybean());
          break;
        case 'Sunflower':
          addPlant(createSunflower());
          break;
        case 'Wheat':
          addPlant(createWheat());
          break;
      }
    });
  });
}