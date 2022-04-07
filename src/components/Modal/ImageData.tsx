import faker from "faker";

interface ImageDataProps {
  img: any;
  id: number;
}

export const ImageData: ImageDataProps[] = [
  {
    id: 1,
    img: faker.image.image(),
  },
  {
    id: 2,
    img: faker.image.image(),
  },
  {
    id: 3,
    img: faker.image.image(),
  },
  {
    id: 4,
    img: faker.image.image(),
  },
  {
    id: 5,
    img: faker.image.image(),
  },
  {
    id: 6,
    img: faker.image.image(),
  },
];
