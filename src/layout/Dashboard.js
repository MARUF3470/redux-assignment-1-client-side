import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className='w-11/12 mx-auto lg:grid grid-cols-12 gap-8 my-10'>
            <div className='col-span-2 bg-slate-200 rounded-sm pb-2 sm: mb-5'>
                <ul className="menu w-full py-5 ">
                    <li className="hover-bordered"><Link to='/dashboard' className='w-full'>Product List</Link></li>
                    <li className="hover-bordered"><Link to='/dashboard/addProduct' className='w-full' >Add Product</Link></li>
                </ul>
                <Link to='/' className='text-sm hover:text-green-400 mx-10'>Back To Home</Link>
            </div>
            <div className='col-span-10 h-full'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;