"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "GCP And AWS",
    title: "Web Application Hosting",
    description:
      "Hosted Static and Dynamic websites on multiple cloud platform services. Also did web server configurations",
    stack: [
      {
        name: "GCP: VM instances, Cloud Storage Buckets, Cloud Run, App Engine.",
      },
      { name: "AWS: EC2, S3, Elastic Beanstalk" },
      { name: "Web Servers: Apache HTTPD, NGINX" },
    ],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "02",
    category: "DevOps",
    title: "MERN Application Containerization",
    description:
      "Containerized a MERN stack application using Docker Compose, configured Docker networks for communication between services, and implemented best practices for scalable, maintainable containerized environments.",
    stack: [{ name: "MERN" }, { name: "Docker" }, { name: "Docker Compose" }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "03",
    category: "Shell Script",
    title: "AWS Event Triggering",
    description:
      "Shell script project which provides a list of all the Amazon resources.",
    stack: [
      { name: "Bash" },
      { name: "AWS: S3, Lambda Functions, IAM, EC2" },
      { name: "Linux" },
    ],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "04",
    category: "Software Development",
    title: "ToDo List App Using Flask",
    description: "Developed a ToDo list application using Python-Flask.",
    stack: [{ name: "Python" }, { name: "Flask" }, { name: "SQLAlchemy" }],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Software Development",
    title: "Python News App",
    description:
      "Developed a Python-based news app that fetches the latest news on user-specified topics.",
    stack: [
      { name: "NEWS API" },
      { name: "BeautifulSoup" },
      { name: "Requests" },
    ],
    image: "",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "IOT And Electronics",
    title: "Home Automation",
    description:
      "An IoT-based project using software (embedded C) as well as hardware, automatically monitors room lights using mobile WiFi.",
    stack: [
      { name: "IoT" },
      { name: "Embedded C" },
      { name: "ESP8266 Microcontroller" },
    ],
    image: "",
    live: "",
    github: "",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>

              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-cyan-300 transition-all duration-500 capitalize">
                {project.category} Project
              </h2>

              <p className="text-white/60">{project.description}</p>

              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-cyan-300">
                      {item.name}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>

              <div className="border border-white/20"></div>

              <div className="flex items-center gap-4">
                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsArrowUpRight className="text-white text-3xl group-hover:text-cyan-300" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Live Project</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>

                <TooltipProvider delayDuration={100}>
                  <Tooltip>
                    <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                      <BsGithub className="text-white text-3xl group-hover:text-cyan-300" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>GitHub Repository</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
            </div>
          </div>

          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((_, index) => {
                return (
                  <SwiperSlide key={index} className="w-full ">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons*/}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-cyan-300 hover:bg-cyan-300-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
