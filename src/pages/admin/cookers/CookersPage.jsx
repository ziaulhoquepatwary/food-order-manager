import { useState } from "react";
import { ALL_COOKERS } from "../../../data/adminDummyData";
import CookerFilterBar from "./CookerFilterBar";
import CookerCard from "./CookerCard";

function CookersPage() {
    const [cookers, setCookers] = useState(ALL_COOKERS);
    const [activeFilter, setActiveFilter] = useState("all");

    const filtered = activeFilter === "all"
        ? cookers
        : cookers.filter(c => c.status === activeFilter);

    const handleApprove = (id) => {
        setCookers(prev => prev.map(c =>
            c.id === id ? { ...c, status: "approved" } : c
        ));
    };

    const handleReject = (id) => {
        setCookers(prev => prev.map(c =>
            c.id === id ? { ...c, status: "rejected" } : c
        ));
    };

    const pendingCount = cookers.filter(c => c.status === "pending").length;

    return (
        <div className="flex flex-col gap-6">

            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h1 className="text-xl font-semibold text-slate-100">Cooker Management</h1>
                    <p className="text-sm text-slate-200 mt-1">
                        {pendingCount} pending application{pendingCount !== 1 ? "s" : ""}
                    </p>
                </div>
            </div>

            {/* Filter */}
            <CookerFilterBar
                active={activeFilter}
                onChange={setActiveFilter}
            />

            {/* Grid */}
            {filtered.length === 0 ? (
                <div className="text-center py-16 text-slate-200 text-base">
                    No cookers found.
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filtered.map(cooker => (
                        <CookerCard
                            key={cooker.id}
                            cooker={cooker}
                            onApprove={handleApprove}
                            onReject={handleReject}
                        />
                    ))}
                </div>
            )}

        </div>
    );
}

export default CookersPage;