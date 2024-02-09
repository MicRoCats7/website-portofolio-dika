import { CiMail } from "react-icons/ci"
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import imgFotoAbout from "../assets/images/PORTOFOLIO (1) 1.png"
import CardAbout from "../components/CardAbout"
import Skill from "../components/Skill"
import Certificate from "../components/Certificate"
import Awards from "../components/Awards"

function About() {
    return (
        <div className="wrapper">
            <section>
                <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                        <h1 className="text-5xl text-secondary font-medium leading-normal">
                            Hi, I'm Akbar. <br />
                            I'm a Software Engineer Android <br />
                            based in Indonesia.
                        </h1>
                        <div className="flex items-center gap-9">
                            <FaLinkedin size={30} />
                            <FaGithub size={30} />
                            <FaInstagram size={30} />
                            <CiMail size={30} />
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

export default About