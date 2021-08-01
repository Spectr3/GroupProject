import React from "react"
import Header from "../../Header/Header"
import { firestore } from '../../../firebase'
import {Link} from "react-router-dom"
import ArrowBackIcon from "@material-ui/icons/ArrowBack"
import "../../app.global.css"
import "./StockDetails.css"

function StockDetails({match}) {
    const [currentStockName, setCurrentStockName] = React.useState('')
    const [currentStockType, setCurrentStockType] = React.useState('')
    const [currentStockQuantity, setCurrentStockQuantity] = React.useState('')
    const [currentStockVanQuantity, setCurrentStockVanQuantity] = React.useState('')
    const [currentStockWarehouseQuantity, setCurrentStockWarehouseQuantity] = React.useState('')
    const [locationStockLevels, setLocationStockLevels] = React.useState([])


    React.useEffect(() => {
        const fetchStockData = async () => {
            const data = await firestore.collection("stockItems").doc(match.params.id).get()
            setCurrentStockName(data.data().ItemName)
            setCurrentStockQuantity(data.data().Total)
            setCurrentStockType(data.data().ItemType)
            setCurrentStockVanQuantity(data.data().OnVans)
            setCurrentStockWarehouseQuantity(data.data().Warehouse)
        }
        const fetchStockLevelLogs = async () => {
            const data = await firestore.collection("stockItemLocations")
                .where("stockItem", "==", `${match.params.id}`).get()
            setLocationStockLevels(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }

        fetchStockData()
        fetchStockLevelLogs()
    })

    return (
        <div>
            <Header />
            <div className="returnStock">
                <Link to="/stock" className="btn app-btn"><ArrowBackIcon />Back to Stock</Link>
            </div>
            <div className="stockDetails">
                <table className="stockDetailsTable">
                    <thead>
                    <tr>
                        <th scope="col" className="stockDetailsTable__title">Name</th>
                        <th scope="col" className="stockDetailsTable__title">Type</th>
                        <th scope="col" className="stockDetailsTable__title">Vans</th>
                        <th scope="col" className="stockDetailsTable__title">Warehouse</th>
                        <th scope="col" className="stockDetailsTable__title">Total</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="stockDetailsTable__item">{currentStockName}</td>
                        <td className="stockDetailsTable__item">{currentStockType}</td>
                        <td className="stockDetailsTable__item">{currentStockVanQuantity}</td>
                        <td className="stockDetailsTable__item">{currentStockWarehouseQuantity}</td>
                        <td className="stockDetailsTable__item">{currentStockQuantity}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="locationStockLevels">
                <table className="locationStockLevelsTable table table-striped">
                    <thead>
                    <tr>
                        <th scope="col" className="locationStockLevelsTable__header">Name</th>
                        <th scope="col" className="locationStockLevelsTable__header">Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {locationStockLevels.map(level => (
                        <tr key={level.id}>
                            <td>{level.locationName}</td>
                            <td>{level.quantity}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default StockDetails