import { Sidebar } from "flowbite-react";
import {
  HiArrowSmRight,
  HiBookOpen,
  HiChartPie,
  HiInbox,
  HiOutlineCloudUpload,
  HiShoppingBag,
  HiTable,
  HiUser,
  HiViewBoards,
} from "react-icons/hi";
import { BiBuoy } from "react-icons/bi";
import userImg from "../assets/profile.jpg";
import { useContext } from "react";
import { AuthContext } from "../contact/AuthProvider";
const SideBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Sidebar aria-label="Sidebar with content separator example">
      <Sidebar.Logo
        href="#"
        img={user?.photoURL}
        imgAlt="Flowbite logo"
        className="w-16 h-16"
      >
        <p>{user?.displayName || "Demo user"}</p>
      </Sidebar.Logo>

      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item href="/admin/dashboard" icon={HiChartPie}>
            Dashboard
          </Sidebar.Item>
          <Sidebar.Item
            href="/admin/dashboard/upload"
            icon={HiOutlineCloudUpload}
          >
            Upload Book
          </Sidebar.Item>
          <Sidebar.Item href="/admin/dashboard/manage" icon={HiInbox}>
            Manage Books
          </Sidebar.Item>
          {/* <Sidebar.Item href="#" icon={HiUser}>
            Users
          </Sidebar.Item> */}
          <Sidebar.Item href="/shop" icon={HiBookOpen}>
            Books
          </Sidebar.Item>
          <Sidebar.Item href="/login" icon={HiArrowSmRight}>
            Sign In
          </Sidebar.Item>
          <Sidebar.Item href="/logout" icon={HiTable}>
            Log out
          </Sidebar.Item>
        </Sidebar.ItemGroup>
        {/* <Sidebar.ItemGroup>
          <Sidebar.Item href="#" icon={HiChartPie}>
            Upgrade to Pro
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={HiViewBoards}>
            Documentation
          </Sidebar.Item>
          <Sidebar.Item href="#" icon={BiBuoy}>
            Help
          </Sidebar.Item>
        </Sidebar.ItemGroup> */}
      </Sidebar.Items>
    </Sidebar>
  );
};

export default SideBar;
