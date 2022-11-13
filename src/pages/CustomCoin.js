import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BaseInput from "../components/UI/BaseInput";
import step1 from "../images/step1.jpg";
import step3 from "../images/step3.png";

function CustomCoin() {
  const [inputsData, setInputsData] = useState({
    leverage: "",
    entryPrice: "",
    liquidationPrice: "",
  });
  const [result, setResult] = useState("");

  useEffect(() => {
    calcMMR();
  }, [inputsData]);

  const calcMMR = () => {
    const { leverage, entryPrice, liquidationPrice } = inputsData;
    setResult(-1 + 1 / leverage + liquidationPrice / entryPrice);
    console.log(result);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputsData({
      ...inputsData,
      [name]: value,
    });
  };

  return (
    <div className="main-container">
      <h2 className="">how can I calc another coin?</h2>
      <h3 className="text-sm text-justify">
        All you need is the{" "}
        <span className="underline">MMR(Maintenance Margin Rate)</span> of the
        COIN{" "}
        <a className="text-blue-500" href="shorturl.at/hjnP8" target="_blank">
          check bybit docs
        </a>{" "}
        or calc it here
      </h3>
      <div>
        <div>
          <p>Step 1.</p>
          <img src={step1} alt="first step" />
        </div>
        <div>
          <p>Step 2.</p>
          <span className="text-sm">fill out the form</span>
          <div className="text-start text-xs md:text-base">
            <form>
              <BaseInput
                label="Leverage"
                name="leverage"
                value={inputsData.leverage}
                handleOnChange={(e) => handleInputChange(e)}
              />
              <BaseInput
                label="Entry Price"
                name="entryPrice"
                value={inputsData.entryPrice}
                handleOnChange={(e) => handleInputChange(e)}
                currency="USDT"
              />
              <BaseInput
                label="Liquidation Price"
                name="liquidationPrice"
                value={inputsData.liquidationPrice}
                handleOnChange={(e) => handleInputChange(e)}
                currency="USDT"
              />
            </form>
            <h1 className="text-lg text-center card-border !border-yellow-500  mt-2 bg-black">
              {!isNaN(result) &&
                result !== -Infinity &&
                result !== +Infinity &&
                result > 0 &&
                `MMR: ${Number(result.toString().slice(0, 6))}`}
            </h1>
          </div>
        </div>
        <div>
          <p>Step 3.</p>
          <p className="text-sm">
            just go to the calc and select coin0.01 or coin0.02 based on the
            received MMR
          </p>
          <img src={step3} alt="third step" />
        </div>
      </div>
      <Link to="/" className="btn btn-primary mt-2">
        go to calc
      </Link>
      <span className="text-gray-500 text-sm">
        if the resulting MMR is not equal to 0.01 or 0.02, report the bug
         please using the links below ↓↓↓
      </span>
    </div>
  );
}

export default CustomCoin;
