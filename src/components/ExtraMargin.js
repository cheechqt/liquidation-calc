import BaseInput from "./UI/BaseInput";

function ExtraMargin({
  curData,
  setCurData,
  handleInputChange,
  isShow,
  setIsShow,
}) {
  if (isShow) {
    return (
      <div className="flex flex-col p-1 mt-3 card-border text-xs md:text-base">
        <button
          className="btn btn-primary"
          onClick={() => {
            setIsShow(false);
            setCurData({ ...curData, extraMargin: 0 });
            setCurData({ ...curData, contractSize: 1 });
          }}
        >
          Close
        </button>
        <BaseInput
          label="Extra Margin Added"
          name="extraMargin"
          value={curData.extraMargin}
          handleOnChange={(e) => handleInputChange(e)}
          currency="USDT"
        />
        <BaseInput
          label="Contract Size"
          name="contractSize"
          value={curData.contractSize}
          handleOnChange={(e) => handleInputChange(e)}
          currency={curData.coinName}
        />
      </div>
    );
  }

  return (
    <button
      className="btn btn-primary mt-3"
      onClick={() => {
        setIsShow(true);
        setCurData({ ...curData, extraMargin: "", contractSize: "" });
      }}
    >
      Add Extra Margin
    </button>
  );
}

export default ExtraMargin;
