import { LitElement, css, html } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/card/card.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/badge/badge.js';
import '@shoelace-style/shoelace/dist/components/spinner/spinner.js';
import '@shoelace-style/shoelace/dist/components/input/input.js';
import '@shoelace-style/shoelace/dist/components/rating/rating.js';
import { styles } from '../styles/shared-styles.js';
import { MotorcycleService } from '../services/motorcycle-service.js';
import type { Motorcycle, SpecialOffer, Testimonial } from '../types/motorcycle.js';

@customElement('app-home')
export class AppHome extends LitElement {
  @property() message = 'Explore Cape Town';
  @property() subtitle = 'on A Harley Davidson';

  @state() private motorcycles: Motorcycle[] = [];
  @state() private offers: SpecialOffer[] = [];
  @state() private testimonials: Testimonial[] = [];
  @state() private loading = true;
  @state() private searchQuery = '';
  @state() private categoryFilter = 'all';
  @state() private priceFilter = 'all';
  @state() private sortBy = 'price_low';
  @state() private showMobileFilters = false;

  static styles = [
    styles,
    css`
      main {
        background: linear-gradient(to bottom right, #0f172a, #0f1729, #0f172a);
        min-height: 100vh;
      }

      .hero {
        background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(15, 23, 42, 0.6)),
                    url('https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=1600&q=80');
        background-position: center;
        background-size: cover;
        color: white;
        padding: 4rem 1rem 3rem;
        text-align: left;
        margin: -12px -12px 2rem -12px;
        min-height: 320px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        opacity: 0.7;
      }

      .hero h1 {
        margin: 0 0 0.5rem 0;
        font-size: 2.5rem;
        font-weight: 600;
        line-height: 1.2;
      }

      .hero .subtitle {
        font-size: 2.8rem;
        color: #f97316;
        font-weight: 600;
        margin-bottom: 1rem;
      }

      .hero p {
        font-size: 1.1rem;
        margin: 0;
        opacity: 0.9;
        font-weight: 400;
      }

      .hero-content {
        max-width: 900px;
      }

      .search-bar {
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
      }

      .search-input {
        flex: 1;
        height: 56px;
      }

      .filter-button {
        background: #f97316 !important;
        color: white !important;
        height: 56px;
        padding: 0 1.5rem;
      }

      .section {
        padding: 2rem 1rem;
        max-width: 1400px;
        margin: 0 auto;
      }

      .section h2 {
        font-size: 2rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: #ffffff;
      }

      .section > p {
        color: #cbd5e1;
        margin-bottom: 2rem;
        font-size: 1rem;
        font-weight: 400;
      }

      .filters-nav {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
        margin-bottom: 2rem;
        align-items: center;
      }

      .filter-select {
        width: 200px;
        background: #1e293b !important;
        border-color: #334155 !important;
        color: white !important;
        padding: 0.5rem;
        border-radius: 4px;
        border: 1px solid #334155;
      }

      .bikes-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .bike-card {
        background: #1e293b;
        border: 1px solid #334155;
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.3s ease;
        display: flex;
        flex-direction: column;
      }

      .bike-card:hover {
        border-color: #475569;
        box-shadow: 0 8px 16px rgba(0, 0, 0, 0.5);
        transform: translateY(-2px);
      }

      .bike-image {
        width: 100%;
        height: 220px;
        object-fit: cover;
      }

      .bike-info {
        padding: 1rem;
        flex: 1;
        display: flex;
        flex-direction: column;
      }

      .bike-name {
        font-weight: 600;
        font-size: 1rem;
        margin-bottom: 0.5rem;
        color: #ffffff;
      }

      .bike-meta {
        display: flex;
        gap: 0.5rem;
        margin-bottom: 0.75rem;
        font-size: 0.85rem;
        color: #cbd5e1;
        font-weight: 400;
      }

      .bike-details {
        display: flex;
        gap: 0.75rem;
        flex-wrap: wrap;
        margin: 0.75rem 0;
        font-size: 0.85rem;
      }

      .bike-detail-item {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        color: #cbd5e1;
      }

      .bike-price {
        font-size: 1.2rem;
        font-weight: 700;
        color: #ffffff;
        margin: 0.75rem 0;
      }

      .bike-price-accent {
        color: #f97316;
      }

      .bike-price small {
        font-size: 0.75rem;
        font-weight: 400;
        color: #94a3b8;
      }

      .bike-button {
        background: #f97316 !important;
        color: white !important;
        width: 100%;
        margin-top: auto;
      }

      .loading {
        text-align: center;
        padding: 3rem;
        color: #ffffff;
      }

      .offers-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 1.5rem;
        margin-bottom: 2rem;
      }

      .offer-card {
        background: white;
        border: 1px solid #e2e8f0;
        border-left: 4px solid #f97316;
        padding: 1.5rem;
        border-radius: 4px;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
      }

      .offer-card h3 {
        margin: 0 0 0.5rem 0;
        font-size: 1.1rem;
        color: #1e293b;
        font-weight: 600;
      }

      .offer-discount {
        font-size: 1.5rem;
        font-weight: 700;
        color: #f97316;
        margin-bottom: 0.75rem;
      }

      .offer-card p {
        color: #64748b;
        line-height: 1.5;
        margin-bottom: 1rem;
        font-size: 0.95rem;
      }

      .offer-code {
        background: white;
        padding: 0.75rem 1rem;
        border: 1px dashed #f97316;
        border-radius: 4px;
        display: inline-block;
        margin-top: 0.5rem;
        font-family: monospace;
        font-weight: 600;
        color: #f97316;
      }

      .testimonials-carousel {
        display: flex;
        gap: 1.5rem;
        overflow-x: auto;
        padding-bottom: 1rem;
        margin-bottom: 2rem;
      }

      .testimonial-card {
        background: #1e293b;
        border: 1px solid #334155;
        padding: 1.5rem;
        border-radius: 4px;
        display: flex;
        flex-direction: column;
        min-width: 280px;
        flex-shrink: 0;
      }

      .testimonial-text {
        font-style: italic;
        color: #cbd5e1;
        margin: 0.75rem 0;
        line-height: 1.5;
        font-size: 0.95rem;
        flex: 1;
      }

      .testimonial-author {
        font-weight: 600;
        color: #ffffff;
        font-size: 0.9rem;
        margin-top: 0.75rem;
      }

      .testimonial-source {
        font-size: 0.8rem;
        color: #64748b;
      }

      .contact-section {
        background: #1e293b;
        padding: 2rem;
        border-radius: 4px;
        border: 1px solid #334155;
        margin-top: 2rem;
      }

      .contact-section h3 {
        margin: 0 0 1.5rem 0;
        font-size: 1.3rem;
        color: #ffffff;
        font-weight: 600;
      }

      .contact-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1.5rem;
      }

      .contact-item h4 {
        font-size: 0.95rem;
        margin: 0 0 0.5rem 0;
        color: #ffffff;
        font-weight: 600;
      }

      .contact-item p {
        margin: 0.25rem 0;
        font-size: 0.9rem;
        color: #cbd5e1;
      }

      .contact-info a {
        color: #f97316;
        text-decoration: none;
        font-weight: 500;
      }

      .contact-info a:hover {
        text-decoration: underline;
      }

      .empty-state {
        text-align: center;
        padding: 4rem 1rem;
      }

      .empty-state-icon {
        width: 80px;
        height: 80px;
        margin: 0 auto 1.5rem;
        border-radius: 50%;
        background: #334155;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.5rem;
      }

      .empty-state h3 {
        font-size: 1.5rem;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 0.5rem;
      }

      .empty-state p {
        color: #94a3b8;
        margin-bottom: 1.5rem;
      }

      .reset-button {
        background: transparent !important;
        border: 1px solid #475569 !important;
        color: #cbd5e1 !important;
      }

      .reset-button:hover {
        background: #334155 !important;
      }

      @media (max-width: 768px) {
        main {
          padding-top: 0;
        }

        .hero {
          padding: 2.5rem 1rem 1.5rem;
          min-height: 250px;
          margin: 0;
          opacity: 1;
        }

        .hero h1 {
          font-size: 1.8rem;
          margin-bottom: 0.5rem;
        }

        .hero .subtitle {
          font-size: 1.6rem;
          margin-bottom: 0.75rem;
        }

        .hero p {
          font-size: 0.95rem;
        }

        .search-bar {
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1.5rem;
        }

        .search-input {
          height: 48px;
        }

        .filter-button {
          height: 48px;
          width: 100%;
          padding: 0 1rem;
        }

        .section {
          padding: 1.5rem 1rem;
        }

        .section h2 {
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .section > p {
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .filters-nav {
          display: none;
        }

        .bikes-grid {
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
          gap: 1rem;
        }

        .bike-card {
          border-radius: 6px;
        }

        .bike-image {
          height: 160px;
        }

        .bike-info {
          padding: 0.75rem;
        }

        .bike-name {
          font-size: 0.9rem;
        }

        .bike-meta {
          font-size: 0.75rem;
          margin-bottom: 0.5rem;
        }

        .bike-details {
          gap: 0.5rem;
          margin: 0.5rem 0;
        }

        .bike-detail-item {
          font-size: 0.75rem;
        }

        .bike-price {
          font-size: 1rem;
          margin: 0.5rem 0;
        }

        .bike-button {
          padding: 0.75rem;
          font-size: 0.85rem;
          height: 40px;
        }

        .offers-grid {
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .offer-card {
          padding: 1.25rem;
        }

        .offer-card h3 {
          font-size: 1rem;
        }

        .offer-discount {
          font-size: 1.2rem;
        }

        .offer-card p {
          font-size: 0.9rem;
        }

        .testimonials-carousel {
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .testimonial-card {
          min-width: 240px;
          padding: 1rem;
        }

        .testimonial-text {
          font-size: 0.85rem;
          margin: 0.5rem 0;
        }

        .testimonial-author {
          font-size: 0.8rem;
        }

        .contact-grid {
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .contact-item h4 {
          font-size: 0.9rem;
        }

        .contact-item p {
          font-size: 0.85rem;
        }

        .empty-state {
          padding: 2rem 1rem;
        }

        .empty-state h3 {
          font-size: 1.3rem;
        }

        .empty-state p {
          font-size: 0.9rem;
        }
      }

      @media (max-width: 480px) {
        .hero {
          padding: 2rem 0.75rem 1rem;
          min-height: 220px;
        }

        .hero h1 {
          font-size: 1.4rem;
        }

        .hero .subtitle {
          font-size: 1.2rem;
        }

        .section {
          padding: 1.25rem 0.75rem;
        }

        .bikes-grid {
          grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
          gap: 0.75rem;
        }

        .bike-image {
          height: 140px;
        }

        .bike-card:hover {
          transform: none;
        }
      }
    `,
  ];

  connectedCallback() {
    super.connectedCallback();
    this.loadData();
  }

  private async loadData() {
    try {
      this.loading = true;
      await new Promise(resolve => setTimeout(resolve, 500));
      const [motorcycles, offers, testimonials] = await Promise.all([
        MotorcycleService.getMotorcycles(),
        MotorcycleService.getSpecialOffers(),
        MotorcycleService.getTestimonials(),
      ]);
      this.motorcycles = motorcycles;
      this.offers = offers;
      this.testimonials = testimonials;
    } catch (error) {
      console.error('Failed to load data:', error);
    } finally {
      this.loading = false;
    }
  }

  private get filteredMotorcycles(): Motorcycle[] {
    return this.motorcycles.filter((bike) => {
      const matchesSearch = !this.searchQuery ||
        bike.name?.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        bike.brand?.toLowerCase().includes(this.searchQuery.toLowerCase());

      const matchesCategory = this.categoryFilter === "all" || bike.category === this.categoryFilter;

      const dailyRate = bike.pricePerDay || 0;
      const matchesPrice = this.priceFilter === "all" ||
        (this.priceFilter === "budget" && dailyRate < 1000) ||
        (this.priceFilter === "mid" && dailyRate >= 1000 && dailyRate < 2000) ||
        (this.priceFilter === "premium" && dailyRate >= 2000);

      return matchesSearch && matchesCategory && matchesPrice;
    });
  }

  private get sortedMotorcycles(): Motorcycle[] {
    const filtered = [...this.filteredMotorcycles];

    switch (this.sortBy) {
      case 'price_low':
        return filtered.sort((a, b) => (a.pricePerDay || 0) - (b.pricePerDay || 0));
      case 'price_high':
        return filtered.sort((a, b) => (b.pricePerDay || 0) - (a.pricePerDay || 0));
      case 'newest':
        return filtered.sort((a, b) => (b.year || 0) - (a.year || 0));
      case 'popular':
        return filtered.sort((a, b) => {
          if (a.category === 'cruiser' && b.category !== 'cruiser') return -1;
          if (a.category !== 'cruiser' && b.category === 'cruiser') return 1;
          return 0;
        });
      default:
        return filtered;
    }
  }

  private resetFilters() {
    this.categoryFilter = 'all';
    this.priceFilter = 'all';
    this.searchQuery = '';
    this.showMobileFilters = false;
  }

  private get minPrice(): number {
    return this.motorcycles.length > 0 ?
      Math.min(...this.motorcycles.map((m) => m.pricePerDay || 1050)) : 1050;
  }

  renderBikeCard(bike: Motorcycle) {
    return html`
      <div class="bike-card">
        <img src="${bike.image}" alt="${bike.name}" class="bike-image" />
        <div class="bike-info">
          <div class="bike-name">${bike.name}</div>
          <div class="bike-meta"><span>${bike.brand}</span><span>•</span><span>${bike.year}</span></div>
          <div class="bike-details">
            <sl-badge variant="success" pill size="small">${bike.available ? 'available' : 'booked'}</sl-badge>
            <sl-badge variant="neutral" pill size="small">${bike.category}</sl-badge>
          </div>
          <div class="bike-details">
            <div class="bike-detail-item"><span>✓</span><span>${bike.condition}</span></div>
            <div class="bike-detail-item"><span>⚙️</span><span>${bike.engineSize}</span></div>
          </div>
          <div class="bike-detail-item" style="margin-top: 0.5rem;"><span>📍</span><span>${bike.location}</span></div>
          <div class="bike-price">From <span class="bike-price-accent">R${bike.pricePerDay.toLocaleString()}</span> <small>per day</small></div>
        </div>
        <sl-button class="bike-button" href="${MotorcycleService.getBookingUrl(bike.id)}" target="_blank">
          Book Now
        </sl-button>
      </div>
    `;
  }

  renderOffer(offer: SpecialOffer) {
    return html`
      <div class="offer-card">
        <h3>${offer.title}</h3>
        <div class="offer-discount">${offer.discount}</div>
        <p>${offer.description}</p>
        <div class="offer-code">Code: ${offer.code}</div>
        <div style="margin-top: 0.5rem; font-size: 0.9rem; color: #999;">
          ${offer.daysLeft} days left | Min. order R${offer.minOrder.toLocaleString()}
        </div>
      </div>
    `;
  }

  renderTestimonial(testimonial: Testimonial) {
    return html`
      <div class="testimonial-card">
        <sl-rating value="${testimonial.rating}" readonly style="--symbol-color: #f97316;"></sl-rating>
        <div class="testimonial-text">"${testimonial.text}"</div>
        <div class="testimonial-author">${testimonial.author}</div>
        <div class="testimonial-source">${testimonial.source}</div>
      </div>
    `;
  }

  render() {
    return html`
      <main>
        <section class="hero">
          <div class="hero-content">
            <h1>${this.message}</h1>
            <div class="subtitle">${this.subtitle}</div>
            <p>${this.motorcycles.length}+ premium Harley Davidson motorcycles • From R${this.minPrice}/day</p>

            <div class="search-bar">
              <sl-input
                class="search-input"
                placeholder="Search by name or brand..."
                value="${this.searchQuery}"
                @sl-input="${(e: any) => this.searchQuery = e.target.value}"
              ></sl-input>
              <sl-button
                class="filter-button"
                @click="${() => this.showMobileFilters = !this.showMobileFilters}"
              >
                🔍 Filters
              </sl-button>
            </div>
          </div>
        </section>

        ${this.offers.length > 0 ? html`
          <section class="section">
            <h2>Special Offers</h2>
            <div class="offers-grid">
              ${this.offers.map(offer => this.renderOffer(offer))}
            </div>
          </section>
        ` : ''}

        <section class="section">
          <h2>Discover Your Ride</h2>
          <p>Premium Harley-Davidson motorcycles with unlimited mileage and 24/7 support</p>

          <nav class="filters-nav">
            <select @change="${(e: any) => this.categoryFilter = e.target.value}" class="filter-select">
              <option value="all">All Categories</option>
              <option value="cruiser">Cruisers</option>
              <option value="touring">Touring</option>
              <option value="sport">Sport</option>
              <option value="adventure">Adventure</option>
            </select>

            <select @change="${(e: any) => this.priceFilter = e.target.value}" class="filter-select">
              <option value="all">All Prices</option>
              <option value="budget">Under R1000/day</option>
              <option value="mid">R1000 - R2000/day</option>
              <option value="premium">R2000+/day</option>
            </select>

            <select @change="${(e: any) => this.sortBy = e.target.value}" class="filter-select">
              <option value="price_low">Price: Low to High</option>
              <option value="price_high">Price: High to Low</option>
              <option value="newest">Newest First</option>
              <option value="popular">Most Popular</option>
            </select>

            <sl-button
              variant="text"
              class="reset-button"
              @click="${() => this.resetFilters()}"
            >
              Reset
            </sl-button>
          </nav>

          ${this.loading ? html`
            <div class="loading">
              <sl-spinner></sl-spinner>
              <p>Loading motorcycles...</p>
            </div>
          ` : this.sortedMotorcycles.length === 0 ? html`
            <div class="empty-state">
              <div class="empty-state-icon">🔍</div>
              <h3>No motorcycles found</h3>
              <p>${this.motorcycles.length === 0 ? 'Unable to load motorcycles' : 'Try adjusting your filters'}</p>
              <sl-button class="reset-button" @click="${() => this.resetFilters()}">
                Reset Filters
              </sl-button>
            </div>
          ` : html`
            <div class="bikes-grid">
              ${this.sortedMotorcycles.map(bike => this.renderBikeCard(bike))}
            </div>
          `}
        </section>

        ${this.testimonials.length > 0 ? html`
          <section class="section">
            <h2>Customer Reviews</h2>
            <div class="testimonials-carousel">
              ${this.testimonials.map(testimonial => this.renderTestimonial(testimonial))}
            </div>
          </section>
        ` : ''}

        <section class="section contact-info">
          <div class="contact-section">
            <h3>Contact Information</h3>
            <div class="contact-grid">
              <div class="contact-item">
                <h4>Phone</h4>
                <p><a href="tel:+27726667050">+27 72 666 7050</a></p>
              </div>
              <div class="contact-item">
                <h4>Email</h4>
                <p><a href="mailto:support@westcoastmotorcycles.co.za">support@westcoastmotorcycles.co.za</a></p>
              </div>
              <div class="contact-item">
                <h4>Location</h4>
                <p>Shop 1, Marconi Centre, 460 Koeberg Road, Milnerton, 7441</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    `;
  }
}
