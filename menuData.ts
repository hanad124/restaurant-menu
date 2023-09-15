import { StaticImageData } from "next/image";

type TMenuData = {
  id: string;
  name: string;
  image: StaticImageData;
  price: number;
  description: string;
  category: string;
};

// Burger images
import burger1 from "./public/assets/burger-gourmet-truffle-burge.jpeg";
import burger2 from "./public/assets/burger-juicy-stack.jpeg";
import burger3 from "./public/assets/burger-spicy-sriracha-smash.jpeg";
import burger4 from "./public/assets/burger-ultimate-beef-bomb.jpeg";
import burger5 from "./public/assets/burger-veggie-selight-supreme.jpeg";

// Pizza images
import pizza1 from "./public/assets/pizza-BBQ-chicken-ranc.jpeg";
import pizza2 from "./public/assets/pizza-mediterranean-magic.jpeg";
import pizza3 from "./public/assets/pizza-pesto-supreme.jpeg";
import pizza4 from "./public/assets/pizza-spicy-hawaiian-fiesta.jpeg";
import pizza5 from "./public/assets/pizza-truffle-temptation.jpeg";

// chicken images
import chicken1 from "./public/assets/chicken-fingers.jpeg";
import chicken2 from "./public/assets/chicken-grill.jpeg";
import chicken3 from "./public/assets/chicken-peri-peri.jpeg";
import chicken4 from "./public/assets/chicken-rotisserie.jpeg";
import chicken5 from "./public/assets/chicken-traybake.jpeg";

export const menuData: TMenuData[] = [
  {
    id: "1",
    name: "Gourmet Truffle Burger",
    image: burger1,
    price: 12.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Burger",
  },
  {
    id: "2",
    name: "Juicy Stack Burger",
    image: burger2,
    price: 11.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Burger",
  },
  {
    id: "3",
    name: "Spicy Sriracha Smash Burger",
    image: burger3,
    price: 10.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Burger",
  },
  {
    id: "4",
    name: "Ultimate Beef Bomb Burger",
    image: burger4,
    price: 13.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Burger",
  },
  {
    id: "5",
    name: "Veggie Delight Supreme Burger",
    image: burger5,
    price: 9.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Burger",
  },
  {
    id: "6",
    name: "BBQ Chicken Ranch Pizza",
    image: pizza1,
    price: 12.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Pizza",
  },
  {
    id: "7",
    name: "Mediterranean Magic Pizza",
    image: pizza2,
    price: 11.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Pizza",
  },
  {
    id: "8",
    name: "Pesto Supreme Pizza",
    image: pizza3,
    price: 10.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Pizza",
  },
  {
    id: "9",
    name: "Spicy Hawaiian Fiesta Pizza",
    image: pizza4,
    price: 13.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Pizza",
  },
  {
    id: "10",
    name: "Truffle Temptation Pizza",
    image: pizza5,
    price: 9.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Pizza",
  },
  {
    id: "11",
    name: "Chicken Fingers",
    image: chicken1,
    price: 12.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Chicken",
  },
  {
    id: "12",
    name: "Grilled Chicken",
    image: chicken2,
    price: 11.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Chicken",
  },
  {
    id: "13",
    name: "Peri Peri Chicken",
    image: chicken3,
    price: 10.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Chicken",
  },
  {
    id: "14",
    name: "Rotisserie Chicken",
    image: chicken4,
    price: 13.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Chicken",
  },
  {
    id: "15",
    name: "Chicken Traybake",
    image: chicken5,
    price: 9.99,
    description:
      "Our signature burger with truffle sauce, caramelized onions, and mushrooms.",
    category: "Chicken",
  },
];
