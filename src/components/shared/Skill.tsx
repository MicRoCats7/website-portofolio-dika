import portfolioData from '@/lib/data'

function Skill() {
    return (
        <div className='flex flex-col gap-10'>
            <h3 className='font-medium text-[36px]'>Skill & Technology.</h3>
            <div className='grid grid-cols-3 w-[603px] gap-5'>
                {portfolioData.skill.map((skill, index) => (
                    <div
                        key={index}
                        className='flex items-center bg-white rounded-lg py-3 px-7 gap-6
                    hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1),_0px_0px_30px_rgba(45,78,255,0.15)] 
                    transition-all duration-400 ease-in-out'
                    >
                        <img src={skill.icon} alt="" />
                        <h4 className='text-xl font-medium text-secondary-navy'>{skill.name}</h4>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Skill