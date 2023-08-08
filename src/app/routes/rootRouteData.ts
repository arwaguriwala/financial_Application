import Dashboard from "../../pages/dashboard/Dashboard";
import Financial from "../../pages/financial/Financial";
import HiringPlans from "../../pages/hiring-plans/HiringPlans";
import Models from "../../pages/models/Models";

export const navBarData = [
  {
    id: 1,
    name: "Dashboard",
    role: ["Admin"],
    element: Dashboard,
    path: "dashboard",
    header: "Dashboard",
    children: null,
    location: "/dashboard",
  },

  {
    id: 2,
    name: "Financial",
    role: ["Admin"],
    element: Financial,
    path: "financial",
    header: "Financial",
    children: null,
    location: "/financial",
  },
  {
    id: 3,
    name: "Hiring Palns",
    role: ["Admin"],
    element: HiringPlans,
    path: "hire-plans",
    header: "Hiring Plans",
    children: null,
    location: "/hire-plans",
  },
  {
    id: 4,
    name: "Models",
    role: ["Admin"],
    element: Models,
    path: "model",
    header: "model",
    children: null,
    location: "/model",
  },
];
