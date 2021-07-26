import React from "react"
import Header from "./Header/Header"
import { firestore } from '../firebase'

function Stock() {
    const [stockItems, setStockItems] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await firestore.collection("stockItems").get()
            const stockItems = data.docs.map(doc => doc.data())
            setStockItems(data.map(doc => doc.data()))
        }
        fetchData()
    }, [])
    return (
        <div>
            <Header />
            <p>Stock</p>
            <table>
                <tr>
                    <th className="stockTableHeader__name">Stock Item</th>
                    <th className="stockTableHeader__type">Type</th>
                    <th className="stockTableHeader__onHand">Total Stock</th>
                    <th className="stockTableHeader__warehouse">Warehouse</th>
                    <th className="stockTableHeader__vans">On Vans</th>
                    <th className="stockTableHeader__details">Details</th>
                </tr>
                {stockItems.map(stockItem => (
                    <tr>
                        <td>{stockItem.ItemName}</td>
                        <td>{stockItem.ItemType}</td>
                        <td>{stockItem.TotalStock}</td>
                        <td>{stockItem.Warehouse}</td>
                        <td>{stockItem.OnVans}</td>
                        <td></td>
                    </tr>
                ))}
            </table>
        </div>
    )
}

export default Stock;