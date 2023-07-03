import React from "react";
import {
    Bar,
    BarChart,
    CartesianGrid,
    Legend,
    Tooltip,
    XAxis,
    YAxis
} from "recharts";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import useClass from "../../../../hooks/useClass";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../../hooks/useAuth";
import useAxiosSecure from "../../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { AiOutlineLineChart, AiOutlineUserAdd } from "react-icons/ai";
import { MdOutlineTask } from "react-icons/md";
import { MdOutlineClass } from "react-icons/md";


const AdminDashboardHome = () => {
  const [classes] = useClass();
  
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure("/admin-stats");
      return res.data;
    },
  });

  const {data: statsData = []}  = useQuery({
    queryKey: ['chart-data'],
    queryFn: async()=> {
        const res = await axiosSecure("/orders-stats");
        return res.data;
    }
})

  const chartData1 = classes.map(({ name, availableSeats }) => ({
    name,
    availableSeats,
  }));
  const chartData2 = statsData.map(({name, price, email }) => ({
    price,
    email,
    name
  }));
  // const originalArray = [
  //   { name: 'Class A', instructor: 'John', duration: 60 },
  //   { name: 'Class B', instructor: 'Emily', duration: 90 },
  //   { name: 'Class C', instructor: 'Michael', duration: 75 }
  // ];

  // const modifiedArray = originalArray.map(({ name, instructor }) => ({ name, instructor }));

  console.log(chartData1);

  // ---------------------

  // const data = [
  //   {
  //     className: "Class-1",
  //     AvailableSeats: 23,
  //   },
  //   {
  //     className: "Class-2",
  //     AvailableSeats: 30,
  //   },
  //   {
  //     className: "Class-3",
  //     AvailableSeats: 23,
  //   },
  //   {
  //     className: "Class-4",
  //     AvailableSeats: 23,
  //   },
  // ];

  return (
    <div className="flex flex-col justify-center gap-5 items-center min-h-screen p-5">
      
      <SectionTitle title="Dashboard" />
      <Helmet>
        <title>Dashboard | Inkwell Studio</title>
      </Helmet>
      <div className="grid grid-cols-4 gap-3 w-full">
          <div className="w-full rounded-lg text-[#fff] shadow-lg bg-gradient-to-t from-[#004080] to-[#2f7bc5] p-5 flex justify-between">
              <p className="text-5xl font-light text-center"><AiOutlineLineChart /></p>
              <div className="flex flex-col items-end">
                
                <p className="text-xl font-bold text-center">Revenue</p>
                <p className="text-5xl font-light text-center">$ {stats.revenue || 0}</p>
              </div>
          </div>
          <div className="w-full rounded-lg text-[#fff] shadow-lg bg-gradient-to-t from-[#004080] to-[#2f7bc5] p-5 flex justify-between">
              <p className="text-5xl font-light text-center"><AiOutlineUserAdd /></p>
              <div className="flex flex-col items-end">
                
                <p className="text-xl font-bold text-center">New User</p>
                <p className="text-5xl font-light text-center">{stats.user || 0}</p>
              </div>
          </div>
          <div className="w-full rounded-lg text-[#fff] shadow-lg bg-gradient-to-t from-[#004080] to-[#2f7bc5] p-5 flex justify-between">
              <p className="text-5xl font-light text-center"><MdOutlineClass /></p>
              <div className="flex flex-col items-end">
                
                <p className="text-xl font-bold text-center">Total Classes</p>
                <p className="text-5xl font-light text-center">{stats.classes || 0}</p>
              </div>
          </div>
          <div className="w-full rounded-lg text-[#fff] shadow-lg bg-gradient-to-t from-[#004080] to-[#2f7bc5] p-5 flex justify-between">
              <p className="text-5xl font-light text-center"><MdOutlineTask /></p>
              <div className="flex flex-col items-end">
                
                <p className="text-xl font-bold text-center">Total Order</p>
                <p className="text-5xl font-light text-center">{stats.orders}</p>
              </div>
          </div>
      </div>
      <div className="divider"></div>
      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">
            Classes VS Available :: {classes.length}
          </h2>
          <p className="text-center text-3xl"></p>
        </div>

        <div className="overflow-x-auto">
          <div className="p-5 flex justify-center">
            <BarChart
              width={800}
              height={250}
              data={chartData1}
              margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={15}
            >
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis
                dataKey="name"
                fontSize={12}
                angle={-90}
                textAnchor="start"
                interval={0}
                dy={-40}
                dx={15}
              />
              <YAxis interval={0} />
              <Tooltip />
              <Legend />
              <Bar dataKey="availableSeats" fill="#8884d8" />
            </BarChart>
          </div>
        </div>
      </div>

      <div className="card w-full bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-2xl">Enroll users</h2>
          <p className="text-center text-3xl"></p>
        </div>

        <div className="p-5 flex justify-center">
        <BarChart
              width={800}
              height={250}
              data={chartData2}
              margin={{
                top: 10,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={15}
            >
              <CartesianGrid strokeDasharray="2 2" />
              <XAxis
                dataKey="email"
                fontSize={12}
                angle={-90}
                textAnchor="start"
                interval={0}
                dy={-40}
                dx={15}
              />
              <YAxis interval={0} />
              <Tooltip />
              <Legend />
              <Bar dataKey="price" fill="#8884d8" />
            </BarChart>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardHome;
