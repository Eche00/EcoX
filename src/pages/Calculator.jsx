import React, { useEffect, useState } from "react";
import Sidebar from "./calculatorcomponents/Sidebar";
import Results from "./calculatorcomponents/Results";
import Hero from "./contactsection/Hero";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import TvIcon from "@mui/icons-material/Tv";
import SpeakerIcon from "@mui/icons-material/Speaker";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import LaptopMacIcon from "@mui/icons-material/LaptopMac";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import KitchenIcon from "@mui/icons-material/Kitchen";
import IronIcon from "@mui/icons-material/Iron";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import PrintIcon from "@mui/icons-material/Print";
import FlashOnIcon from "@mui/icons-material/FlashOn";
import PowerIcon from "@mui/icons-material/Power";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import WaterIcon from "@mui/icons-material/Water";
import GamepadIcon from "@mui/icons-material/Gamepad";
import AirIcon from "@mui/icons-material/Air";

function Calculator() {
  const [select, setSelect] = useState({
    title: "",
    icon: null,
    quantity: 1,
    watts: [],
    pickedWatts: 0,
    totalWatts: 0,
  });
  const [success, setSuccess] = useState(false);
  const appliances = [
    {
      title: "Standing Fan",
      icon: <AirIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [60, 75, 90],
    },
    {
      title: "Ox Fan",
      icon: <AirIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [40, 20, 30, 25],
    },
    {
      title: "Ceiling Fan",
      icon: <AirIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [60, 70, 80],
    },
    {
      title: "Energy Bulb",
      icon: <LightbulbIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [15, 20, 25],
    },
    {
      title: "LED Bulb",
      icon: <LightbulbIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [5, 10, 15],
    },
    {
      title: "Chandelier",
      icon: <LightbulbIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [60, 80, 100],
    },
    {
      title: "Fancy Lights",
      icon: <LightbulbIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [20, 30, 40],
    },
    {
      title: "TV",
      icon: <TvIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [60, 100, 150],
    },
    {
      title: "Decoder",
      icon: <TvIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [15, 20, 30],
    },
    {
      title: "PlayStation",
      icon: <GamepadIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [150, 200, 250],
    },
    {
      title: "Speakers",
      icon: <SpeakerIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [50, 100, 200],
    },
    {
      title: "Phone Chargers",
      icon: <PhoneIphoneIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [5, 10, 15],
    },
    {
      title: "Laptop",
      icon: <LaptopMacIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [45, 65, 90],
    },
    {
      title: "Monitor",
      icon: <LaptopMacIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [25, 40, 60],
    },
    {
      title: "Air Conditioner 1HP (Split Unit)",
      icon: <AcUnitIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [750, 1000],
    },
    {
      title: "Air Conditioner 1.5HP (Split Unit)",
      icon: <AcUnitIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [1100, 1500],
    },
    {
      title: "Air Conditioner 2HP (Split Unit)",
      icon: <AcUnitIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [1500, 2000],
    },
    {
      title: "Air Conditioner 2HP (Standing Unit)",
      icon: <AcUnitIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [1800, 2200],
    },
    {
      title: "Air Conditioner 3HP (Standing Unit)",
      icon: <AcUnitIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [2200, 3000],
    },
    {
      title: "Fridge 0.5HP",
      icon: <KitchenIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [200, 250],
    },
    {
      title: "Freezer 0.75HP",
      icon: <KitchenIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [300, 400],
    },
    {
      title: "Blender 0.8HP",
      icon: <FlashOnIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [500, 600],
    },
    {
      title: "Microwave",
      icon: <FlashOnIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [800, 1000, 1200],
    },
    {
      title: "Electric Iron",
      icon: <IronIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [1000, 1200, 1500],
    },
    {
      title: "Water Heater",
      icon: <WaterIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [1000, 1500, 2000],
    },
    {
      title: "Pumping Machine 1HP",
      icon: <WaterIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [750, 1000],
    },
    {
      title: "Electric Cooker",
      icon: <LocalFireDepartmentIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [1000, 1500, 2000],
    },
    {
      title: "Gas Cooker with Electric Oven",
      icon: <LocalFireDepartmentIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [800, 1000, 1500],
    },
    {
      title: "Washing Machine 0.5HP",
      icon: <LocalLaundryServiceIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [250, 350],
    },
    {
      title: "Top Load Washing Machine 0.7HP",
      icon: <LocalLaundryServiceIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [400, 500],
    },
    {
      title: "Printer",
      icon: <PrintIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [50, 100, 150],
    },
    {
      title: "Clipper",
      icon: <FlashOnIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [10, 15, 20],
    },
    {
      title: "Hair Dryer 1.2HP",
      icon: <PowerIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [800, 1000, 1200],
    },
    {
      title: "Water Dispenser",
      icon: <WaterIcon sx={{ fontSize: 30, color: "#034FE3" }} />,
      watts: [80, 100, 150],
    },
  ];
  // whenever quantity or pickedWatts changes, recompute totalWatts
  useEffect(() => {
    if (select.pickedWatts > 0) {
      setSelect((prev) => ({
        ...prev,
        totalWatts: prev.quantity * prev.pickedWatts,
      }));
    }
  }, [select.quantity, select.pickedWatts]);

  const handleAdd = () => {
    try {
      // destructuring icon
      const { icon, ...rest } = select;
      const updated = {
        ...rest,
        totalWatts: select.quantity * select.pickedWatts, // recalc just before saving
      };

      // get existing appliances from storage
      const stored = JSON.parse(localStorage.getItem("appliances")) || [];

      // push new one
      const newList = [...stored, updated];

      // save back
      localStorage.setItem("appliances", JSON.stringify(newList));

      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
        setSelect({
          title: "",
          icon: null,
          quantity: 1,
          watts: [],
          pickedWatts: 0,
          totalWatts: 0,
        });
      }, 2000);
    } catch (error) {
      console.error("Error saving to localStorage:", error);
    }
  };
  return (
    <div className="flex flex-col ">
      <section className=" flex xxl:flex-row xxl:gap-5 flex-col w-[90%] mx-auto min-h-[100vh]">
        <Sidebar appliances={appliances} onSelect={(item) => setSelect(item)} />
        <Results
          select={select}
          onSelect={(item) => setSelect(item)}
          handleAdd={handleAdd}
          success={success}
        />
      </section>
      <section className="sm:w-[75%] w-[90%] mx-auto border-l-2 border-[#034FE3]/30">
        <Hero />
      </section>
    </div>
  );
}

export default Calculator;
