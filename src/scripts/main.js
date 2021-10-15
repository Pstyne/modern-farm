import { createPlan } from "./plan.js";

import { usePlants } from "./field.js";

import { plantSeeds } from "./tractor.js"; 

import { harvestPlants } from "./harvester.js";

import { Catalog } from "./catalog.js"; 

// Try to use plants before they're planted... I dare you
// const plants = usePlants();

// Create plan
const yearlyPlan = createPlan();

// Plant the seeds
plantSeeds(yearlyPlan);

// Use the plants after they're planted
const plants = usePlants();

// OH BOY!!! Veggie heaven!
Catalog(harvestPlants(plants));