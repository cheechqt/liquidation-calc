import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExtraMargin from "../components/ExtraMargin";
import SelectCoin from "../components/SelectCoin";
import AdditionalOrder from "../components/AdditionalOrder";
import PlusButton from "../components/UI/PlusButton";
import BaseInput from "../components/UI/BaseInput";

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
    <div className="main-container">
      <form className="flex justify-center flex-col">
        <SelectCoin
          curData={curData}
          setCurData={setCurData}
          handleInputChange={handleInputChange}
        />
        <Link to="/custom-coin" className="text-sm text-blue-500 underline">
          I didn't find the right coin/ нужной монеты нет
        </Link>
        {!orders[0] && (
          <div className="flex items-end mt-3">
            <BaseInput
              label="Entry Price"
              name="entryPrice"
              value={curData.entryPrice}
              handleOnChange={(e) => handleInputChange(e)}
              currency="USDT"
            />
            <PlusButton onClick={handleCreateNewOrder} />
          </div>
        )}
        {orders.length !== 0 &&
          orders.map((order) => {
            return (
              <AdditionalOrder
                key={order.id}
                curData={curData}
                curOrder={order}
                orders={orders}
                setOrders={setOrders}
                handleCreateNewOrder={handleCreateNewOrder}
              />
            );
          })}
        <BaseInput
          label="Leverage"
          name="leverage"
          value={curData.leverage}
          handleOnChange={(e) => handleInputChange(e)}
        />
        <ExtraMargin
          curData={curData}
          setCurData={setCurData}
          isShow={isShowExtraMarginBox}
          setIsShow={setIsShowExtraMarginBox}
          handleInputChange={handleInputChange}
        />
        <div className="flex-between gap-x-5 mt-3">
          <button
            className={`btn  w-full ${
              curData.type === "long"
                ? "btn-success"
                : "btn-secondary !border-green-500"
            }`}
            onClick={(e) => {
              e.preventDefault();
              setCurData({ ...curData, type: "long" });
            }}
          >
            Long
          </button>
          <button
            className={`btn  w-full ${
              curData.type === "short"
                ? "btn-danger"
                : "btn-secondary !border-red-500"
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
      <h1 className="text-lg text-center card-border !border-yellow-500  mt-2 bg-black">
        {!isNaN(result) &&
          result !== -Infinity &&
          result !== +Infinity &&
          result > 0 &&
          `Liquidation price: ±${Number(result.toString().slice(0, 8))}`}
      </h1>
    </div>
  );
}

export default Main;
