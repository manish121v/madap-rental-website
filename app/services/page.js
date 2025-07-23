import Image from "next/image";

const services = [
  {
    name: "Mahira",
    description: "Custom setups for Mahira functions. Our Mahira setups are designed to bring tradition and elegance together, making your event memorable.",
    image: "https://picsum.photos/seed/mahira/400/250"
  },
  {
    name: "Madap",
    description: "Elegant Madap designs to match your theme. Choose from a variety of modern and classic styles for your special day.",
    image: "https://picsum.photos/seed/madap/400/250"
  },
  {
    name: "Mehendi",
    description: "Beautiful decor for Mehendi ceremonies, with vibrant colors and comfortable seating arrangements.",
    image: "https://picsum.photos/seed/mehendi/400/250"
  },
  {
    name: "Haldi",
    description: "Vibrant Haldi function setups, featuring traditional elements and a splash of color.",
    image: "https://picsum.photos/seed/haldi/400/250"
  },
  {
    name: "Engagement",
    description: "Stylish engagement event decor, tailored to your preferences and venue.",
    image: "https://picsum.photos/seed/engagement/400/250"
  },
  {
    name: "Gate & Entry Decor",
    description: "Welcoming gate and entry decorations to impress your guests from the moment they arrive.",
    image: "https://picsum.photos/seed/gate/400/250"
  },
  {
    name: "Coolers",
    description: "Cooler rentals for summer comfort, ensuring your guests stay refreshed throughout the event.",
    image: "https://picsum.photos/seed/coolers/400/250"
  }
];

export default function Services() {
  return (
    <div className="container py-5">
      <h1 className="display-5 fw-bold text-center mb-4">Our Services</h1>
      <div className="row g-4">
        {services.map((service, idx) => (
          <div className="col-md-4" key={idx}>
            <div className="card h-100 shadow-sm">
              <Image
                src={service.image}
                alt={service.name}
                width={400}
                height={250}
                className="card-img-top"
                style={{ objectFit: 'cover', height: '250px' }}
                unoptimized
              />
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text">{service.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Mahira Gallery Link */}
      <div className="text-center mt-5">
        <p className="lead">Want to see more? Explore our full Mahira event gallery!</p>
        <a href="/mahira-gallery" className="btn btn-outline-primary btn-lg">View Mahira Gallery</a>
      </div>
    </div>
  );
} 