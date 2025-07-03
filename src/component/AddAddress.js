import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function AddAddress() {
    const{cityId} = useParams();
    const [address, setAddress] = useState();
    const [address2, setAddress2] = useState();
    const [district, setDistrict] = useState();
    const [postalCode, setPostalCode] = useState();
    const [phone, setPhone] = useState();

    const nav = useNavigate();

    function addAddress(){
        fetch('http://localhost/addAddress',{
            method:"post", headers:{"Content-Type":"application/json"},
            body: JSON.stringify({address : address, address2 : address2, district:district,
                                postalCode:postalCode, phone:phone, cityId:cityId}),
        }).then((res)=>{
            if(res.ok){
                alert('입력성공');
                nav('/Address');
            }else{
                alert('입력실패');
            }

        })
    }
    return (
        <div>
            <h1>AddAddress</h1>
            <table>
                <tr>
                    <th>address</th>
                    <td><input type="text" onChange={(e)=>{setAddress(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <th>address2</th>
                    <td><input type="text" onChange={(e)=>{setAddress2(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <th>district</th>
                    <td><input type="text" onChange={(e)=>{setDistrict(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <th>postalCode</th>
                    <td><input type="text" onChange={(e)=>{setPostalCode(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <th>phone</th>
                    <td><input type="text" onChange={(e)=>{setPhone(e.target.value)}}></input></td>
                </tr>
            </table>
            <button onClick={addAddress}>주소 입력</button>
        </div>
    )
}
