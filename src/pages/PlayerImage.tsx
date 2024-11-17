"use client";
import {BackgroundGradient} from "@/components/ui/background-gradient.tsx";

export function PlayerImage({ data }: any) {
    return (
        <BackgroundGradient className="rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900 ">
            <img
                src={`/no-image.png`}
                alt="jordans"
                height="400"
                width="400"
                className="object-contain"
            />
            <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
                {data && data.name && data.name != "" ? `${data.name} (${data.emp_code})` : ""}
            </p>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {data && data.specialiaty && data.specialiaty != "" ? `${data.specialiaty}` : ""}
            </p>
        </BackgroundGradient>
    );
}
