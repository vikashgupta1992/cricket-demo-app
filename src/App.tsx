import './App.css'
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { PlayerStatics } from "@/pages/Players.tsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {SeachInput} from "@/components/SearchPlayers.tsx";
import {PlayerImage} from "@/pages/PlayerImage.tsx";
import {FilterTabs} from "@/pages/FilterTabs.tsx";

function App() {
    const [searched, setSearched] = useState(false);

    const handleSearch = (value: string) => {
        console.log(value);
       setSearched(true);
    };

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className={`app-container flex flex-col items-center justify-center h-screen ${searched ? 'top' : ''}`}>
                <motion.div
                    key="search"
                    initial={{y: 0}}
                    animate={{y: searched ? 20 : 0}}
                    transition={{duration: 0.5}}
                    className={`flex items-center w-full justify-center`}
                >
                    <SeachInput onSearch={handleSearch}/>
                </motion.div>
                <AnimatePresence>
                    {searched && (
                        <motion.div
                            key="statics"
                            initial={{y: 100, opacity: 0}}
                            animate={{y: 20, opacity: 1}}
                            exit={{y: 100, opacity: 0}}
                            transition={{duration: 0.5}}
                            className={`flex sm:flex-row flex-col`}
                        >
                            <div className={`mb-3 sm:mb-0 sm:mt-[60px] sm:mr-[60px]`}>
                                <PlayerImage/>
                            </div>
                            <div>
                                {searched && <FilterTabs className={`items-end p-2`}/>}
                                <PlayerStatics/>
                            </div>
                        </motion.div>
                        )}
                </AnimatePresence>
            </div>
        </ThemeProvider>
    );
}

export default App;