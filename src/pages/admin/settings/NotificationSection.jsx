import SettingsSection from "./SettingsSection";
import SettingsToggleRow from "./SettingsToggleRow";

function NotificationSection() {
    return (
        <SettingsSection
            title="Notifications"
            description="Control what alerts you receive"
        >
            <SettingsToggleRow
                label="New Order Alert"
                description="Get notified when a new order arrives"
                defaultOn={true}
            />
            <SettingsToggleRow
                label="Cooker Application"
                description="Get notified when a new cooker applies"
                defaultOn={true}
            />
            <SettingsToggleRow
                label="Low Stock Alert"
                description="Get notified when a menu item runs out"
                defaultOn={false}
            />
            <SettingsToggleRow
                label="Daily Summary"
                description="Receive a daily sales summary email"
                defaultOn={true}
            />
        </SettingsSection>
    );
}

export default NotificationSection;