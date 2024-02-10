import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import portfolioData from '../../../lib/data';
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

function ArticleMobile() {
    return (
        <>
            <Carousel className="mb-20">
                <div className="relative">
                    <CarouselContent className="pb-20">
                        {portfolioData.article.map((article, index) => (
                            <CarouselItem key={index}>
                                <div className="w-[383px] shadow-lg rounded-xl hover:bg-[#00B245]/10 translate-x-3 transition-all 
                duration-500 ease-in-out
                ">
                                    <div className="px-6">
                                        <h1 className="text-secondary-navy font-medium text-[28px] py-2">
                                            {article.title}
                                        </h1>
                                        <Link to={article.link} className="flex items-center pb-7 pt-16 gap-3">
                                            <p className="text-base text-secondary-navy">
                                                Baca Artikel Selengkapnya
                                            </p>
                                            <GoArrowUpRight size={23} className="text-base text-secondary-navy" />
                                        </Link>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    {/* <Progress value={88} className="h-[5px] bg-[#D9D9D9] rounded-full" /> */}
                    <div className="absolute bottom-10 right-20">
                        <CarouselPrevious />
                        <CarouselNext />
                    </div>
                </div>
            </Carousel>
        </>
    );
}

export default ArticleMobile;