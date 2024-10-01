'use client'

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Playground from "./components/playground";

export default function Home() {

    const moveDown = () => {
        document.getElementById("section-2")?.scrollIntoView({
            behavior: "smooth"
        });
    }

    return (
        <div className="dark relative">
            <AuroraBackground>
                <motion.div
                initial={{ opacity: 0.0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                    delay: 0.3,
                    duration: 0.8,
                    ease: "easeInOut",
                }}
                >

                    <nav className="py-3 px-8 flex items-center justify-between border-b border-b-gray-300 dark:border-0">
                        <h1 className="text-3xl dark:text-white">PromoGen</h1>
                        <div className="flex items-center gap-8 pr-10">
                            <Link href={"/"} className="text-white">Home</Link>
                            <Link href={"/generate-image"} className="text-white">Image</Link>
                            <Link href={"/generate-video"} className="text-white">Video</Link>
                        </div>
                    </nav>
                    <div className="flex flex-col pt-[10vh] px-[4vw] gap-[5vh]">
                        <div className="py-5">
                            <h1 className="text-7xl font-semibold mb-2 dark:to-zinc-300 dark:bg-clip-text text-transparent] dark:text-white">
                                Unleash Creativity <br/>
                                with GenAI
                            </h1>
                            <p className="text-gray-700 dark:bg-gradient-to-tr dark:from-gray-50 dark:to-gray-300 dark:bg-clip-text dark:text-transparent tracking-wider">
                                Instant, dynamic banners and videos for every promotion.
                            </p>
                        </div>
                        <div className="h-[35vh] w-[85vw] flex pt-5 gap-8">
                            {/* <Link href={"/generate-image"}>
                                <Button variant="default">
                                    <p className="text-lg p-4">
                                        Generate Image
                                    </p>
                                </Button>
                            </Link> */}
                            <Button variant="default" onClick={moveDown}>
                                <p className="text-lg p-4">
                                    Generate
                                </p>
                            </Button>
                            {/* <Link href={"/generate-video"}>
                                <Button variant="default">
                                    <p className="text-lg p-4">
                                        Generate Video
                                    </p>
                                </Button>
                            </Link> */}
                        </div>
                    </div>

                </motion.div>
            </AuroraBackground>
            <div className="absolute h-screen w-screen z-10 top-[98vh] bg-gradient-to-b from-[#18181B] to-slate-900" id="section-2">
                <div className="flex items-center justify-center pt-[8vh]">
                    <Tabs defaultValue="image" className="w-[400px] flex flex-col">
                        <TabsList>
                            <TabsTrigger value="image" 
                            className="w-[50%]">
                                IMAGE
                            </TabsTrigger>
                            <TabsTrigger value="video" 
                            className="w-[50%]">
                                VIDEO
                            </TabsTrigger>
                        </TabsList>
                        <TabsContent value="image" className="grid justify-center">
                            <Playground  value={"image"} />
                        </TabsContent>
                        <TabsContent value="video" className="grid justify-center">
                            <Playground value={"video"} />
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    )
}
