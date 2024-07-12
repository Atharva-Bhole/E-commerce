import { Location } from "react-router-dom";
import AdminSideBar from "../components/AdminSideBar";
import { IconType } from "react-icons";
import { DiBlackberry } from "react-icons/di";
const style= {
  backgroundColor: 'gray'
}
const Dashboard = () => {
  return (
    <div className="adminContainer">
      <AdminSideBar></AdminSideBar>
      <main style={style}>sadf</main>
    </div>
  )
}

export default Dashboard;