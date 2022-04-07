import React, { lazy } from "react";
import { Redirect } from "react-router";
import { Routes } from "./routes-constants";
const Login = lazy(() => import("../pages/login/Login"));
const ValidateForgotLink = lazy(
  () => import("../pages/forgotPassword/ConfirmLink")
);
const ValidateSignupLink = lazy(() => import("../pages/login/ConfirmSignup"));
const ConfrimPassword = lazy(
  () =>
    import("../pages/forgotPassword/forgotpassword_forms/ForgotPasswordConfirm")
);
const ChangePassword = lazy(
  () => import("../pages/forgotPassword/forgotpassword_forms/UpdatePassword")
);
const Home = lazy(() => import("../pages/dashboard/Home"));
const Beneficiary = lazy(() => import("../pages/dashboard/Home"));
const Projects = lazy(() => import("../pages/projects/Projects"));
const ViewProject = lazy(() => import("../pages/projects/ViewProject"));
const Users = lazy(() => import("../pages/users/index"));
const AgentProjects = lazy(
  () => import("../pages/agentProjects/AgentProjects")
);
const AgentProjectCreate = lazy(
  () => import("../pages/agentProjects/AgentProjectCreate")
);
const AdminLogin = lazy(() => import("../pages/adminLogin/AdminLogin"));
const ForgotPassword = lazy(
  () => import("../pages/forgotPassword/ForgotPassword")
);
const ApprovalChain = lazy(
  () => import("../pages/approvalChain/ApprovalChain")
);

export interface RoutesInterface {
  path: string;
  exact?: boolean;
  isPrivate: boolean;
  component: React.LazyExoticComponent<() => React.ReactElement> | any;
}

const AppRoutes: RoutesInterface[] = [
  {
    path: "/signup",
    exact: true,
    isPrivate: false,
    component: Login
  },
  {
    path: Routes.ValidateAgentSignup,
    exact: true,
    isPrivate: false,
    component: ValidateSignupLink
  },
  {
    path: Routes.ValidateAdminSignup,
    exact: true,
    isPrivate: false,
    component: ValidateSignupLink
  },
  {
    path: "/",
    exact: true,
    isPrivate: false,
    // eslint-disable-next-line react/display-name
    component: () => <Redirect to={Routes.Login} />
  },
  {
    path: Routes.Login,
    exact: true,
    isPrivate: false,
    component: AdminLogin
  },
  {
    path: Routes.ConfirmPassword,
    exact: true,
    isPrivate: false,
    component: ConfrimPassword
  },
  {
    path: Routes.ChangePassword,
    exact: true,
    isPrivate: false,
    component: ChangePassword
  },
  {
    path: Routes.ValidateSignup,
    exact: true,
    isPrivate: false,
    component: ValidateForgotLink
  },
  {
    path: Routes.ValidateForgotPassword,
    exact: true,
    isPrivate: false,
    component: ValidateForgotLink
  },
  // {
  //   path: Routes.AdminLogin,
  //   exact: true,
  //   isPrivate: false,
  //   component: AdminLogin
  // },
  {
    path: Routes.ForgotPassword,
    exact: true,
    isPrivate: false,
    component: ForgotPassword
  },
  {
    path: Routes.Home,
    exact: true,
    isPrivate: true,
    // eslint-disable-next-line react/display-name
    component: () => <Redirect to={Routes.Home} />
  },
  {
    path: Routes.Members,
    exact: true,
    isPrivate: true,
    // eslint-disable-next-line react/display-name
    component: () => <Redirect to={Routes.Home} />
  },
  {
    path: Routes.ReturnsPayment,
    exact: true,
    isPrivate: true,
    // eslint-disable-next-line react/display-name
    component: () => <Redirect to={Routes.Home} />
  },
  {
    path: Routes.Reports,
    exact: true,
    isPrivate: true,
    // eslint-disable-next-line react/display-name
    component: () => <Redirect to={Routes.Home} />
  },
  {
    path: Routes.Beneficiaries,
    exact: true,
    isPrivate: true,
    // eslint-disable-next-line react/display-name
    component: () => <Redirect to={Routes.Beneficiaries} />
  },
  {
    path: Routes.ApprovalChain,
    exact: true,
    isPrivate: true,
    component: ApprovalChain
  },
  {
    path: Routes.Projects,
    exact: true,
    isPrivate: true,
    component: Projects
  },
  {
    path: Routes.ViewProjects,
    exact: true,
    isPrivate: true,
    component: ViewProject
  },
  {
    path: Routes.Users,
    exact: true,
    isPrivate: true,
    component: Users
  },
  {
    path: Routes.AgentsProject,
    exact: true,
    isPrivate: true,
    component: AgentProjects
  },
  {
    path: Routes.AgentsProjectCreate,
    exact: true,
    isPrivate: true,
    component: AgentProjectCreate
  },
  {
    path: Routes.Home,
    exact: true,
    isPrivate: true,
    component: Home
  }
];

export { AppRoutes };
