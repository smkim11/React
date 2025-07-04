import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

export default function CityOne() {
    const {cityId} = useParams();
    const [city,setCity] = useState({});
    const [country, setCountry] = useState({});

    const nav = useNavigate();
    useEffect(()=>{
        fetch('http://localhost/cityOne/'+cityId, {method:'get'})
        .then((res)=>(res.json()))
        .then((data)=>{setCity(data); setCountry(data.countryEntity)})
    },[cityId]);
    function remove(){
        if(window.confirm('삭제하시겠습니까?')){
            fetch('http://localhost/deleteCity/'+cityId, {method:'DELETE'})
            .then((res)=>{
                if(res.ok){
                    nav('/City');
                }else{
                    alert('삭제실패');
                }
            })
        }else{
            alert('삭제취소');
        }
    }
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
            <button onClick={remove}>삭제</button>
            <button onClick={()=>nav('/EditCity/'+cityId)}>수정</button>
        </div>
    )
}
