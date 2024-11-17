import {Portal} from "@/Portal.tsx";

export function InputResult() {
    // absolute
    // top-[50px]
    // left-[35px]
    // right-[35px]
    // bottom-0
    // z-[1000]
    // bg-white

    return (
        <Portal>
            <div className={`hsl(var(--border)) search-input 
                    relative
                    top-full
                    left-0
                    right-0
                    z-[1000]
                    bg-white
                `}>
                <div className={'border-border bg-border max-h-[290px] flex flex-col overflow-auto'}>
                    <span className={'text-left p-4'} >Hello</span>
                    <span className={'text-left p-4'}>Hello</span>
                    <span className={'text-left p-4'}>Hello</span>
                    <span className={'text-left p-4'}>Hello</span>
                    <span className={'text-left p-4'}>Hello</span>
                    <span className={'text-left p-4'}>Hello</span>
                </div>
            </div>
        </Portal>
    )
}
