import { useEffect } from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import imgFotoAbout from "../../assets/images/PORTOFOLIO (1) 1.png"
import CardAbout from "@/components/shared/CardAbout";
import Skill from "@/components/shared/Skill";
import Certificate from "@/components/shared/Certificate";
import Awards from "@/components/shared/Awards";

function AboutMobile() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <div className="overflow-x-hidden">
      <section className="mt-28 wrapper">
        <div className="flex items-center justify-center flex-col">
          <div className="flex flex-col">
            <h1 className="text-lg text-secondary-navy text-center font-medium leading-normal">
              Hi, I'm Akbar. <br />
              I'm a Software Engineer Android <br />
              based in Indonesia.
            </h1>
            <div>
              <img src={imgFotoAbout} alt="" />
            </div>
            <div className="flex items-center justify-center gap-9">
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
        </div>
      </section>

      <section className="mt-16">
        <CardAbout />
      </section>

      <section className="mt-[113px] wrapper">
        <Skill />
      </section>

      <section className=" my-[72px] wrapper">
        <Certificate />
      </section>

      <section className="wrapper">
        <Awards />
      </section>
    </div>
  )
}

export default AboutMobile