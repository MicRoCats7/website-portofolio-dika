import iconGarudaHacks from '../assets/icons/iconsGarudaHacks.svg'
import iconDinacom from '../assets/icons/iconsDinacom.svg'

function Awards() {
    return (
        <div className='flex flex-col gap-10'>
            <h3 className='font-medium text-[36px]'>Awards.</h3>
            <div className='flex flex-col gap-5 w-[65%]'>
                <div className='flex items-center bg-white rounded-lg py-3 px-7 gap-6 cursor-pointer
                hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1),_0px_0px_30px_rgba(45,78,255,0.15)] transition-all duration-400 ease-in-out
                '>
                    <img src={iconGarudaHacks} alt="" />
                    <h4 className='text-xl font-medium text-secondary'>Awarded Honorable Mention Sustainability Hack of Garuda Hacks 4.0</h4>
                </div>
                <div className='flex items-center bg-white rounded-lg py-3 px-7 gap-6 cursor-pointer
                hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1),_0px_0px_30px_rgba(45,78,255,0.15)] transition-all duration-400 ease-in-out
                '>
                    <img src={iconDinacom} alt="" />
                    <h4 className='text-xl font-medium text-secondary'>1rd Winner DINUS APPLICATION COMPETITION (DINACOM) 2023</h4>
                </div>
            </div>
        </div>
    )
}

export default Awards