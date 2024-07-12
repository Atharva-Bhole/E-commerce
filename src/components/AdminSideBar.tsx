import { IconType } from "react-icons";
import { Link, Location, useLocation } from "react-router-dom";
import { RiDashboardFill, RiShoppingBag3Fill, RiCustomerService2Fill, RiTrademarkFill } from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import '../styles/app.scss';
const AdminSideBar = () => {
  const location = useLocation();
  return (
        <aside>
          <h2>Logo.</h2>
          <div>
            <h5>Dashboard</h5>
            <ul>
            <li style={
              {
                backgroundColor:location.pathname.includes("/admin/dashboard") ?"rgba(0,115,255,0.1)" 
                : 'white',
              }
            }
            >
              <Link to={"/admin/dashboard"}>
              <RiDashboardFill />
              Dashboard
              </Link>
              </li>
              <li>
              <Link to={"/admin/products"}>
              <RiShoppingBag3Fill />
              Product
              </Link>
              </li>
              <li>
              <Link to={"/admin/customer"}>
              <IoIosPeople />
              Customer
              </Link>
              </li>
              <li>
              <Link to={"/admin/transactions"}>
              <AiFillFileText />
              Transaction
              </Link>
              </li>
            </ul>
          </div>
        </aside>
        
  );
};


export default AdminSideBar;