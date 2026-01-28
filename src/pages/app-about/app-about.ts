import { LitElement, css, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { styles } from '../../styles/shared-styles.js';

@customElement('app-about')
export class AppAbout extends LitElement {
  static styles = [
    styles,
    css`
      main {
        background: linear-gradient(to bottom right, #0f172a, #0f1729, #0f172a);
        min-height: 100vh;
        padding-top: 80px;
      }

      .hero {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(15, 23, 42, 0.6)),
                    url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&q=80');
        background-position: center;
        background-size: cover;
        color: white;
        padding: 4rem 1rem 3rem;
        text-align: left;
        margin-bottom: 2rem;
        min-height: 300px;
        display: flex;
        flex-direction: column;
        justify-content: center;
      }

      .hero h1 {
        font-size: 2.5rem;
        margin: 0 0 0.5rem 0;
        font-weight: 600;
      }

      .hero p {
        font-size: 1.1rem;
        color: #cbd5e1;
        margin: 0;
      }

      .container {
        max-width: 1000px;
        margin: 0 auto;
        padding: 2rem 1rem;
      }

      .section {
        margin-bottom: 3rem;
      }

      .section h2 {
        font-size: 2rem;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 1.5rem;
      }

      .section p {
        font-size: 1rem;
        color: #cbd5e1;
        line-height: 1.8;
        margin-bottom: 1rem;
      }

      .section ul {
        list-style: none;
        padding: 0;
        margin: 1.5rem 0;
      }

      .section li {
        padding: 0.75rem 0;
        padding-left: 2rem;
        color: #cbd5e1;
        position: relative;
      }

      .section li:before {
        content: "✓";
        position: absolute;
        left: 0;
        color: #f97316;
        font-weight: 700;
      }

      .team {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 2rem;
        margin-top: 2rem;
      }

      .team-member {
        background: #1e293b;
        border: 1px solid #334155;
        padding: 2rem;
        border-radius: 8px;
        text-align: center;
      }

      .team-member h3 {
        color: #ffffff;
        font-size: 1.2rem;
        margin: 1rem 0 0.5rem;
      }

      .team-member p {
        color: #cbd5e1;
        font-size: 0.9rem;
        margin: 0.5rem 0;
      }

      .values {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
      }

      .value-card {
        background: #1e293b;
        border-left: 4px solid #f97316;
        padding: 1.5rem;
        border-radius: 4px;
      }

      .value-card h3 {
        color: #f97316;
        font-size: 1.1rem;
        margin: 0 0 0.75rem 0;
      }

      .value-card p {
        margin: 0;
        font-size: 0.9rem;
      }

      a {
        color: #f97316;
        text-decoration: none;
      }

      a:hover {
        text-decoration: underline;
      }

      @media (max-width: 768px) {
        .hero {
          padding: 3rem 1rem 2rem;
        }

        .hero h1 {
          font-size: 1.8rem;
        }

        .container {
          padding: 1.5rem 1rem;
        }

        .section h2 {
          font-size: 1.5rem;
        }
      }
    `,
  ];

  render() {
    return html`
      <main>
        <section class="hero">
          <h1>About West Coast Motorcycles</h1>
          <p>Premium Harley-Davidson Rentals in Cape Town Since 2015</p>
        </section>

        <div class="container">
          <section class="section">
            <h2>Our Story</h2>
            <p>
              West Coast Motorcycles was founded in 2015 with a simple mission: to provide the ultimate
              motorcycle rental experience in Cape Town. What started as a small operation with just a few bikes
              has grown into the premier destination for Harley-Davidson rentals in South Africa.
            </p>
            <p>
              We believe that riding a motorcycle isn't just about transportation—it's about freedom, adventure,
              and experiencing the world from a different perspective. That's why we're committed to ensuring
              every rider leaves our dealership with unforgettable memories.
            </p>
          </section>

          <section class="section">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>Premium Harley-Davidson motorcycles, all well-maintained and insured</li>
              <li>Competitive daily rates starting from R1,050</li>
              <li>Unlimited mileage on all rentals</li>
              <li>24/7 customer support and roadside assistance</li>
              <li>Flexible cancellation policy (free cancellation up to 24 hours)</li>
              <li>Guided tours of Cape Town and the surrounding regions</li>
              <li>Chauffeur service for special occasions</li>
              <li>Professional staff with extensive motorcycle expertise</li>
            </ul>
          </section>

          <section class="section">
            <h2>Our Values</h2>
            <div class="values">
              <div class="value-card">
                <h3>Safety First</h3>
                <p>Your safety is our top priority. All motorcycles are regularly inspected and maintained to the highest standards.</p>
              </div>
              <div class="value-card">
                <h3>Customer Excellence</h3>
                <p>We go above and beyond to ensure every customer has an exceptional experience with us.</p>
              </div>
              <div class="value-card">
                <h3>Quality Equipment</h3>
                <p>We only offer premium Harley-Davidson motorcycles that are well-maintained and reliable.</p>
              </div>
              <div class="value-card">
                <h3>Local Expertise</h3>
                <p>Our team knows Cape Town inside and out, ready to recommend the best routes and hidden gems.</p>
              </div>
            </div>
          </section>

          <section class="section">
            <h2>Meet The Team</h2>
            <p>Our experienced staff is passionate about motorcycles and dedicated to making your rental experience unforgettable.</p>
            <div class="team">
              <div class="team-member">
                <div style="font-size: 2rem;">👤</div>
                <h3>Marcus van der Westhuizen</h3>
                <p>Founder & Owner</p>
                <p style="font-size: 0.85rem; color: #94a3b8;">Harley enthusiast since 1998. Over 20 years of riding experience.</p>
              </div>
              <div class="team-member">
                <div style="font-size: 2rem;">👤</div>
                <h3>Sarah Johnson</h3>
                <p>Operations Manager</p>
                <p style="font-size: 0.85rem; color: #94a3b8;">Ensures every bike is in perfect condition for your adventure.</p>
              </div>
              <div class="team-member">
                <div style="font-size: 2rem;">👤</div>
                <h3>Johan Pieterse</h3>
                <p>Tour Guide</p>
                <p style="font-size: 0.85rem; color: #94a3b8;">Expert guide for Cape Town's most scenic motorcycle routes.</p>
              </div>
            </div>
          </section>

          <section class="section">
            <h2>Contact Information</h2>
            <p><strong>Phone:</strong> <a href="tel:+27726667050">+27 72 666 7050</a></p>
            <p><strong>Email:</strong> <a href="mailto:support@westcoastmotorcycles.co.za">support@westcoastmotorcycles.co.za</a></p>
            <p><strong>Address:</strong> Shop 1, Marconi Centre, 460 Koeberg Road, Milnerton, 7441</p>
            <p><strong>Hours:</strong> Monday - Sunday, 8:00 AM - 6:00 PM</p>
          </section>
        </div>
      </main>
    `;
  }
}
            apps that use machine learning and more!
          </p>

          <p>Check out <a
              href="https://docs.microsoft.com/en-us/microsoft-edge/progressive-web-apps-chromium/how-to/handle-files">these
              docs</a> to learn more about the advanced features that you can use in your PWA</p>
        </sl-card>
      </main>
    `;
  }
}
