import { useEffect, useState } from "react"

export default function Store() {
  const [storeList, setStoreList] = useState([]);
  
  useEffect(()=>{
    fetch("http://localhost/store")
    .then((res)=>(res.json()))
    .then((data)=>{setStoreList(data)})
  })

  return (
    <div>
      <h1>Store</h1>
      <table border="1">
          <tr>
            <th>storeId</th>
            <th>staffId</th>
          </tr>
          {
            storeList.map((s)=>(
              <tr key={s.storeId}>
                  <td>{s.storeId}</td>
                  <td>{s.managerStaffId}</td>
              </tr>
            ))
          }
      </table>

    </div>
  )
}
