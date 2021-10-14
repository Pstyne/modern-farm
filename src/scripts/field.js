const plantArray = [];

export const addPlant = (seedObj) => {
  if (Array.isArray(seedObj)) seedObj.forEach(seed => plantArray.push(seed));
  else plantArray.push(seedObj);
}

export const usePlants = () => {
  return plantArray.slice();
}