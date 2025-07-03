import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

export default function AddressOne() {
    const {addressId} = useParams();
    const [address, setAddress] = useState({});
    const [city,setCity] = useState({});
    const [country, setCountry] = useState({});

    useEffect(()=>{
        fetch('http://localhost/addressOne/'+addressId)
        .then((res)=>(res.json()))
        .then((data)=>{setAddress(data); setCity(data.cityEntity); 
            setCountry(data.cityEntity.countryEntity)})
    });

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
  </div>
  )
}
