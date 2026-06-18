import React, { useState } from 'react';
import './App.css';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <circle cx="12" cy="12" r="4"/>
    <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/>
  </svg>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSendToWhatsApp = () => {
    const { name, email, phone, message } = form;
    if (!name && !phone) {
      alert('Please enter at least your name and phone number.');
      return;
    }
    const text =
      `Hello Herbal Park! I'd like to book a consultation.%0A` +
      `*Name:* ${encodeURIComponent(name)}%0A` +
      `*Email:* ${encodeURIComponent(email)}%0A` +
      `*Phone:* ${encodeURIComponent(phone)}%0A` +
      `*Message:* ${encodeURIComponent(message || 'N/A')}`;
    window.open(`https://wa.me/971564169883?text=${text}`, '_blank');
  };

  return (
    <div className="app-container">

      {/* ── WHATSAPP FLOATING BUTTON ── */}
      <a
        href="https://wa.me/971564169883?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20at%20Herbal%20Park."
        target="_blank"
        rel="noreferrer"
        className="whatsapp-float"
        aria-label="Chat with us on WhatsApp"
      >
        <WhatsAppIcon />
        <span className="whatsapp-float-label">Chat with us</span>
      </a>

      {/* ── HEADER ── */}
      <header className="header">
        <div className="header-inner">
          <div className="logo">
            <img src="/logo.png" alt="Herbal Park Logo" style={{ height: '48px' }} />
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>

          <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <a href="#about" onClick={() => setMenuOpen(false)}>About Us</a>
            <a href="#services" onClick={() => setMenuOpen(false)}>Our Services</a>
            <a href="#pricing" onClick={() => setMenuOpen(false)}>Packages</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact Us</a>
            <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Book Now</a>
          </nav>
        </div>
      </header>

      {/* ── HERO ── */}
      <section className="hero" style={{ backgroundImage: `url('/assets/hero_bg.png')` }} id="home">
        <div className="hero-overlay" />
        <div className="container">
          <div className="hero-content">
            <span className="hero-eyebrow">Ayurvedic Postnatal Care</span>
            <h1>Gentle Healing, Naturally –<br />Post Natal Care by Herbal Park</h1>
            <p>Restore your strength, balance your body, and embrace motherhood with expert herbal post-natal care.</p>
            <div className="hero-actions">
              <a
                href="https://wa.me/971564169883?text=Hi%2C%20I%20would%20like%20to%20book%20a%20free%20consultation%20at%20Herbal%20Park."
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                Book Your Free Consultation
              </a>
              <a href="#services" className="btn btn-ghost">Explore Services</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section className="intro-section" id="about">
        <div className="container intro-inner">
          <div className="intro-text">
            <span className="section-eyebrow">About AyurMa</span>
            <h2>Ancient Care,<br />Modern Motherhood</h2>
            <p>Motherhood is a journey of deep love and selfless giving. At AyurMa by Herbal Park, we believe that the mother deserves care, too.</p>
            <p>Our authentic, personalized Ayurvedic postnatal therapies are thoughtfully crafted to support your healing, restore vitality, balance your hormones, and gently guide you back to your center.</p>
            <p className="intro-bold">We approach postnatal therapy through six key aspects:</p>
            <ul className="intro-features">
              <li><span className="leaf">🌿</span> Ayurveda Therapy</li>
              <li><span className="leaf">🌿</span> Functional Nutrition &amp; Diet</li>
              <li><span className="leaf">🌿</span> Yoga &amp; Meditation</li>
              <li><span className="leaf">🌿</span> Behavioural Therapy</li>
              <li><span className="leaf">🌿</span> Lactation Therapy</li>
              <li><span className="leaf">🌿</span> Child Care &amp; Immunization</li>
            </ul>
          </div>
          <div className="intro-image">
            <img src="/assets/modern_motherhood.png" alt="Modern Motherhood" />
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="services-section" id="services">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What We Offer</span>
            <h2>Our Healing Services</h2>
          </div>

          {/* Service 1 */}
          <div className="service-row">
            <div className="service-image">
              <img src="/assets/ayurveda.png" alt="Ayurveda Therapy" />
            </div>
            <div className="service-text">
              <span className="service-tag">01</span>
              <h3>Ayurveda Therapy</h3>
              <div className="service-item">
                <strong>Herbal Medicated Oil Therapy – Abhyangam</strong>
                <p>Abhyangam enhances skin luster, improves skin tone, and promotes overall well-being through deep herbal oil massage.</p>
              </div>
              <div className="service-item">
                <strong>Decoction Herbal Bath – Kashaya Dhara</strong>
                <p>Warm herbal decoctions poured over the body to soothe joint pain, reduce inflammation, and support postpartum recovery.</p>
              </div>
              <div className="service-item">
                <strong>Pottali Treatment – Kizhi</strong>
                <p>Different herbal pottali are recommended based on the mother's health condition and type of delivery.</p>
              </div>
              <div className="service-item">
                <strong>Post-Partum Weight Loss &amp; Cosmetic Care</strong>
                <p>Gentle abdominal wrapping, skincare and hair wellness to support recovery and confidence.</p>
              </div>
            </div>
          </div>

          {/* Service 2 */}
          <div className="service-row reverse">
            <div className="service-image">
              <img src="/assets/nutrition.png" alt="Functional Nutrition" />
            </div>
            <div className="service-text">
              <span className="service-tag">02</span>
              <h3>Functional Nutrition &amp; Dietetics</h3>
              <p>Functional nutrition focuses on the mind and body, with a strong emphasis on personalized care. At Herbal Park, we view food as a double-edged sword — it can nurture your health or contribute to disease.</p>
              <p>Our holistic approach focuses on Prakrithi Analysis, Personalised Diet Plans, and Herbal Supplements tailored to gut health for optimal wellness for new mothers.</p>
            </div>
          </div>

          {/* Service 3 */}
          <div className="service-row">
            <div className="service-image">
              <img src="/assets/yoga.png" alt="Yoga & Meditation" />
            </div>
            <div className="service-text">
              <span className="service-tag">03</span>
              <h3>Yoga &amp; Meditation</h3>
              <p>By combining Ayurveda with yoga and meditation, new moms can enhance recovery, reduce stress, and regain strength.</p>
              <strong className="list-title">Key yoga poses for postpartum care:</strong>
              <ul className="styled-list">
                <li><strong>Balasana – Child's Pose:</strong> Relaxation and stress relief</li>
                <li><strong>Bhujangasana – Cobra Pose:</strong> Strengthens back and abdominal muscles</li>
                <li><strong>Setu Bandhasana – Bridge Pose:</strong> Improves pelvic floor health</li>
                <li><strong>Adho Mukha Svanasana – Downward Dog:</strong> Strengthens the whole body</li>
              </ul>
            </div>
          </div>

          {/* Service 4 */}
          <div className="service-row reverse">
            <div className="service-image">
              <img src="/assets/behavioural.png" alt="Behavioural Therapy" />
            </div>
            <div className="service-text">
              <span className="service-tag">04</span>
              <h3>Behavioural Therapy</h3>
              <p>We integrate Ayurvedic principles with behavioural therapy to help mothers navigate the emotional and psychological shifts after childbirth.</p>
              <strong className="list-title">We offer:</strong>
              <ul className="styled-list">
                <li><strong>Inter-personal Therapy</strong> to enhance communication and emotional support</li>
                <li><strong>Nurturing Mom-Baby Bond</strong> practices to strengthen the relationship</li>
                <li><strong>Music Therapy</strong> to soothe the mind and promote emotional balance</li>
                <li><strong>Couples Counseling</strong> to strengthen relationships and family environments</li>
              </ul>
            </div>
          </div>

          {/* Service 5 */}
          <div className="service-row">
            <div className="service-image">
              <img
                src="https://images.unsplash.com/photo-1555252333-9f8e92e65df9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Lactation Therapy"
              />
            </div>
            <div className="service-text">
              <span className="service-tag">05</span>
              <h3>Lactation Therapy</h3>
              <p>At AyurMa by Herbal Park, we understand that breastfeeding is more than feeding — it's a sacred bond that nurtures emotional connection, immunity, and growth.</p>
              <strong className="list-title">We include:</strong>
              <ol className="styled-list ordered">
                <li>Herbal galactagogue formulations to boost milk supply</li>
                <li>Dietary and lifestyle guidance tailored to your needs</li>
                <li>Support with proper lactation techniques for a comfortable, nourishing experience</li>
              </ol>
            </div>
          </div>

          {/* Service 6 */}
          <div className="service-row reverse last">
            <div className="service-image">
              <img
                src="https://images.unsplash.com/photo-1519689680058-324335c77eba?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Child Care & Immunization"
              />
            </div>
            <div className="service-text">
              <span className="service-tag">06</span>
              <h3>Child Care &amp; Immunization</h3>
              <p>Ayurveda offers a holistic framework that supports the child's natural development while complementing modern immunization for comprehensive protection.</p>
              <p>Ayurma at Herbal Park nurtures the newborn's body, mind, and immunity — creating a strong foundation for life, honoring both ancient wisdom and modern science.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Why Choose Us</span>
            <h2>Feel Stronger. Sleep Better.<br />Recover Naturally.</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h4>Relieves body aches and fatigue</h4>
              <p>Our soothing therapies ease muscle soreness, reduce joint pain, boost circulation, and restore energy — helping new mothers feel stronger and more refreshed daily.</p>
            </div>
            <div className="benefit-card">
              <h4>Aids womb recovery and weight management</h4>
              <p>Traditional techniques support womb healing, strengthen core muscles, and encourage healthy postnatal weight management for a smooth recovery journey.</p>
            </div>
            <div className="benefit-card">
              <h4>Reduces stress and anxiety</h4>
              <p>Gentle massages and steam therapies calm the mind, relieve emotional tension, and help you feel peaceful and centered during the postpartum phase.</p>
            </div>
            <div className="benefit-card">
              <h4>Enhances breast milk production</h4>
              <p>Our nourishing diet plans and herbal treatments are designed to improve lactation and ensure your baby receives the best natural nutrition.</p>
            </div>
            <div className="benefit-card wide">
              <h4>Restores hormonal balance</h4>
              <p>Herbal treatments and massage therapies help stabilize hormonal levels, supporting mood, sleep, and overall postpartum well-being naturally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="pricing-section" id="pricing">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">Care Packages</span>
            <h2>What's Included in Our Packages</h2>
          </div>
          <div className="pricing-cards">

            <div className="price-card">
              <div className="price-header blue">
                <h3>7-Day Package</h3>
                <p>Perfect for a focused healing start</p>
              </div>
              <ul className="price-features">
                <li><CheckIcon /> Daily Ayurvedic therapy sessions</li>
                <li><CheckIcon /> Herbal oil massages for relaxation and healing</li>
                <li><CheckIcon /> Personalized postnatal diet guide</li>
              </ul>
              <div className="price-action">
                <a href="https://wa.me/971564169883?text=Hi%2C%20I%20would%20like%20to%20book%20the%207-Day%20Package%20at%20Herbal%20Park." target="_blank" rel="noreferrer" className="btn btn-primary">Book Now</a>
              </div>
            </div>

            <div className="price-card featured">
              <div className="price-badge">Most Popular</div>
              <div className="price-header orange">
                <h3>14-Day Package</h3>
                <p>Deep care for full recovery</p>
              </div>
              <ul className="price-features">
                <li><CheckIcon /> Extended daily care with Ayurvedic therapies</li>
                <li><CheckIcon /> Steam therapy to support detox and recovery</li>
                <li><CheckIcon /> Belly binding/wrap for core strength</li>
                <li><CheckIcon /> Emotional wellness and mindfulness sessions</li>
              </ul>
              <div className="price-action">
                <a href="https://wa.me/971564169883?text=Hi%2C%20I%20would%20like%20to%20book%20the%2014-Day%20Package%20at%20Herbal%20Park." target="_blank" rel="noreferrer" className="btn btn-primary">Book Now</a>
              </div>
            </div>

            <div className="price-card">
              <div className="price-header teal">
                <h3>Customized Plan</h3>
                <p>Tailored to your unique needs</p>
              </div>
              <ul className="price-features">
                <li><CheckIcon /> Gentle scar care with herbal oils</li>
                <li><CheckIcon /> Core muscle support techniques</li>
                <li><CheckIcon /> Extended healing timeline as needed</li>
              </ul>
              <div className="price-action">
                <a href="https://wa.me/971564169883?text=Hi%2C%20I%20would%20like%20to%20enquire%20about%20a%20Customized%20Plan%20at%20Herbal%20Park." target="_blank" rel="noreferrer" className="btn btn-primary">Book Now</a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <span className="section-eyebrow">What Mothers Say</span>
            <h2>Client Testimonials</h2>
          </div>
          <div className="testimonial-grid">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"The best Ayurvedic centre. I am doing postnatal treatment and I am really enjoying each session. Staffs are really kind &amp; professional."</p>
              <strong>— Shabnam Khan</strong>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"I recently visited Herbal Park for my peripheral neuropathy. After few sessions of the 14-day plan, I began to feel significantly better."</p>
              <strong>— Jorden Jacob</strong>
            </div>
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <p>"The personalised diet plan and therapy sessions helped me recover so much faster than I expected. I feel like myself again. Truly wonderful care."</p>
              <strong>— Priya Menon</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className="contact-section" id="contact">
        <div className="container">
          <div className="contact-card">
            <div className="contact-info">
              <span className="section-eyebrow light">Get In Touch</span>
              <h2>Schedule Your Post Natal Healing Today!</h2>
              <p>Experience the care, support, and rejuvenation you deserve on your postpartum journey. Our tailored sessions promote physical recovery, emotional well-being, and inner balance.</p>
              <div className="contact-details">
                <div className="contact-detail-item">
                  <span className="detail-icon">📍</span>
                  <span>Mezzanine Floor, Gemaco Building
Old Airport Road, Abu Dhabi

Specialities
Ayurveda
Hijama
Unani Medicine
Yoga Therapy
Homeopathy
</span>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-icon">📞</span>
                  <span>+971 56 416 9883</span>
                </div>
                <div className="contact-detail-item">
                  <span className="detail-icon">✉️</span>
                  <span>Info@herbalpark.ae</span>
                </div>
              </div>
              <div className="contact-image">
                <img src="/assets/hero_bg.png" alt="Herbal Park Consultation" />
              </div>
            </div>
            <div className="contact-form">
              <h3>Send Us a Message</h3>
              <div className="form-group">
                <label>Name</label>
                <input type="text" name="name" placeholder="Your full name" value={form.name} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" name="email" placeholder="your@email.com" value={form.email} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input type="tel" name="phone" placeholder="+971 00 000 0000" value={form.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" placeholder="Tell us how we can help you..." value={form.message} onChange={handleChange}></textarea>
              </div>
              <button type="button" className="btn btn-primary full-width" onClick={handleSendToWhatsApp}>
                Send via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer">
        <div className="container">
          <div className="footer-inner">

            <div className="footer-brand">
              <img src="/logo.png" alt="Herbal Park Logo" className="footer-logo-img" />
              <p>Authentic Ayurvedic postnatal care rooted in ancient wisdom, crafted for modern motherhood.</p>
            </div>

            <div className="footer-links">
              <h4>Quick Links</h4>
              <a href="#home">Home</a>
              <a href="#about">About Us</a>
              <a href="#services">Our Services</a>
              <a href="#pricing">Packages</a>
              <a href="#contact">Contact Us</a>
            </div>

            <div className="footer-services">
              <h4>Services</h4>
              <a href="#services">Ayurveda Therapy</a>
              <a href="#services">Nutrition &amp; Diet</a>
              <a href="#services">Yoga &amp; Meditation</a>
              <a href="#services">Lactation Therapy</a>
              <a href="#services">Child Care</a>
            </div>

            <div className="footer-social-col">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a
                  href="https://www.instagram.com/herbalpark_ayurveda"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn social-insta"
                  aria-label="Instagram"
                >
                  <InstagramIcon /> Instagram
                </a>
                <a
                  href="https://www.facebook.com/herbalparkayurveda"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn social-fb"
                  aria-label="Facebook"
                >
                  <FacebookIcon /> Facebook
                </a>
                <a
                  href="https://www.linkedin.com/company/herbalpark/"
                  target="_blank"
                  rel="noreferrer"
                  className="social-btn social-li"
                  aria-label="LinkedIn"
                >
                  <LinkedInIcon /> LinkedIn
                </a>
              </div>
            </div>

          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Herbal Park Ayurvedic Health Center. All rights reserved.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;