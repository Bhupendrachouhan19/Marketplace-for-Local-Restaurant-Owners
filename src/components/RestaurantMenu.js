import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_FETCH_API_LINK } from "../utils/constants";
import MenuItemList from "./MenuItemList";

import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const [resInfo, _setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const { resId } = useParams();
  // console.log(resId)

  fetchMenu = async () => {
    const menuData = await fetch(RESTAURANT_MENU_FETCH_API_LINK + resId);

    const menuDataJSON = await menuData.json();

    const valueToRender = menuDataJSON.data;
    // console.log(valueToRender);

    _setResInfo(valueToRender);
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, id, cuisines } = resInfo?.cards[0]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="res-menu-container">
      <h1>
        {name}, ID : {id}
      </h1>
      <h2>Cuisines:</h2>
      <h3>{cuisines.join(", ")}</h3>

      <h2>Menu:</h2>
      <MenuItemList items={itemCards} />
    </div>
  );
};

export default RestaurantMenu;
