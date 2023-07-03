import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div className="mx-auto md:w-1/2 md:py-20 py-10">
        <div className="divider text-gray-700 dark:text-gray-300 md:text-5xl text-3xl font-bold text-primary">{title}</div>
        
    </div>
  );
};

export default SectionTitle;
