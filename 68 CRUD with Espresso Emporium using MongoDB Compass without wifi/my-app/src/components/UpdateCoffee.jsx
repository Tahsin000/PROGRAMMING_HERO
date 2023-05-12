import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;
    const navigate = useNavigate()

    const handleUpdateCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const updateCoffee = {name, quantity, supplier, taste, category, details, photo};
        
        console.log(updateCoffee);

        fetch(`http://localhost:5000/coffee/${_id}`, {
            method: 'PUT',
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updateCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success',
                    text: 'Coffee Update Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                form.reset();
                navigate('/');
            }
        })

    }
    return (
        <div className='bg-[#f4f3f0] p-24'>
            <h1 className='text-3xl font-extrabold'>Update coffee</h1>
            <form onSubmit={handleUpdateCoffee}>
                {/* form row Name and quantity */}
                <div className="md:flex gap-3 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={name} name='name' placeholder="Coffee name" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={quantity} name='quantity' placeholder="Available Quantity" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form Supplier and Taste row */}
                <div className="md:flex gap-3 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Supplier</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={supplier} name='supplier' placeholder="Supplier name" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={taste} name='taste' placeholder="Taste" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form category and details row */}
                <div className="md:flex gap-3 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Category Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={category} name='category' placeholder="Category" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={details} name='details' placeholder="Details" className="input input-bordered md:w-full" />
                        </label>
                    </div>
                </div>
                {/* form photo url  */}
                <div className="md:flex gap-3 mb-8">
                    <div className="form-control w-full">
                        <label className="label">
                            <span className="label-text">Photo URL</span>
                        </label>
                        <label className="input-group">
                            <input type="text" defaultValue={photo} name='photo' placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Update Coffee" className='btn btn-block bg-purple-900' />
            </form>
        </div>
    );
};

export default UpdateCoffee;