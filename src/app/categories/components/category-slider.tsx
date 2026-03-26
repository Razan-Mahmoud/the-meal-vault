import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import beefPic from "@/public/bbq.jpg";
import chickenPic from "@/public/chicken-fillet.jpg";
import lambPic from "@/public/lamb-chops.jpg";
import pastaPic from "@/public/pasta-italian.jpg";
import porkPic from "@/public/pork.jpg";
import sushiPic from "@/public/sushi.png";
import veganPic from "@/public/vegan.jpg";
import vegetarianPic from "@/public/vegetarian.jpg";
import goatPic from "@/public/biryani.jpg";
import CategorySliderItem from "./category-slider-item";

const sliderItems = [
  {
    idCategory: "1",
    strCategory: "Beef",
    src: beefPic,
    alt: "a tray of thinly cut meat with herbs and tomatos",
    title: "Savor the richness of perfectly prepared beef dishes.",
    description: "From classics to bold creations; every meal is worth savoring.",
    btnTitle: "Explore Beef Meals",
  },
  {
    idCategory: "6",
    strCategory: "Pasta",
    src: pastaPic,
    alt: "a bowl of spaghetti",
    title: "Transform your next meal into an effortless Italian feast.",
    description: "Unlock a world of comfort and creativity with pasta.",
    btnTitle: "Explore Pasta Meals",
  },
  {
    idCategory: "2",
    strCategory: "Chicken",
    src: chickenPic,
    alt: "a chicken fillet and potato widges",
    title:
      "Discover the satisfaction of perfectly cooked chicken: juicy, smoky, and full of character.",
    description: "Masterfully prepared, packed with taste, and always satisfying.",
    btnTitle: "Explore Chicken Meals",
  },
  {
    idCategory: "11",
    strCategory: "Vegan",
    src: veganPic,
    alt: "different vegetables on skewers",
    title:
      "Explore innovative ways to use grains, legumes, and seasonal produce to master a diverse range of colorful dishes. ",
    description:
      "Embrace the vibrant world of vegan cooking, where fresh, plant-based ingredients take the center stage.",
    btnTitle: "Explore Vegan Meals",
  },
  {
    idCategory: "4",
    strCategory: "Lamb",
    src: lambPic,
    alt: "grilled lamb chops with rpsemary",
    title: "Excell in cooking this versatile protein with confidence and ease.",
    description: "Masterfully prepared, packed with taste, and always satisfying.",
    btnTitle: "Explore Lamb Meals",
  },
  {
    idCategory: "12",
    strCategory: "Vegetarian",
    src: vegetarianPic,
    alt: "slices of avocado and salad vegetables",
    title:
      "Unlock the vibrant potential of vegetarian cooking, where flavourful and colourful ingredients come together to create deeply satisfying meals.",
    description: "These recipes prove that meatless dining is anything but boring.",
    btnTitle: "Explore Vegetarian Meals",
  },
  {
    idCategory: "7",
    strCategory: "Pork",
    src: porkPic,
    alt: "a plate of thinly cut pork loins",
    title:
      "A culinary powerhouse that can be everything; a crispy roast or a honey-glazed masterpiece.",
    description: "Pork offers a savory richness that effortlessly elevates your dinner rotation.",
    btnTitle: "Explore Pork Meals",
  },
  {
    idCategory: "8",
    strCategory: "Seafood",
    src: sushiPic,
    alt: "a plate of sushi and salmon rolls",
    title:
      "Seafood is the ultimate secret weapon for crafting impressive, healthy meals without spending hours in the kitchen.",
    description:
      "Dive into the fresh, vibrant world of seafood to bring the taste of the ocean to your table.",
    btnTitle: "Explore Seafood Meals",
  },

  {
    idCategory: "14",
    strCategory: "Goat",
    src: goatPic,
    alt: "chunks of goat biryani with saffron-infused basmati rice.",
    title:
      "Open the door to bold international traditions and exceptionally hearty, soul-warming feasts.",
    description: "Savor the deep, robust flavors of mutton and goat meat.",
    btnTitle: "Explore Goat Meals",
  },
];

export default function CategorySlider() {
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="h-80 w-full"
    >
      <CarouselContent>
        {sliderItems.map((item) => (
          <CategorySliderItem
            idCategory={item.idCategory}
            strCategory={item.strCategory}
            alt={item.alt}
            btnTitle={item.btnTitle}
            description={item.description}
            src={item.src}
            title={item.title}
            key={item.idCategory}
          />
        ))}
      </CarouselContent>

      {/* 2. Absolute positioned arrows */}
      <CarouselPrevious className="absolute top-1/2 left-3 size-10 md:left-6 md:size-14 dark:bg-slate-600 dark:text-neutral-200 dark:hover:bg-slate-500" />
      <CarouselNext className="absolute top-1/2 right-3 size-10 md:right-6 md:size-14 dark:bg-slate-600 dark:text-neutral-200 dark:hover:bg-slate-500" />
    </Carousel>
  );
}
