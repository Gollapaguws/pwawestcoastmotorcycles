import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import { styles } from '../../styles/shared-styles.js';

@customElement('app-chauffeur')
export class AppChauffeur extends LitElement {
  @state() private formData = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    eventType: '',
    passengers: '2',
    notes: ''
  };

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

      .services-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1.5rem;
        margin: 2rem 0;
      }

      .service-card {
        background: #1e293b;
        border-left: 4px solid #f97316;
        padding: 1.5rem;
        border-radius: 4px;
      }

      .service-card h3 {
        color: #f97316;
        font-size: 1.1rem;
        margin: 0 0 0.75rem 0;
      }

      .service-card p {
        margin: 0;
        font-size: 0.9rem;
      }

      .form-section {
        background: #1e293b;
        border: 1px solid #334155;
        padding: 2rem;
        border-radius: 8px;
        margin: 2rem 0;
      }

      .form-group {
        margin-bottom: 1.5rem;
      }

      .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: #ffffff;
        font-weight: 500;
        font-size: 0.95rem;
      }

      .form-group input,
      .form-group select,
      .form-group textarea {
        width: 100%;
        padding: 0.75rem;
        background: #0f172a;
        border: 1px solid #334155;
        color: #ffffff;
        border-radius: 4px;
        font-size: 0.95rem;
        font-family: inherit;
      }

      .form-group input:focus,
      .form-group select:focus,
      .form-group textarea:focus {
        outline: none;
        border-color: #f97316;
        box-shadow: 0 0 0 2px rgba(249, 115, 22, 0.1);
      }

      .form-group textarea {
        resize: vertical;
        min-height: 120px;
      }

      .form-row {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
      }

      .submit-button {
        background: #f97316 !important;
        color: white !important;
        width: 100%;
        height: 48px;
        font-size: 1rem;
        font-weight: 600;
      }

      .submit-button:hover {
        background: #ea580c !important;
      }

      .pricing-table {
        width: 100%;
        border-collapse: collapse;
        margin: 1.5rem 0;
      }

      .pricing-table th,
      .pricing-table td {
        padding: 1rem;
        text-align: left;
        border-bottom: 1px solid #334155;
        color: #cbd5e1;
      }

      .pricing-table th {
        background: #0f172a;
        color: #f97316;
        font-weight: 600;
      }

      .pricing-table tr:hover {
        background: #0f172a;
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

        .form-row {
          grid-template-columns: 1fr;
        }

        .services-grid {
          grid-template-columns: 1fr;
        }
      }
    `,
  ];

  private handleInputChange(field: keyof typeof this.formData, value: string) {
    this.formData = { ...this.formData, [field]: value };
  }

  private handleSubmit(e: Event) {
    e.preventDefault();
    alert(
      `Booking request received!\n\n` +
      `Name: ${this.formData.name}\n` +
      `Email: ${this.formData.email}\n` +
      `Phone: ${this.formData.phone}\n` +
      `Date: ${this.formData.date}\n` +
      `Time: ${this.formData.time}\n` +
      `Event: ${this.formData.eventType}\n` +
      `Passengers: ${this.formData.passengers}\n\n` +
      `We will contact you within 1 hour to confirm your booking.`
    );
  }

  render() {
    return html`
      <main>
        <section class="hero">
          <h1>Chauffeur Services</h1>
          <p>Premium Harley-Davidson Riding Experience for Special Occasions</p>
        </section>

        <div class="container">
          <section class="section">
            <h2>Ride in Style & Comfort</h2>
            <p>
              Looking for a unique and unforgettable way to celebrate a special occasion? Our professional chauffeur service
              offers the perfect combination of adventure and elegance. Whether it's a wedding, anniversary, corporate event, or
              just a memorable day out, our expert riders will ensure you have an incredible experience.
            </p>
          </section>

          <section class="section">
            <h2>Our Services</h2>
            <div class="services-grid">
              <div class="service-card">
                <h3>🎊 Weddings & Celebrations</h3>
                <p>Make your special day unforgettable with a premium Harley-Davidson chauffeur experience for the bride, groom, or entire wedding party.</p>
              </div>
              <div class="service-card">
                <h3>💼 Corporate Events</h3>
                <p>Impress your clients and team members with a unique corporate outing or executive transportation on premium bikes.</p>
              </div>
              <div class="service-card">
                <h3>🎉 Birthday & Anniversaries</h3>
                <p>Celebrate milestone moments with a thrilling guided ride to your favorite destination.</p>
              </div>
              <div class="service-card">
                <h3>🎬 Special Productions</h3>
                <p>Film and photoshoot support with professional riders and luxury motorcycles for your creative projects.</p>
              </div>
              <div class="service-card">
                <h3>🏨 Hotel Transfers</h3>
                <p>Luxury transportation from airport or hotel to your destination with professional and courteous service.</p>
              </div>
              <div class="service-card">
                <h3>🌅 Scenic Tours</h3>
                <p>Custom guided motorcycle tours with professional chauffeurs familiar with the best routes in the region.</p>
              </div>
            </div>
          </section>

          <section class="section">
            <h2>Pricing</h2>
            <table class="pricing-table">
              <thead>
                <tr>
                  <th>Service Type</th>
                  <th>Duration</th>
                  <th>Price per Motorcycle</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Airport Transfer</td>
                  <td>Up to 2 hours</td>
                  <td>R600</td>
                </tr>
                <tr>
                  <td>City Tour with Chauffeur</td>
                  <td>3 hours</td>
                  <td>R900</td>
                </tr>
                <tr>
                  <td>Half-Day Chauffeur Service</td>
                  <td>4-5 hours</td>
                  <td>R1,200</td>
                </tr>
                <tr>
                  <td>Full-Day Chauffeur Service</td>
                  <td>8 hours</td>
                  <td>R2,000</td>
                </tr>
                <tr>
                  <td>Wedding Chauffeur Package</td>
                  <td>Customized</td>
                  <td>R1,500+</td>
                </tr>
                <tr>
                  <td>Corporate Event Package</td>
                  <td>Customized</td>
                  <td>R2,500+</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section class="form-section">
            <h2>Book Your Chauffeur Service</h2>
            <form @submit="${this.handleSubmit}">
              <div class="form-row">
                <div class="form-group">
                  <label for="name">Full Name *</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value="${this.formData.name}"
                    @input="${(e: any) => this.handleInputChange('name', e.target.value)}"
                    placeholder="Your full name"
                  />
                </div>
                <div class="form-group">
                  <label for="email">Email Address *</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value="${this.formData.email}"
                    @input="${(e: any) => this.handleInputChange('email', e.target.value)}"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="phone">Phone Number *</label>
                  <input
                    id="phone"
                    type="tel"
                    required
                    value="${this.formData.phone}"
                    @input="${(e: any) => this.handleInputChange('phone', e.target.value)}"
                    placeholder="+27 72 666 7050"
                  />
                </div>
                <div class="form-group">
                  <label for="eventType">Event Type *</label>
                  <select
                    id="eventType"
                    required
                    value="${this.formData.eventType}"
                    @input="${(e: any) => this.handleInputChange('eventType', e.target.value)}"
                  >
                    <option value="">Select an event type</option>
                    <option value="wedding">Wedding</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="corporate">Corporate Event</option>
                    <option value="transfer">Airport Transfer</option>
                    <option value="tour">Scenic Tour</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="date">Preferred Date *</label>
                  <input
                    id="date"
                    type="date"
                    required
                    value="${this.formData.date}"
                    @input="${(e: any) => this.handleInputChange('date', e.target.value)}"
                  />
                </div>
                <div class="form-group">
                  <label for="time">Preferred Time *</label>
                  <input
                    id="time"
                    type="time"
                    required
                    value="${this.formData.time}"
                    @input="${(e: any) => this.handleInputChange('time', e.target.value)}"
                  />
                </div>
              </div>

              <div class="form-group">
                <label for="passengers">Number of Passengers *</label>
                <select
                  id="passengers"
                  required
                  value="${this.formData.passengers}"
                  @input="${(e: any) => this.handleInputChange('passengers', e.target.value)}"
                >
                  <option value="1">1 Passenger (1 Motorcycle)</option>
                  <option value="2">2 Passengers (1-2 Motorcycles)</option>
                  <option value="3">3-4 Passengers (2 Motorcycles)</option>
                  <option value="4">5-6 Passengers (3 Motorcycles)</option>
                </select>
              </div>

              <div class="form-group">
                <label for="notes">Additional Notes</label>
                <textarea
                  id="notes"
                  value="${this.formData.notes}"
                  @input="${(e: any) => this.handleInputChange('notes', e.target.value)}"
                  placeholder="Tell us more about your event or special requests..."
                ></textarea>
              </div>

              <sl-button type="submit" class="submit-button">
                Request Chauffeur Service
              </sl-button>
            </form>
          </section>

          <section class="section">
            <h2>Questions?</h2>
            <p>
              Contact us directly to discuss your specific needs and get a custom quote for your chauffeur service.
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:+27726667050" style="color: #f97316; text-decoration: none;">+27 72 666 7050</a><br>
              <strong>Email:</strong> <a href="mailto:support@westcoastmotorcycles.co.za" style="color: #f97316; text-decoration: none;">support@westcoastmotorcycles.co.za</a>
            </p>
          </section>
        </div>
      </main>
    `;
  }
}
