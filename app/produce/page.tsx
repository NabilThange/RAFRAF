import { ProduceSidebar } from "@/components/produce/produce-sidebar";
import { ProduceCard } from "@/components/produce/produce-card";
import { BackButton } from "@/components/back-button";

const produceCategories = [
  { title: "Vegetables", handle: "vegetables" },
  { title: "Fruits", handle: "fruits" },
  { title: "Herbs & Spices", handle: "herbs-spices" },
  { title: "Grains & Pulses", handle: "grains-pulses" },
];

const featuredProduce = [
  {
    id: 1,
    title: "Red Onions",
    handle: "red-onions",
    description: "Premium red onions (60mm+) from Nashik region. Reliable quality, fair pricing, and on-time delivery for your wholesale needs.",
    shortDescription: "60mm+ premium grade, Nashik sourced",
    tags: ["Nashik", "Grade A", "Export Ready"],
    featuredImage: {
      url: "/images/onion.jpeg",
      altText: "Red Onions"
    }
  },
  {
    id: 2,
    title: "Fresh Okra",
    handle: "fresh-okra",
    description: "Tender okra from South India harvested at peak freshness. Ideal for international markets with consistent quality.",
    shortDescription: "Tender, peak-harvest, export-ready",
    tags: ["South India", "Grade A", "Fresh"],
    featuredImage: {
      url: "/images/okra.jpg",
      altText: "Fresh Okra"
    }
  },
  {
    id: 3,
    title: "G9 Cavendish Bananas",
    handle: "cavendish-bananas",
    description: "Premium G9 Cavendish bananas from South India. Perfect for export with excellent shelf life and consistent ripening.",
    shortDescription: "G9 grade, extended shelf life",
    tags: ["South India", "Premium", "Export Ready"],
    featuredImage: {
      url: "/images/banana.jpeg",
      altText: "G9 Cavendish Bananas"
    }
  },
  {
    id: 4,
    title: "Pomegranates",
    handle: "pomegranates",
    description: "Fresh pomegranates from Nashik region. High-quality fruit with superior taste and extended shelf life for Gulf markets.",
    shortDescription: "Superior taste, extended shelf life",
    tags: ["Nashik", "Premium", "Seasonal"],
    featuredImage: {
      url: "/images/pomegranate.jpg",
      altText: "Pomegranates"
    }
  },
  {
    id: 5,
    title: "Red Grapes",
    handle: "red-grapes",
    description: "Premium red grapes from Nashik. Sweet, juicy, and perfect for export with reliable quality standards.",
    shortDescription: "Sweet, juicy, premium export grade",
    tags: ["Nashik", "Grade A", "Premium"],
    featuredImage: {
      url: "/images/red_grapes.jpg",
      altText: "Red Grapes"
    }
  },
  {
    id: 6,
    title: "Black Grapes",
    handle: "black-grapes",
    description: "Fresh black grapes from Nashik region. Consistent quality and fair pricing for wholesale distribution.",
    shortDescription: "Consistent quality, fair wholesale pricing",
    tags: ["Nashik", "Grade A", "Fresh"],
    featuredImage: {
      url: "/images/black_grapes.jpg",
      altText: "Black Grapes"
    }
  },
  {
    id: 7,
    title: "Green Grapes",
    handle: "green-grapes",
    description: "Premium green grapes from Nashik. Crisp texture and excellent taste for international markets.",
    shortDescription: "Crisp texture, premium international grade",
    tags: ["Nashik", "Grade A", "Premium"],
    featuredImage: {
      url: "/images/green_grapes.jpg",
      altText: "Green Grapes"
    }
  },
  {
    id: 8,
    title: "G4 Green Chillies",
    handle: "green-chillies",
    description: "Fresh G4 Gauri green chillies from Gujarat. High-quality produce with consistent flavor profile for export.",
    shortDescription: "G4 Gauri, consistent flavor profile",
    tags: ["Gujarat", "Grade A", "Fresh"],
    featuredImage: {
      url: "/images/green_chilli.jpg",
      altText: "G4 Green Chillies"
    }
  },
  {
    id: 9,
    title: "Fresh Drumsticks",
    handle: "fresh-drumsticks",
    description: "Tender drumsticks from South India. Nutritious and perfect for health-conscious markets with reliable supply.",
    shortDescription: "Tender, nutritious, reliable supply",
    tags: ["South India", "Grade A", "Fresh"],
    featuredImage: {
      url: "/images/drumsticks.webp",
      altText: "Fresh Drumsticks"
    }
  },
  {
    id: 10,
    title: "Fresh Lemons",
    handle: "fresh-lemons",
    description: "Premium lemons from Jalgaon region. Juicy and aromatic, perfect for export with consistent quality.",
    shortDescription: "Juicy, aromatic, consistent export quality",
    tags: ["Jalgaon", "Grade A", "Fresh"],
    featuredImage: {
      url: "/images/lemon.jpg",
      altText: "Fresh Lemons"
    }
  },
  {
    id: 11,
    title: "Dry Coconut",
    handle: "dry-coconut",
    description: "Dry and semi-husk coconut from South India. High-quality produce for wholesale distribution and export.",
    shortDescription: "Dry and semi-husk, wholesale export ready",
    tags: ["South India", "Grade A", "Export Ready"],
    featuredImage: {
      url: "/images/dry_coconut.jpg",
      altText: "Dry Coconut"
    }
  },
  {
    id: 12,
    title: "Premium Turmeric",
    handle: "premium-turmeric",
    description: "Premium turmeric from Bhopal region. High-quality spice with excellent color and aroma for export markets.",
    shortDescription: "Premium color and aroma, export grade",
    tags: ["Bhopal", "Premium", "Spice"],
    featuredImage: {
      url: "/images/turmeric.jpg",
      altText: "Premium Turmeric"
    }
  }
];

function getLabelPosition(index: number): 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' {
  const positions: Array<'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'> = [
    'bottom-right',
    'bottom-left',
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left',
    'top-right'
  ];
  return positions[index % positions.length];
}

export default function ProducePage() {
  const [firstProduct, ...restProducts] = featuredProduce;

  return (
    <main className="min-h-screen bg-[#f5f5f0]">
      <BackButton />
      
      <div className="contents md:grid md:grid-cols-12 md:gap-6">
        <ProduceSidebar categories={produceCategories} />
        <div className="flex relative flex-col grid-cols-2 col-span-8 w-full md:grid">
          {firstProduct && (
            <ProduceCard 
              className="col-span-2" 
              product={firstProduct} 
              principal 
            />
          )}

          {restProducts.map((product, index) => (
            <ProduceCard
              className="col-span-1"
              key={product.id}
              product={product}
              labelPosition={getLabelPosition(index)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
