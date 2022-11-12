import { useEffect, useState } from "react";
import ExtraMargin from "./ExtraMargin";
import Rules from "./Rules";
import SelectCoin from "./SelectCoin";
import { BsPlusCircleFill } from "react-icons/bs";
import AdditionalOrder from "./AdditionalOrder";

function Main() {
  const [curData, setCurData] = useState({
    type: "long",
    coinName: "BTC",
    maintenanceMarginRate: 0.005,
    entryPrice: "",
    leverage: "",
    extraMargin: 0,
    contractSize: 1,
  });
  const [orders, setOrders] = useState([]);
  const [result, setResult] = useState("");
  const [isShowExtraMarginBox, setIsShowExtraMarginBox] = useState(false);

  useEffect(() => {
    getEntryPriceFromOrders();
    calcLiquidation();
  }, [curData, orders]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurData({
      ...curData,
      [name]: value,
    });
  };

  const getEntryPriceFromOrders = () => {
    let arg1 = 0;
    let arg2 = 0;
    orders.forEach((obj) => {
      arg1 += obj.entryPrice * obj.filledQty;
      arg2 += obj.filledQty;
    });

    return arg1 / arg2;
  };

  const calcLiquidation = () => {
    const initialMarginRate = 1 / curData.leverage;
    const entryPrice = !orders[0]
      ? curData.entryPrice
      : getEntryPriceFromOrders();

    switch (curData.type) {
      case "long":
        setResult(
          entryPrice * (1 - initialMarginRate + curData.maintenanceMarginRate) -
            curData.extraMargin / curData.contractSize
        );
        break;
      case "short":
        setResult(
          entryPrice * (1 + initialMarginRate - curData.maintenanceMarginRate) +
            curData.extraMargin / curData.contractSize
        );
        break;
      default:
        break;
    }
  };

  const handleCreateNewOrder = () => {
    if (!orders[0] && +curData.entryPrice > 0) {
      setOrders([
        ...orders,
        {
          id: 1,
          entryPrice: curData.entryPrice,
          filledQty: "",
        },
        {
          id: Date.now(),
          entryPrice: "",
          filledQty: "",
        },
      ]);
    } else {
      setOrders([
        ...orders,
        {
          id: Date.now(),
          entryPrice: "",
          filledQty: "",
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <SelectCoin
        curData={curData}
        setCurData={setCurData}
        handleInputChange={handleInputChange}
      />
      <form className="flex flex-col max-w-[255px]">
        <div className="flex items-center justify-center">
          {!orders[0] && (
            <div className="w-full">
              <label className="text-white">Entry Price</label>
              <input
                name="entryPrice"
                type="number"
                placeholder="Entry Price"
                required
                value={curData.entryPrice}
                onChange={(e) => handleInputChange(e)}
              />
            </div>
          )}
          <button
            type="button"
            className="bg-yellow-300 rounded-full w-12 h-12 flex items-center justify-center ml-1"
            onClick={handleCreateNewOrder}
          >
            <BsPlusCircleFill
              className="text-gray-500 hover:text-yellow-700"
              size={100}
            />
          </button>
        </div>
        {orders.length !== 0 &&
          orders.map((order) => {
            return (
              <AdditionalOrder
                key={order.id}
                curOrder={order}
                orders={orders}
                setOrders={setOrders}
                handleInputChange={handleInputChange}
              />
            );
          })}
        <label className="text-white">Leverage</label>
        <input
          name="leverage"
          type="number"
          placeholder="Leverage"
          required
          value={curData.leverage}
          onChange={(e) => handleInputChange(e)}
        />
        <ExtraMargin
          curData={curData}
          setCurData={setCurData}
          isShow={isShowExtraMarginBox}
          setIsShow={setIsShowExtraMarginBox}
          handleInputChange={handleInputChange}
        />
        <div className="flex justify-between gap-x-5 mt-3">
          <button
            className={`text-white bg-yellow-700 px-5 w-full ${
              curData.type === "long" ? "" : "bg-opacity-30"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setCurData({ ...curData, type: "long" });
            }}
          >
            Long
          </button>
          <button
            className={`text-white bg-yellow-700 px-5 w-full ${
              curData.type === "short" ? "" : "bg-opacity-30"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setCurData({ ...curData, type: "short" });
            }}
          >
            Short
          </button>
        </div>
      </form>
      <h1 className="text-white">
        {!isNaN(result) &&
          result !== -Infinity &&
          result !== +Infinity &&
          result > 0 &&
          `Liquidation price: ±${Number(result.toString().slice(0, 8))}`}
      </h1>
      <Rules />
    </div>
  );
}

export default Main;
