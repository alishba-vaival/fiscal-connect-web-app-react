import React from "react";
import { Navigate } from "react-router-dom";

//Dashboard
import Dashboard from "../pages/Dashboard";

//Homepage
import Homepage from '../pages/Homepage/Homepage'

// Leads 
import Lead from "../pages/Leads/Leads";
import LeadCategory from "../pages/Leads/LeadCategory"


// Contact 
import Contact from '../pages/Contact/Contacts';
import ContactCategory from '../pages/Contact/ContactCategory'

// Ticket 
import Ticket from '../pages/Tickets/Tickets'
import TicketCategory from '../pages/Tickets/TicketCategory'

// NonAuthentication 
import Login from '../pages/Authentication/Login';
import Register from '../pages/Authentication/Register';
import ForgetPasswordPage from '../pages/Authentication/ForgotPasswod';
import ResetPassword from '../pages/Authentication/ResetPassword';
import Logout from '../pages/Authentication/Logout';
import CashExpense from "../pages/CashExpense/CashExpense";
import BankExpense from "../pages/BankExpense/BankExpense";                                                  
import CreateVoucher from "../pages/CreateVoucher/CreateVoucher";                                                 
import Receipt from "../pages/Receipt/Receipt";                                                 
import Views from "../pages/Views/Views";                                                 
import Other from "../pages/Other/Other";                                                 

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/leads", component: <Lead /> },
  { path: "/leadCategory", component: <LeadCategory /> },
  { path: "/contacts", component: <Contact /> },
  { path: "/contactCategory", component: <ContactCategory /> },
  { path: "/tickets", component: <Ticket /> },
  { path: "/ticketCategory", component: <TicketCategory /> },
  { path: "/homepage", component: <Homepage /> },
  { path: "/cashExpense", component: <CashExpense /> },
  { path: "/bankExpense", component: <BankExpense /> },
  { path: "/receipt", component: <Receipt /> },
  { path: "/views", component: <Views /> },
  { path: "/other", component: <Other /> },
  { path: "/createVoucher", component: <CreateVoucher /> },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  {
    path: "/",
    exact: true,
    component: <Navigate to="/dashboard" />,
  },
  { path: "*", component: <Navigate to="/dashboard" /> },
  { path: "/homepage", component: <Navigate to="/homepage" /> },
  { path: "/cashExpense", component: <Navigate to="/cashExpense" /> },
  { path: "/bankExpense", component: <Navigate to="/bankExpense" /> },
  { path: "/receipt", component: <Navigate to="/receipt" /> },
  { path: "/views", component: <Navigate to="/views" /> },
  { path: "/other", component: <Navigate to="/other" /> },
  { path: "/createVoucher", component: <Navigate to="/createVoucher" /> },
];

const publicRoutes = [
  // Authentication Page
  { path: "/logout", component: <Logout /> },
  { path: "/login", component: <Login /> },
  { path: "/forgot-password", component: <ForgetPasswordPage /> },
  { path: "/register", component: <Register /> },
  { path: "/resetPassword", component: <ResetPassword /> }

  // //AuthenticationInner pages
  // { path: "/auth-signin-basic", component: <BasicSignIn /> },
  // { path: "/auth-signup-basic", component: <BasicSignUp /> },
  // { path: "/auth-pass-reset-basic", component: <BasicPasswReset /> },
  // { path: "/auth-lockscreen-basic", component: <BasicLockScreen /> },
  // { path: "/auth-logout-basic", component: <BasicLogout /> },
  // { path: "/auth-success-msg-basic", component: <BasicSuccessMsg /> },
  // { path: "/auth-twostep-basic", component: <BasicTwosVerify /> },
  // { path: "/auth-404", component: <Basic404 /> },
  // { path: "/auth-500", component: <Error500 /> },

];

export { authProtectedRoutes, publicRoutes };