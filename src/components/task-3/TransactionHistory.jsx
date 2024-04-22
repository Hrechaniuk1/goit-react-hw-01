import TransactionHistoryItem from "./TransactionHistoryItem"


export default function TransactionHistory({ data }) {
    let infoForTable = Array.from(data).map(({ id, amount, type, currency }) =>
        <TransactionHistoryItem
        key={id}
            type={type}
            amount={amount}
            currency={currency}
        >

        </TransactionHistoryItem>)
    return (
        <>
            <table className="table">
  <thead>
    <tr>
      <th className="table-head">Type</th>
      <th className="table-head">Amount</th>
      <th className="table-head">Currency</th>
    </tr>
  </thead>

  <tbody>
    {infoForTable}
  </tbody>
</table>
        </>
    )
}