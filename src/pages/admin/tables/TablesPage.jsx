import { useState } from "react";
import { ALL_TABLES } from "../../../data/adminDummyData";
import TableStatSummary from "./TableStatSummary";
import TableFilterBar from "./TableFilterBar";
import TableCard from "./TableCard";

function TablesPage() {
    const [tables, setTables]           = useState(ALL_TABLES);
    const [activeFilter, setActiveFilter] = useState("all");

    const filtered = activeFilter === "all"
        ? tables
        : tables.filter(t => t.status === activeFilter);

    const handleStatusChange = (id, newStatus) => {
        setTables(prev => prev.map(t =>
            t.id === id ? { ...t, status: newStatus } : t
        ));
    };

    return (
        <div className="flex flex-col gap-6">

            {/* Header */}
            <div>
                <h1 className="text-xl font-semibold text-slate-100">Table Management</h1>
                <p className="text-sm text-slate-200 mt-1">
                    Manage restaurant table status in real time
                </p>
            </div>

            {/* Stat summary — always shows all tables count */}
            <TableStatSummary tables={tables} />

            {/* Filter */}
            <TableFilterBar
                active={activeFilter}
                onChange={setActiveFilter}
            />

            {/* Grid */}
            {filtered.length === 0 ? (
                <div className="text-center py-16 text-slate-200 text-base">
                    No tables found.
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                    {filtered.map(table => (
                        <TableCard
                            key={table.id}
                            table={table}
                            onStatusChange={handleStatusChange}
                        />
                    ))}
                </div>
            )}

        </div>
    );
}

export default TablesPage;