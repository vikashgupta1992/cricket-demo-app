const ViewTeams = ({ isView, handleViewTeam }: any) => {
    return (
        <div className="p-4 w-full">
            <div className="w-full flex sm:justify-end mx-auto gap-10">
                <button className="p-[3px] relative sm:w-auto w-full" onClick={() => handleViewTeam(!isView)}>
                    <div
                        className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg"/>
                    <div
                        className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                        {!isView ? 'View' : 'Hide'} Teams
                    </div>
                </button>
            </div>
        </div>
    );
};
export default ViewTeams;