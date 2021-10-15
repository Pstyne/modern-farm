import { createPlan } from "./plan.js";

import { usePlants } from "./field.js";

import { plantSeeds } from "./tractor.js"; 

import { harvestPlants } from "./harvester.js";

// Try to use plants before they're planted... I dare you
// const plants = usePlants();

// Create plan
const yearlyPlan = createPlan();

// Plant the seeds
plantSeeds(yearlyPlan);

// Use the plants after they're planted
const plants = usePlants();

// COOL! No array in the array
// I think this is the way I was supposed to do it.
console.log(plants);

// OH BOY!!! Veggie heaven!
console.log(harvestPlants(plants));