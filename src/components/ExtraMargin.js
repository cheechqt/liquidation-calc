function ExtraMargin({
  curData,
  setCurData,
  handleInputChange,
  isShow,
  setIsShow,
}) {
  if (isShow) {
    return (
      <div className="flex flex-col p-1 mt-3 border border-white">
        <button
          className="text-white bg-yellow-700"
          onClick={() => {
            setIsShow(false);
            setCurData({ ...curData, extraMargin: 0 });
            setCurData({ ...curData, contractSize: 1 });
          }}
        >
          Hide
        </button>
        <label className="text-white">Extra Margin Added</label>
        <input
          name="extraMargin"
          type="number"
          placeholder="Extra Margin Added"
          required
          value={curData.extraMargin}
          onChange={(e) => handleInputChange(e)}
        />
        <label className="text-white">Contract Size</label>
        <input
          name="contractSize"
          type="number"
          placeholder="Contract Size"
          required
          value={curData.contractSize}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    );
  }

  return (
    <button
      className="text-white bg-yellow-700 mt-3"
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
