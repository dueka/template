import faker from "faker";

interface AdminListDataProps {
  img: any;
  title: string;
  role: string;
}

export const AdminListData: AdminListDataProps[] = [
  {
    title: "Thomas King",
    role: "Administrator",
    img: faker.image.image(),
  },
  {
    title: "Adam Allen",
    role: "Administrator",
    img: faker.image.image(),
  },
  {
    title: "Bernice Bright",
    role: "Administrator",
    img: faker.image.image(),
  },
  {
    title: "Gretha Gadot",
    role: "Administrator",
    img: faker.image.image(),
  },
  {
    title: "Freya Faraday",
    role: "Administrator",
    img: faker.image.image(),
  },
  {
    title: "Candice Carrol",
    role: "Administrator",
    img: faker.image.image(),
  },
];
