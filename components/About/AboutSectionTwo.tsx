
'use client'

import Image from "next/image";
import CountUp from "react-countup";
import { useRef, useEffect } from 'react';

const AboutSectionTwo = () => {
  const countUpRef = useRef(null);

  useEffect(() => {
    if (countUpRef.current) {
      // Add any client-side logic that needs to use the countUpRef
      console.log('in useEffect');
    }
  }, []);

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/2">
            <div
              className="relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="Connecting Tech Talent"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="Connecting Tech Talent"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Empowering Tech Talent in Cameroon
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our mission is to connect tech talent in Cameroon with global and local job opportunities. We provide a platform that bridges the gap between skilled professionals and companies seeking top talent.
                </p>
                <div>
                <span className="text-[#00C1DE] text-4xl font-bold">
                      <CountUp start={350} end={1750} duration={4} />+
                    </span>
                    <span className="text-body-color">Job Connections</span>
                </div>
              </div>
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Comprehensive Training Programs
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We offer extensive training programs to help individuals develop and enhance their technical skills, ensuring they are job-ready and capable of tackling real-world challenges.
                </p>
                <div className="mt-6 flex items-center">
                  <div className="mr-6">
                    <span className="text-[#00C1DE] text-4xl font-bold">
                      <CountUp start={250} end={1500} duration={4} />+
                    </span>
                    <span className="text-body-color">Tech Talents Trained</span>
                  </div>
                  <div>
                    <span className="text-[#00C1DE] text-4xl font-bold">
                      <CountUp start={250} end={1000} duration={4} />+
                    </span>
                    <span className="text-body-color">Satisfied Customers</span>
                  </div>
                </div>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Global and Local Job Connections
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Through our platform, tech talent can connect with top companies both locally and internationally, opening doors to exciting career opportunities and fostering professional growth.
                </p>
                <div>
                <span className="text-[#00C1DE] text-4xl font-bold">
                      <CountUp start={20} end={340} duration={4} />+
                    </span>
                    <span className="text-body-color">Partners</span>
                </div>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Professional and Trustworthy
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our commitment to professionalism and reliability ensures that both talent and employers can trust our services. We strive to create meaningful connections and deliver exceptional support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;