import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"

export default function CountryOne() {
    const {countryId} = useParams(); // 여러개면 const {countryId, x, y} = useParams();
    const [country, setCountry] = useState({});

    useEffect(()=>{
        fetch('http://localhost/countryOne/'+countryId,{method: "get"})
        .then((res)=>(res.json()))
        .then((data)=>{setCountry(data)})
    });
    return (
        <div>
            <h1>CountryOne(countryId:{countryId})</h1>
            <Link to={'/AddCity/'+countryId}>도시 추가</Link>
            <table>
                <tr>
                    <th>countryId</th>
                    <td>{country.countryId}</td>
                </tr>
                <tr>
                    <th>country</th>
                    <td>{country.country}</td>
                </tr>
                <tr>
                    <th>lastUpdate</th>
                    <td>{country.lastUpdate}</td>
                </tr>
            </table>
            <button>삭제</button>
            <button>수정</button>
        </div>
    )
}
