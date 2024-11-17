"use client";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import {BentoGrid, BentoGridItem} from "@/components/ui/bento-grid.tsx";
import {players, teams} from "@/data/data.ts";

export function ExpandableCardDemo() {
    const [active, setActive] = useState<(typeof teams)[number] | boolean | null>(
        null
    );
    const id = useId();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(false);
            }
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <>
            <AnimatePresence>
                {active && typeof active === "object" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>

            <ul className=" mx-auto w-full grid grid-cols-1 md:grid-cols-6 items-start gap-4">
                {teams.map((card, _index) => (
                    <motion.div
                        layoutId={`card-${card.name}-${id}`}
                        key={card.name}
                        onClick={() => setActive(card)}
                        className="p-4 flex flex-col hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                    >
                        <div className="flex gap-4 flex-col  w-full">
                            <motion.div layoutId={`image-${card.name}-${id}`}>
                                <img
                                    width={100}
                                    height={100}
                                    src={card.img}
                                    alt={card.name}
                                    className="h-60 w-full  rounded-lg object-cover object-top"
                                />
                            </motion.div>
                            <div className="flex justify-center items-center flex-col">
                                <motion.h3
                                    layoutId={`title-${card.name}-${id}`}
                                    className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left text-base"
                                >
                                    {card.name}
                                </motion.h3>
                                <motion.p
                                    layoutId={`description-${card.mentor}-${card.name}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 text-center md:text-left text-base"
                                >
                                    {card.mentor}
                                </motion.p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </ul>
            <AnimatePresence>
                {active && typeof active === "object" ? (
                    <div className="inset-0 grid  z-[100] mb-10">
                        <motion.div
                            layoutId={`card-${active.name}-${id}`}
                            ref={ref}
                            className="w-full max-w-[90vw] h-full md:h-fit flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl "
                        >
                            <div className="pt-4 relative px-4 h-full flex flex-wrap">
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 dark:text-neutral-400  [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                                >
                                    <BentoGrid className={`mx-0 sm:mx-2 flex flex-wrap justify-center`}>
                                        {players.map((player: any, i: number) => (
                                            <BentoGridItem
                                                className={'min-w-[250px]'}
                                                key={i}
                                                title={player.name}
                                                header={player.speciality}
                                                icon={player.icon}
                                            />
                                        ))}
                                    </BentoGrid>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                ) : null}
            </AnimatePresence>
        </>
    );
}
