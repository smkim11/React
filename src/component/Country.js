import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Country() {

    const [countryList,setCountryList] = useState([]);
    const [pageNumber, setPageNumber] = useState(1);
    const [totalPage, setTotalPage] = useState([]);

    // API 통신 "[GET] http://localhost/country"
    useEffect(()=>{
        fetch("http://localhost/countryList/"+pageNumber)
        .then((res)=>(res.json()))
        .then((data)=>{setCountryList(data.content); setTotalPage(data);})
    }, [pageNumber]); // 처음에 useEffect가 실행되고 pageNumber가 변경되면 다시 useEffect실행

    return (
        <div>
            <h1>Country(currentPage:{pageNumber})</h1>
            
            <table border="1">
                <tr>
                    <th>countryId</th>
                    <th>country</th>
                </tr>
                {
                    countryList.map((c)=>(
                        <tr key={c.countryId}>
                            <td>{c.countryId}</td>
                            <td><Link to="/CountryOne/{c.countryId}">{c.country}</Link></td>
                        </tr>
                    ))
                }
            </table>
            {
                pageNumber < 2 ? 
                <span>
                    {pageNumber}/{totalPage.totalPages}
                    <button onClick={()=>{setPageNumber(pageNumber+1)}}>다음</button>
                </span> :pageNumber == totalPage.totalPages ? 
                <span>
                    <button onClick={()=>{setPageNumber(pageNumber-1)}}>이전</button>
                    {pageNumber}/{totalPage.totalPages}
                </span> :
                 <span>
                    <button onClick={()=>{setPageNumber(pageNumber-1)}}>이전</button>
                    {pageNumber}/{totalPage.totalPages}
                    <button onClick={()=>{setPageNumber(pageNumber+1)}}>다음</button>
                </span>
            }
        </div>
    )
}
