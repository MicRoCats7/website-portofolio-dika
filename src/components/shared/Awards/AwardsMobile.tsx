import portfolioData from '@/lib/data'

function AwardsMobile() {
    return (
        <div className='flex flex-col gap-10'>
            <h3 className='font-medium text-xl'>Awards.</h3>
            <div className='flex flex-col gap-5 w-full'>
                {portfolioData.awards.map((award, index) => (
                    <div
                        key={index}
                        className='flex flex-col items-center bg-white rounded-lg py-3 px-7 gap-2 cursor-pointer
                hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1),_0px_0px_30px_rgba(45,78,255,0.15)] transition-all duration-400 ease-in-out
                '>
                        <img src={award.icon} alt="" />
                        <h4 className='text-xl text-center font-medium text-secondary-navy'>{award.title}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default AwardsMobile