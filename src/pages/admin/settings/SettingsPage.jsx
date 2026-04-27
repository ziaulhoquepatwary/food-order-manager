import RestaurantInfoSection from "./RestaurantInfoSection";
import NotificationSection from "./NotificationSection";
import SecuritySection from "./SecuritySection";
import DangerZoneSection from "./DangerZoneSection";

function SettingsPage() {
    return (
        <div className="flex flex-col gap-6">

            {/* Header */}
            <div>
                <h1 className="text-xl font-semibold text-slate-100">Settings</h1>
                <p className="text-sm text-slate-200 mt-1">
                    Manage your restaurant configuration
                </p>
            </div>

            <RestaurantInfoSection />
            <NotificationSection />
            <SecuritySection />
            <DangerZoneSection />

        </div>
    );
}

export default SettingsPage;