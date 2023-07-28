import { UiContext } from "@/context/ui/UiContext";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useContext, useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import { BiCart } from "react-icons/bi";
import { BiMenu } from "react-icons/bi";


export const Navbar:FC = () => {

  const {isOpen, setIsOpen} = useContext(UiContext);
  const [openSearch,  setOpenSearch] = useState(false);
  
  const router = useRouter();
  const {pathname} = router;

  // -------------------- Para saber el ancho de la ventana ---------------------------------------------------------------------
  
  const [windowWidth, setWindowWidth] = useState(0);

  // Función para actualizar el estado del ancho de la ventana cuando cambie el tamaño del navegador
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  const listener = () => {
    if (windowWidth < 640) {
      setOpenSearch(false);
    };
  }

  // Efecto para suscribirse al evento de cambio de tamaño de ventana y limpiar la suscripción al desmontar el componente
  useEffect(() => {

    const setInitialWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Llamar a la función para establecer el valor inicial
    setInitialWidth();

    window.addEventListener('resize', handleResize);
    window.addEventListener('resize', listener);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('resize', listener);
    };
  }, []);


  // ---------------------- Para tomar el texto de busqueda y luego navegar a la ruta determinada ----------------------------------------------------------------
  
  const [searchTerm, setSearchTerm] = useState("");

  const navigateTo = (url: string) => {
    router.push(url);
  };

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    navigateTo(`/search/${searchTerm}`);
  };


  // -------- Esta funcion decide si va a abrir el sidebar o va a abrir el input de la lupa de acuerdo al ancho de la ventana ------------

  const handlerWithSearch = () => {
    if (windowWidth < 640) {
      setIsOpen();
      setOpenSearch(false);
      return;
    };

    setOpenSearch(!openSearch);
  };

  return (
    <nav
      className={
        `fixed top-0 right-1/2 transform translate-x-1/2 z-10 bg-black
        px-[20px] py-[20px] h-[80px]
        w-full max-w-[1440px]
        flex justify-between items-center
        ${isOpen && "blur-sm"}`
      }
    >
      <div className={`flex items-center gap-2`}>
        <Link href={"/"}> <h6 className="text-2xl font-medium">Teslo |</h6> </Link>
        <p className="text-lg pt-1">Shop</p>
      </div>

      <div
        className={`hidden sm:flex sm:gap-3 md:gap-6 sm:h-full items-center ${openSearch ? "hidden" : "flex"}`}
      >
        <Link href={"/category/men"} className={`px-2 py-1 hover:bg-neutral-800 hover:rounded-md text-center  |  ${pathname === "/category/men" && "bg-neutral-800 rounded-md"}`}>Men</Link> 
        <Link href={"/category/women"} className={`px-2 py-1 hover:bg-neutral-800 hover:rounded-md text-center  |  ${pathname === "/category/women" && "bg-neutral-800 rounded-md"}`}>Women</Link>
        <Link href={"/category/kids"} className={`px-2 py-1 hover:bg-neutral-800 hover:rounded-md text-center  |  ${pathname === "/category/kids" && "bg-neutral-800 rounded-md"}`}>Kids</Link>
      </div>


      <div className={`flex items-center gap-1  md:gap-5`}>
        <div className="flex gap-x-1">
          <input autoFocus type="text" placeholder={`Buscar...`} value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)} 
            onKeyUp={e => e.key === "Enter" ? onSearchTerm() : null}
            className={`${openSearch ? "w-40 py-1 px-2" : "w-0" } transition-all bg-neutral-800 rounded-md focus:outline-none`}
          />
          <button onClick={() => handlerWithSearch()}>
            <BiSearch className={`w-[25px] h-[25px]`}/>
          </button>
        </div>
        <Link href={"/cart"}>
          <div className="relative">
            <div className={`absolute w-[15px] h-[15px] rounded-full bg-blue-700 -top-1 -right-1 text-xs z-10 text-center`}>{2}</div>
            <BiCart className={`w-[25px] h-[25px]`}/>
          </div>
        </Link>
        <button className={`px-2 py-1 hover:bg-neutral-800 hover:rounded-md text-center`} onClick={() => setIsOpen()}>
          <BiMenu className="w-[30px] h-[30px]"/>
        </button>
      </div>
    </nav>
  );
};
