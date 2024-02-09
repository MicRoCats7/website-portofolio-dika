import MoneygerImg from '../assets/images/moneyger 2.png'

function Collection() {
    return (
        <div className='grid grid-cols-3 w-full'>
            <div className='w-[383px] shadow-md rounded-xl'>
                <img src={MoneygerImg} alt="Moneyger Image" className='rounded-xl' />
                <div className='px-6'>
                    <h1 className='text-secondary font-medium text-[32px] py-2'>Moneyger</h1>
                    <p className='text-base text-secondary pb-11'>Moneyger: Your Easy Finance Management Solution with Productivity Boosting Features.</p>
                </div>
            </div>
            <div className='w-[383px] shadow-md rounded-xl'>
                <img src={MoneygerImg} alt="Moneyger Image" className='rounded-xl' />
                <div className='px-6'>
                    <h1 className='text-secondary font-medium text-[32px] py-2'>Moneyger</h1>
                    <p className='text-base text-secondary pb-11'>Moneyger: Your Easy Finance Management Solution with Productivity Boosting Features.</p>
                </div>
            </div>
            <div className='w-[383px] shadow-md rounded-xl'>
                <img src={MoneygerImg} alt="Moneyger Image" className='rounded-xl' />
                <div className='px-6'>
                    <h1 className='text-secondary font-medium text-[32px] py-2'>Moneyger</h1>
                    <p className='text-base text-secondary pb-11'>Moneyger: Your Easy Finance Management Solution with Productivity Boosting Features.</p>
                </div>
            </div>
        </div>
    )
}

export default Collection