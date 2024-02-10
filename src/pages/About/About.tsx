import { CiMail } from "react-icons/ci"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import imgFotoAbout from "../../assets/images/PORTOFOLIO (1) 1.png"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import CardAbout from "@/components/shared/CardAbout"
import Skill from "@/components/shared/Skill"
import Certificate from "@/components/shared/Certificate"
import Awards from "@/components/shared/Awards"

function AboutWeb() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    return (
        <div className="wrapper">
            <section>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-5xl text-secondary-navy font-medium leading-normal">
                            Hi, I'm Akbar. <br />
                            I'm a Software Engineer Android <br />
                            based in Indonesia.
                        </h1>
                        <div className="flex items-center gap-9">
                            <Link to="https://www.linkedin.com/in/akbarrizqullahputrasusanto/" target="_blank">
                                <FaLinkedin size={30} />
                            </Link>
                            <Link to="https://github.com/Akbarrzql" target="_blank">
                                <FaGithub size={30} />
                            </Link>
                            <Link to="https://www.instagram.com/akbarrzql/" target="_blank">
                                <FaInstagram size={30} />
                            </Link>
                            <Link to='mailto:@akbarrizqullah228@gmail.com'>
                                <CiMail size={30} />
                            </Link>
                        </div>
                    </div>
                    <div>
                        <img src={imgFotoAbout} alt="" />
                    </div>
                </div>
            </section>

            <section>
                <CardAbout />
            </section>

            <section className="mt-[113px] ">
                <Skill />
            </section>

            <section className=" my-[72px]">
                <Certificate />
            </section>

            <section>
                <Awards />
            </section>
        </div>
    )
}

export default AboutWeb