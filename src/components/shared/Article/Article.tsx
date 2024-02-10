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

function ArticleWeb() {
  return (
    <>
      {portfolioData.article && portfolioData.article.length > 0 ? (
        <Carousel className="mb-20">
          <div className="relative">
            <CarouselContent className="pb-20">
              {portfolioData.article.map((article, index) => (
                <CarouselItem className="basis-1/3" key={index}>
                  <div className="w-[383px] shadow-lg rounded-xl hover:bg-[#00B245]/10 translate-x-3 transition-all 
                duration-500 ease-in-out
                ">
                    <div className="px-6">
                      <h1 className="text-secondary-navy font-medium text-[28px] py-2">
                        {article.title}
                      </h1>
                      <Link to={article.link} className="flex items-center pb-7 pt-16 gap-3" target="_blank">
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
      ) : (
        <div className="flex justify-start items-start h-24">
          <h1 className="text-secondary-navy text-2xl font-bold">
            No Article
          </h1>
        </div>
      )}
    </>
  );
}

export default ArticleWeb;