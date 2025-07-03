import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export default function Address() {
  const [addressList, setAddressList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState([]);
  
  useEffect(()=>{
    fetch("http://localhost/addressList/"+pageNumber)
    .then((res)=>(res.json()))
    .then((data)=>{setAddressList(data.content); setTotalPage(data)})
  })

  return (
    <div>
        <h1>Address</h1>
        <table border="1">
            <tr>
              <th>addressId</th>
              <th>address</th>
            </tr>
            {
              addressList.map((ad)=>(
                <tr key={ad.addressId}>
                    <td>{ad.addressId}</td>
                    <td><Link to={'/AddressOne/'+ad.addressId}>{ad.address}</Link></td>
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
