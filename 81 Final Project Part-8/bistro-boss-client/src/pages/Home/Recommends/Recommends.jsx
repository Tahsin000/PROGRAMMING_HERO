import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Recommend from "./Recommend";

import img1 from "../../../assets/home/slide5.jpg";

const Recommends = () => {
  const cardsInfo = [
    {
      _id: 1,
      img: `${img1}`,
      title: "Caeser Salad",
      subTitle: "Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.",
    },
  ];

  return (
    <section className="py-20">
      <SectionTitle
        heading={"CHEF RECOMMENDS"}
        subHeading={"---Should Try---"}
      />
      <div className="grid grid-cols-3">
        {cardsInfo.map((Rec) => <Recommend Rec={Rec} key={Rec._id} /> )}
        {cardsInfo.map((Rec) => <Recommend Rec={Rec} key={Rec._id} /> )}
        {cardsInfo.map((Rec) => <Recommend Rec={Rec} key={Rec._id} /> )}
      </div>
    </section>
  );
};

export default Recommends;
