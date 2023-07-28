import { UiContext } from "@/context/ui/UiContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, FormEventHandler, useContext, useState } from "react";
import { BiX } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";


export const SideMenu:FC = () => {

  const {isOpen, setIsOpen} = useContext(UiContext);

  const router = useRouter();

  const navigateTo = (url: string) => {
    setIsOpen();
    router.push(url);
  };

  const [searchTerm, setSearchTerm] = useState("");

  // Cuando usamos el form y dentro el input en este caso debemos usar el .preventDefault() asi funciona y nos manda a la ruta correcta, porque si no lo hacemos no funcionara
  const onSearchTerm = () => {
    // e.preventDefault();
    if (searchTerm.trim().length === 0) {
      return 
    };
    navigateTo(`/search/${searchTerm}`);
  };

  return (
    <div
      className={
        `fixed top-0 right-1/2 transform translate-x-1/2 z-10
        h-screen bg-[#00000050]
        transition-all duration-500
        ${isOpen ? "w-full max-w-[1440px]" : "w-0"}`
      }
    >
        <div
          className={
            `absolute right-0 top-0] bg-black
            transition-all ease-in-out duration-500
            ${isOpen ? "w-[260px]  h-screen" : "w-0"}`
          }
        >
          <div 
            className={
              `flex flex-col justify-between gap-10 mt-6
              ${!isOpen && "hidden"}`
            }
          >
            <button
              onClick={() => setIsOpen()}
              className={`text-2xl self-start ml-3 hover:bg-neutral-800 hover:rounded-md text-center`}
            >
              <BiX className="w-[40px] h-[40px]"/>
            </button>
            <ul className="flex flex-col gap-2 self-center">
              <div className="flex items-center justify-between border-b">
                {/* <form className="flex items-center justify-between border-b" onSubmit={onSearchTerm}>
                </form> */}
                  <input type="text" placeholder={`Search...`} value={searchTerm} 
                    onChange={e => setSearchTerm(e.target.value)} 
                    onKeyUp={e => e.key === "Enter" ? onSearchTerm() : null}
                    className="bg-black py-1 focus:outline-none" 
                  />
                  <BiSearch className="w-[30px] h-[30px] p-1 rounded-md hover:bg-neutral-800 cursor-pointer" onClick={onSearchTerm}/>
              </div>
              <li><Link href={" #"} className="text-2xl">Profile</Link></li>
              <li><Link href={" #"} className="text-2xl">My orders</Link></li>
              <li><Link href={" #"} className="text-2xl">Get into</Link></li>
              <li><Link href={" #"} className="text-2xl">Go out</Link></li>
              <hr className="sm:hidden"/>
              <li><button onClick={() => navigateTo("/category/men")} className="text-2xl sm:hidden">Men</button></li>
              <li><button onClick={() => navigateTo("/category/women")} className="text-2xl sm:hidden">Women</button></li>
              <li><button onClick={() => navigateTo("/category/kids")} className="text-2xl sm:hidden">kids</button></li>
              <hr />
              <p className="text-sm font-light text-neutral-300">Admin Panel</p>
              <li><Link href={" #"} className="text-2xl">Products</Link></li>
              <li><Link href={" #"} className="text-2xl">Orders</Link></li>
              <li><Link href={" #"} className="text-2xl">Users</Link></li>

            </ul>
          </div>
        </div>
    </div>
  );
};
