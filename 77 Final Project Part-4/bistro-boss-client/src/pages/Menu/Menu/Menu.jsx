import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzasImg from "../../../assets/menu/pizza-bg.jpg";
import saladsImg from "../../../assets/menu/salad-bg.jpg";
import soupsImg from "../../../assets/menu/soup-bg.jpg";

import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const salads = menu.filter((item) => item.category === "salad");
  const soups = menu.filter((item) => item.category === "soup");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover img={menuImg} title={"OUR MENU"} />

      {/* Main Cover */}
      <div className="py-20">
        <SectionTitle
          heading={"TODAY'S OFFER"}
          subHeading={"---Don't miss---"}
        />
        <MenuCategory items={offered} />
      </div>

      {/* desserts  */}
      <div className="py-20">
        <SectionTitle
          heading={"TODAY'S OFFER"}
          subHeading={"---Don't miss---"}
        />
        <MenuCategory
          coverImg={dessertImg}
          title={"dessert"}
          items={desserts}
        />
      </div>

      {/* pizzas  */}
      <div className="py-20">
        <SectionTitle
          heading={"TODAY'S OFFER"}
          subHeading={"---Don't miss---"}
        />
        <MenuCategory coverImg={pizzasImg} title={"pizza"} items={pizzas} />
      </div>

      {/* salads  */}
      <div className="py-20">
        <SectionTitle
          heading={"TODAY'S OFFER"}
          subHeading={"---Don't miss---"}
        />
        <MenuCategory coverImg={saladsImg} title={"salad"} items={salads} />
      </div>

      {/* soups  */}
      <div className="py-20">
        <SectionTitle
          heading={"TODAY'S OFFER"}
          subHeading={"---Don't miss---"}
        />
        <MenuCategory coverImg={soupsImg} title={"soup"} items={soups} />
      </div>
    </div>
  );
};

export default Menu;
