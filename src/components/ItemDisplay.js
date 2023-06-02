import { useRerender } from "../utils/hooks";

const ItemDisplay = ({ itemList, children }) => {
  const reRender = useRerender();

  const item = itemList[Math.floor(itemList.length * Math.random())];

  return (
    <div className="item-card">
      <h4>{children}</h4>
      {item ? (
        <img
          src={item?.imageUrl}
          alt={`${item?.dressCode} ${item?.description}`}
          onClick={reRender}
        />
      ) : (
        <div className="item-error">
          There are no items to display for this dress code.
        </div>
      )}
    </div>
  );
};

export default ItemDisplay;
