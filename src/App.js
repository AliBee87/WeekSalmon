import Register from './components/Register';
import Login from './components/Login';
import Home from './components/Home';
import Layout from './components/Layout';
import Cooked from './components/Cooked';
import Raw from './components/Raw';
import Grilled from './components/Grilled';
import GrilledPinterest from './components/GrilledPinterest';
import Baked from './components/Baked';
import BakedPinterest from './components/BakedPinterest';
import Sushi from './components/Sushi';
import SushiPinterest from './components/SushiPinterest'
import SalmonStack from './components/SalmonStack';
import SalmonStackPinterest from './components/SalmonStackPinterest';
import Missing from './components/Missing';
import Unauthorized from './components/Unauthorized';
import NoLike from './components/NoLike';
import NoLikePinterest from './components/NoLikePinterest'
import Why from './components/Why';
import WhyPinterest from './components/WhyPinterest';
import Bear from './components/Bear';
import Bear1 from './components/Bear1';
import RequireAuth from './components/RequireAuth';
import { Routes, Route } from "react-router-dom";


const ROLES = {
  'User': 2001,
  'Editor': 1984,
  'Admin': 5150
}

function App() {

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="why" element={<Why />} />
        <Route path="whyPinterest" element={<WhyPinterest />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        <Route path="cooked" element={<Cooked />} />
        <Route path="noLike" element={<NoLike />} />
        <Route path="noLikePinterest" element={<NoLikePinterest />} />
        <Route path="raw" element={<Raw />} />
        <Route path="grilled" element={<Grilled />} />
        <Route path="grilledPinterest" element={<GrilledPinterest />} />
        <Route path="baked" element={<Baked />} />
        <Route path="bakedPinterest" element={<BakedPinterest />} />
        <Route path="sushi" element={<Sushi />} />
        <Route path="sushiPinterest" element={<SushiPinterest />} />
        <Route path="salmonStack" element={<SalmonStack />} />
        <Route path="salmonStackPinterest" element={<SalmonStackPinterest />} />
        <Route path="bear" element={<Bear />} />
        <Route path="bear1" element={<Bear1 />} />


        {/* routes to protect, including roles*/}
        <Route element={<RequireAuth allowedRoles={[ROLES.User]} />}>
          <Route path="/" element={<Home />} />
          </Route>
       {/* catch all for any request that doesn't match a path*/}
        <Route path="*" element={<Missing />} />
        </Route>
    </Routes>
  );
}

export default App;