import React, { ReactNode } from "react";
import { ReactComponent as DashboardIcon } from "../assets/vectors/dashboard.svg";
import { ReactComponent as ProjectsIcon } from "../assets/vectors/project.svg";
import { ReactComponent as BeneficiariesIcon } from "../assets/vectors/beneficiary.svg";
import { ReactComponent as NoorCoopUsersIcon } from "../assets/vectors/noorcoopusers.svg";
import { ReactComponent as MembersIcon } from "../assets/vectors/members.svg";
import { ReactComponent as ReturnPaymentIcon } from "../assets/vectors/returnspayment.svg";
import { ReactComponent as ApprovalChainIcon } from "../assets/vectors/approvalchain.svg";
import { ReactComponent as ReportsIcon } from "../assets/vectors/reports.svg";
import * as BiIcons from "react-icons/bi";
import { Routes } from "../routes/routes-constants";

interface SidebarDataProps {
  title: string;
  exact: boolean;
  path: string;
  paths: string[];
  icon: ReactNode;
  cName: string;
  role: string[];
}

export const SidebarData: SidebarDataProps[] = [
  {
    title: "Dashboard",
    exact: true,
    path: "/",
    paths: ["/"],
    icon: <DashboardIcon />,
    cName: "nav-text",
    role: ["admin", "agent"]
  },
  {
    title: "Projects",
    exact: false,
    path: "/app/projects",
    paths: [
      "/app/projects",
      "/app/projects/partially",
      "/app/projects/fully",
      "/app/projects/matured",
      "/app/project/:id"
    ],
    icon: <ProjectsIcon width={17} height={17} />,
    cName: "nav-text",
    role: ["admin", "agent"]
  },
  {
    title: "Agent Projects",
    exact: false,
    path: Routes.AgentsProject,
    paths: [
      Routes.AgentsProject,
      Routes.AgentsProjectCreate,
      "/agent/project/awaiting"
    ],
    icon: <ProjectsIcon width={17} height={17} />,
    cName: "nav-text",
    role: ["agent"]
  },
  {
    title: "Beneficiaries",
    exact: false,
    path: "/app/beneficiaries",
    paths: ["/app/beneficiaries"],
    icon: <BeneficiariesIcon width={17} height={17} />,
    cName: "nav-text",
    role: ["admin"]
  },
  {
    title: "Noor Coop users",
    exact: false,
    path: Routes.Users,
    paths: [Routes.Users],
    icon: <NoorCoopUsersIcon width={16} height={16} />,
    cName: "nav-text",
    role: ["admin"]
  },
  {
    title: "Members",
    exact: false,
    path: "/app/members",
    paths: ["/app/members"],
    icon: <MembersIcon width={16} height={16} />,
    cName: "nav-text",
    role: ["admin", "agent"]
  },
  {
    title: "Returns Payment",
    exact: false,
    path: "/app/returns-payment",
    paths: ["/app/returns-payment"],
    icon: <ReturnPaymentIcon width={15} height={15} />,
    cName: "nav-text",
    role: ["admin", "agent"]
  },
  {
    title: "Reports",
    exact: false,
    path: "/app/reports",
    paths: ["/app/reports"],
    icon: <ReportsIcon width={17} height={17} />,
    cName: "nav-text",
    role: ["admin", "agent"]
  },
  {
    title: "Approval chain",
    exact: false,
    path: Routes.ApprovalChain,
    paths: [Routes.ApprovalChain],
    icon: <ApprovalChainIcon width={15} height={15} />,
    cName: "nav-text",
    role: ["admin"]
  },

  {
    title: "Profile",
    exact: false,
    path: "/profile",
    paths: ["/profile"],
    icon: <BiIcons.BiUserCircle size={20} />,
    cName: "nav-text profile-text",
    role: ["admin", "agent"]
  }
];
