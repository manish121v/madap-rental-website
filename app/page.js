"use client";
import { useEffect } from "react";
import Link from "next/link"; 
import Image from "next/image";
import AOS from "aos";
import FolderSlider from "./component/FolderSlider";

const services = [
  {
    name: "Mahira",
    slug: "mahira",
    description: "Custom setups for Mahira functions.",
  },
  {
    name: "Madap",
    slug: "mandap",
    description: "Elegant Madap designs to match your theme.",
  },
  {
    name: "Mehendi",
    slug: "mehendi-haldi-engagement",
    description: "Beautiful decor for Mehendi ceremonies.",
  },
  {
    name: "Haldi",
    slug: "mehendi-haldi-engagement",
    description: "Vibrant Haldi function setups.",
  },
  {
    name: "Engagement",
    slug: "mehendi-haldi-engagement",
    description: "Stylish engagement event decor.",
  },
  {
    name: "Gate & Entry Decor",
    slug: "gate and entry",
    description: "Welcoming gate and entry decorations.",
  },
];

const whyChooseUs = [
  {
    icon: "bi-star-fill",
    title: "Modern & Elegant",
    desc: "Contemporary designs that elevate your event."
  },
  {
    icon: "bi-people-fill",
    title: "Professional Team",
    desc: "Experienced staff for hassle-free setup."
  },
  {
    icon: "bi-gem",
    title: "Custom Decor",
    desc: "Personalized themes for every occasion."
  },
  {
    icon: "bi-emoji-smile-fill",
    title: "Customer Satisfaction",
    desc: "We turn your vision into reality."
  }
];

const testimonials = [
  {
    name: "Ayesha K.",
    text: "The decor was stunning and the team was so professional! Our guests loved every detail.",
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Rahul S.",
    text: "Booking was easy and the setup exceeded our expectations. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Priya M.",
    text: "The coolers kept everyone comfortable and the entry decor was beautiful.",
    image: "https://randomuser.me/api/portraits/women/65.jpg"
  }
];

export default function Home() {
  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div
        className="position-relative text-white text-center d-flex align-items-center justify-content-center"
        style={{
          minHeight: "60vh",
          background: "linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80') center/cover no-repeat"
        }}
      >
        <div data-aos="fade-down">
          <h1 className="display-3 fw-bold mb-3">🌟 Make Your Celebration Unforgettable! 🌟</h1>
          <p className="lead mb-4 fs-4">
            Modern Madap Rentals for Mahira, Mehendi, Haldi, Engagement & more
          </p>
          <a href="#booking" className="btn btn-primary btn-lg shadow">📞 Book Now</a>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold" data-aos="fade-up">Why Choose Us?</h2>
        <div className="row g-4 justify-content-center">
          {whyChooseUs.map((item, idx) => (
            <div className="col-6 col-md-3 text-center" key={idx} data-aos="zoom-in" data-aos-delay={idx * 100}>
              <i className={`bi ${item.icon} display-4 text-primary mb-3`}></i>
              <h5 className="fw-bold">{item.title}</h5>
              <p className="text-muted small">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="container py-5">
        <h2 className="text-center mb-4 fw-bold" data-aos="fade-up">Our Services</h2>
        <div className="row g-4">
          {services.map((service, idx) => (
            <div className="col-md-4" key={idx} data-aos="fade-up" data-aos-delay={idx * 100}>
              <Link href={`/${service.slug}-gallery`} className="text-decoration-none text-dark">
              <div className="card h-100 shadow-sm border-0">
              <div className="card-img-top" style={{ height: '250px', overflow: 'hidden' }}>
  <FolderSlider slug={service.slug} width={400} height={250} />
</div>
                <div className="card-body">
                  <h5 className="card-title">{service.name}</h5>
                  <p className="card-text">{service.description}</p>
                </div>
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Carousel */}
      <div className="bg-light py-5">
        <div className="container">
          <h2 className="text-center mb-4 fw-bold" data-aos="fade-up">What Our Customers Say</h2>
          <div id="testimonialCarousel" className="carousel slide mx-auto" data-bs-ride="carousel" style={{ maxWidth: 600 }}>
            <div className="carousel-inner">
              {testimonials.map((t, idx) => (
                <div className={`carousel-item${idx === 0 ? ' active' : ''}`} key={idx}>
                  <div className="d-flex flex-column align-items-center">
          <Image
                      src={t.image}
                      alt={t.name}
                      width={80}
                      height={80}
                      className="rounded-circle mb-3 border border-3 border-primary"
                      unoptimized
                    />
                    <blockquote className="blockquote text-center">
                      <p className="mb-3">“{t.text}”</p>
                      <footer className="blockquote-footer">{t.name}</footer>
                    </blockquote>
                  </div>
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating Book Now Button */}
      <a href="/booking" className="btn btn-primary position-fixed bottom-0 end-0 m-4 shadow-lg rounded-pill px-4 py-2 d-none d-md-block" style={{ zIndex: 1050 }}>
        Book Now
        </a>
    </>
  );
}
