import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditCity() {
    const{cityId} =useParams();
    const[city, setCity] = useState({});
    const [country, setCountry] = useState({});
    const nav = useNavigate();

    useEffect(()=>{
        fetch('http://localhost/cityOne/'+cityId)
        .then((res)=>(res.json()))
        .then((data)=>{setCity(data); setCountry(data.countryEntity)})
    },[cityId])
    
    function edit(){
        fetch('http://localhost/updateCity', {
            method:"PATCH", headers:{"Content-Type":"application/json"},
            body: JSON.stringify({cityId: cityId, city : city.city, countryId:country.countryId}),
        })
        .then((res)=>{
            if(res.ok){
                nav('/CityOne/'+cityId);
            }else{
                alert('수정실패')
            }
        })
    }
    return (
        <div>
            <h1>EditCity</h1>
            <table>
                <tr>
                    <th>city</th>
                    <td><input type="text" value={city.city}
                            onChange={(e)=>setCity({city:e.target.value, cityId:city.cityId, countryId:country.countryId})}/></td>
                </tr>
            </table>
            <button onClick={edit}>수정</button>
        </div>
    )
}
