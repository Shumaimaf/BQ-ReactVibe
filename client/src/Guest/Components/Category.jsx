import React, { useEffect, useState } from 'react'
import GuestCards from './GuestCards'
import axios from 'axios'
import { AppRoute } from '../../App'

export default function Category() {
    const [category, setCategory] = useState([])
    useEffect(() => {
        axios.get(`${AppRoute}api/getallcategories`)
            .then(json => setCategory(json.data.categories))
            .catch(err => {
                console.error('Error fetching categories:', err);
                setCategory([]); // Set an empty array to handle the error gracefully
            });
    }, []);

    return (
        <div className="container my-5">
            <div className="text-center">
                <h2>Category</h2>
                <small className="text-secondary">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum delectus magnam doloribus voluptatibus possimus corrupti aliquid itaque harum debitis ipsa!</small>
            </div>

            <div className="row my-5">
                {category && category.length > 0 ? (
                    category.map((val, key) => (
                        <GuestCards key={key} image={val.CategoryImage} name={val.CategoryName} />
                    ))
                ) : (
                    <p>No categories available.</p>
                )}
            </div>

        </div>
    )
}
