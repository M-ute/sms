"use client"
import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import Image from "next/image"
import Table from "@/components/Table"
import Link from "next/dist/client/link"
import { role, examsData } from "@/app/lib/data"




type Exams = {
  id:number; 
  subject:string;
  class:string;
  teacher:string;
  date: string;
  
}





const columns = [
  {header:"Subject Name", accessor:"name"}, 
  {header: "Class", accessor: "class"},
  {header: "Teacher", accessor: "teacher", className:"py-4 px-8"},
  {header: "Date", accessor: "date", className:"py-4 px-8"},
  {header: "Actions", accessor: "actions"}
  
]

const ExamsListPage = () => {
  const renderRow = (item:Exams) => ( 
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-100 text-sm hover:bg-blue-200">
      <td className="flex items-center gap-4 py-4 px-8">{item.subject}</td>
      <td>{item.class}</td>
      <td className="py-4 px-8">{item.teacher}</td>
       <td className="py-4 px-8">{item.date}</td>
     
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/exams/${item.id}`}>
              <button className="w-7 h-7 flex items-center justify-center rounded-full bg-green">
                <Image src="/edit.png" alt="" width={16} height={16}/>
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
        <h1 className="hidden md:block text-lg font-semibold ">Examination</h1>
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
        <Table columns={columns} renderRow={renderRow} data={examsData}/>
      </div>
      {/* PAGINATION */}
        <Pagination/>
      
    </div>
  );
};

export default ExamsListPage;