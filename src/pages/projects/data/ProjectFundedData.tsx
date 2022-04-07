import faker from "faker";

interface ProjectFundedDataProps {
  id: number;
  backgroundImg: any;
  img: any;
  name: string;
  beneficiary: string;
  cost: number;
  returns: number;
  category: string;
  slots: number;
  slotPerCap: number;
  members: number;
  maturityDate: string;
  amountRaised: any;
  neededAmount: any;
}
export const ProjectFundedData: ProjectFundedDataProps[] = [
  {
    id: 0,
    backgroundImg: faker.image.image(),
    img: faker.image.image(),
    name: "Rachel Super Mall Construction",
    beneficiary: "Rachel Riley",
    slots: 200,
    cost: 5000,
    returns: 13,
    category: "REAL ESTATE",
    slotPerCap: 20,
    members: 231,
    maturityDate: "12th March, 2022",
    amountRaised: 800000,
    neededAmount: 1000000
  },
  {
    id: 1,
    backgroundImg: faker.image.image(),
    img: faker.image.image(),
    name: "Rachel Super Mall Construction",
    beneficiary: "Rachel Riley",
    slots: 200,
    cost: 5000,
    returns: 13,
    category: "REAL ESTATE",
    slotPerCap: 20,
    members: 231,
    maturityDate: "12th March, 2022",
    amountRaised: 800000,
    neededAmount: 1000000
  }
];
