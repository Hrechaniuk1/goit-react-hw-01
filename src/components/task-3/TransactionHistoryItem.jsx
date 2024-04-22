export default function TransactionHistoryItem ({amount, type, currency}) {
    return (
        <>
    <tr>
        <td className="table-line">{type}</td>
        <td className="table-line">{amount}</td>
        <td className="table-line">{currency}</td>
    </tr>
        </>
    )
}