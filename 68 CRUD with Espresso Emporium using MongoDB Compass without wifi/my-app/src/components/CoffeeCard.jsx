import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const CoffeeCard = ({coffee, coffees, setCoffees }) => {
    const {_id, name, quantity, supplier, taste, category, details, photo} = coffee;

    const handleDelete = (_id)=>{
        console.log(_id);
        Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
        if (result.isConfirmed) {
            fetch(`http://localhost:5000/coffee/${_id}`,{
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0){
                     Swal.fire(
                        'Deleted!',
                        'Your Coffee has been deleted.',
                        'success'
                    )
                    const remaining = coffees.filter(cof => cof._id !== _id);
                    setCoffees(remaining);
                    console.log(remaining);
                }
            })
        }
        })
    }

    return (
        <div>
            <div className="card card-side bg-base-100 shadow-xl">
                <figure><img src={photo} alt="Movie"/></figure>
                <div className="flex justify-between items-center w-full pr-4">
                    <div className="">
                        <h2 className="card-title font-normal"><span className="font-bold">Name:</span> {name}</h2>
                        <p>{quantity}</p>
                        <p>{supplier}</p>
                        <p>{taste}</p>
                    </div>
                    <div className="card-actions justify-end">
                        <div className="btn-group btn-group-vertical space-y-4">
                            <Link to={`view/${_id}`}> <button className="btn">View</button> </Link>
                            <Link to={`updateCoffee/${_id}`}> <button className="btn">Edit</button> </Link>
                            <button onClick={()=>handleDelete(_id)} className="btn bg-red-700">X</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;