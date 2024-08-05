const AddExpense = () => {
    return (
      <div className="max-h-screen flex items-center justify-center bg-gray-100">
        <div className="border rounded-md bg-white space-y-8 p-6 max-w-md w-full">
          <h1 className="text-center text-2xl font-bold">Add Expense</h1>
          <form className="space-y-4">
            <div className="flex flex-col">
              <label htmlFor="description">Description</label>
              <input type="text" id="description" className="border p-2 rounded-md" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="amount">Amount</label>
              <input type="number" id="amount" className="border p-2 rounded-md" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="paidBy">Paid By</label>
              <input type="text" id="paidBy" className="border p-2 rounded-md" />
            </div>
            <div className="flex flex-col">
              <label htmlFor="shareWith">Share with</label>
              <input type="text" id="shareWith" className="border p-2 rounded-md" />
            </div>
            <div>
                <button className="bg-sky-600 text-white p-3 rounded-md font-semibold hover:bg-sky-700">Add Expense</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
  
  export default AddExpense;
  