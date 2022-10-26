import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import bg from "./bg.png"
import icon1 from "./icon1.png"
import icon2 from "./icon2.png"
import icon3 from "./icon3.png"
import man from "./man.png"
import cons from "./cons.png"
import cbg from "./cbg.png"


function App() {
  return (
    <>
    <Navbar/>
    <header className="h-[500px] bg-cover bg-center bg-no-repeat text-white" style={{backgroundImage:`url(${bg})`}}>

      <div className="h-full w-full relative bg-black opacity-50">
      <h1 className="md:text-6xl md:py-[150px] md:ml-[100px] py-[80px] text-5xl ml-[50px]">Building things is <br/>our mission</h1>

<div className="absolute md:right-0 bottom-0 h-[200px] w-[350px] bg-blue-800 text-white ">

</div>
      </div>

      

    </header>

    <div className='flex flex-col items-center justify-center mt-[100px]'>
      <div>
          <h1 className="text-2xl font-bold text-center mb-[30px]">Our Reputation</h1>
      </div>

      <div className="flex items-center gap-[60px]">
        <div className="w-[250px]">
          <img src={icon1}/>
          <div>
            <h3 className='font-bold mt-[10px] mb-[10px]'>Best Services</h3>
            <p>Building is the best services we do here at aoka</p>
          </div>
        </div>
        <div className="w-[250px]">
        <img src={icon2}/>
          <div>
            <h3 className='font-bold mt-[10px] mb-[10px]'>Best Teams</h3>
            <p>Building is the best services we do here at aoka</p>
          </div>
        </div>
        <div className="w-[250px]">
        <img src={icon3}/>
          <div>
            <h3 className='font-bold mt-[10px] mb-[10px]'>Best Designers</h3>
            <p>Building is the best services we do here at aoka</p>
          </div>
        </div>
      </div>
    </div>


    <div className='mt-[100px] flex items-center justify-center'>

      <div >
      <div className="relative">
              <img src={man} className="h-[600px] "/>
              <div className="h-[400px] w-[350px] bg-blue-800 text-white absolute -right-[200px] top-[50px] text-white p-4">
                <h2 className="font-bold text-2xl mt-[20px]">About Us</h2>

                <p className="text-sm mt-[20px]">For more than 30 years we have been delivering  world-class construction and we have built long lasting relationship along the way
                  . <br/>
                  
                </p>
         
                <p className="text-sm mt-[20px]">We have matured into an industy leader and trusted resources for those seeking quality,innovation and reliability when building in the U.S</p>
                <div><button className="bg-white text-blue-700 p-2 rounded w-[180px] mt-[20px]">More on Our History</button></div>
      </div>
      </div>

      
      </div>
    
    </div>



    <div className="services bg-[#F6F8F7] h-[600px] mt-[150px]">
      <h1 className="text-center font-bold mb-[30px] py-[30px] text-2xl">Services</h1>

      <div className="serviceContainer flex flex-col items-center justify-center gap-[30px]">
        <div className="serviceContainerOne flex gap-[50px]">
          <div className="bg-white h-[200px] w-[200px] flex flex-col items-center justify-center gap-[15px]">
            <img src={cons}/>
            <h3 className="font-bold text-blue-800">Construction</h3>
          </div>
          <div className="bg-blue-800 text-white h-[200px] w-[200px] flex flex-col items-center justify-center gap-[15px]">
            <img src={cons}/>
            <h3 className="font-bold text-white">Renovation</h3>
          </div>
          <div className="bg-white h-[200px] w-[200px] flex flex-col items-center justify-center gap-[15px]">
            <img src={cons}/>
            <h3 className="font-bold text-blue-800">Construction</h3>
          </div>

        </div>

        <div className="serviceContainerOne flex gap-[50px]">
          <div className="bg-white h-[200px] w-[200px] flex flex-col items-center justify-center gap-[15px]">
            <img src={cons}/>
            <h3 className="font-bold text-blue-800">Construction</h3>
          </div>
          <div className="bg-blue-800 text-white h-[200px] w-[200px] flex flex-col items-center justify-center gap-[15px]">
            <img src={cons}/>
            <h3 className="font-bold text-white">Renovation</h3>
          </div>
          <div className="bg-white h-[200px] w-[200px] flex flex-col items-center justify-center gap-[15px]">
            <img src={cons}/>
            <h3 className="font-bold text-blue-800">Construction</h3>
          </div>

        </div>

      </div>

    </div>

    <div className="h-[200px] bg-cover bg-center bg-no-repeat relative mt-[100px] text-white py-4 " style={{backgroundImage:`url(${cbg})`}}>
<div className="p-[50px] flex justify-around items-center">
  <div>
    <h1 className="text-2xl mb-[30px]">Free consultation with exceptional quality</h1>

    <p>Just one cal  away : +84 1102 2703</p>
  </div>
  <div><button className="border border-2-white p-2">Get your consultation</button></div>
</div>
    </div>


    <div className="bg-[#F6F8F7] h-[300px] mt-[100px]"></div>

    
    </>
  );
}

export default App;
