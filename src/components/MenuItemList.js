import { useDispatch } from "react-redux";
import { addItem } from "../utils/slices/cartSlice";

const MenuItemList = ({ items }) => {
  const dispatch = useDispatch();

  console.log("MenuItemsList ", items);

  const handleAddItem = (items) => {
    // Dispatch an Action:
    dispatch(addItem(items));
  };

  return (
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
          {items?.map((item) => (
            <tr key={item?.card?.info?.id}>
              <td>{item?.card?.info?.id}</td>
              <td>{item?.card?.info?.name}</td>
              <td>
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}{" "}
                Rs
              </td>
              <td>
                <button onClick={() => handleAddItem(item)}>+ Add</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MenuItemList;
