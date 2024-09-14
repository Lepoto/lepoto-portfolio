import {FiDownload} from "react-icons/fi";

import Social from "@/components/Social"
import { Button } from "@/components/ui/button"
import Photo from "@/components/Photo";

const Home = () => {
  return (
    <section className="h-full py-7">
        <div className="container mx-auto h-full">
            <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
                <div className="text-center xl:text-left order-2 xl:order-none">
                    <span className="text-xl">Software Engineer</span>
                    <h1 className="h1 mb-6">Lepoto Alfred <span className="text-accent">Masekwameng</span></h1>
                    <p className="max-w-[500px mb-8 text-white/80">I excel at crafting elegant digital experiences and i am proficient in various programming languages and technologies</p>
                      {/* Socials*/}
                      <div className="flex flex-col xl:flex-row items-center gap-7">
                          <Button variant="outline" size="lg" className="uppercase flex items-center gap-2 bg-transparent rounded-full text-accent border-accent"> 
                            Download CV
                            <FiDownload className="text-xl"/>
                          </Button>

                          <div className="mb-8 xl:mb-0">
                            <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center bg-transparent text-accent text-base hover:bg-white hover:text-black hover:transition-all" />
                          </div>

                      </div>
                </div>

                <div className="order-1 xl:order-none mb-8 xl:mb-0">
                    <Photo />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Home