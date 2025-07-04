import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export default function EditAddress() {
    const{addressId} = useParams();
    const [address, setAddress] = useState({});
    const [city,setCity] = useState({});
    const nav = useNavigate();

    useEffect(()=>{
        fetch('http://localhost/addressOne/'+addressId)
        .then((res)=>(res.json()))
        .then((data)=>{setAddress(data); setCity(data.cityEntity)})
    },[addressId]);

    function edit(){
        fetch('http://localhost/updateAddress', {
            method:"PATCH", headers:{"Content-Type":"application/json"},
            body: JSON.stringify({address : address.address, address2 : address.address2, district:address.district,
                                postalCode:address.postalCode, phone:address.phone,cityId: city.cityId, addressId:address.addressId}),
        })
        .then((res)=>{
            if(res.ok){
                nav('/AddressOne/'+addressId);
            }else{
                alert('수정실패')
            }
        })
    }
    return (
        <div>
            <h1>EditAddress</h1>
            <table>
                <tr>
                    <th>address</th>
                    <td>
                        <input type="text" value={address.address}
                            onChange={(e)=>setAddress({address:e.target.value, address2:address.address2,district:address.district,
                                                        postalCode:address.postalCode,phone:address.phone,
                                                        addressId:address.addressId,cityId:city.cityId})}
                        />
                    </td>
                </tr>
                <tr>
                    <th>address2</th>
                    <td>
                        <input type="text" value={address.address2}
                            onChange={(e)=>setAddress({address2:e.target.value,address:address.address,district:address.district,
                                                        postalCode:address.postalCode,phone:address.phone, 
                                                        addressId:address.addressId,cityId:city.cityId})}
                        />
                    </td>
                </tr>
                <tr>
                    <th>district</th>
                    <td>
                        <input type="text" value={address.district}
                            onChange={(e)=>setAddress({district:e.target.value, address:address.address,address2:address.address2,
                                                        postalCode:address.postalCode,phone:address.phone, 
                                                        addressId:address.addressId,cityId:city.cityId})}
                        />
                    </td>
                </tr>
                <tr>
                    <th>postalCode</th>
                    <td>
                        <input type="text" value={address.postalCode}
                            onChange={(e)=>setAddress({postalCode:e.target.value,address:address.address,address2:address.address2,
                                                        district:address.district,phone:address.phone, 
                                                        addressId:address.addressId,cityId:city.cityId})}
                        />
                    </td>
                </tr>
                <tr>
                    <th>phone</th>
                    <td>
                        <input type="text" value={address.phone}
                            onChange={(e)=>setAddress({phone:e.target.value, address:address.address,address2:address.address2,
                                                        district:address.district,postalCode:address.postalCode,
                                                        addressId:address.addressId,cityId:city.cityId})}
                        />
                    </td>
                </tr>
            </table>
            <button onClick={edit}>수정</button>
        </div>
    )
}
