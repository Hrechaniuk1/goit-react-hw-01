export default function TransactionHistoryItem ({amount, type, currency, styleClass}) {
    return (
        <>
    <tr>
        <td className={styleClass}>{type}</td>
        <td className={styleClass}>{amount}</td>
        <td className={styleClass}>{currency}</td>
    </tr>
        </>
    )
}