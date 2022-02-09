import { Switch, Route, Redirect } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import CustomerSignup from "./Components/Signup/Customer/CustomerSignup";
import CustonerLogin from "./Components/Signup/Customer/CustonerLogin";
import VenderLogin from "./Components/Signup/Vender/VenderLogin";
import AdminLogin from "./Components/Signup/Admin/AdminLogin";
import VenderSignup from "./Components/Signup/Vender/VenderSignup";
import MainHome from "./Components/Home/MainHome/MainHome";
import VenderItemList from "./Components/Signup/Vender/VenderItemList";
import ArivalsPage from "./Components/Pages/ArivalsPage/ArivalsPage";
import Searchitem from "./Components/Pages/Searchitem/Searchitem";
import SpacialDiscount from "./Components/Pages/SpecialDiscount/SpacialDiscount";
import CustomerList from "./Components/Pages/CustomerList/CustomerList";
import AdminVenderList from "./Components/Pages/AdminVenderList/AdminVenderList";
import AdminRevenueList from "./Components/Pages/AdminRevenueList/AdminRevenueList";
import WsAddnewItemPage from "./Components/Pages/WsAddnewItemPage";
import CustomerShoppingList from "./Components/Pages/CustomerShoppingList";
import CustomerPurchaceOrder from "./Components/Pages/CustomerPurchaceOrder";
import CustomerInvoiceList from "./Components/Pages/CustomerInvoiceList";
import Sidebar from "./Sidebar/Sidebar";
import AdminUserList from "./Components/Pages/Admin/AdminUserList";
import AdminPosList from "./Components/Pages/Admin/AdminPos'List";
import AdminCustomerFinalInvoice from "./Components/Pages/Admin/AdminCustomerFinalInvoice";
// import WSVenderList from "./Components/Pages/WSVenderList";
// import WSDistributerList from "./Components/Pages/WSDistributerList";
// import CustomerFinalInvoice from "./Components/Pages/CustomerFinalInvoice";
// import VenderCategoryListPage from "./Components/Pages/VenderCategoryListPage";
// import VenderDistributerList from "./Components/Pages/VenderDistributerList";
import VendorAddEdit from "./Components/Pages/VendorAddEdit";
import ForgotPassword from "./Components/Signup/Admin/ForgotPassword";
import ForgotUserName from "./Components/Signup/Admin/ForgotUserName";
//for notification
import 'react-notifications/lib/notifications.css';
import VeryifyUserName from "./Components/Signup/Admin/VeryifyUserName";
import VeryfyPassword from "./Components/Signup/Admin/VeryfyPassword";
import AdminUserPage from "./Components/Pages/Admin/AdminUserPage";


function App() {
  return (
    <>
   
    
      <Switch>
        
        <Route exact path="/customerSignup" component={CustomerSignup} />
        <Route exact path="/" component={AdminLogin} />
        <Route exact path="/customerlist" component={CustomerList} />
        <Route exact path="/admin-vender-list" component={AdminVenderList} />
        <Route exact path="/admin-revenue-list" component={AdminRevenueList} />
        <Route exact path="/sidebar" component={Sidebar} />
        <Route exact path="/admin-user-list" component={AdminUserList} />
        <Route exact path="/admin-pos-list" component={AdminPosList} />
        <Route
          exact
          path="/final-invoice"
          component={AdminCustomerFinalInvoice}
        />
        <Route exact path="/forgot-password" component={ForgotPassword} />
        <Route exact path="/forgot-userName" component={ForgotUserName} />
        <Route exact path="/VeryifyUserName" component={VeryifyUserName} />
        <Route exact path="/VeryfyPassword" component={VeryfyPassword} />
        <Route exact path="/AdminUserPage" component={AdminUserPage} />
      
      </Switch>
    </>
  );
}

export default App;
