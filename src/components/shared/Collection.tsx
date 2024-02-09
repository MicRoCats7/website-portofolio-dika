import { useState } from 'react'; // Import useState hook
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from 'react-router-dom';
import portfolioData from '@/lib/data';

function Collection() {
    const [activeProjectId, setActiveProjectId] = useState("");
    const handleProjectClick = (projectId: string) => {
        setActiveProjectId(projectId);
    };

    return (
        <>
            <Sheet>
                <div className='grid grid-cols-3 w-full gap-10'>
                    {portfolioData.projects.map((project) => (
                        <SheetTrigger>
                            <div
                                className='w-[383px] shadow-md rounded-xl 
                                hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1),_0px_0px_30px_rgba(45,78,255,0.15)] 
                                transition-all duration-400 ease-in-out'
                                key={project.id}
                                onClick={() => handleProjectClick(project.id)}
                            >
                                <img src={project.image} alt={project.title} className='rounded-xl' />
                                <div className='px-6 text-left'>
                                    <h1 className='text-secondary-navy font-medium text-[32px] py-2'>{project.title}</h1>
                                    <p className='text-base text-secondary-navy pb-11'>{project.description}</p>
                                </div>
                            </div>
                        </SheetTrigger>
                    ))}
                </div>
                <SheetContent className='overflow-x-auto'>
                    {portfolioData.projects.map((project) => (
                        activeProjectId === project.id && (
                            <SheetHeader key={project.id}>
                                <SheetTitle>
                                    <img src={project.image} alt="" />
                                </SheetTitle>
                                <SheetTitle className='text-secondary-navy font-medium text-[32px]'>{project.title}</SheetTitle>
                                <SheetDescription className='text-sm text-secondary-navy'>
                                    {project.description}
                                </SheetDescription>
                                <div className='py-9'>
                                    <SheetTitle className='text-secondary-navy font-medium text-[24px]'>About.</SheetTitle>
                                    <SheetDescription className='text-base text-secondary-navy'>
                                        {project.about}
                                    </SheetDescription>
                                </div>
                                <div className='pb-7'>
                                    <SheetTitle className='text-secondary-navy font-medium text-[24px]'>Technology.</SheetTitle>
                                    <div className='grid grid-cols-3 w-full gap-1'>
                                        {project?.technology?.map((tech, index) => (
                                            <div
                                                className='flex items-center bg-white rounded-lg py-3 px-2 gap-1
                                             hover:shadow-[0px_10px_30px_rgba(0,0,0,0.1),_0px_0px_30px_rgba(45,78,255,0.15)] 
                                             transition-all duration-400 ease-in-out'
                                                key={index}
                                            >
                                                <img src={tech.icon} alt="" className='w-[17px]' />
                                                <h4 className='text-base font-medium text-secondary-navy truncate'>{tech.name}</h4>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div>
                                    {project.link && (
                                        <>
                                            <SheetTitle className='text-secondary-navy font-medium text-[24px] pb-3'>Open Project.</SheetTitle>
                                            <Link to={project.link} target='_blank' >
                                                <SheetDescription className='text-base text-secondary-navy font-bold truncate'>
                                                    {project.link}
                                                </SheetDescription>
                                            </Link>
                                        </>
                                    )}
                                </div>
                            </SheetHeader>
                        )
                    ))}
                </SheetContent>
            </Sheet >
        </>
    )
}

export default Collection;
