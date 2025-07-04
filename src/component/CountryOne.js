import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom"

export default function CountryOne() {
    const {countryId} = useParams(); // 여러개면 const {countryId, x, y} = useParams();
    const [country, setCountry] = useState({});

    const nav = useNavigate();
    useEffect(()=>{
        fetch('http://localhost/countryOne/'+countryId,{method: "get"})
        .then((res)=>(res.json()))
        .then((data)=>{setCountry(data)})
    },[countryId]);

    function remove(){
        if(window.confirm('삭제하시겠습니까')){ // 삭제 재확인
            fetch('http://localhost/deleteCountry/'+countryId,{method:"DELETE"})
            .then((res)=>{
                if(res.ok){
                    nav('/Country');
                }else{
                    window.alert('삭제 실패');
                }
            })
        }else{
            alert('삭제를 취소했습니다');
        }
    }
    return (
        <div>
            <h1>CountryOne(countryId:{countryId})</h1>
            <Link to={'/AddCity/'+countryId}>도시 추가</Link>
            <table>
                <tr>
                    <th>countryId</th>
                    <td>{country.countryId}</td>
                </tr>
                <tr>
                    <th>country</th>
                    <td>{country.country}</td>
                </tr>
                <tr>
                    <th>lastUpdate</th>
                    <td>{country.lastUpdate}</td>
                </tr>
            </table>
            <button onClick={remove}>삭제</button>
            {/* <Link to="/EditCountry">수정</Link> */}
            <button onClick={()=>nav('/EditCountry/'+countryId)}>수정</button>
        </div>
    )
}
