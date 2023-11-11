import React from "react";
import "./about.css";

const About = () => {
  return (
    <div className="about">
      {/* ===== start of hero */}
      <section className="hero">
        <img
          src="https://media.istockphoto.com/id/816887384/photo/about-us.jpg?s=612x612&w=0&k=20&c=2X8lobqw8nUWHMshyfcExb7jmF73u9XzIBAsVMjLFv4="
          alt=""
        />
      </section>
      {/* ===== end of hero */}
      {/* <h1 className="hero-text">About Us</h1> */}

      {/* ===== start of who we are */}
      <section className="who-we-are">
        <div className="desc">
          <h1>Who we are?</h1>
          <p>
            We are a team of passionate individuals committed to providing
            high-quality products and exceptional customer service. Our mission
            is to make technology accessible to everyone, no matter where they
            are in the world. Shop with us and experience the difference of
            working with a dedicated and customer-centric team.
          </p>
        </div>
        <img
          src="https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
      </section>
      {/* ===== end of who we are */}

      {/* ===== start of our team */}
      <section className="our-team">
        <h1>Our Team</h1>
        <div className="our-team-cards">
          <div className="card">
            <img
              src="https://i.pinimg.com/474x/9d/5e/8c/9d5e8c100710a176f2fe24bb819b38b8.jpg"
              alt=""
            />
            <h2 className="name">Harvey Spector</h2>
            <p className="position">Founder - CEO</p>
          </div>

          <div className="card">
            <img
              src="https://i.pinimg.com/474x/67/72/3c/67723c7cdce699919fce8fc0102b0f96.jpg"
              alt=""
            />
            <h2 className="name">Jessica Pearson</h2>
            <p className="position">COO</p>
          </div>
          <div className="card">
            <img
              src="https://i.pinimg.com/474x/d6/c2/46/d6c246fcf366106a364998ce6bcc3dbe.jpg"
              alt=""
            />
            <h2 className="name">Rachel Zain</h2>
            <p className="position">Marketing Head</p>
          </div>

          <div className="card">
            <img
              src="https://i.pinimg.com/474x/5e/96/4b/5e964b4d1a6a514bf141c694f5037537.jpg"
              alt=""
            />
            <h2 className="name">Luise Litt</h2>
            <p className="position">Lead Developer</p>
          </div>
          <div className="card">
            <img
              src="https://i.pinimg.com/474x/00/9f/5f/009f5fa7d48a83a4b295a5f9b55b4d0b.jpg"
              alt=""
            />
            <h2 className="name">Katrina Bennett</h2>
            <p className="position">Intern Designer</p>
          </div>

          <div className="card">
            <img
              src="https://i.pinimg.com/474x/57/d6/4b/57d64b485e8810f24c2756ae6893ae8a.jpg"
              alt=""
            />
            <h2 className="name">Mike Ross</h2>
            <p className="position">Intern Designer</p>
          </div>
        </div>
      </section>
      {/* ===== end of our team */}

      {/* ===== start of why choose us */}
      <section className="why-choose-us">
        <h1>Why Choose Us?</h1>
        <div className="why-us-cards">
          <div className="card">
            <i class="fa-solid fa-globe"></i>
            <h3>Worldwide Shipping</h3>
            <p>
              We offer worldwide shipping to make our products accessible to
              customers all over the world.
            </p>
          </div>

          <div className="card">
            <i class="fa-solid fa-fire"></i>
            <h3>Best Quality</h3>
            <p>
              We believe in providing our customers with only the best quality
              products.
            </p>
          </div>
          <div className="card">
            <i class="fa-solid fa-divide"></i>
            <h3>Best Offers</h3>
            <p>
              We pride ourselves on offering the best deals and discounts to our
              customers.
            </p>
          </div>
          <div className="card">
            <i class="fa-solid fa-shield"></i>
            <h3>Secure Payments</h3>
            <p>
              We offer a range of secure payment options to ensure that your
              transactions are safe and secure.
            </p>
          </div>
        </div>
      </section>
      {/* ===== end of why choose us */}
    </div>
  );
};

export default About;
