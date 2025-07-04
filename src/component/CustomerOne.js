import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function CustomerOne() {
    const {customerId} = useParams();
    const [customer, setCustomer] = useState({});
    const [address, setAddress] = useState({});
    const [city,setCity] = useState({});
    const [country, setCountry] = useState({});
    const nav = useNavigate();

    useEffect(()=>{
        fetch('http://localhost/customerOne/'+customerId)
        .then((res)=>(res.json()))
        .then((data)=>{setCustomer(data); setAddress(data.addressEntity); 
            setCity(data.addressEntity.cityEntity); setCountry(data.addressEntity.cityEntity.countryEntity)})
    },[customerId]);

    function remove(){
        if(window.confirm('삭제하시겠습니까?')){
            fetch('http://localhost/deleteCustomer/'+customerId,{method:"DELETE"})
            .then((res)=>{
                if(res.ok){
                    nav('/Customer');
                }else{
                    alert('삭제실패')
                }
            })
        }else{
            alert('삭제취소')
        }
    }
    return (
        <div>
            <h1>CustomerOne</h1>
            <table>
                <tr>
                    <th>customerId</th>
                    <td>{customer.customerId}</td>
                </tr>
                <tr>
                    <th>name</th>
                    <td>{customer.firstName} {customer.lastName}</td>
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
                    <td>{address.address}</td>
                </tr>
                <tr>
                    <th>email</th>
                    <td>{customer.email}</td>
                </tr>
                <tr>
                    <th>createDate</th>
                    <td>{customer.createDate}</td>
                </tr>
                <tr>
                    <th>lastUpdate</th>
                    <td>{customer.lastUpdate}</td>
                </tr>
            </table>
            <button onClick={remove}>삭제</button>
            <button onClick={()=>nav('/EditCustomer/'+customerId)}>수정</button>
        </div>
    )
}
