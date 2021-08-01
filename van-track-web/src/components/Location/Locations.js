import React from "react"
import Header from "../Header/Header"
import { firestore } from '../../firebase'
import './Locations.css'
import {Link} from "react-router-dom";

function Locations() {
    const [locations, setLocations] = React.useState([])

    React.useEffect(() => {
        const fetchData = async () => {
            const data = await firestore.collection("locations").get()
            setLocations(data.docs.map(doc => ({...doc.data(), id: doc.id })))
        }
        fetchData()
    }, [])

    return (
        <div>
            <Header />
            <table className="locationTableHeader table">
                <thead>
                <tr>
                    <th scope="col" className="locationTableHeader__name">Location</th>
                    <th scope="col" className="locationTableHeader__type">Type</th>
                    <th scope="col" className="locationTableHeader__quantity">Quantity</th>
                    <th scope="col" className="locationTableHeader__details">Details</th>
                </tr>
                </thead>
                <tbody>
                {locations.map(location => (
                    <tr key={location.id}>
                        <td>{location.locationName}</td>
                        <td>{location.locationType}</td>
                        <td>{location.locationQuantity}</td>
                        <td><Link className="btn app-btn" to={`/locationdetails/${location.id}`}>Details</Link></td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Locations;