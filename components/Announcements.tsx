const Announcements = () => {
  return (
    <div className='p-4 bg-white rounded-lg shadow-md '>
        
        <div className="flex items-center justify-between">
            <h1 className="text-lg font-semibold">Announcements</h1>
            <span className="text-xs text-gray-500 ">View all </span>
        </div>

        
        <div className="flex flex-col gap-6 mt-4 py-4 ">
        <div className="bg-green-200 rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-bold">School Reopening Date</h2>
                <span className="text-xs text-gray-500 bg-white rounded-md p-1">22-01-26</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>

        </div>
        <div className="bg-amber-100 rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-bold">SRC Week Celebration</h2>
                <span className="text-xs text-gray-500 bg-white rounded-md p-1">22-01-26</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
        </div>
        <div className="bg-purple-200 rounded-md p-4">
            <div className="flex items-center justify-between">
                <h2 className="font-bold">Fresher Akwaaba Night</h2>
                <span className="text-xs text-gray-500 bg-white rounded-md p-1">22-01-26</span>
            </div>
            <p className="text-sm text-gray-500 mt-1">Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
        </div>
        </div>
    

    </div>
  )
}

export default Announcements