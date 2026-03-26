"use client";

import { useEffect, useRef, useState } from "react";
import MenuItem from "./menu-item";
import { FcGlobe } from "react-icons/fc";
import { ChevronDown, ChevronUp } from "lucide-react";

const menuData = [
  {
    id: "Africa",
    label: "Africa",
    subMenuItems: [
      { id: "Algerian", label: "Algerian" },
      { id: "Egyptian", label: "Egyptian" },
      { id: "Kenyan", label: "Kenyan" },
    ],
  },

  {
    id: "Asia",
    label: "Asia",
    subMenuItems: [
      { id: "Chinese", label: "Chinese" },
      { id: "Filipino", label: "Filipino" },
      { id: "Indian", label: "Indian" },
      { id: "Japanese", label: "Japanese" },
      { id: "Malaysian", label: "Malaysian" },
      { id: "Russian", label: "Russian" },
      { id: "Saudi Arabian", label: "Saudi Arabian" },
      { id: "Syrian", label: "Syrian" },
      { id: "Thai", label: "Thai" },
      { id: "Turkish", label: "Turkish" },
      { id: "Vietnamese", label: "Vietnamese" },
    ],
  },
  {
    id: "Australia",
    label: "Australia",
    subMenuItems: [{ id: "Australian", label: "Australian" }],
  },

  {
    id: "Europe",
    label: "Europe",
    subMenuItems: [
      { id: "British", label: "British" },
      { id: "Croatian", label: "Croatian" },
      { id: "Dutch", label: "Dutch" },
      { id: "French", label: "French" },
      { id: "Greek", label: "Greek" },
      { id: "Irish", label: "Irish" },
      { id: "Italian", label: "Italian" },
      { id: "Norwegian", label: "Norwegian" },
      { id: "Polish", label: "Polish" },
      { id: "Portuguese", label: "Portuguese" },
      { id: "Slovakian", label: "Slovakian" },
      { id: "Spanish", label: "Spanish" },
      { id: "Ukrainian", label: "Ukrainian" },
    ],
  },

  {
    id: "North America",
    label: "North America",
    subMenuItems: [
      { id: "American", label: "American" },
      { id: "Canadian", label: "Canadian" },
      { id: "Mexican", label: "Mexican" },
    ],
  },

  {
    id: "South America",
    label: "South America",
    subMenuItems: [
      { id: "Argentinian", label: "Argentinian" },
      { id: "Jamaican", label: "Jamaican" },
      { id: "Uruguayan", label: "Uruguayan" },
      { id: "Venezulan", label: "Venezulan" },
    ],
  },
];

export default function ContinentsDynamicMenu() {
  // state to open one menu item
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  //  function to open one menu item
  const toggleMenu = (id: string | null) => {
    setOpenMenuId(openMenuId === id ? null : id);
  };

  // state to open main menu
  const [openTrigger, setOpenTrigger] = useState(false);

  // to reference the main menu
  const dropDownRef = useRef<HTMLDivElement>(null);

  // function to open or close main menu when a menu item is clicked
  const handleSelect = () => {
    setOpenTrigger(false); // close main menu
    setOpenMenuId(null); // close any open submenu
  };

  useEffect(() => {
    // function to close main menu when clicked outside it
    const handleClickOutsie = (e: MouseEvent) => {
      console.log("This is type of " + typeof e);
      if (!dropDownRef.current?.contains(e.target as Node)) {
        setOpenTrigger(false);
      }
    };

    if (openTrigger) {
      document.addEventListener("mousedown", handleClickOutsie);
    }

    return () => document.removeEventListener("mousedown", handleClickOutsie);
  }, [openTrigger]);

  return (
    <div ref={dropDownRef} className="absolute z-50 mx-auto flex flex-col">
      {/* title */}
      <button
        onClick={() => setOpenTrigger((prev) => !prev)}
        className="flex items-center justify-center gap-4 px-3 py-4 text-rose-900 dark:text-neutral-300"
      >
        <FcGlobe size="3em" />
        {openTrigger ? <ChevronUp size="2em" /> : <ChevronDown size="2em" />}
      </button>
      {openTrigger && (
        <div>
          {menuData.map((item) => (
            <MenuItem
              key={item.id}
              menuItem={item}
              isOpen={openMenuId === item.id}
              onToggle={toggleMenu}
              onSelect={handleSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}
