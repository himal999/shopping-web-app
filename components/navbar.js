import Link from 'next/link';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className=" w-full py-8 container mx-auto flex flex-row justify-between items-center">
        <div className=" flex flex-row justify-center items-center">
          <Link href="#" className=" text-3xl">
            ODEL
          </Link>
          <div className="uppercase px-10 font-pt">
            <Link href="/catlog/new" className=" text-sm px-4">
              NEW
            </Link>
            <Link href="/catlog/dress" className=" text-sm px-4">
              Dresses
            </Link>
            <Link href="/catlog/cloth" className=" text-sm px-4">
              clothing
            </Link>
            <Link href="/catlog/shoes" className=" text-sm px-4">
              shoes
            </Link>
            <Link href="/catlog/assessories" className=" text-sm px-4">
              Assessories
            </Link>
            <Link href="/catlog/sale" className=" text-sm px-4">
              sale
            </Link>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center">
          <SearchIcon className="mx-2 cursor-pointer" />
          <AccountCircleIcon className="mx-2 cursor-pointer" />
          <AddShoppingCartIcon className="mx-2 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
