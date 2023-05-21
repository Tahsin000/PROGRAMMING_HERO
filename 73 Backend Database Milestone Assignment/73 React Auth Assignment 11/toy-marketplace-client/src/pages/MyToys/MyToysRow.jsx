import React from "react";
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import Rating from "react-rating";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const MyToysRow = ({ product, products, setProducts, index }) => {
  const navigate = useNavigate();
  const {
    _id,
    picture,
    name,
    sellerName,
    price,
    rating,
    availableQuantity,
    detailDescription,
  } = product;

  const updateForm = `
  <div class="grid md:grid-cols-2 gap-3 py-10">
    <div>
    <img style="border-radius: 25px;" src=${picture} />
    </div>
    <div class="grid md:grid-cols-1">
      <input type="text" id="picture" class="swal2-input" value=${picture} placeholder="Enter Picture URL">
      <input type="text" id="toyName" class="swal2-input" value=${name} placeholder="Enter Toy Name">

      <input type="text" id="sellerName" class="swal2-input" value=${sellerName} placeholder="Enter Seller Name">
      <select id="ToyCategory" class="swal2-input" defaultValue="Imaginative Toys">
        <option value="Educational Toys">Educational Toys</option>
        <option value="Outdoor Toys">Outdoor Toys</option>
        <option value="Imaginative Toys">Imaginative Toys</option>
      </select>
      <input type="text" id="price" class="swal2-input" value=${price} placeholder="Enter Toy Price">
      <input type="number" step="0.01" id="rating" class="swal2-input"  min="0" max="5" value=${rating} placeholder="Enter Toy Rating">
      <input type="text" id="availableQuantity" class="swal2-input" value=${availableQuantity} placeholder="Enter Toy availableQuantity">
      <textarea id="detailDescription" class="swal2-input" required />${detailDescription} </textarea> 
    </div>
  </div>
  
  `;

  const handleEdit = (_id) => {
    // console.log(_id);

    Swal.fire({
      title: "UPDATE TOYS",
      html: updateForm,
      width: "90%",
      confirmButtonText: "UPDATE",
      // focusConfirm: false,
      confirmButtonColor: "#DB2458",
      preConfirm: () => {
        const picture = Swal.getPopup().querySelector("#picture").value;
        const toyName = Swal.getPopup().querySelector("#toyName").value;
        const sellerName = Swal.getPopup().querySelector("#sellerName").value;
        const ToyCategory = Swal.getPopup().querySelector("#ToyCategory").value;
        const price = Swal.getPopup().querySelector("#price").value;
        const rating = Swal.getPopup().querySelector("#rating").value;
        const availableQuantity =
          Swal.getPopup().querySelector("#availableQuantity").value;
        const detailDescription =
          Swal.getPopup().querySelector("#detailDescription").value;
        // if (!picture ) {
        //   Swal.showValidationMessage(`Please enter login and password`)
        // }
        return {
          picture: picture,
          toyName: toyName,
          sellerName: sellerName,
          ToyCategory: ToyCategory,
          price: price,
          rating: rating,
          availableQuantity: availableQuantity,
          detailDescription: detailDescription,
        };
      },
    }).then((result) => {
      // Swal.fire(`
      //   Login: ${result.value.login}
      //   Password: ${result.value.password}
      // `.trim())
      console.log(result);
      if (result.isConfirmed > 0) {
        fetch(`https://toy-house-ten.vercel.app/my_products/${_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(result.value),
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.matchedCount) {
              Swal.fire({
                title: "Success",
                text: "Product Update Successfully",
                icon: "success",
                confirmButtonText: "OK",
              });

              navigate(`/products/my_product`);
            }
          });
      }
    });
  };
  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#DB2458",
      cancelButtonColor: "#301755",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        fetch(`https://toy-house-ten.vercel.app/my_products/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              const remainder = products.filter((pro) => pro._id !== _id);
              setProducts(remainder);
            }
          });
      }
    });
  };
  return (
    <tr data-aos="fade-up" data-aos-duration={(index * 1000) % 100}>
      <td>
        <div className="mask mask-squircle w-20 h-12 ">
          <img src={picture} />
        </div>
      </td>
      <td>{_id}</td>
      <td>{name}</td>
      <td>
        <p className="flex items-center gap-2">
          {rating}
          <Rating
            emptySymbol={<span className="text-gray-300">☆</span>}
            fullSymbol={<span className="text-yellow-400">★</span>}
            fractions={2}
            initialRating={rating}
            readonly
          />
        </p>
      </td>
      <td>{availableQuantity}x</td>
      <td>{price}$</td>
      <th>
        <Link
          to={`/products/details/${_id}`}
          className="btn border-0 font-normal text-white bg-[#422075] hover:bg-[#1a0a34] btn-sm"
        >
          details
        </Link>
      </th>
      <th>
        <div className="flex  md:w-1/2 gap-3">
          <button
            onClick={() => handleEdit(_id)}
            className="btn btn-outline text-[#aa7700] text-lg outline-[#aa7700] border-[#aa7700] hover:bg-[#946800] hover:border-[#946800] btn-sm"
          >
            <FaRegEdit />
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn btn-outline text-[#cb194c] text-lg outline-[#DB2458] border-[#DB2458] hover:bg-[#cb194c] hover:border-[#cb194c] btn-sm"
          >
            <FaTrashAlt />
          </button>
        </div>
      </th>
    </tr>
  );
};

export default MyToysRow;
