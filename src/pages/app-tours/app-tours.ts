import { LitElement, css, html } from 'lit';
import { customElement, state } from 'lit/decorators.js';

import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';

import { styles } from '../../styles/shared-styles';
import { MotorcycleService } from '../../services/motorcycle-service.js';
import type { Tour } from '../../types/motorcycle.js';

@customElement('app-tours')
export class AppTours extends LitElement {

  @state() private tours: Tour[] = [];
  @state() private loading = true;

  static styles = [
    styles,
    css`
      .hero {
        background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
                    url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=80') center/cover;
        color: white;
        padding: 6rem 1rem 4rem;
        text-align: center;
        margin: -12px -12px 2rem -12px;
        min-height: 350px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      .hero h1 {
        margin: 0;
        font-size: 3rem;
        font-weight: 700;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
      }

      .hero p {
        font-size: 1.2rem;
        margin-top: 1rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
      }

      .section {
        margin-bottom: 3rem;
      }

      .section h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
        color: var(--sl-color-neutral-900);
        font-weight: 600;
      }

      .tours-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 2rem;
        margin-bottom: 2rem;
      }

      .tour-card {
        border: 1px solid var(--sl-color-neutral-200);
        border-radius: 8px;
        overflow: hidden;
        background: white;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
      }

      .tour-card:hover {
        transform: translateY(-4px);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.15);
      }

      .tour-image {
        width: 100%;
        height: 250px;
        object-fit: cover;
      }

      .tour-content {
        padding: 2rem;
      }

      .tour-content h3 {
        margin: 0 0 1rem 0;
        font-size: 1.4rem;
        color: var(--sl-color-neutral-900);
      }

      .tour-description {
        color: var(--sl-color-neutral-700);
        font-size: 1rem;
        line-height: 1.6;
        margin-bottom: 1.5rem;
      }

      .tour-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
        padding-bottom: 1.5rem;
        border-bottom: 1px solid var(--sl-color-neutral-200);
      }

      .tour-duration {
        color: var(--sl-color-neutral-600);
        font-size: 1rem;
        font-weight: 500;
      }

      .tour-price {
        font-size: 1.5rem;
        font-weight: 700;
        color: #E1477E;
      }

      .tour-includes {
        margin-bottom: 1.5rem;
      }

      .tour-includes strong {
        display: block;
        font-size: 0.95rem;
        color: var(--sl-color-neutral-900);
        margin-bottom: 0.75rem;
      }

      .tour-includes ul {
        margin: 0;
        padding-left: 1.5rem;
        font-size: 0.95rem;
        color: var(--sl-color-neutral-700);
        line-height: 1.6;
      }

      .loading {
        text-align: center;
        padding: 3rem;
      }

      @media(min-width: 768px) {
        .hero h1 {
          font-size: 3.5rem;
        }

        .tours-grid {
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
        }
      }
    `
  ];

  async firstUpdated() {
    await this.loadTours();
  }

  async loadTours() {
    try {
      this.tours = await MotorcycleService.getTours();
    } catch (error) {
      console.error('Failed to load tours:', error);
    } finally {
      this.loading = false;
    }
  }

  renderTour(tour: Tour) {
    return html`
      <div class="tour-card">
        <img src="${tour.image}" alt="${tour.name}" class="tour-image" />
        <div class="tour-content">
          <h3>${tour.name}</h3>
          <p class="tour-description">${tour.description}</p>
          <div class="tour-details">
            <div class="tour-duration">
              <span style="font-weight: 600;">⏱️</span> ${tour.duration}
            </div>
            <div class="tour-price">R${tour.price.toLocaleString()}</div>
          </div>
          <div class="tour-includes">
            <strong>What's Included:</strong>
            <ul>
              ${tour.included.map(item => html`<li>✓ ${item}</li>`)}
            </ul>
          </div>
          <sl-button variant="primary" href="${MotorcycleService.getToursUrl()}" target="_blank" size="large" style="width: 100%;">
            Book This Tour
          </sl-button>
        </div>
      </div>
    `;
  }

  render() {
    return html`
      <app-header></app-header>

      <main>
        <div class="hero">
          <h1>Guided Harley Tours</h1>
          <p>Experience Cape Town's best rides with expert guides</p>
        </div>

        ${this.loading ? html`
          <div class="loading">
            <sl-spinner style="font-size: 3rem;"></sl-spinner>
            <p>Loading tours...</p>
          </div>
        ` : html`
          <div class="section">
            <h2>Our Tours</h2>
            <div class="tours-grid">
              ${this.tours.map(tour => this.renderTour(tour))}
            </div>
          </div>

          <div class="section" style="background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%); padding: 2rem; border-radius: 8px;">
            <h2 style="margin-top: 0;">Why Book With Us?</h2>
            <ul style="list-style: none; padding: 0; font-size: 1.05rem; color: var(--sl-color-neutral-700); line-height: 2;">
              <li>✓ Professional, experienced guides</li>
              <li>✓ Premium Harley-Davidson motorcycles</li>
              <li>✓ Flexible tour durations and routes</li>
              <li>✓ All safety gear included</li>
              <li>✓ Small group sizes for personalized service</li>
              <li>✓ 24/7 support and roadside assistance</li>
            </ul>
          </div>

          <div class="contact-info" style="background: var(--sl-color-neutral-50); padding: 2rem; border-radius: 8px; margin-top: 3rem;">
            <h3>Questions? Get in Touch</h3>
            <p>
              📞 <a href="tel:${MotorcycleService.BUSINESS_INFO.phone}" style="color: #E1477E; text-decoration: none;">${MotorcycleService.BUSINESS_INFO.phone}</a><br>
              ✉️ <a href="mailto:${MotorcycleService.BUSINESS_INFO.email}" style="color: #E1477E; text-decoration: none;">${MotorcycleService.BUSINESS_INFO.email}</a>
            </p>
          </div>
        `}
      </main>
    `;
  }
}
