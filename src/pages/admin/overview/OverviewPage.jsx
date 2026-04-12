import React from 'react'
import StatCard from './StatCard'
import RecentOrdersTable from './RecentOrdersTable'
import PendingCookers from './PendingCookers'
import TopSellingItems from './TopSellingItems'

function OverviewPage() {
    return (
        <div className="flex flex-col gap-6">
            <StatCard />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <RecentOrdersTable />
                <PendingCookers />
            </div>

            <TopSellingItems />
        </div>
    )
}

export default OverviewPage