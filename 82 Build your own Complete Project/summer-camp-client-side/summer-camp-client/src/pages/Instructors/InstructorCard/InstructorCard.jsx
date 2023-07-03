import React, { useEffect, useState } from "react";

const InstructorCard = ({ instructor }) => {
  const { photoUrl, name, email, numClasses, classesTaken } = instructor;

  
  
  
  const [data, setData ]= useState([]);
  useEffect(()=> {
    fetch(`https://summer-camp-server-ten-iota.vercel.app/instructor_classes_count/${email}`)
    .then(res => res.json())
    .then(info => setData(info))
  }, [email]);
  // console.log(data);
  return (
    <div className={`bg-white rounded-lg shadow-lg p-5 ${data == 0 ? 'text-[#6e7580] opacity-40' :''}`}>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-5">
        <img src={photoUrl} alt="Instructor" className="md:h-full max-md:w-full rounded-md" />
        <div className="flex flex-col justify-center">
          <div className="flex items-center mb-4">
            <div>
              <h3 className=" font-bold text-3xl">{name}</h3>
              <p className="text-gray-500 text-[#63676d]">{email}</p>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-2">Classes Taken: {data?.length}</h4>
            <ul className="list-disc ml-6">
              {data.map((className, index) => (
                <li className="text-[#6e7580]" key={index}>{className?.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorCard;
