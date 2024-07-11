import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Suspense, lazy } from "react"
import Loader from "./components/Loader"

const Dashboard = lazy(()=> import("./pages/Dashboard"))
const Transaction = lazy(() => import("./pages/Transaction"))
const Customers = lazy(()=>import("./pages/Customers"))
const Products = lazy(()=>import("./pages/Products"))


const App = () => {
  return (
    <div>
      <Router>
        <Suspense fallback={<Loader/>}>
        <Routes>
          <Route path="/admin/dashboard" element={ <Dashboard/> } />
          <Route path="/admin/products" element={ <Products/> } />
          <Route path="/admin/transaction" element={ <Transaction/> } />
          <Route path="/admin/customers" element={ <Customers/> } />

          {/* Charts */}

          

          {/* Apps */}

        </Routes>
        </Suspense>
      </Router>

    </div>
  )
}

export default App