import {BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import Home from './component/Home';
import Country from './component/Country';
import Address from './component/Address';
import City from './component/City';
import Customer from './component/Customer';
import Store from './component/Store';
import CountryOne from './component/CountryOne';
import AddCountry from './component/AddCountry';
import AddCity from './component/AddCity';
import CityOne from './component/CityOne';
import AddressOne from './component/AddressOne';
import CustomerOne from './component/CustomerOne';
import AddAddress from './component/AddAddress';
import AddCustomer from './component/AddCustomer';
import EditCountry from './component/EditCountry';
import EditCity from './component/EditCity';
import EditAddress from './component/EditAddress';
import EditCustomer from './component/EditCustomer';

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

                    {/* country crud */}
                    <Route path="/Country" element={<Country/>}></Route>
                    <Route path="/AddCountry" element={<AddCountry/>}></Route>
                    <Route path="/CountryOne/:countryId" element={<CountryOne/>}></Route>
                    <Route path="/EditCountry/:countryId" element={<EditCountry/>}/>
                    {/* city crud */}
                    <Route path="/City" element={<City/>}/>
                    <Route path="/AddCity/:countryId" element={<AddCity/>}></Route>
                    <Route path="/CityOne/:cityId" element={<CityOne/>}></Route>
                    <Route path="/EditCity/:cityId" element={<EditCity/>}/>
                    {/* address crud */}
                    <Route path="/Address" element={<Address/>} />
                    <Route path="/AddAddress/:cityId" element={<AddAddress/>}></Route>
                    <Route path="/AddressOne/:addressId" element={<AddressOne/>}></Route>
                    <Route path="/EditAddress/:addressId" element={<EditAddress/>}/>
                    {/* customer crud */}
                    <Route path="/Customer" element={<Customer/>}/>
                    <Route path="/AddCustomer/:addressId" element={<AddCustomer/>}></Route>
                    <Route path="/CustomerOne/:customerId" element={<CustomerOne/>}></Route>
                    <Route path="/EditCustomer/:customerId" element={<EditCustomer/>}/>
                    
                    <Route path="/Store" element={<Store/>}/>
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
