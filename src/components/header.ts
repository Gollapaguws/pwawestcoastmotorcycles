import { LitElement, css, html } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon-button/icon-button.js';
import { resolveRouterPath } from '../router.js';

@customElement('app-header')
export class AppHeader extends LitElement {
  @property() currentPage = 'home';
  @state() private mobileMenuOpen = false;

  static styles = css`
    header {
      background: linear-gradient(135deg, #0f172a 0%, #1a1f35 100%);
      border-bottom: 1px solid #334155;
      position: sticky;
      top: 0;
      z-index: 1000;
    }

    .header-content {
      max-width: 1400px;
      margin: 0 auto;
      padding: 1rem 1.5rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .logo {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      text-decoration: none;
      color: #ffffff;
      font-weight: 600;
      font-size: 1.2rem;
      transition: color 0.3s ease;
      flex-shrink: 0;
    }

    .logo:hover {
      color: #f97316;
    }

    .logo-icon {
      width: 32px;
      height: 32px;
      background: linear-gradient(135deg, #f97316 0%, #ea580c 100%);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.2rem;
      font-weight: 700;
    }

    .nav-wrapper {
      display: flex;
      align-items: center;
      gap: 1.5rem;
    }

    nav {
      display: flex;
      gap: 2rem;
      align-items: center;
    }

    nav a {
      color: #cbd5e1;
      text-decoration: none;
      font-weight: 500;
      font-size: 0.95rem;
      transition: all 0.3s ease;
      padding: 0.5rem 1rem;
      border-radius: 4px;
      white-space: nowrap;
    }

    nav a:hover {
      color: #f97316;
      background: rgba(249, 115, 22, 0.1);
    }

    nav a.active {
      color: #f97316;
      background: rgba(249, 115, 22, 0.15);
    }

    .cta-button {
      background: #f97316 !important;
      color: white !important;
      border: none !important;
      padding: 0.5rem 1.5rem !important;
      white-space: nowrap;
    }

    .cta-button:hover {
      background: #ea580c !important;
    }

    .mobile-menu-toggle {
      display: none;
      background: transparent !important;
      color: #f97316 !important;
      font-size: 1.5rem;
    }

    .mobile-menu {
      display: none;
      position: fixed;
      top: 60px;
      left: 0;
      right: 0;
      background: #1a1f35;
      border-bottom: 1px solid #334155;
      flex-direction: column;
      padding: 1rem;
      gap: 0.5rem;
      z-index: 999;
    }

    .mobile-menu.open {
      display: flex;
    }

    .mobile-menu a {
      color: #cbd5e1;
      text-decoration: none;
      font-weight: 500;
      padding: 1rem;
      border-radius: 4px;
      transition: all 0.3s ease;
    }

    .mobile-menu a:hover,
    .mobile-menu a.active {
      color: #f97316;
      background: rgba(249, 115, 22, 0.15);
    }

    .mobile-cta {
      padding: 1rem;
      border-top: 1px solid #334155;
      margin-top: 0.5rem;
    }

    @media (max-width: 768px) {
      .header-content {
        padding: 0.75rem 1rem;
      }

      .logo {
        font-size: 1rem;
      }

      .logo-icon {
        width: 28px;
        height: 28px;
        font-size: 1rem;
      }

      .logo span {
        display: none;
      }

      nav {
        display: none;
      }

      .cta-button {
        display: none;
      }

      .mobile-menu-toggle {
        display: block;
        padding: 0.5rem;
        min-width: 40px;
        min-height: 40px;
      }

      .nav-wrapper {
        gap: 0.5rem;
      }
    }

    @media (max-width: 480px) {
      .header-content {
        padding: 0.5rem 0.75rem;
      }

      .mobile-menu {
        top: 50px;
      }
    }
  `;

  render() {
    return html`
      <header>
        <div class="header-content">
          <a href="${resolveRouterPath('')}" class="logo">
            <div class="logo-icon">🏍</div>
            <span>West Coast Motorcycles</span>
          </a>
          <div class="nav-wrapper">
            <nav>
              <a href="${resolveRouterPath('')}" class="${this.currentPage === 'home' ? 'active' : ''}">Home</a>
              <a href="${resolveRouterPath('browse')}" class="${this.currentPage === 'browse' ? 'active' : ''}">Browse</a>
              <a href="${resolveRouterPath('tours')}" class="${this.currentPage === 'tours' ? 'active' : ''}">Tours</a>
              <a href="${resolveRouterPath('chauffeur')}" class="${this.currentPage === 'chauffeur' ? 'active' : ''}">Chauffeur</a>
              <a href="${resolveRouterPath('about')}" class="${this.currentPage === 'about' ? 'active' : ''}">About</a>
            </nav>
            <sl-button class="cta-button" href="tel:+27726667050">
              Call: +27 72 666 7050
            </sl-button>
            <button class="mobile-menu-toggle" @click="${() => this.mobileMenuOpen = !this.mobileMenuOpen}">☰</button>
          </div>
        </div>
        <nav class="mobile-menu ${this.mobileMenuOpen ? 'open' : ''}">
          <a href="${resolveRouterPath('')}" class="${this.currentPage === 'home' ? 'active' : ''}" @click="${() => this.mobileMenuOpen = false}">Home</a>
          <a href="${resolveRouterPath('browse')}" class="${this.currentPage === 'browse' ? 'active' : ''}" @click="${() => this.mobileMenuOpen = false}">Browse</a>
          <a href="${resolveRouterPath('tours')}" class="${this.currentPage === 'tours' ? 'active' : ''}" @click="${() => this.mobileMenuOpen = false}">Tours</a>
          <a href="${resolveRouterPath('chauffeur')}" class="${this.currentPage === 'chauffeur' ? 'active' : ''}" @click="${() => this.mobileMenuOpen = false}">Chauffeur</a>
          <a href="${resolveRouterPath('about')}" class="${this.currentPage === 'about' ? 'active' : ''}" @click="${() => this.mobileMenuOpen = false}">About</a>
          <div class="mobile-cta">
            <sl-button class="cta-button" href="tel:+27726667050" style="width: 100%;">
              Call: +27 72 666 7050
            </sl-button>
          </div>
        </nav>
      </header>
    `;
  }
}
