import Image from "next/image"

const TableSearch = () => {
  return (
         <div className="w-full md:w-auto flex gap-2 p-1 text-xs rounded-full ring-[1.5px] items-center ring-gray-200 px-2">
                <Image src="/search.png" alt="" width={14} height={14}/>
                <input type="text" placeholder="Search..." className="w-50 p-1 bg-transparent outline-none text-black"/>
        </div>

  )
}

export default TableSearch