import React from "react"
import Header from "../../Header/Header"
import { firestore } from '../../../firebase'
import "./LocationDetails.css"
import {Link} from "react-router-dom";
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import "../../app.global.css"

function LocationDetails({match}) {
    const [currentLocationName, setCurrentLocationName] = React.useState('')
    const [currentLocationQuantity, setCurrentLocationQuantity] = React.useState('')
    const [currentLocationType, setCurrentLocationType] = React.useState('')
    const [locationStockLevels, setLocationStockLevels] = React.useState([])


    React.useEffect(() => {
        const fetchLocationData = async () => {
            const data = await firestore.collection("locations").doc(match.params.id).get()
            setCurrentLocationName(data.data().locationName)
            setCurrentLocationType(data.data().locationType)
            setCurrentLocationQuantity(data.data().locationQuantity)
        };

        const fetchStockLevelLogs = async () => {
            const data = await firestore.collection("stockItemLocations")
                .where("location", "==", `${match.params.id}`).get()
            setLocationStockLevels(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }

        fetchLocationData()
        fetchStockLevelLogs()
    }, []);


    return (
        <div>
            <Header />
            <div className="returnLocations">
                <Link to="/location" className="btn app-btn"><ArrowBackIcon />Back To Locations</Link>
            </div>
            <div className="locationDetails">
                <table className="locationDetailsTable">
                    <thead>
                    <tr>
                        <th scope="col" className="locationDetailsTable__title">Name</th>
                        <th scope="col" className="locationDetailsTable__title">Type</th>
                        <th scope="col" className="locationDetailsTable__title">Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className="locationDetailsTable__item">{currentLocationName}</td>
                        <td className="locationDetailsTable__item">{currentLocationType}</td>
                        <td className="locationDetailsTable__item">{currentLocationQuantity}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
            <div className="locationStockLevels">
                <table className="locationStockLevelsTable table table-striped">
                    <thead>
                    <tr>
                        <th scope="col" className="locationStockLevelsTable__header">Item Name</th>
                        <th scope="col" className="locationStockLevelsTable__header">Quantity</th>
                    </tr>
                    </thead>
                    <tbody>
                    {locationStockLevels.map(level => (
                        <tr key={level.id}>
                            <td>{level.stockItemName}</td>
                            <td>{level.quantity}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default LocationDetails