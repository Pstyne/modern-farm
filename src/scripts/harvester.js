export const harvestPlants = (plants) => {
  const harvested = [];

  plants.forEach( plant => {

    // Make sure the cattle ranchers get thier

    const output = plant.type === 'Corn' ? plant.output / 2 : plant.output;
    
    for (let i = 0; i < output; i++) {
      harvested.push(plant);
    }
  });

  return harvested;
}