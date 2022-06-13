import Image from "next/image";
import {
    SearchIcon,
    GlobeAltIcon,
    MenuIcon, 
    UserCircleIcon,
    UsersIcon,  
} from "@heroicons/react/solid"
import { useState } from "react";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/router";


function Header({placeholder}) {
const [searchInput, setSearchInput] = useState('');
const [startDate, setStartDate] = useState(new Date());
const [endDate, setEndDate] = useState(new Date());
const [numberOfGuests, setNumberOfGuests] = useState(1); 
const router = useRouter(); 

const resetInput = () => {
setSearchInput("");

}; 

const search = () => {
  router.push({
    pathname: "/search",
    query: {
      location: searchInput, 
      startDate: startDate.toISOString(),
      endDate: endDate.toISOString(), 
      numberOfGuests,
    }
  })

}

const handleSelect = (ranges) => {
  setStartDate(ranges.selection.startDate)
  setEndDate(ranges.selection.endDate)
};

const selectionRange ={
  startDate: startDate,
  endDate: endDate,
  key:'selection'
}





  return (
    <header className=' sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-1 md:px-5'>
      {/* left */}
      <div onClick={ () => router.push('/')} className='relative flex items-center h-28 cursor-pointer my-auto animate-pulse'>
        <Image
          src='https://cdn.freebiesupply.com/images/large/2x/airbnb-logo-black-transparent.png'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>

      {/* Middle - Search */}
      <div className='mt-8 mb-8 flex items-center md:border-2 rounded-full md:shadow-sm'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='flex-grow pl-2 bg-transparent outline-none text-sm text-gray-600 placeholder-gray-300'
          type='text '
          placeholder={placeholder||'Start your search'}
        />
        <SearchIcon className=' hidden md:inline-flex h-8 bg-black-400 bg-black text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>

      {/* Right */}
      <div className='flex items-center space-x-3 justify-end text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a host</p>
        <GlobeAltIcon className='h-6 cursor-pointer animate-spin' />

        <div className='flex items-center space-x-2 border-2 border-y-2 rounded-full pl-2 pr-2'>
          <MenuIcon className='h-6' />
          <UserCircleIcon className='h-6' />
        </div>
      </div>
      
      {searchInput && (
        <div className='flex flex-col col-span-2 mx-auto'>
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["Black"]}
            onChange={handleSelect}
          />

          <div className="flex items-center border-b border-t-gray-800 mb-6">
            <h2 className="text-2xl flex-grow font-semibold">Number of guests</h2>
            <UsersIcon className="h-7 pr-1"  />
            <input 
            value={numberOfGuests}
            onChange={(e) => setNumberOfGuests(e.target.value)}
            type="number" 
            min={1}
            className="w-12 pl-2 text-lg text-gray-600 outline-none
            "/>
          </div>
          <div className="flex">
            <button onClick={resetInput} className="pb-6 flex-grow text-gray-600 ">Cancel</button>
            <button onClick={search} className="pb-6 flex-grow text-green-900">Search</button>
            </div>
         
        </div>
      )}
    </header>
  );
}

export default Header;
