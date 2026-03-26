import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FcGlobe } from "react-icons/fc";

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

export function ContinentsDropdownMenu() {
  return (
    <DropdownMenu>
      {/* Trigger to open */}
      <DropdownMenuTrigger asChild className="cursor-pointer">
        <FcGlobe size="3em" />
      </DropdownMenuTrigger>

      {/* content */}
      <DropdownMenuContent className="w-40" align="start">
        <DropdownMenuGroup>
          <DropdownMenuSub>
            {menuData.map((item) => {
              return (
                <div key={item.id}>
                  <DropdownMenuSubTrigger>{item.label}</DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {item.subMenuItems.map((subItem) => {
                        return (
                          <DropdownMenuItem key={subItem.id}>{subItem.label}</DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </div>
              );
            })}
          </DropdownMenuSub>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
