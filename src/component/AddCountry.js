import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AddCountry() {

    // let country = "";
    const [country, setCountry] = useState("");
    const nav = useNavigate();

    function addCountry(){
        fetch("http://localhost/addCountry",{
            method:"post", headers:{"Content-Type":"application/json"},
            body: JSON.stringify({country : country}),
        }).then((res)=>{
            if(res.ok){ // 200
                alert("입력성공");
                // /Country 컴포넌트를 랜더링
                nav("/Country"); // == <Link to="/Country" />
            }else{ // 300, 400, 500
                alert("입력실패");
            }
        })
    }
    return (
        <div>
           <h1>AddCountry</h1>
           <table>
                <tr>
                    <th>country</th>
                    <td><input type="text" onChange={(e)=>{
                            //country = e.target.value;
                            setCountry(e.target.value);
                    }}></input></td>
                </tr>
           </table>
           <button onClick={addCountry}>입력</button>
        </div>
    )
}
