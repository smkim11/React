import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditCountry() {
    const{countryId} = useParams();
    const [country, setCountry] = useState({});

    const nav = useNavigate();
    useEffect(()=>{
        fetch('http://localhost/countryOne/'+countryId,{method: "get"})
        .then((res)=>(res.json()))
        .then((data)=>{setCountry(data)})
    },[countryId]);
    function edit(){
        fetch('http://localhost/updateCountry',{
            method:"PATCH", headers:{"Content-Type":"application/json"},
            body: JSON.stringify({countryId: countryId, country : country.country}),
        })
        .then((res)=>{
            if(res.ok){
                alert('수정성공');
                nav('/CountryOne/'+countryId);
            }else{
                alert('수정실패');
                nav('/EditCountry/'+countryId);
            }
        })
    }
    return (
        <div>
            <h1>EditCountry</h1>
            <table>
                <tr>
                    <th>country</th>
                    <td><input type="text" value={country.country} 
                                onChange={(e)=>(
                                    setCountry({countryId: country.countryId, country:e.target.value})
                                )}/>{/* setCountry({...country, country:e.target.value})*/}
                    </td>
                </tr>
            </table>
            <button onClick={edit}>수정</button>
        </div>
    )
}
