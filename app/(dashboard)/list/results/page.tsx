"use client"
import Pagination from "@/components/Pagination"
import TableSearch from "@/components/TableSearch"
import Image from "next/image"
import Table from "@/components/Table"
import Link from "next/dist/client/link"
import { role, resultsData } from "@/app/lib/data"




type Results = {
  id:number; 
  subject:string;
  class:string;
  teacher:string;
  student:string;
  type: "exam" | "assignment"
  score: number;
  date: string;
  
}





const columns = [
  {header:"Subject Name", accessor:"name"}, 
  {header: "Class", accessor: "class", className: "hidden md:table-cell"},
  {header: "Student", accessor: "student"},
  {header: "Score", accessor: "score",  className: "hidden md:table-cell"},
  {header: "Teacher", accessor: "teacher", className: "hidden md:table-cell"},
  {header: "Date", accessor: "date", className: "hidden md:table-cell"},
  {header: "Actions", accessor: "actions"}
  
]

const ResultListPage = () => {
  const renderRow = (item:Results) => ( 
    <tr key={item.id} className="border-b border-gray-200 even:bg-slate-100 text-sm hover:bg-blue-200">
      <td className="flex items-center gap-4 p-4">{item.subject}</td>
      <td className="hidden md:table-cell">{item.class}</td>
      <td >{item.student}</td>
      <td className="hidden md:table-cell">{item.score}</td>
      <td className="hidden md:table-cell">{item.teacher}</td>
      <td className="hidden md:table-cell">{item.date}</td>
     
      <td>
        <div className="flex items-center gap-2">
          <Link href={`/list/teachers/${item.id}`}>
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
        <h1 className="hidden md:block text-lg font-semibold ">Results</h1>
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
        <Table columns={columns} renderRow={renderRow} data={resultsData}/>

      {/* PAGINATION */}
        <Pagination/>
      
    </div>
  );
};

export default ResultListPage;