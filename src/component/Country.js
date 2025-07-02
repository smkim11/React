import { useEffect, useState } from "react"

export default function Country() {

    const [countryList,setCountryList] = useState([]);

    // API 통신 "[GET] http://localhost/country"
    useEffect(()=>{
        fetch("http://localhost/country")
        .then((res)=>(res.json()))
        .then((data)=>{setCountryList(data)})
    }, []);

    return (
        <div>
            <h1>Country</h1>
            <table border="1">
                <tr>
                    <th>countryId</th>
                    <th>country</th>
                </tr>
                {
                    countryList.map((c)=>(
                        <tr key={c.countryId}>
                            <td>{c.countryId}</td>
                            <td>{c.country}</td>
                        </tr>
                    ))
                }
            </table>
        </div>
    )
}
