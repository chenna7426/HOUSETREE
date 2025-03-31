export const plants = [
  {
    id: 'p1',
    category: 'Low Light Plants',
    name: 'Snake Plant',
    price: 29.99,
    image: 'https://raw.githubusercontent.com/Chennabasavak/House/main/src/assets/snake-plant.svg'
  },
  {
    id: 'p2',
    category: 'Low Light Plants',
    name: 'ZZ Plant',
    price: 34.99,
    image: 'https://raw.githubusercontent.com/Chennabasavak/House/main/src/assets/zz-plant.svg'
  },
  {
    id: 'p3',
    category: 'Tropical Plants',
    name: 'Monstera',
    price: 49.99,
    image: 'https://raw.githubusercontent.com/Chennabasavak/House/main/src/assets/monstera.svg'
  },
  {
    id: 'p4',
    category: 'Tropical Plants',
    name: 'Bird of Paradise',
    price: 59.99,
    image: 'https://raw.githubusercontent.com/Chennabasavak/House/main/src/assets/bird-of-paradise.svg'
  },
  {
    id: 'p5',
    category: 'Succulents',
    name: 'Aloe Vera',
    price: 24.99,
    image: 'https://raw.githubusercontent.com/Chennabasavak/House/main/src/assets/aloe-vera.svg'
  },
  {
    id: 'p6',
    category: 'Succulents',
    name: 'Jade Plant',
    price: 19.99,
    image: 'https://raw.githubusercontent.com/Chennabasavak/House/main/src/assets/jade-plant.svg'
  }
];

export const getPlantsByCategory = () => {
  const categories = {};
  plants.forEach(plant => {
    if (!categories[plant.category]) {
      categories[plant.category] = [];
    }
    categories[plant.category].push(plant);
  });
  return categories;
};