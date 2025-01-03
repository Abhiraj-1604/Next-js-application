"use client";

import { FaPython, FaDocker, FaAws, FaFlask, FaJenkins } from "react-icons/fa";
import {
  SiTerraform,
  SiKubernetes,
  SiAnsible,
  SiLinux,
  SiGithub,
  SiGooglecloud,
} from "react-icons/si";
import Image from "next/image";

const about = {
  title: "About me",
  description:
    "Tech professional specializing in cloud computing and digital transformation, certified Google Cloud Digital Leader with proven technical execution skills.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Abhiraj Rode",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+91) 9284215842",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Months",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Indian",
    },
    {
      fieldName: "Email",
      fieldValue: "abhirajrode2004@gmail.com",
    },
    {
      fieldName: "Work Status",
      fieldValue: "OpenToWork",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Hindi, Marathi",
    },
  ],
};

const experience = {
  icon: "/assets/assets/resume/badge.svg",
  title: "My experience",
  description: "",
  items: [
    {
      company: "DevSkillHub Training and Consultancy",
      position: "AWS Cloud Intern",
      Duration: "2 Months",
    },
  ],
};

const education = {
  icon: "/assets/assets/resume/cap.svg",
  title: "My education",
  description: "",
  items: [
    {
      institution: "JSPM's BSIOTR",
      degree: "Bachelor's degree [ENTC]",
      Duration: "2021 - 2025",
    },
    {
      institution: "Deogiri Institute",
      degree: "Higher secondary Education",
      Duration: "2019 - 2021",
    },
  ],
};

const skills = {
  title: "My skills",
  description: "",
  skillList: [
    {
      icon: <SiKubernetes />,
      name: "Kubernetes",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <SiTerraform />,
      name: "Terraform",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiGooglecloud />,
      name: "Google Cloud",
    },
    {
      icon: <FaJenkins />,
      name: "Jenkins",
    },
    {
      icon: <Image src="/assets/assets/skills/argocd-original-wordmark.svg" alt="Argo CD" width={65} height={65} />,
      name: "Argo CD",
    },
    {
      icon: <SiAnsible />,
      name: "Ansible",
    },
    {
      icon: <SiGithub />,
      name: "Github Actions",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <FaFlask />,
      name: "Flask",
    },
    {
      icon: <SiLinux />,
      name: "Linux",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { delay, easeIn, motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: easeIn },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          <div className="min-h-[70vh] w-full flex xl:pl-12">
            <TabsContent value="experience" className="w-full flex-grow">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h--[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-cyan-300">{item.Duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-cyan-300"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h--[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-cyan-300">{item.Duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-cyan-300"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold ">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-cyan-300 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[800px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[1000px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
