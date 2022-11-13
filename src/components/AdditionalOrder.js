import useWindowSize from "../hooks/useWindowSize";
import BaseInput from "./UI/BaseInput";
import PlusButton from "./UI/PlusButton";
import XButton from "./UI/XButton";

function AdditionalOrder({
  curData,
  curOrder,
  orders,
  setOrders,
  handleCreateNewOrder,
}) {
  const { width } = useWindowSize();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    orders[orders.indexOf(curOrder)][name] = value === "" ? "" : +value;
    setOrders([...orders]);
  };

  return (
    <div className="flex flex-row p-1 mt-3 card-border w-full text-xs md:text-base">
      <div className="flex flex-col w-full">
        <BaseInput
          label="Entry Price"
          name="entryPrice"
          value={curOrder.entryPrice}
          handleOnChange={(e) => handleInputChange(e)}
          currency="USDT"
        />
        <BaseInput
          label="Filled Qty"
          name="filledQty"
          value={curOrder.filledQty}
          handleOnChange={(e) => handleInputChange(e)}
          currency={curData.coinName}
        />
      </div>
      <div className="flex-between flex-col">
        <XButton
          onClick={() => {
            setOrders([...orders.filter((obj) => obj.id !== curOrder.id)]);
          }}
          size={width > 480 ? 51 : 35}
        />
        {orders.length - 1 === orders.indexOf(curOrder) && (
          <PlusButton
            onClick={handleCreateNewOrder}
            size={width > 480 ? 50 : 35}
          />
        )}
      </div>
    </div>
  );
}

export default AdditionalOrder;
