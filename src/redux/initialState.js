const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],
  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      personalStars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      oldPrice: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: true,
      comparison: false,
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      oldPrice: 50,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      oldPrice: 44,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      oldPrice: 33,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      oldPrice: 49,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: true,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
      promoted: false,
    },
    {
      id: 'chair-1',
      name: 'chair 1',
      category: 'chair',
      price: 20,
      oldPrice: 25,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'chair-2',
      name: 'chair 2',
      category: 'chair',
      price: 20,
      oldPrice: 25,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'chair-3',
      name: 'chair 3',
      category: 'chair',
      price: 20,
      oldPrice: 25,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'chair-4',
      name: 'chair 4',
      category: 'chair',
      price: 20,
      oldPrice: 25,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'chair-5',
      name: 'chair 5',
      category: 'chair',
      price: 20,
      oldPrice: 25,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'chair-6',
      name: 'chair 6',
      category: 'chair',
      price: 20,
      oldPrice: 25,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'chair-7',
      name: 'chair 7',
      category: 'chair',
      price: 20,
      oldPrice: 25,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'chair-8',
      name: 'chair 8',
      category: 'chair',
      price: 20,
      oldPrice: 25,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'chair-9',
      name: 'chair 9',
      category: 'chair',
      price: 20,
      oldPrice: 25,
      stars: 3,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'sofa-1',
      name: 'sofa 1',
      category: 'sofa',
      price: 50,
      oldPrice: 59,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'sofa-2',
      name: 'sofa 2',
      category: 'sofa',
      price: 50,
      oldPrice: 59,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'sofa-3',
      name: 'sofa 3',
      category: 'sofa',
      price: 50,
      oldPrice: 59,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'sofa-4',
      name: 'sofa 4',
      category: 'sofa',
      price: 50,
      oldPrice: 59,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'sofa-5',
      name: 'sofa 5',
      category: 'sofa',
      price: 50,
      oldPrice: 59,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'sofa-6',
      name: 'sofa 6',
      category: 'sofa',
      price: 50,
      oldPrice: 59,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'sofa-7',
      name: 'sofa 7',
      category: 'sofa',
      price: 50,
      oldPrice: 59,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'sofa-8',
      name: 'sofa 8',
      category: 'sofa',
      price: 50,
      oldPrice: 59,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'sofa-9',
      name: 'sofa 9',
      category: 'sofa',
      price: 50,
      oldPrice: 59,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'table-1',
      name: 'table 1',
      category: 'table',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'table-2',
      name: 'table 2',
      category: 'table',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'table-3',
      name: 'table 3',
      category: 'table',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'table-4',
      name: 'table 4',
      category: 'table',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'table-5',
      name: 'table 5',
      category: 'table',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'table-6',
      name: 'table 6',
      category: 'table',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'table-7',
      name: 'table 7',
      category: 'table',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'table-8',
      name: 'table 8',
      category: 'table',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'table-9',
      name: 'table 9',
      category: 'table',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'dining-1',
      name: 'dining 1',
      category: 'dining',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'dining-2',
      name: 'dining 2',
      category: 'dining',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'dining-3',
      name: 'dining 3',
      category: 'dining',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'dining-4',
      name: 'dining 4',
      category: 'dining',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'dining-5',
      name: 'dining 5',
      category: 'dining',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'dining-6',
      name: 'dining 6',
      category: 'dining',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'dining-7',
      name: 'dining 7',
      category: 'dining',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'dining-8',
      name: 'dining 8',
      category: 'dining',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
    {
      id: 'dining-9',
      name: 'dining 9',
      category: 'dining',
      price: 30,
      oldPrice: 33,
      stars: 4,
      promo: 'sale',
      newFurniture: true,
      favorite: false,
      comparison: false,
    },
  ],
  cart: {
    products: [],
  },

  promo: {
    titleLeft: 'Guest room',
    subtitleLeft: 'Sofa',
    discountLeft: '-20%',
    titleTopRight_1: 'Office',
    titleTopRight_2: 'chair',
    subtitleTopRight: 'Collection',
    priceTopRight: '$200.00',
    titleBottomRight_1: 'Special',
    titleBottomRight_2: 'collection',
    subtitleBottomRight: 'Save up 45% of furniture',
    bed: 'https://images.pexels.com/photos/3659683/pexels-photo-3659683.jpeg',
    sofa:
      'https://images.pexels.com/photos/3757055/pexels-photo-3757055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    chair:
      'https://images.pexels.com/photos/961188/pexels-photo-961188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },

  brands: [
    { id: 1, name: 'brand-1' },
    { id: 2, name: 'brand-2' },
    { id: 3, name: 'brand-3' },
    { id: 4, name: 'brand-4' },
    { id: 5, name: 'brand-5' },
    { id: 6, name: 'brand-6' },
  ],

  feedbacks : [
    { id: 'feedback 1',
      name: 'feedback-1',
      text: 'I\'m enthusiastic about this store. Highly recommend to everyone',
      clientName: 'Arthur Morgan',
      clientPosition: 'Courier',
    },
    { id: 'feedback 2',
      name: 'feedback-2',
      text: 'I furnished my entire office here. My eployees are pleased with quality of these furnitures. I definitly come back here in the future for another purchases.',
      clientName: 'Dutch Van Der Linde',
      clientPosition: 'Company Owner',
    },
    { id: 'feedback 3',
      name: 'feedback-3',
      text: 'I bought here great furnitures for my kichten. Reliable and easy to keep in cleaness.',
      clientName: 'Abigail Marston',
      clientPosition: 'Internet marketing specialist',
    },
  ],
};

export default initialState;
