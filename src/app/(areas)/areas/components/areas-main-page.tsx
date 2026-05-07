import Image from "next/image";
import mapPicture from "@/public/globe.jpg";
import Link from "next/link";

export default function AreasMainPage() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <Link
        href="/areas"
        className="relative block aspect-video w-3/4 overflow-hidden rounded-md md:w-[30%]"
      >
        {/* background Image */}
        <Image
          src={mapPicture}
          alt="a world map"
          className="h-full w-full object-cover object-center transition-transform duration-300 ease-in-out hover:scale-110"
        />
      </Link>
    </div>
  );
}
