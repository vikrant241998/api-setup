import React, {useState, useEffect} from 'react'

const GetApiData = () => {
    const [getData, setGetData] = useState([]);

    useEffect(()=>{
        const getUrl = "https://jsonplaceholder.typicode.com/users";
        fetch(getUrl).then(response => response.json()).then(json =>{
            console.log("Json Data", json)
            setGetData(json)
        }).catch(e => {
            console.log("e", e);
        })
    }, [])
  return (
    <div>
        <h1>Get Api Data</h1>

        <table>
            <tbody>
            <tr>
                <td>ID</td>
                <td>Name</td>
                <td>USer Name</td>
                <td>Email</td>
                <td>Address Street</td>
                <td>Address Suite</td>
                <td>Address City</td>
                <td>Address Zipcode</td>
                <td>Address Geo Lat</td>
                <td>Address Geo Lng</td>
                <td>Phone</td>
                <td>Website</td>
                <td>Company Name</td>
                <td>Company catchPhrase</td>
                <td>Company BS</td>                    
                </tr>
            </tbody>
        </table>
        {
            getData.map((value, key)=>(
                <tr key={key}>
                    <td>{value.id}</td>
                    <td>{value.name}</td>
                    <td>{value.username}</td>
                    <td>{value.email}</td>
                    <td>{value.address.street}</td>
                    <td>{value.address.suite}</td>
                    <td>{value.address.city}</td>
                    <td>{value.address.zipcode}</td>
                    {/* <td>{value.address.zipcode.geo}</td> */}
                    <td>{value.address.geo.lat}</td>
                    <td>{value.address.geo.lng}</td>
                    <td>{value.phone}</td>
                    <td>{value.website}</td>
                    <td>{value.company.name}</td>
                    <td>{value.company.catchPhrase}</td>
                    <td>{value.company.bs}</td>
                </tr>
            ))
        }
    </div>
  )
}

export default GetApiData