import React from "react";
import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const img_hosting_token = import.meta.env.VITE_IMG_UPLOAD_TOKEN;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const img_img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          // console.log(imgResponse.data.display_url);
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe, image } = data;
          const newItem = {
            name,
            price: parseFloat(price),
            category,
            recipe,
            image: imgURL,
          };
          //   console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            console.log("after posting new menu item", data.data);
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Added Successful",
                showCancelButton: false,
                timer: 1000,
              });
            }
          });
        }
      });

    console.log(data);
  };

  return (
    <div className="w-full px-10">
      <Helmet>
        <title>Bistro Boss | Add Items</title>
      </Helmet>
      <SectionTitle heading={"Add an item"} subHeading={"---What's new---"} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full ">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            {...register("name", { required: true, maxLength: 120 })}
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full "
          />
        </div>
        <div className="flex gap-5 my-3">
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text font-semibold">Category*</span>
            </label>
            <select
              defaultValue="Pick One"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option disabled>Pick One</option>
              <option>Pizza</option>
              <option>Soup</option>
              <option>Salad</option>
              <option>Dessert</option>
              <option>Drinks</option>
            </select>
          </div>
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-semibold">Price*</span>
            </label>
            <input
              {...register("price", { required: true, maxLength: 120 })}
              type="number"
              placeholder="Recipe Name"
              className="input input-bordered w-full "
            />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-semibold">Recipe Details</span>
          </label>
          <textarea
            {...register("recipe", { required: true, maxLength: 120 })}
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="form-control w-full my-3">
          <label className="label">
            <span className="label-text font-semibold">Item Image</span>
          </label>
          <input
            {...register("image", { required: true, maxLength: 120 })}
            type="file"
            className="file-input file-input-bordered w-full "
          />
        </div>
        <input type="submit" value="Add Item" className="btn btn-sm mt-4" />
      </form>
    </div>
  );
};

export default AddItem;
