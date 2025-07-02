import { useEffect, useState } from "react"

export default function City() {
  const [cityList, setCityList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  const [totalPage, setTotalPage] = useState([]);

  useEffect(()=>{
    fetch("http://localhost/cityList/"+pageNumber)
    .then((res)=>(res.json()))
    .then((data)=>{setCityList(data.content); setTotalPage(data)})
  }, [pageNumber]);

  return (
    <div>
        <h1>City</h1>
        <table border="1">
            <tr>
              <th>cityId</th>
              <th>city</th>
            </tr>
            {
              cityList.map((ct)=>(
                <tr key={ct.cityId}>
                    <td>{ct.cityId}</td>
                    <td>{ct.city}</td>
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
