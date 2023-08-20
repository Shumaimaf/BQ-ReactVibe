import React, { useEffect, useState } from 'react';
import AdminHome from '../AdminHome';
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import AddBrands from '../Brands/AddBrands';
import DeleteBrand from '../Brands/Deletebrand';
import UpdateBrand from '../Brands/UpdateBrand';
import { AppRoute } from '../../../App';

export default function AdminBrands() {
    const [brands, setBrands] = useState([])
    useEffect(() => {
        axios.get(`${AppRoute}api/get-all-brands`) // <-- Add http:// to the URL
            .then(json => {
                // console.log(json.data.brands);
                setBrands(json.data.brands)
            })
            .catch(err => console.log(err));
    }, []);
    return (
        <>
            <AdminHome />
            <div >
                <h3 className='d-flex justify-content-center mb-3 my-4 bg-primary p-3 text-white'>Brands
                    <AddBrands />
                </h3>
            </div>
            <div>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>ID</th>
                            <th>Brand Name</th>
                            <th>Image</th>
                            <th>Delete Brand</th>
                            <th>Update Brand</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            brands.map((val, key) =>
                                <tr key={key}>
                                    <td>{key + 1}</td>
                                    <td>{val._id}</td>
                                    <td>{val.BrandName}</td>
                                    <td className='col-md-4 '><img style={{ width: "20vh" }} className='img-fluid' src={val.BrandImage} /></td>
                                    <td className='col-md-1' ><DeleteBrand /></td>
                                    <td className='col-md-1'> <UpdateBrand /></td>

                                </tr>)
                        }
                    </tbody>
                </Table>
            </div>
        </>
    )
}
