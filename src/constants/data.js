import images from './images';

const wines = [
  {
    title: 'Noodles',
    price: '₹150',
    tags: 'Veg | Non-Veg',
  },
  {
    title: 'Schezwan Noodles',
    price: '₹170',
    tags: 'Garlic | Without Garlic',
  },
  {
    title: 'Fried Rice',
    price: '₹130',
    tags: 'Veg | Non-Veg',
  },
  {
    title: 'Chilly Panner',
    price: '₹200',
    tags: 'Veg | Non-Veg',
  },
  {
    title: 'Spring Roll',
    price: '₹180',
    tags: 'Vegetable | Noodles ',
  },
];

const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹210',
    tags: 'Aperol | Soda',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹250',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹230',
    tags: 'Rum | Citrus juice',
  },
  {
    title: 'Old Fashioned',
    price: '₹310',
    tags: 'Bourbon | Brown sugar',
  },
  {
    title: 'Negroni',
    price: '₹260',
    tags: 'Gin | Campari | Orange garnish',
  },
];

const awards = [
  {
    imgUrl: images.award02,
    title: 'Bib Gourmond',
    subtitle: 'Taste with heart.',
  },
  {
    imgUrl: images.award01,
    title: 'Rising Star',
    subtitle: 'For remarkable journey and growth.',
  },
  {
    imgUrl: images.award05,
    title: 'AA Hospitality',
    subtitle: 'Dinning Experience Is Prioritized. ',
  },
  {
    imgUrl: images.award03,
    title: 'Outstanding Chef',
    subtitle: 'Chef with great talent in his hands.',
  },
];

export default { wines, cocktails, awards };
