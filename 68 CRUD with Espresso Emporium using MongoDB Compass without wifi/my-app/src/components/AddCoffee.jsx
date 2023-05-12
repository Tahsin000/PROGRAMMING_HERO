
import React from 'react';
import Swal from 'sweetalert2'

const AddCoffee = () => {
    const handleAddCoffee = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;

        const newCoffee = {name, quantity, supplier, taste, category, details, photo};
        
        console.log(newCoffee);

        fetch('http://localhost:5000/coffee', {
            method: 'POST',
            headers:{
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.insertedId){
                Swal.fire({
                    title: 'Success',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                  })
                form.reset();
            }
        })

    }
    return (
        <div className='bg-[#f4f3f0] p-24'>
            <h1 className='text-3xl font-extrabold'>Add coffee</h1>
            <form onSubmit={handleAddCoffee}>
                {/* form row Name and quantity */}
                <div className="md:flex gap-3 mb-8">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Coffee Name</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='name' placeholder="Coffee name" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Available Quantity</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='quantity' placeholder="Available Quantity" className="input input-bordered md:w-full" />
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
                            <input type="text" name='supplier' placeholder="Supplier name" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Taste</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='taste' placeholder="Taste" className="input input-bordered md:w-full" />
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
                            <input type="text" name='category' placeholder="Category" className="input input-bordered md:w-full" />
                        </label>
                    </div>

                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Details</span>
                        </label>
                        <label className="input-group">
                            <input type="text" name='details' placeholder="Details" className="input input-bordered md:w-full" />
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
                            <input type="text" name='photo' placeholder="Photo URL" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <input type="submit" value="Add Coffee" className='btn btn-block' />
            </form>
        </div>
    );
};

export default AddCoffee;