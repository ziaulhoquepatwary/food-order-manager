import CookerStatBar from "./shared/CookerStatBar";
import NewOrdersColumn from "./dashboard/NewOrdersColumn";
import InProgressColumn from "./dashboard/InProgressColumn";
import CompletedColumn from "./dashboard/CompletedColumn";

function CookerDashboard() {
    return (
        <div className="flex flex-col h-full">

            <CookerStatBar />

            <div className="flex-1 grid grid-cols-3 gap-4 p-4 overflow-hidden">
                <NewOrdersColumn />
                <InProgressColumn />
                <CompletedColumn />
            </div>

        </div>
    );
}

export default CookerDashboard;