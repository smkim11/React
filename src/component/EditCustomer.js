import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditCustomer() {
    const{customerId}=useParams();
    const [customer, setCustomer] = useState({});
    const [address, setAddress] = useState({});
    const [store, setStore] = useState({});
    const nav = useNavigate();

    useEffect(()=>{
        fetch('http://localhost/customerOne/'+customerId)
        .then((res)=>(res.json()))
        .then((data)=>{setCustomer(data); setAddress(data.addressEntity);
                        setStore(data.storeEntity)
        })
    },[customerId]);

    function edit(){
        fetch('http://localhost/updateCustomer', 
            {method:"PATCH",headers:{"Content-Type":"application/json"},
            body: JSON.stringify({firstName : customer.firstName, lastName : customer.lastName, email:customer.email,
                                active:customer.active, addressId:address.addressId,customerId: customer.customerId, 
                                storeId:store.storeId}),

            })
            .then((res)=>{
                if(res.ok){
                    nav('/CustomerOne/'+customerId);
                }else{
                    alert('수정실패')
                }
            })
    }
    return (
        <div>
            <h1>EditCustomer</h1>
            <table>
                <tr>
                    <th>storeId</th>
                    <td>
                        {
                            customer.storeId === 1 ?
                            <span>
                                <input type="radio" name="storeId" value="1" checked 
                                                    onChange={(e)=>setCustomer({
                                                        storeId:e.target.value,firstName : customer.firstName, lastName : customer.lastName,
                                                        email:customer.email, active:customer.active, addressId:address.addressId,
                                                        customerId: customer.customerId
                                                        })}/>1
                                <input type="radio" name="storeId" value="2" 
                                                    onChange={(e)=>setCustomer({
                                                        storeId:e.target.value,firstName : customer.firstName, lastName : customer.lastName,
                                                        email:customer.email, active:customer.active, addressId:address.addressId,
                                                        customerId: customer.customerId
                                                        })}/>2
                            </span>
                            :
                            <span>
                                <input type="radio" name="storeId" value="1" 
                                                    onChange={(e)=>setCustomer({
                                                        storeId:e.target.value,firstName : customer.firstName, lastName : customer.lastName,
                                                        email:customer.email, active:customer.active, addressId:address.addressId,
                                                        customerId: customer.customerId
                                                        })}/>1
                                <input type="radio" name="storeId" value="2" checked 
                                                    onChange={(e)=>setCustomer({
                                                        storeId:e.target.value,firstName : customer.firstName, lastName : customer.lastName,
                                                        email:customer.email, active:customer.active, addressId:address.addressId,
                                                        customerId: customer.customerId
                                                        })}/>2
                            </span>
                        }
                        
                    </td>
                </tr>
                <tr>
                    <th>firstName</th>
                    <td><input type="text" value={customer.firstName} onChange={(e)=>setCustomer({
                                                        firstName:e.target.value,storeId:store.storeId, lastName : customer.lastName,
                                                        email:customer.email, active:customer.active, addressId:address.addressId,
                                                        customerId: customer.customerId
                                                        })}></input></td>
                </tr>
                <tr>
                    <th>lastName</th>
                    <td><input type="text" value={customer.lastName} onChange={(e)=>setCustomer({
                                                        lastName:e.target.value,storeId:store.storeId,firstName : customer.firstName,
                                                        email:customer.email, active:customer.active, addressId:address.addressId,
                                                        customerId: customer.customerId
                        })}></input></td>
                </tr>
                <tr>
                    <th>email</th>
                    <td><input type="text" value={customer.email} onChange={(e)=>setCustomer({
                                                        email:e.target.value,storeId:store.storeId,firstName : customer.firstName, lastName : customer.lastName,
                                                        active:customer.active, addressId:address.addressId,
                                                        customerId: customer.customerId
                        })}></input></td>
                </tr>
                <tr>
                    <th>active</th>
                    <td><input type="number" value={customer.active} onChange={(e)=>setCustomer({
                                                        active:e.target.value,storeId:store.storeId,firstName : customer.firstName, lastName : customer.lastName,
                                                        email:customer.email, addressId:address.addressId,
                                                        customerId: customer.customerId
                        })}></input></td>
                </tr>
            </table>
            <button onClick={edit}>수정</button>
        </div>
    )
}
