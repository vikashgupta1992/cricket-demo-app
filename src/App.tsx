import './App.css'
import { ThemeProvider } from "@/components/theme-provider.tsx";
import { PlayerStatics } from "@/pages/Players.tsx";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {SeachInput} from "@/components/SearchPlayers.tsx";
import {PlayerImage} from "@/pages/PlayerImage.tsx";
import { AddToTeam } from "@/pages/AddToTeam.tsx";
import ViewTeams from "@/pages/ViewTeams.tsx";
import {ExpandableCardDemo} from "@/pages/PlayersList.tsx";
import {players} from "@/data/data.ts";


function App() {
    const [searched, setSearched] = useState(false);
    const [viewTeam, setViewTeam] = useState(false);
    const [playerData, setPlayerData] = useState({});

    const handleSearch = (value: string) => {
        const users = players.find((player: any) => player.name.toLowerCase().includes(value.toLowerCase()));
        setPlayerData(users);
        setSearched(true);
    };

    console.log(playerData);

    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className={'container'}>
                <div className="flex sm:flex-row flex-col">
                    {(searched && !viewTeam) && <AddToTeam/>}
                    <ViewTeams isView={viewTeam} handleViewTeam={setViewTeam} />
                </div>
                {!viewTeam && (
                    <div
                        className={`app-container flex flex-col items-center ${!searched ? 'justify-center ' : ''}`}>
                        <AnimatePresence>
                        <motion.div
                            key="search"
                            initial={{y: 0}}
                            animate={{y: searched ? 20 : 0}}
                            transition={{duration: 0.5}}
                            className={`flex justify-center w-full items-center `}
                        >
                            <SeachInput onSearch={handleSearch}/>
                        </motion.div>
                            {searched && (
                                <motion.div
                                    key="statics"
                                    initial={{y: 100, opacity: 0}}
                                    animate={{y: 20, opacity: 1}}
                                    exit={{y: 100, opacity: 0}}
                                    transition={{duration: 0.5}}
                                    className={`flex flex-col mt-0 sm:mt-3`}
                                >

                                    <div className={`flex sm:flex-row flex-col`}>
                                        <div className={`mb-3 sm:mb-0 sm:mr-[60px]`}>
                                            <PlayerImage data={playerData}/>
                                        </div>
                                        <div className={`mb-3 sm:mb-0 `}>
                                            <PlayerStatics data={playerData}/>
                                        </div>
                                    </div>

                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )}
                <div className={`items-center flex flex-col`}>
                    <AnimatePresence>
                        {viewTeam && (
                            <motion.div
                                key="viewTeams"
                                initial={{y: -100, opacity: 0}}
                                animate={{y: 0, opacity: 1}}
                                exit={{y: -100, opacity: 0}}
                                transition={{duration: 0.5}}
                                className={`flex flex-col`}
                            >
                                <ExpandableCardDemo/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </ThemeProvider>
    );
}

export default App;