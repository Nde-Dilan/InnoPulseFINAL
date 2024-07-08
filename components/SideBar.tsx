import Link from "next/link";
const Sidebar = () => {
    return (
      <div className="mt-5 bg-white p-4 shadow-lg rounded-lg">
        <ul className="space-y-4">
          <li>
            <Link href="/myjobs">
              <div className="block p-3 hover:bg-gray-200 rounded-md cursor-pointer">My Jobs</div>
            </Link>
          </li>
          <li>
            <Link href="/profile">
              <div className="block p-3 hover:bg-gray-200 rounded-md cursor-pointer">Profile</div>
            </Link>
          </li>
          <li>
            <Link href="/courses">
              <div className="block p-3 hover:bg-gray-200 rounded-md cursor-pointer">Courses</div>
            </Link>
          </li>
          <li>
            <Link href="/notifications">
              <div className="block p-3 hover:bg-gray-200 rounded-md cursor-pointer">Notifications</div>
            </Link>
          </li>
          <li>
            <Link href="/logout">
              <div className="block p-3 hover:bg-gray-200 rounded-md cursor-pointer">Logout</div>
            </Link>
          </li>
        </ul>
      </div>
    );
  };

  export default Sidebar;