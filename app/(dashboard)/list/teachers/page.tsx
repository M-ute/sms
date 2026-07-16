"use client"
import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import Image from "next/image"
import Table from "@/components/Table"
import Link from "next/dist/client/link"
import { role, teachersData } from "@/app/lib/data"




type Teacher = {
  id:number; 
  teacherId:string; 
  name:string;
  email?:string;
  photo:string;
  phone:string;
  subjects:string[];
  classes:string[];
  address:string;
}





const columns = [
  {header:"Info", accessor:"info", className:"py-4 px-6"}, 
  {header: "Teacher ID", accessor: "teacherId", className:"py-4 px-6"},
  {header: "Subjects", accessor: "subjects", className:"py-4 px-6"},
  {header: "Classes", accessor: "classes", className:"py-4 px-6"},
  {header: "Phone", accessor: "phone", className:"py-4 px-6"},
  {header: "Address", accessor: "address", className:"py-4 px-6"},
  {header: "Actions", accessor: "actions", className:"py-4 px-6"}
  
]

const TeacherListPage = () => {
  const renderRow = (item:Teacher) => ( 
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-100 text-sm hover:bg-blue-200">
      <td className="flex items-center gap-4 px-6 py-4 ">
        <Image src={item.photo} alt="" width={40} height={40} className=" xl:block w-10 h-10 rounded-full object-cover"/>
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <p className="text-xs text-gray-500">{item?.email}</p>
        </div>
      </td>
      
      <td className="py-2 px-6">{item.teacherId}</td>
      <td className="py-2 px-6">{item.classes.join(", ")}</td>
      <td className="py-2 px-6">{item.phone}</td>
      <td className="py-2 px-6">{item.address}</td>
      <td className="py-2 px-6">{item.subjects.join(", ")}</td>
      <td>
        <div className="flex items-center justify-center gap-4 py-4 px-6">
          <Link href={`/list/teachers/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-green">
                <Image src="/view.png" alt="" width={16} height={16}/>
              </button>
              
          </Link>
            {role === "admin" && (
            <button className="w-7 h-7 flex items-center justify-center rounded-full bg-purple">
                <Image src="/delete.png" alt="" width={16} height={16}/>
            </button>
            )}
        </div>
      </td>
    </tr>
  );


  return (
    <div className="bg-white p-4 rounded-md flex-1 m-4 text-black">
      {/* TOP */}
      <div className="flex items-center justify-between">
        <h1 className="hidden md:block text-lg font-semibold ">All Teachers</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
            <TableSearch/>
            <div className="flex items-center gap-4 self-end">
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-green">
                  <Image src="/filter.png" alt="" width={14} height={14}/>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded-full bg-purple">
                  <Image src="/sort.png" alt="" width={14} height={14}/>
                </button>
                {role === "admin" && (
                  <button className="w-8 h-8 flex items-center justify-center rounded-full bg-first">
                  <Image src="/plus.png" alt="" width={14} height={14}/>
                </button>
                )}
            </div>
        </div>
      </div>
      {/*   LIST */}
      <div className="overflow-x-auto w-full">
        <Table columns={columns} renderRow={renderRow} data={teachersData}/>
      </div>
      {/* PAGINATION */}
        <Pagination/>
      
    </div>
  );
};

export default TeacherListPage;