"use client";
import {PlaceholdersAndVanishInput} from "@/components/ui/placeholders-and-vanish-input.tsx";
import {useState} from "react";

interface SearchInputProps {
    onSearch: (text: string) => void;
}

export function SeachInput({ onSearch }: SearchInputProps) {
    const placeholders = [
       "Search Player for an auction"
    ];
    const [value, setValue] = useState<string>("");


    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
    };
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSearch(value);
        console.log("submitted");
    };
    return (
        <div className={`my-2 flex flex-col justify-center px-4 sm:w-[60vw] w-[90vw] relative`}>
            <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
                isVanish={false}
            />
        </div>
    );
}
