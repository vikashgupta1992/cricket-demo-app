import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";

export function PlayerStatics({ data }: any) {
    return (
        <BentoGrid className={`max-w-4xl mx-0 sm:mx-2 `}>
            {items.map((item, i) => (
                <BentoGridItem
                    key={i}
                    title={item.title}
                    header={item.header(data)}
                />
            ))}
        </BentoGrid>
    );
}
const Skeleton = ({ imgName, data }: any) => (
    <div className={`flex flex-1 w-full h-full min-h-[4rem] rounded-xl bg-gradient-to-br from-neutral-200 
    dark:from-neutral-900 dark:to-neutral-800 to-neutral-100`}>
        {imgName ? <img src={imgName} alt="skeleton" className="w-1/2 h-full rounded-l-xl"/> : <div className={'w-1/2 h-full '}></div>}
        <div className="w-1/2 h-full rounded-l-xl flex text-[36px] font-bold justify-center flex-col">
            <div className=" right-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4
                from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
                <span className="">{data}</span>
            </div>
        </div>

    </div>
);

const items = [
    {
        title: "Player Speciality",
        keys: "speciality",
        header: (record: any) => {
            const item = record && record['speciality'] && record['speciality'] != "" ? record['speciality'] : "";
            return <Skeleton data={item}/>
        }
    },
    {
        title: "Play Cricket",
        keys: "play_cricket",
        header: (record: any) => {
            const item = record && record['play_cricket'] && record['play_cricket'] != "" ? record['play_cricket'] : "";
            return <Skeleton data={item} imgName={`./cricket-icons/play-match.png`}/>
        }
    },
    {
        title: "Total Runs",
        keys: "total_runs",
        header: (record: any) => {
            const item = record && record['total_runs'] && record['total_runs'] != "" ? record['total_runs'] : 0;
            return <Skeleton data={item} imgName={`./cricket-icons/cricket-player.png`}/>
        }
    },
    {
        title: "Batting Average",
        keys: "batting_average",
        header: (record: any) => {
            const item = record && record['batting_average'] && record['batting_average'] != "" ? record['batting_average'] : 0;
            return <Skeleton data={item} imgName={`./cricket-icons/50.png`}/>
        }
    },
    {
        title: "Wicket Taken",
        keys: "wicket_taken",
        header: (record: any) => {
            const item = record && record['wicket_taken'] && record['wicket_taken'] != "" ? record['wicket_taken'] : 0;
            return <Skeleton data={item} imgName={`./cricket-icons/wicket.png`}/>
        }
    },
    {
        title: "Bowling Average",
        keys: "bowling_average",
        header: (record: any) => {
            const item = record && record['bowling_average'] && record['bowling_average'] != "" ? record['bowling_average'] : 0;
            return <Skeleton data={item} imgName={`./cricket-icons/calendar.png`}/>
        }
    },
    {
        title: "Total Catches",
        keys: "total_catches",
        header: (record: any) => {
            const item = record && record['total_catches'] && record['total_catches'] != "" ? record['total_catches'] : 0;
            return <Skeleton data={item} imgName={`./cricket-icons/catching.png`}/>
        }
    },
    {
        title: "Total Stumps",
        keys: "total_stump",
        header: (record: any) => {
            const item = record && record['total_stump'] && record['total_stump'] != "" ? record['total_stump'] : 0;
            return <Skeleton data={item} imgName={`./cricket-icons/keeping.png`}/>
        }
    },
    {
        title: "Total Run Out",
        keys: "total_run_out",
        header: (record: any) => {
            const item = record && record['total_run_out'] && record['total_run_out'] != "" ? record['total_run_out'] : 0;
            return <Skeleton data={item} imgName={`./cricket-icons/running.png`}/>
        }
    },
];
