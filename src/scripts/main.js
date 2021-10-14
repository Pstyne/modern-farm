import { createPlan } from "./plan.js";

import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

import { addPlant, usePlants } from "./field.js";

// Create plan
// const yearlyPlan = createPlan();

// console.log(yearlyPlan);


// Create seeds
const asparagusSeed = createAsparagus();
const cornSeed = createCorn();
const potatoSeed = createPotato();
const soybeanSeed = createSoybean();
const sunflowerSeed = createSunflower();
const wheatSeed = createWheat();

// console.log(
//   asparagusSeed,
//   cornSeed,
//   potatoSeed,
//   soybeanSeed,
//   sunflowerSeed,
//   wheatSeed
// );

// Plant seeds
addPlant(asparagusSeed);
addPlant(cornSeed);
addPlant(potatoSeed);
addPlant(soybeanSeed);
addPlant(sunflowerSeed);
addPlant(wheatSeed);

const plants = usePlants();

// COOL! No array in the array
console.log(plants);