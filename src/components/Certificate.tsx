import iconTokopedia from '../assets/icons/iconTokopedia.svg'
import iconDicoding from '../assets/icons/iconsDicoding.svg'

function Certificate() {
    return (
        <div className='flex flex-col gap-10'>
            <h3 className='font-medium text-[36px]'>Certificates.</h3>
            <div className='flex flex-col gap-5 w-[55%]'>
                <div className='flex items-center bg-white rounded-lg py-3 px-7 gap-6 cursor-pointer
                hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1),_0px_0px_30px_rgba(45,78,255,0.15)] transition-all duration-400 ease-in-out
                '>
                    <img src={iconTokopedia} alt="" />
                    <h4 className='text-xl font-medium text-secondary'>Android Apps performance Best Practice and Optimization</h4>
                </div>
                <div className='flex items-center bg-white rounded-lg py-3 px-7 gap-6 cursor-pointer
                hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1),_0px_0px_30px_rgba(45,78,255,0.15)] transition-all duration-400 ease-in-out
                '>
                    <img src={iconDicoding} alt="" />
                    <h4 className='text-xl font-medium text-secondary'>Menjadi Android Developer Expert</h4>
                </div>
            </div>
        </div>
    )
}

export default Certificate