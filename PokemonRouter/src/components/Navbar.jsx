import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-green-900 p-8">
      <div className="container mx-auto flex justify-center space-x-8 ">

        <Link to='/' className="text-yellow-600 hover:text-yellow-200">
          Pokemon
        </Link>
        <Link to='/Details' className="text-blue-700 hover:text-blue-400">
          Details
        </Link>

      </div>

    </nav>

  )
}