import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';

export default function AddCity() {
    const {countryId} = useParams();
    const [city, setCity] = useState();
    const nav = useNavigate();

    function addCity(){
        fetch("http://localhost/addCity",{
            method:"post", headers:{"Content-Type":"application/json"},
            body: JSON.stringify({city : city, countryId : countryId}),
        }).then((res)=>{
            if(res.ok){
                alert('입력성공');
                nav('/City');
            }else{
                alert('입력실패');
            }
        }

        )
    }
    return (
        <div>
            <h1>AddCity {countryId}</h1>
            <table>
                <tr>
                    <th>city</th>
                    <td><input type="text" onChange={(e)=>{
                        setCity(e.target.value);
                    }}></input></td>
                </tr>
            </table>
            <button onClick={addCity}>도시 추가</button>
        </div>
    )
}
