"use client";
import { IconType, } from "react-icons";
import { FiTool, FiTruck, FiShoppingCart, FiCpu, FiGlobe, FiPackage, FiBriefcase } from "react-icons/fi"

export type SERVICES = {
    name: string,
    icon: IconType
}

export const services: SERVICES[] = [
    {
        name: "Construction",
        icon: FiTool
    },
    {
        name: "Delivery Services",
        icon: FiTruck
    },
    {
        name: "Wholesales and Retails",
        icon: FiShoppingCart
    },
    {
        name: "Tech Contracts",
        icon: FiCpu
    },
    {
        name: "Import and Export",
        icon: FiGlobe
    },
    {
        name: "Goods and Services",
        icon: FiPackage
    },
    {
        name: "Goverment Contracts",
        icon: FiBriefcase
    },
]

const Overview = () => {
    return (
        <div className="relative">

        <div className="p-8 md:p-16">
            <h1 className="border-b pb-2 border-gray-300 text-xl md:text-3xl mb-2">
                Services
            </h1>
            {/* Service ontainer */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                { services.map((item, index) => {
                    const Icon = item.icon
                    return(
                    <div
                        key={index}
                        className={`rounded-xl p-4 md:p-8 flex flex-col items-center gap-4 bg-amber-950/5 drop-shadow-md font-bold text-amber-950 text-lg md:text-2xl ${item.name === "Goverment Contracts" && "col-span-2 md:col-span-3"}`}>
                        <Icon className="text-xl md:text-4xl"/>
                        <p>{item.name}</p>
                    </div>
                )})}
            </div>
        </div>
        </div>
    );
}



export default Overview;