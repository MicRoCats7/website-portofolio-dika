import iconAndroid from '../../../assets/icons/iconsAndroid.svg'

function CardAboutMobile() {
    return (
        <div className='flex flex-col items-center'>
            <div className='flex flex-col bg-[#E0E8F0] w-full py-14 px-9 gap-10 rounded-xl'>
                <div className='flex items-center justify-center'>
                    <img src={iconAndroid} alt="icon android" className='w-44' />
                </div>
                <p className='text-lg font-medium'>Akbar is a Software Engineer with experience in the Android Developer field. As an <span className='font-bold text-primary-green text-lg'>Android Software Engineer</span>, Akbar focuses on Android Application Development services as well as Android Research and Development.</p>
                <p className='text-lg font-medium'>Akbar believes that <span className='font-bold text-primary-green text-lg'>innovation emerges from a combination of solid knowledge and imagination</span>. As an Android Software Engineer, Akbar enjoys exploring the new, facing challenges, and always looking for ways to improve my qualities and skills.</p>
                <p className='text-lg font-medium'>Akbar believes that <span className='font-bold text-primary-green text-lg'>every line of code is a story</span>, and Akbar is committed to creating great stories with every project.</p>
            </div>
        </div>
    )
}

export default CardAboutMobile