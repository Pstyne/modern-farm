// Unique Identifiers
// --------------------------------------------------------------
// Add a unique, incrementing id property to each harvested plant. 
// The first plant harvested should have an id value of 1. 
// The second one should have a value of 2, etc.

let id = 0;

export const harvestPlants = (plants) => {
  const harvested = [];

  plants.forEach( plant => {
    

    // Make sure the cattle ranchers get thier

    const output = plant.type === 'Corn' ? plant.output / 2 : plant.output;
    
    for (let i = 0; i < output; i++) {
      // Increment id before assigning to harvested plant
      id++;
      harvested.push({ ...plant, id: id });
    }
  });
  return harvested;
}