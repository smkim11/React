import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function AddCustomer() {
    const {addressId} = useParams();
    const [storeId, setStoreId] = useState();
    const [firstName,setFirstName] = useState();
    const [lastName,setLastName] = useState();
    const [email,setEmail] = useState();

    const nav = useNavigate();
    function addCustomer(){
        fetch('http://localhost/addCustomer',{
            method:"post", headers:{"Content-Type":"application/json"},
            body: JSON.stringify({storeId : storeId, firstName : firstName, lastName:lastName, email:email, addressId:addressId, active:1}),
        }).then((res)=>{
            if(res.ok){
                alert('입력성공');
                nav('/Customer');
            }else{
                alert('입력실패');
            }
        })
    }
    return (
        <div>
            <h1>AddCustomer</h1>
            <table>
                <tr>
                    <th>storeId</th>
                    <td>
                        <input type="radio" name="storeId" value="1" onChange={(e)=>{setStoreId(e.target.value)}}/>1
                        <input type="radio" name="storeId" value="2" onChange={(e)=>{setStoreId(e.target.value)}}/>2
                        
                    </td>
                </tr>
                <tr>
                    <th>firstName</th>
                    <td><input type="text" onChange={(e)=>{setFirstName(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <th>lastName</th>
                    <td><input type="text" onChange={(e)=>{setLastName(e.target.value)}}></input></td>
                </tr>
                <tr>
                    <th>email</th>
                    <td><input type="text" onChange={(e)=>{setEmail(e.target.value)}}></input></td>
                </tr>
            </table>
            <button onClick={addCustomer}>고객 추가</button>
        </div>

    )
}
