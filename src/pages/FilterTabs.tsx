"use client";

import { Tabs } from "@/components/ui/tabs.tsx";
import { useState } from "react";

export function FilterTabs({ className }: any) {
    const [selectedTab, setSelectedTab] = useState<string>("All");
    const tabs = [
        {
            title: "All",
            value: "All",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Bat",
            value: "Bat",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Product Tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Bowling",
            value: "Bowling",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Services tab</p>
                    <DummyContent />
                </div>
            ),
        },
        {
            title: "Fielding",
            value: "Fielding",
            content: (
                <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
                    <p>Playground tab</p>
                    <DummyContent />
                </div>
            ),
        },
    ];

    return (
        <div className={`[perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full justify-start ${className}`}>
            <Tabs
                tabs={tabs}
                value={selectedTab}
                onValueChange={setSelectedTab}
            />
        </div>
    );
}

const DummyContent = () => {
    return (
       'Hello world'
    );
};
