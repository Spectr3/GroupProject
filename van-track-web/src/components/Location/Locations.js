import React from "react"
import Header from "../Header/Header"
import { firestore } from '../../firebase'
import './Locations.css'

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
                    <th scope="col" className="locationTableHeader__quantity">Type</th>
                </tr>
                </thead>
                <tbody>
                {locations.map(location => (
                    <tr>
                        <td>{location.locationName}</td>
                        <td>{location.locationType}</td>
                        <td>{location.locationQuantity}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default Locations;