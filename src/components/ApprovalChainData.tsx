import ReturnPaymentIcon from "../assets/vectors/payment.svg";
import ProjectCreation from "../assets/vectors/projectcreation.svg";

interface ApprovalChainDataProps {
  id: number;
  title: string;
  icon: any;
}

export const ApprovalChainData: ApprovalChainDataProps[] = [
  {
    id: 0,
    title: "Returns Payment",
    icon: ReturnPaymentIcon
  },
  {
    id: 1,
    title: "Project Creation",
    icon: ProjectCreation
  }
];
