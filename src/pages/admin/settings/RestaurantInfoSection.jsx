import SettingsSection from "./SettingsSection";
import SettingsInputRow from "./SettingsInputRow";

function RestaurantInfoSection() {
    return (
        <SettingsSection
            title="Restaurant Information"
            description="Basic details about your restaurant"
        >
            <SettingsInputRow
                label="Restaurant Name"
                defaultValue="Cook Food"
                placeholder="Enter restaurant name"
            />
            <SettingsInputRow
                label="Phone Number"
                type="tel"
                defaultValue="+880 1700-000000"
                placeholder="Enter phone number"
            />
            <SettingsInputRow
                label="Address"
                defaultValue="Dinajpur, Bangladesh"
                placeholder="Enter address"
            />
            <SettingsInputRow
                label="Opening Time"
                type="time"
                defaultValue="09:00"
            />
            <SettingsInputRow
                label="Closing Time"
                type="time"
                defaultValue="23:00"
            />

            {/* Save button */}
            <div className="flex justify-end pt-2">
                <button
                    type="button"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#079992] to-[#38ada9] text-white text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#079992]/30 transition-all duration-200"
                >
                    Save Changes
                </button>
            </div>
        </SettingsSection>
    );
}

export default RestaurantInfoSection;