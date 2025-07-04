import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

export default function AddressOne() {
    const {addressId} = useParams();
    const [address, setAddress] = useState({});
    const [city,setCity] = useState({});
    const [country, setCountry] = useState({});
    const nav = useNavigate();

    useEffect(()=>{
        fetch('http://localhost/addressOne/'+addressId)
        .then((res)=>(res.json()))
        .then((data)=>{setAddress(data); setCity(data.cityEntity); 
            setCountry(data.cityEntity.countryEntity)})
    },[addressId]);

    function remove(){
        if(window.confirm('삭제하시겠습니까?')){
            fetch('http://localhost/deleteAddress/'+addressId, {method:'DELETE'})
            .then((res)=>{
                if(res.ok){
                    nav('/Address');
                }else{
                    alert('삭제 실패')
                }
            })
        }else{
            alert('삭제 취소');
        }
    }
    return (
    <div>
        <h1>AddressOne</h1>
        <Link to={'/AddCustomer/'+addressId}>고객 추가</Link>
        <table>
            <tr>
                <th>addressId</th>
                <td>{address.addressId}</td>
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
                <th>address</th>
                <td>{address.address} {address.address2}</td>
            </tr>
            <tr>
                <th>district</th>
                <td>{address.district}</td>
            </tr>
            <tr>
                <th>postalCode</th>
                <td>{address.postalCode}</td>
            </tr>
            <tr>
                <th>phone</th>
                <td>{address.phone}</td>
            </tr>
            <tr>
                <th>lastUpdate</th>
                <td>{address.lastUpdate}</td>
            </tr>
            
        </table>
        <button onClick={remove}>삭제</button>
        <button onClick={()=>nav('/EditAddress/'+addressId)}>수정</button>
    </div>
  )
}
