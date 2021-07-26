import React from "react"
import Header from "../Header/Header"
import { firestore } from '../../firebase'
import './Stock.css'

function Stock() {
    const [stockItems, setStockItems] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await firestore.collection("stockItems").get()
            setStockItems(data.docs.map(doc => ({...doc.data(), id: doc.id })))
        }
        fetchData()
    }, [])
    return (
        <div>
            <Header />
            <table className="stockTableHeader table">
                <thead>
                <tr>
                    <th scope="col" className="stockTableHeader__name">Stock Item</th>
                    <th scope="col" className="stockTableHeader__type">Type</th>
                    <th scope="col" className="stockTableHeader__onHand">Total Stock</th>
                    <th scope="col" className="stockTableHeader__warehouse">Warehouse</th>
                    <th scope="col" className="stockTableHeader__vans">On Vans</th>
                    <th scope="col" className="stockTableHeader__details">Details</th>
                </tr>
                </thead>
                <tbody>
                {stockItems.map(stockItem => (
                    <tr>
                        <td>{stockItem.ItemName}</td>
                        <td>{stockItem.ItemType}</td>
                        <td>{stockItem.Total}</td>
                        <td>{stockItem.Warehouse}</td>
                        <td>{stockItem.OnVans}</td>
                        <td></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Stock;