import { AiOutlineCopyright } from "react-icons/ai"

function Footer() {
    return (
        <>
            <hr />
            <div className="flex items-center justify-center w-full py-10">
                <div className="flex items-center gap-1">
                    <AiOutlineCopyright size={21} color="#000" />
                    <h1 className="text-black text-xl font-medium">2024 Akbar Rizqullah Putra Susanto</h1>
                </div>
            </div>
        </>
    )
}

export default Footer