import React, { useState } from "react";
import { Button, Popover } from 'antd';
import { DatePicker, Space } from 'antd';
import axios from "axios";

const { RangePicker } = DatePicker;

export default function Order() {
  const [counterAudult,setCounterAudult]= useState(0)
  const [counterChild,setCounterChild]= useState(0)
  

  const handleIncreaseAudult =() =>{
    setCounterAudult(counterAudult+1)
  }
  const handleDecreaseAudult =()=>{
    
    if(counterAudult>0){
        setCounterAudult(counterAudult-1)
    }
  }

  const handleIncreaseChild =()=>{
    setCounterChild(counterChild+1)
  }
  const handleDecreaseChild =()=>{
    if(counterChild>0){
setCounterChild(counterChild-1)
    }
    
  }



const content = (
  <div className="w-72 pl-3" >
    <div className="flex justify-between">
        <p className="pb-3">Audult</p>
    <div className="flex">
            <button onClick={handleIncreaseAudult} className="w-6 h-6 rounded-full border-2 border-black flex justify-center items-center text-black text-xl pb-1 mr-2">+</button>
            <div className="w-4">{counterAudult}</div>
            <button onClick={handleDecreaseAudult} className="w-6 h-6 rounded-full border-2 border-black flex justify-center items-center text-black text-xl pb-1 ">-</button>
    </div>
        
    </div>

    <div className="flex justify-between">
        <p  className="pb-3">Child</p>
    <div className="flex">
            <button onClick={handleIncreaseChild} className="w-6 h-6 rounded-full border-2 border-black flex justify-center items-center text-black text-xl  pb-1 mr-2">+</button>
            <div className="w-4" >{counterChild}</div>
            <button onClick={handleDecreaseChild} className="w-6 h-6 rounded-full border-2 border-black flex justify-center items-center text-black text-xl pb-1  ">-</button>
    </div>
        
    </div>
    
  </div>


);
const [wetherForcast,setWetherForcast] = useState('')
const getWetherForcast = () =>{
    axios.get('https://localhost:7229/WeatherForecast')
    .then(res =>{
        console.log(res) 
        console.log("abc")
    }).catch(err =>{
        console.log("xyz")
    })
}
    return (
        <div className="bg-indigo-900 flex flex-col ">
            {/* <div className="flex pt-3 justify-center">

                <div className="w-6 h-6 rounded-full border-2 border-white flex justify-center items-center text-white">
                    <p>1</p>
                </div>
                <div className="text-white pl-2">
                    Select stay in Dalat
                </div>
                <div className="text-white pl-2 pr-2">-------------------------</div>
                <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex justify-center items-center text-gray-400">
                    <p>2</p>
                </div>
                <div className="text-gray-400 pl-2">
                    Select stay in Dubai
                </div>

            </div> */}
            <form className="px-4 flex py-3 justify-center">
                <div className="relative mr-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute top-0 bottom-0 w-6 h-6 my-auto text-black-400 left-3"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                    <input
                        type="text"
                        placeholder="Search"
                        className="w-full py-3 pl-12 pr-4 text-black-500 border rounded-md outline-none bg-white-50 focus:bg-white focus:border-indigo-600"
                    />
                </div>
                <Space  direction="vertical" size={12} >
                     <RangePicker style={{height:49}}/>
     
    
                </Space>
                
                <Popover  placement="bottomLeft"  content={content} trigger="click" className="flex items-center bg-white py-6 px-3 rounded-md ml-2">
                        <Button><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                       </svg>
                       <div className="ml-3 text-sm flex">
                        <div className="w-5">{counterAudult}</div>
                        <div className="mr-1 ml-1">Audult</div>
                        <div className="w-5">{counterChild}</div>
                        <div className="ml-1">Child</div>
                       </div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 ml-28">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                    </svg>
                    </Button>
                </Popover>
                    
                
                <button className="bg-blue-600 hover:bg-blue-500 text-white font-normal hover:text-white py-2 px-10 border border-blue-300 hover:border-transparent rounded ml-2 text-md" onClick={getWetherForcast}>Search</button>
            </form>
            

        </div>

    )
}