import React from 'react';
import { Link } from 'react-router-dom';
import useClass from '../../../../hooks/useClass';

const EnrolledClass = ({index, item}) => {
    const [classes] = useClass();
    const data = classes?.find(classItem => classItem._id === item);
    console.log(data);
    // console.log(classes);
    return (
        <tr>
                  <td>{index}</td>
                  <td>
                    <div className="flex items-center space-x-3">
                      <img
                        className="mask mask-squircle w-12 h-12"
                        src={data?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </td>
                  <td>
                    <p className="font-semibold">{data?.name}</p>
                    <p className="text-sm opacity-[75%]">
                    {data?.instructorName}
                    </p>
                  </td>
                 
                  <td className="text-right">$ {data?.price}</td>
                  <td className="">
                    <Link className="bg-secondary p-3 rounded-md text-[#fff]" to={`/dashboard/enrolled_classes/${item}`}>Go to course </Link>
                  </td>
                </tr>
    );
};

export default EnrolledClass;