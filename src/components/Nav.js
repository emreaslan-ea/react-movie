import { Link } from "react-router-dom";
function Nav(){


  return(
    <div className="bg-slate-800">
      <nav className=" bg-slate-800 text-white py-3 lg:w-4/5 w-full mx-auto">
        <ul className="flex items-center p-2 justify-between">
          <li className="font-serif text-xl italic font-extrabold mr-5 tracking-wider">REMOVİECT</li>
            <div className="flex items-center">
              <li><Link to={"/"} className="p-2 m-1 bg-teal-600 text-white rounded-sm">Home</Link></li>
              <li><Link to={"/search"} className="p-2 m-1 bg-teal-600 text-white rounded-sm">Search</Link></li>
              <li><Link to={"/trends"} className="p-2 m-1 bg-teal-600 text-white rounded-sm">Trends</Link></li>
              <li><Link to={"/list"} className="p-2 m-1 bg-teal-600 text-white rounded-sm">List</Link></li>
            </div>
        </ul>
      </nav>
      
      
    </div>

  )
}

export default Nav;