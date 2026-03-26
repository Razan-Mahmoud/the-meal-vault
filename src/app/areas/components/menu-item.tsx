import Link from "next/link";
import { FcGlobe } from "react-icons/fc";

type MenuItemProps = {
  isOpen: boolean;
  onToggle: (id: string | null) => void;
  menuItem: {
    id: string;
    label: string;
    subMenuItems: { id: string; label: string }[];
  };
  onSelect: () => void;
};
export default function MenuItem({ menuItem, isOpen, onToggle, onSelect }: MenuItemProps) {
  return (
    <div className="group relative w-full">
      {/* title */}
      <div
        className="flex w-full cursor-pointer items-center justify-center gap-4 rounded-md border-2 bg-amber-50 p-2 text-center font-medium text-orange-900 transition-all duration-350 ease-in-out hover:bg-amber-100 dark:bg-slate-700 dark:text-neutral-200 dark:hover:bg-slate-600"
        onClick={() => onToggle(menuItem.id)}
      >
        {menuItem.label}
        <FcGlobe size="2em" />
      </div>

      {/* submenu */}
      {isOpen && (
        <ul className="absolute top-0 right-full z-20 w-full rounded-md bg-amber-50 *:flex-1 *:cursor-pointer *:rounded-md *:border-b-2 *:bg-amber-50 *:px-3 *:py-2 *:text-orange-900 *:hover:bg-amber-100 md:left-full dark:bg-slate-700 *:dark:bg-slate-700 *:dark:text-neutral-200 *:dark:hover:bg-slate-600">
          {menuItem.subMenuItems.map((subItem) => (
            <li key={subItem.id} onClick={onSelect}>
              <Link href={`/areas/${subItem.label}`}>{subItem.label}</Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
