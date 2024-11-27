import Navbar from "./components/Navbar";
import backgroundImage from "./assets/foto-7.png";
import Info from "./components/Info";
import Price from "./components/Price";
import { Divider } from '@nextui-org/react'
import MainHouse from "./components/MainHouse";
import MainCards from "./components/MainCards";

function App() {
  return (
    <>
      <div className="w-full h-[2500px]">
        <div
          className="w-full h-[100vh] object-cover bg-cover bg-no-repeat bg-black"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            // backgroundPosition: 'center',
          }}
        >
          <div>
            <Navbar />
          </div>
          <div className="flex flex-wrap items-center">
            <Info />
          </div>
          <div className="items-center justify-center hidden w-full sm:flex h-60 mt-9">
            <Price />
          </div>
          <div className="w-full h-10 flex justify-center items-center mt-[-30px]">
            <Divider className="w-72" />
          </div>
          <div className="flex flex-col items-center justify-center w-full h-40 mt-64 sm:mt-0">
            <MainHouse />
          </div>
          <div className="mt-24">
            <MainCards />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
