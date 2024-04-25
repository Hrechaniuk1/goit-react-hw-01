import TransactionHistoryItem from "./TransactionHistoryItem"
import css from "./TransactionHistory.module.css"


export default function TransactionHistory({ data }) {
    let infoForTable = Array.from(data).map(({ id, amount, type, currency }) =>
        <TransactionHistoryItem
        key={id}
            type={type}
            amount={amount}
        currency={currency}
        styleClass = {css.tableLine}
        >

        </TransactionHistoryItem>)
    return (
        <>
            <table className={css.table}>
  <thead>
    <tr>
      <th className={css.tableHead}>Type</th>
      <th className={css.tableHead}>Amount</th>
      <th className={css.tableHead}>Currency</th>
    </tr>
  </thead>

  <tbody>
    {infoForTable}
  </tbody>
</table>
        </>
    )
}