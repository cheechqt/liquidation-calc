import { coins } from "../coins-data";

function SelectCoin({ setCurData, curData }) {
  const getMMR = (coinName) => {
    const curCoin = coins.find((coin) => coin.coinName === coinName);
    return curCoin.MMR;
  };

  return (
    <div className="flex-center mt-3 w-full">
      <select
        className="w-full"
        required
        name="coinName"
        value={curData.coinName}
        onChange={(e) => {
          setCurData({
            ...curData,
            coinName: e.target.value,
            maintenanceMarginRate: getMMR(e.target.value),
          });
        }}
      >
        <option value="" disabled>
          --choose coin
        </option>
        {coins.map((coin) => {
          return (
            <option key={coin.coinName} value={coin.coinName}>
              {coin.coinName}
            </option>
          );
        })}
      </select>
      {/* <p className="text-white pl-2 text-xs">MMR: {curData.maintenanceMarginRate}</p> */}
    </div>
  );
}

export default SelectCoin;
