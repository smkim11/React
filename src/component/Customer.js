import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Customer() {
  const [customerList,setCustomerList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState([]);

  useEffect(()=>{
    fetch("http://localhost/customerList/"+pageNumber)
    .then((res)=>(res.json()))
    .then((data)=>{setCustomerList(data.content); setTotalPage(data)})
  })
    return (
        <div>
            <h1>Customer</h1>
            <table border="1">
                <tr>
                    <th>customerId</th>
                    <th>name</th>
                </tr>
                {
                    customerList.map((cs)=>(
                        <tr key={cs.customerId}>
                            <td>{cs.customerId}</td>
                            <td><Link to={'/CustomerOne/'+cs.customerId}>{cs.firstName} {cs.lastName}</Link></td>
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
