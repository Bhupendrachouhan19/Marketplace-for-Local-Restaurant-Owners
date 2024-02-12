import { useDispatch } from "react-redux";
import { addItem } from "../utils/slices/cartSlice";
import { MENU_ITEM_THUMBNAIL_LINK_HEADER } from "../utils/constants";

const MenuItemList = ({ items }) => {
  const dispatch = useDispatch();

  console.log("MenuItemsList ", items);

  const handleAddItem = (items) => {
    // Dispatch an Action:
    dispatch(addItem(items));
  };

  return (
    <div className="menu-item-list-container">
      <table className="menu-item-list-table">
        <thead className="menu-item-list-table-thead">
          <tr>
            <th>Dish</th>
            <th className="dish-info">Dish Info</th>
            <th>Price</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody className="menu-item-list-table-tbody">
          {items?.map((item) => (
            <tr key={item?.card?.info?.id} className="menu-item-dish-row">
              <td className="menu-item-image-td">
                <img
                  className="menu-item-image"
                  src={
                    MENU_ITEM_THUMBNAIL_LINK_HEADER + item?.card?.info?.imageId
                  }
                  alt="food thumbnail"
                />
              </td>
              <td className="menu-item-info">
                <h3>{item?.card?.info?.name}</h3>
                <div>Dish ID: {item?.card?.info?.id}</div>
              </td>
              <td className="menu-item-price">
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}{" "}
                Rs
              </td>
              <td>
                <button
                  onClick={() => handleAddItem(item)}
                  className="add-to-cart-btn"
                >
                  + Add
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MenuItemList;
