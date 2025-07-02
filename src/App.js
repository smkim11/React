import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import Home from './component/Home';
import Country from './component/Country';
import Address from './component/Address';
import City from './component/City';
import Customer from './component/Customer';
import Store from './component/Store';

export default function App() {


    return (
        <BrowserRouter>
            <div>
                {/* header */}
                <h1 className='text-yellow-500'>Sakila Project</h1>
                {/* a태그를 사용하면 페이지 전체가 변경된다. */}
                {/* Link태그를 사용하여 Routes부분만 변경되도록 - SPA */}
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/Country">country</Link></li>
                    <li><Link to="/City">city</Link></li>
                    <li><Link to="/Address">address</Link></li>
                    <li><Link to="/Store">store</Link></li>
                    <li><Link to="/Customer">customer</Link></li>
                </ul>

                <hr />

                {/*content---------------------------주석----------------------------*/}
                <Routes>
                    <Route path="/" element={<Home/>}></Route> {/* 라우터 -> 컴포넌트 */}
                    <Route path="/Country" element={<Country/>}></Route>
                    <Route path="/CountryOne/:countryId" element={<Country/>}></Route>
                    <Route path="/City" element={<City/>}/>
                    <Route path="/Address" element={<Address/>} />
                    <Route path="/Store" element={<Store/>}/>
                    <Route path="/Customer" element={<Customer/>}/>
                </Routes>


                {/*------------------------------------------------------------------*/}


                {/* footer */}
                <hr />
                <div>
                    Copyright@ GDJ91.
                </div>
            </div>
        </BrowserRouter>
    );
}
