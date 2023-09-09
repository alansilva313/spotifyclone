
import { BiHomeAlt, BiLibrary } from 'react-icons/bi'
import { BsSearch, BsVolumeDown } from 'react-icons/bs'
import { IoIosArrowForward, IoMdShuffle, IoIosArrowBack } from 'react-icons/io'
import { AiFillPlayCircle,AiFillStepForward,  AiFillStepBackward } from 'react-icons/ai'
import { LuRepeat } from 'react-icons/lu'
import { GiMicrophone } from 'react-icons/gi'
import { TbPlaylist} from 'react-icons/tb'
import { MdComputer } from 'react-icons/md'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <aside className="w-72 bg-zinc-950 p-6">
          <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full'></div>
            <div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
            <div className='w-3 h-3 bg-green-500 rounded-full'></div>
          </div>
           <nav className='space-y-5 mt-10'>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
               <BiHomeAlt />
                Home
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
               <BsSearch />
                Search
            </a>
            <a href="" className='flex items-center gap-3 text-sm font-semibold text-zinc-200'>
               <BiLibrary /> 
                Your Library 
            </a>
           </nav>

           <nav className='mt-10 pt-6 border-t border-zinc-800 flex flex-col gap-3'>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Hot Hits Brasil</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Aniver funk</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">My playlist a13</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 4</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 5</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 6</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 7</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 8</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 9</a>
            <a href="" className="text-sm text-zinc-400 hover:text-zinc-100">Playlist 10</a>

           </nav>

        </aside>
        <main className="flex-1 p-6">
            <div className='flex items-center gap-4'>
              <button className='rounded-full bg-black/40 p-1'>
              <IoIosArrowBack />
              </button>

              <button className='rounded-full bg-black/40 p-1'>
                <IoIosArrowForward />
              </button>

            </div>
            

            <h1 className='font-semibold text-3xl mt-10'>Good Afternon</h1>

            <div className='grid grid-cols-3 gap-4 mt-4'>
              <a href="" className='bg-white/10 group rounded-sm overflow-hidden flex items-center gap-3 hover:bg-white/20'>
               <img src="./public/album.jpg" width={80} height={80} alt="capa do album" />
                 
                 <strong>Wasting Ligth</strong>
                 <button className='p-2 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-5'>
                  <AiFillPlayCircle />
                 </button>
              </a>
              <a href="" className='bg-white/10 group rounded-sm overflow-hidden flex items-center gap-3 hover:bg-white/20'>
              <img src="./public/album.jpg" width={80} height={80} alt="capa do album" />
              <strong>Wasting Ligth</strong>
              <button className='p-2 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-5'>
                  <AiFillPlayCircle />
                 </button>
              </a>
              <a href="" className='bg-white/10 group rounded-sm overflow-hidden flex items-center gap-3 hover:bg-white/20'>
              <img src="./public/album.jpg" width={80} height={80} alt="capa do album" />
              <strong>Wasting Ligth</strong>
              <button className='p-2 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-5'>
                  <AiFillPlayCircle />
                 </button>
              </a>
              <a href="" className='bg-white/10 group rounded-sm overflow-hidden flex items-center gap-3 hover:bg-white/20'>
              <img src="./public/album.jpg" width={80} height={80} alt="capa do album" />
              <strong>Wasting Ligth</strong>
              <button className='p-2 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-5'>
                  <AiFillPlayCircle />
                 </button>
              </a>
              <a href="" className='bg-white/10 group rounded-sm overflow-hidden flex items-center gap-3 hover:bg-white/20'>
              <img src="./public/album.jpg" width={80} height={80} alt="capa do album" />
              <strong>Wasting Ligth</strong>
              <button className='p-2 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-5'>
                  <AiFillPlayCircle />
                 </button>
              </a>
              <a href="" className='bg-white/10 group rounded-sm overflow-hidden flex items-center gap-3 hover:bg-white/20'>
              <img src="./public/album.jpg" width={80} height={80} alt="capa do album" />
              <strong>Wasting Ligth</strong>
              <button className='p-2 rounded-full invisible group-hover:visible bg-green-400 text-black ml-auto mr-5'>
                  <AiFillPlayCircle />
                 </button>
              </a>
          
            </div>

            <h2 className='font-semibold text-2xl mt-10'>Made for Alan Silva Passos</h2>
            <div className='grid grid-cols-5 gap-4 mt-4'>
              <a href="" className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
              <img src="./public/album.jpg" className='w-full' width={120} height={120} alt="capa do album" />
              <strong>Daily Mix 1</strong>
              <span className='text-xs text-zinc-500'>Wallows, COIN, girl in red and more</span>

              </a>

              <a href="" className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
              <img src="./public/album.jpg" className='w-full' width={120} height={120} alt="capa do album" />
              <strong>Daily Mix 2</strong>
              <span className='text-xs text-zinc-500'>Wallows, COIN, girl in red and more</span>
              </a>

              <a href="" className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
              <img src="./public/album.jpg" className='w-full' width={120} height={120} alt="capa do album" />
              <strong>Daily Mix 3</strong>
              <span className='text-xs text-zinc-500'>Wallows, COIN, girl in red and more</span>
              </a>

              <a href="" className='bg-white/5 p-3 rounded flex flex-col gap-2 hover:bg-white/10'>
              <img src="./public/album.jpg" className='w-full' width={120} height={120} alt="capa do album" />
              <strong>Daily Mix 4</strong>
              <span className='text-xs text-zinc-500'>Wallows, COIN, girl in red and more</span>
              </a>
            </div>
        </main>
      </div>

        <footer className="bg-zinc-800 border-t border-zinc-700 p-6 flex items-center justify-between">
            <div className='flex items-center gap-2'>
            <img src="./public/album.jpg"  width={56} height={56} alt="capa do album" />
            <div className='flex flex-col gap-1'>
              <strong className='font-normal'>Rope</strong>
              <span className='text-xs text-zinc-400'>Foo Fighters</span>
            </div>
            </div>

            <div className='flex flex-col items-center gap-2'>
              <div className='flex items-center gap-3'>
               <IoMdShuffle className="text-zinc-200 text-3xl"/>
               <AiFillStepBackward className="text-zinc-200 text-3xl"/>
               <AiFillPlayCircle className="text-black bg-white rounded text-3xl"/>
               <AiFillStepForward className="text-zinc-200 text-3xl"/>
               <LuRepeat className="text-zinc-200 text-3xl"/>
              </div>
              <div className='flex items-center gap-2'>
                <span className='text-xs text-zinc-400'>0:31</span>
                <div className='h-1 rounded-full w-96 bg-zinc-600'>
                  <div className='bg-zinc-200 w-40 h-1 rounded-full'></div>
                </div>
                <span className='text-xs text-zinc-400'>2:14</span>
              </div>

            </div>
            <div className='flex items-center gap-4'>
             <GiMicrophone size={20} className="text-green" />
             <TbPlaylist sixe={20} />
             <MdComputer size={20} />
             <div className='flex items-center gap-2'>
              <BsVolumeDown size={20}/>
              <div className='h-1 w-28 bg-gray-500'>
                <div className='h-1 w-10 bg-white'></div>
              </div>
             </div>

            </div>
        </footer>

    </div>
  )
}
