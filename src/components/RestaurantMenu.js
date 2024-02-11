import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { RESTAURANT_MENU_FETCH_API_LINK } from "../utils/constants";

import { useDispatch } from "react-redux";
import { addItem } from "../utils/slices/cartSlice";

const RestaurantMenu = () => {
  const [resInfo, _setResInfo] = useState(null);
  const dispatch = useDispatch();

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

  // console.log(itemCards);

  const handleAddItem = (itemInCart) => {
    // Dispatch an Action:
    dispatch(addItem(itemInCart));
  };

  return (
    <div className="res-menu-container">
      <h1>
        {name}, ID : {id}
      </h1>
      <h2>Cuisines:</h2>
      <h3>{cuisines.join(", ")}</h3>

      <h2>Menu:</h2>
      <div>
        <table border="1">
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price</th>
              <th>Click to Add</th>
            </tr>
          </thead>
          <tbody>
            {itemCards?.map((item) => (
              <tr key={item?.card?.info?.id}>
                <td>{item?.card?.info?.id}</td>
                <td>{item?.card?.info?.name}</td>
                <td>
                  {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                    100}{" "}
                  Rs
                </td>
                <td>
                  <button onClick={() => handleAddItem(item)}>
                    + Add
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RestaurantMenu;
