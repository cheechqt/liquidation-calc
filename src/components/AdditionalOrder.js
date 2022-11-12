
function AdditionalOrder({ curOrder, orders, setOrders }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    orders[orders.indexOf(curOrder)][name] = value === "" ? "" : +value;
    setOrders([...orders]);
  };

  return (
    <>
      <div className="flex flex-col p-1 mt-3 border border-white">
        <button
          type="button"
          className="text-white bg-yellow-700"
          onClick={() => {
            setOrders([...orders.filter((obj) => obj.id !== curOrder.id)]);
          }}
        >
          Cancel
        </button>
        <label className="text-white">Entry Price</label>
        <input
          name="entryPrice"
          type="number"
          placeholder="Entry Price"
          required
          value={curOrder.entryPrice}
          onChange={(e) => handleInputChange(e)}
        />
        <label className="text-white">Filled Qty</label>
        <input
          name="filledQty"
          type="number"
          placeholder="Filled Qty"
          required
          value={curOrder.filledQty}
          onChange={(e) => handleInputChange(e)}
        />
      </div>
    </>
  );
}

export default AdditionalOrder;
