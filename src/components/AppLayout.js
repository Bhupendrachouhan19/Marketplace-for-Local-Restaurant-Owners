// importing components:
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

// importing redux stuf
import { Provider } from "react-redux";
import appStore from "../utils/appStore";
/*
Basic Components Layout for out app:

<Header/>
  -<Logo/>
  -<NavItems/>
<Body/>
  -<Search/>
  -<RestaurantContainer/>
    --<RestaurantCard/>
      ---Img
      ---Name of the Restaurant, Start Rating, cuisine, Delivery Time
<Footer/>
    --<Copyright/>
    --<Links/>
    --<Address/>
    --<Contact/>
*/

const AppLayout = () => (
  <Provider store={appStore}>
    <div className="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  </Provider>
);

export default AppLayout;
