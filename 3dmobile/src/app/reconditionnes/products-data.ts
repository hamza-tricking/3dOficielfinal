export interface Product {
  id: string;
  name: string;
  storage: string;
  price: number;
  image: string;
  category: 'iphone' | 'samsung' | 'tablet' | 'pc';
}

export const products: Product[] = [
  // iPhones
  {
    id: 'iphone-14-128',
    name: 'IPHONE 14',
    storage: '128 Go',
    price: 459,
    image: '/scrabed data/recrutment/IPHONE_14_128_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-13-pro-max-128',
    name: 'IPHONE 13 PRO MAX',
    storage: '128 Go',
    price: 529,
    image: '/scrabed data/recrutment/IPHONE_13_PRO_MAX_128_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-13-pro-128',
    name: 'IPHONE 13 PRO',
    storage: '128 Go',
    price: 499,
    image: '/scrabed data/recrutment/IPHONE_13_PRO_128_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-13-128',
    name: 'IPHONE 13',
    storage: '128 Go',
    price: 389,
    image: '/scrabed data/recrutment/IPHONE_13_128_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-13-mini-128',
    name: 'IPHONE 13 MINI',
    storage: '128 Go',
    price: 349,
    image: '/scrabed data/recrutment/IPHONE_13_MINI_128_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-12-pro-max-128',
    name: 'IPHONE 12 PRO MAX',
    storage: '128 Go',
    price: 449,
    image: '/scrabed data/recrutment/IPHONE_12_PRO_MAX_128_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-12-pro-128',
    name: 'IPHONE 12 PRO',
    storage: '128 Go',
    price: 349,
    image: '/scrabed data/recrutment/IPHONE_12_PRO_128_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-12-64',
    name: 'IPHONE 12',
    storage: '64 Go',
    price: 269,
    image: '/scrabed data/recrutment/IPHONE_12_64_Go.webp',
    category: 'iphone'
  },
  {
    id: 'iphone-12-128',
    name: 'IPHONE 12',
    storage: '128 Go',
    price: 299,
    image: '/scrabed data/recrutment/IPHONE_12_128_Go.webp',
    category: 'iphone'
  },
  {
    id: 'iphone-12-mini-64',
    name: 'IPHONE 12 MINI',
    storage: '64 Go',
    price: 259,
    image: '/scrabed data/recrutment/IPHONE_12_MINI_64_Go.png',
    category: 'iphone'
  },
  {
    id: 'iphone-12-mini-128',
    name: 'IPHONE 12 MINI',
    storage: '128 Go',
    price: 279,
    image: '/scrabed data/recrutment/IPHONE_12_MINI_128_Go.png',
    category: 'iphone'
  },
  {
    id: 'iphone-11-pro-max-64',
    name: 'IPHONE 11 PRO MAX',
    storage: '64 Go',
    price: 339,
    image: '/scrabed data/recrutment/IPHONE_11_PRO_MAX_64_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-11-pro-64',
    name: 'IPHONE 11 PRO',
    storage: '64 Go',
    price: 279,
    image: '/scrabed data/recrutment/IPHONE_11_PRO_64_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-11-pro-256',
    name: 'IPHONE 11 PRO',
    storage: '256 Go',
    price: 329,
    image: '/scrabed data/recrutment/IPHONE_11_PRO_256_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-11-64',
    name: 'IPHONE 11',
    storage: '64 Go',
    price: 239,
    image: '/scrabed data/recrutment/IPHONE_11_64_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-11-128',
    name: 'IPHONE 11',
    storage: '128 Go',
    price: 269,
    image: '/scrabed data/recrutment/IPHONE_11_128_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-xr-64',
    name: 'IPHONE XR',
    storage: '64 Go',
    price: 199,
    image: '/scrabed data/recrutment/IPHONE_XR_64_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-xr-128',
    name: 'IPHONE XR',
    storage: '128 Go',
    price: 219,
    image: '/scrabed data/recrutment/IPHONE_XR_128_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-x-64',
    name: 'IPHONE X',
    storage: '64 Go',
    price: 189,
    image: '/scrabed data/recrutment/IPHONE_X_64_Go.webp',
    category: 'iphone'
  },
  {
    id: 'iphone-x-256',
    name: 'IPHONE X',
    storage: '256 Go',
    price: 229,
    image: '/scrabed data/recrutment/IPHONE_X_256_Go.webp',
    category: 'iphone'
  },
  {
    id: 'iphone-se-2020-64',
    name: 'IPHONE SE 2020',
    storage: '64 Go',
    price: 189,
    image: '/scrabed data/recrutment/IPHONE_SE_2020_64_Go.png',
    category: 'iphone'
  },
  {
    id: 'iphone-se-2020-128',
    name: 'IPHONE SE 2020',
    storage: '128 Go',
    price: 219,
    image: '/scrabed data/recrutment/IPHONE_SE_2020_128_Go.png',
    category: 'iphone'
  },
  {
    id: 'iphone-8-64',
    name: 'IPHONE 8',
    storage: '64 Go',
    price: 89,
    image: '/scrabed data/recrutment/IPHONE_8_64_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-se-2016-32',
    name: 'IPHONE SE 2016',
    storage: '32 Go',
    price: 69,
    image: '/scrabed data/recrutment/IPHONE_SE_2016_32_Go.jpg',
    category: 'iphone'
  },
  {
    id: 'iphone-se-2016-16',
    name: 'IPHONE SE 2016',
    storage: '16 Go',
    price: 49,
    image: '/scrabed data/recrutment/IPHONE_SE_2016_16_Go.jpg',
    category: 'iphone'
  },
  // Samsung
  {
    id: 'galaxy-s23-256',
    name: 'GALAXY S23',
    storage: '256 Go',
    price: 499,
    image: '/scrabed data/recrutment/GALAXY_S23_256_Go.webp',
    category: 'samsung'
  },
  {
    id: 'galaxy-s22-128',
    name: 'GALAXY S22',
    storage: '128 Go',
    price: 349,
    image: '/scrabed data/recrutment/GALAXY_S22_128_Go.png',
    category: 'samsung'
  },
  {
    id: 'galaxy-s21-128',
    name: 'GALAXY S21',
    storage: '128 Go',
    price: 299,
    image: '/scrabed data/recrutment/GALAXY_S21_128_Go.png',
    category: 'samsung'
  },
  {
    id: 'galaxy-s20-fe-5g-128',
    name: 'GALAXY S20 FE 5G',
    storage: '128 Go',
    price: 229,
    image: '/scrabed data/recrutment/GALAXY_S20_FE_5G_128_Go.png',
    category: 'samsung'
  },
  {
    id: 'galaxy-a13-64',
    name: 'GALAXY A13',
    storage: '64 Go',
    price: 149,
    image: '/scrabed data/recrutment/GALAXY_A13_64_Go.jpg',
    category: 'samsung'
  },
  {
    id: 'galaxy-xcover-5-64',
    name: 'GALAXY XCOVER 5',
    storage: '64 Go',
    price: 139,
    image: '/scrabed data/recrutment/GALAXY_XCOVER_5_64_Go.avif',
    category: 'samsung'
  },
  {
    id: 'galaxy-a22-64',
    name: 'GALAXY A22',
    storage: '64 Go',
    price: 129,
    image: '/scrabed data/recrutment/GALAXY_A22_64_Go.webp',
    category: 'samsung'
  },
  {
    id: 'galaxy-a21s-32',
    name: 'GALAXY A21S',
    storage: '32 Go',
    price: 119,
    image: '/scrabed data/recrutment/GALAXY_A21S_32_Go.webp',
    category: 'samsung'
  },
  {
    id: 'galaxy-a12-64',
    name: 'GALAXY A12',
    storage: '64 Go',
    price: 119,
    image: '/scrabed data/recrutment/GALAXY_A12_64_Go.png',
    category: 'samsung'
  },
  {
    id: 'galaxy-a40-64',
    name: 'GALAXY A40',
    storage: '64 Go',
    price: 119,
    image: '/scrabed data/recrutment/GALAXY_A40_64_Go.png',
    category: 'samsung'
  },
  {
    id: 'galaxy-a20-e-32',
    name: 'GALAXY A20 E',
    storage: '32 Go',
    price: 99,
    image: '/scrabed data/recrutment/GALAXY_A20_E_32_Go.webp',
    category: 'samsung'
  },
  {
    id: 'galaxy-a10-32',
    name: 'GALAXY A10',
    storage: '32 Go',
    price: 89,
    image: '/scrabed data/recrutment/GALAXY_A10_32_Go.avif',
    category: 'samsung'
  },
  // Tablets
  {
    id: 'samsung-tab-a8-105-32',
    name: 'SAMSUNG TAB A8 10.5',
    storage: '32 Go',
    price: 129,
    image: '/scrabed data/recrutment/SAMSUNG_TAB_A8_105_32g_Go.avif',
    category: 'tablet'
  },
  {
    id: 'ipad-9-64',
    name: 'IPAD 9',
    storage: '64 Go',
    price: 349,
    image: '/scrabed data/recrutment/IPAD_9_64_Go.png',
    category: 'tablet'
  },
  {
    id: 'ipad-6-128',
    name: 'IPAD 6',
    storage: '128 Go',
    price: 199,
    image: '/scrabed data/recrutment/IPAD_6_128_Go.jpg',
    category: 'tablet'
  },
  // PC
  {
    id: 'pc-dell-latitude-7280-240',
    name: 'PC DELL LATITUDE 7280',
    storage: '240 Go',
    price: 199,
    image: '/scrabed data/recrutment/PC_DELL_LATITUDE_7280_240_Go.jpg',
    category: 'pc'
  }
];

export const getProductsByCategory = (category: Product['category']) => {
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};
