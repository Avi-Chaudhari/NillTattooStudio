export type Review = {
  id: string;
  review: string;
  rate: number;
  customer: string;
};

const reviews: Review[] = [
  {
    id: "d21e",
    review: "The studio was clean, welcoming, and incredibly professional. I love how carefully my design was brought to life.",
    rate: 5,
    customer: "Priyanka Chopra",
  },
  {
    id: "a84k",
    review: "Amazing attention to detail and a very comfortable experience from consultation to the final result.",
    rate: 5,
    customer: "Aarav Sharma",
  },
  {
    id: "m53q",
    review: "The artist listened to every idea I had and created something even better than I imagined.",
    rate: 4,
    customer: "Meera Kulkarni",
  },
  {
    id: "r92x",
    review: "Friendly people, great hygiene, and beautiful work. I will definitely come back for my next tattoo.",
    rate: 5,
    customer: "Rohan Patil",
  },
  {
    id: "v16n",
    review: "Everything was explained clearly and the final piece healed perfectly. Highly recommended.",
    rate: 5,
    customer: "Ananya Deshmukh",
  },
  {
    id: "h47p",
    review: "A calm, professional studio with artists who genuinely care about the smallest details.",
    rate: 4,
    customer: "Kabir Joshi",
  },
];

export default reviews;
