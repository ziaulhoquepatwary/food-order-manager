import { useState } from "react";
import { MENU_ITEMS } from "../../../data/adminDummyData";
import MenuFilterBar from "./MenuFilterBar";
import MenuItemCard from "./MenuItemCard";
import AddMenuItemBtn from "./AddMenuItemBtn";

function MenuPage() {
    const [items, setItems] = useState(MENU_ITEMS);
    const [activeCategory, setActiveCategory] = useState("all");

    const filtered = activeCategory === "all"
        ? items
        : items.filter(i => i.category === activeCategory);

    const handleToggle = (id) => {
        setItems(prev => prev.map(item =>
            item.id === id
                ? { ...item, status: item.status === "active" ? "inactive" : "active" }
                : item
        ));
    };

    return (
        <div className="flex flex-col gap-6">

            {/* Header */}
            <div className="flex items-center justify-between flex-wrap gap-3">
                <div>
                    <h1 className="text-xl font-semibold text-slate-100">Menu Management</h1>
                    <p className="text-sm text-slate-200 mt-1">
                        {filtered.length} item{filtered.length !== 1 ? "s" : ""} found
                    </p>
                </div>
                <AddMenuItemBtn onClick={() => console.log("Open add modal")} />
            </div>

            {/* Filter */}
            <MenuFilterBar
                active={activeCategory}
                onChange={setActiveCategory}
            />

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {filtered.map(item => (
                    <MenuItemCard
                        key={item.id}
                        item={item}
                        onToggle={handleToggle}
                    />
                ))}
            </div>

        </div>
    );
}

export default MenuPage;