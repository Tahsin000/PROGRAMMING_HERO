import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CategoryCard from "./CategoryCard";

const Category = ({ products }) => {
  if (!Array.isArray(products)) {
    return <p>No products available.</p>;
  }
  // const categories = [...new Set(products.map((product) => product.category))];
  const categoryItems = [
    "Educational Toys",
    "Outdoor Toys",
    "Imaginative Toys",
  ];

  return (
    <div className="py-10" id="category">
      <h2 data-aos="fade-up" data-aos-duration="500" className="text-5xl font-bold text-[#301755] text-center mb-8">
      CATEGORY
      </h2>
      <Tabs>
        <TabList>
          {categoryItems.map((categoryItem, index) => (
            <Tab key={index}>{categoryItem}</Tab>
          ))}
        </TabList>

        {categoryItems.map((category, index) => (
          <TabPanel key={index}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {products
                .filter((product) => product.category === category)
                .map((product, index) => (
                  <CategoryCard key={index} product={product} />
                ))}
            </div>
          </TabPanel>
        ))}

        {/* <TabPanel>
        <h2>Any content 2</h2>
      </TabPanel> */}
      </Tabs>
    </div>
  );
};

export default Category;
