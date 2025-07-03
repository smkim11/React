import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function CityOne() {
    const {cityId} = useParams();
    const [city,setCity] = useState({});
    const [country, setCountry] = useState({});

    useEffect(()=>{
        fetch('http://localhost/cityOne/'+cityId, {method:'get'})
        .then((res)=>(res.json()))
        .then((data)=>{setCity(data); setCountry(data.countryEntity)})
    });
    return (
        <div>
            <h1>CityOne {cityId}</h1>
            <Link to={'/AddAddress/'+cityId}>주소 추가</Link>
            <table>
                <tr>
                    <th>cityId</th>
                    <td>{city.cityId}</td>
                </tr>
                <tr>
                    <th>country</th>
                    <td>{country.country}</td>
                </tr>
                <tr>
                    <th>city</th>
                    <td>{city.city}</td>
                </tr>
                <tr>
                    <th>lastUpdate</th>
                    <td>{city.lastUpdate}</td>
                </tr>
            </table>
        </div>
    )
}
