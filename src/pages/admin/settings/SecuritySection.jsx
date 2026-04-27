import SettingsSection from "./SettingsSection";
import SettingsInputRow from "./SettingsInputRow";

function SecuritySection() {
    return (
        <SettingsSection
            title="Security"
            description="Update your admin password"
        >
            <SettingsInputRow
                label="Current Password"
                type="password"
                placeholder="Enter current password"
            />
            <SettingsInputRow
                label="New Password"
                type="password"
                placeholder="Enter new password"
            />
            <SettingsInputRow
                label="Confirm Password"
                type="password"
                placeholder="Confirm new password"
            />

            <div className="flex justify-end pt-2">
                <button
                    type="button"
                    className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#079992] to-[#38ada9] text-white text-sm font-semibold hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#079992]/30 transition-all duration-200"
                >
                    Update Password
                </button>
            </div>
        </SettingsSection>
    );
}

export default SecuritySection;