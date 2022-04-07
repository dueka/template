import React from "react";
import faker from "faker";
import { ReactComponent as PdfIcon } from "../../../assets/vectors/pdf.svg";
import generateID from "../../../utils/id-generator";
interface ProjectDataProps {
  id: number;
  backgroundImg: any;
  backgroundImg1: any;
  img: any;
  name: string;
  beneficiary: string;
  cost: number;
  returns: number;
  category: string;
  slots: number;
  slotPerCap: number;
  duration: number;
  avaialbleSlots: number;
  fundingStatus: string;
  vendorsName: string;
  accountType: string;
  bankDetails: string;
  beneficiaryCreditReport: any;
  beneficiaryAccountStatement: any;
  amountRaised: any;
  neededAmount: any;
}

export const ProjectData: ProjectDataProps[] = [
  {
    id: 0,
    backgroundImg: faker.image.image(),
    backgroundImg1: faker.image.image(),
    img: faker.image.image(),
    name: "Rachel Super Mall Construction",
    beneficiary: "Rachel Riley",
    cost: 5000,
    returns: 13,
    category: "REAL ESTATE",
    slots: 200,
    slotPerCap: 20,
    duration: 6,
    avaialbleSlots: 40,
    fundingStatus: "Partially funded",
    vendorsName: "CAT construction",
    accountType: "Current account",
    bankDetails: "Stanbic IBTC bank - 0018274444",
    beneficiaryCreditReport: [
      <PdfIcon key={generateID(2)} />,
      "credit_report.pdf"
    ],
    beneficiaryAccountStatement: [
      <PdfIcon key={generateID(2)} />,
      "account_statement.pdf"
    ],

    amountRaised: 800000,
    neededAmount: 1000000
  },
  {
    id: 1,
    backgroundImg: faker.image.image(),
    backgroundImg1: faker.image.image(),
    img: faker.image.image(),
    name: "Donald Corn Foods",
    beneficiary: "Donald Dalia",
    cost: 5000,
    returns: 13,
    category: "AGRICULTURE",
    slots: 200,
    slotPerCap: 20,
    duration: 6,
    avaialbleSlots: 40,
    fundingStatus: "Partially funded",
    vendorsName: "CAT construction",
    accountType: "Current account",
    bankDetails: "Stanbic IBTC bank - 0018274444",
    beneficiaryCreditReport: [
      <PdfIcon key={generateID(2)} />,
      "credit_report.pdf"
    ],
    beneficiaryAccountStatement: [
      <PdfIcon key={generateID(2)} />,
      "account_statement.pdf"
    ],
    amountRaised: 800000,
    neededAmount: 1000000
  }
];
