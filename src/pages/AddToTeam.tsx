"use client";
import React from "react";
import { Check, ChevronsUpDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {Input} from "@/components/ui/input.tsx";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
} from "@/components/ui/command"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { teams } from "@/data/data.ts"

export function ComboboxDemo() {
    const [open, setOpen] = React.useState(false)
    const [value, setValue] = React.useState("")

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[200px] justify-between"
                >
                    {value
                        ? teams.find((team) => team.name === value)?.name
                        : "Select Team"}
                    <ChevronsUpDown className="opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandInput placeholder="Search Team..." />
                    <CommandList>
                        <CommandEmpty>No framework found.</CommandEmpty>
                        <CommandGroup>
                            {teams.map((team) => (
                                <CommandItem
                                    key={team.id}
                                    value={team.name}
                                    onSelect={(currentValue) => {
                                        setValue(currentValue === value ? "" : currentValue)
                                        setOpen(false)
                                    }}
                                >
                                    {team.name}
                                    <Check
                                        className={cn(
                                            "ml-auto",
                                            value === team.name ? "opacity-100" : "opacity-0"
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export function AddToTeam() {
    // const [assignTeam, setAssignTeam] = useState<boolean>(false)
    //
    // const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    //     e.preventDefault();
    //     setAssignTeam(true);
    //     console.log("clicked");
    // }

    return (
        <div className="p-4 w-full">
            <div className="w-full flex sm:justify-start mx-auto gap-10">
                <Dialog>
                    <DialogTrigger asChild>
                        <button className="p-[3px] relative sm:w-auto w-full">
                            <div
                                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"/>
                            <div
                                className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                Assign to team
                            </div>
                        </button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]
                        inside-dialog
                        bg-[radial-gradient(circle_farthest-side_at_0_100%,#00ccb1,transparent),radial-gradient(circle_farthest-side_at_100%_0,#7b61ff,transparent),radial-gradient(circle_farthest-side_at_100%_100%,#ffc414,transparent),radial-gradient(circle_farthest-side_at_0_0,#1ca0fb,#141316)]
                        rounded-xl p-0.5">
                        <div className={'p-4 rounded-xl bg-background'}>
                            <DialogHeader>
                                <DialogTitle>Assign to Team</DialogTitle>
                                <DialogDescription>
                                    Assign player to your team
                                </DialogDescription>
                            </DialogHeader>
                            <div className="flex flex-col gap-4 py-8">
                                <div className="flex flex-row items-center gap-4">
                                    <Label htmlFor="team" className="text-left">
                                        Team Name
                                    </Label>
                                    <ComboboxDemo/>
                                </div>
                                <div className="flex flex-row items-center gap-4">
                                    <Label htmlFor="bidAmount" className="text-left">
                                        Bid Amount
                                    </Label>
                                    <Input
                                        id="bidAmount"
                                        className="col-span-3"
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <button className="p-[3px] relative">
                                    <div
                                        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"/>
                                    <div
                                        className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                                        Add Player
                                    </div>
                                </button>
                            </DialogFooter>
                        </div>
                    </DialogContent>
                </Dialog>
            </div>
        </div>
    );
}


