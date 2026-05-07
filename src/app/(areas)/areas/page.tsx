import AsiaCard from "./components/asia-card";
import AfricaCard from "./components/africa-card";
import EuropeCard from "./components/europe-card";
import NorthAmericaCard from "./components/north-america-card";
import SouthAmericaCard from "./components/south-america-card";
import AustraliaCard from "./components/australia-card";

export default function Areas() {
  return (
    <section className="p-4 md:p-10">
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-8">
        {/* Africa */}
        <AfricaCard />

        {/* Asia */}
        <AsiaCard />

        {/* Australia */}
        <AustraliaCard />

        {/* Europe */}
        <EuropeCard />

        {/* North America */}
        <NorthAmericaCard />

        {/* South America */}
        <SouthAmericaCard />
      </div>
    </section>
  );
}
