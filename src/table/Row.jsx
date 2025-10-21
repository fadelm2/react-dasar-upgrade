
export default function Row({id, text}) {
    return (
        <tr key={id}>
            <td>{id}</td>
            <td>{text}</td>
        </tr>
    )
}