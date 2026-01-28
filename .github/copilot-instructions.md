# Copilot Instructions for West Coast Motorcycles PWA

## Project Architecture

This is a **Progressive Web App (PWA)** for West Coast Motorcycles, a Harley-Davidson motorcycle rental business in Cape Town, South Africa. Built using the [PWABuilder pwa-starter](https://docs.pwabuilder.com/#/starter/quick-start) template with the following stack:

- **Lit** (web components with reactive properties and decorators)
- **TypeScript** (strict mode, ESNext targets)
- **Vite** (build tool with PWA plugin)
- **Workbox** (service worker with injectManifest strategy)
- **Shoelace** (web component UI library)
- **@thepassle/app-tools** router (with lazy loading support)

### Architecture Pattern: Web Component Pages

Components are organized as:
- **Pages** (`src/pages/`): Route-level components like `app-home.ts`, `app-about/app-about.ts`
- **Components** (`src/components/`): Shared components like `header.ts`
- **Services** (`src/services/`): Business logic like `motorcycle-service.ts`
- **Types** (`src/types/`): TypeScript interfaces for data models
- **Styles**: Shared via `src/styles/shared-styles.ts` (exported Lit `css` tagged templates)

All components use `@customElement()` decorator and extend `LitElement`. See [app-home.ts](src/pages/app-home.ts) for the canonical pattern.

### Data Layer

Data is sourced from `app.westcoastmotorcycles.co.za`. The [motorcycle-service.ts](src/services/motorcycle-service.ts) provides:
- `getMotorcycles()` - Returns array of Harley-Davidson rental listings
- `getSpecialOffers()` - Returns promotional offers (INDYfest, H.O.G. discounts)
- `BUSINESS_INFO` - Contact details and location
- Helper methods for generating booking URLs

**Note**: Current implementation uses mock data matching live site. For live API integration, update service methods to fetch from actual endpoints.

### Routing System

Router is configured in [src/router.ts](src/router.ts). Key patterns:

1. **Base URL Resolution**: Always use `resolveRouterPath()` for paths to support GitHub Pages deployment:
   ```typescript
   import { resolveRouterPath } from '../router';
   // In router config:
   path: resolveRouterPath('about')
   ```

2. **Lazy Loading**: Use `lazy()` plugin for code-split pages:
   ```typescript
   plugins: [lazy(() => import('./pages/app-about/app-about.js'))],
   ```

3. **View Transitions**: Root component ([app-index.ts](src/app-index.ts#L20)) uses native View Transitions API when available.

### Service Worker Strategy

Uses **injectManifest** (not generateSW). Custom service worker logic goes in [public/sw.js](public/sw.js). Widget support for PWA widgets is pre-configured with event handlers (`widgetinstall`, `widgetclick`, etc.).

Build generates precache manifest automatically via Workbox - don't manually manage cache lists.

## Development Workflows

### Running the App

- **Development**: `npm run dev` or `npm run dev-server` (auto-opens browser)
- **Development Task**: `npm run dev-task` (no auto-open, use with VS Code tasks)
- **Build**: `npm run build` (TypeScript compilation + Vite build)
- **Remote Testing**: `npm start-remote` (network accessible via `--host`)

### Deployment

- Uses **Azure Static Web Apps CLI** for deployment
- Command: `npm run deploy` (handles login and deployment)
- Config: [swa-cli.config.json](swa-cli.config.json) and [public/staticwebapp.config.json](public/staticwebapp.config.json)

## Project-Specific Conventions

### TypeScript Patterns

1. **Decorators Required**: Use `@customElement()`, `@property()`, and `@state()` from `lit/decorators.js`
   ```typescript
   @customElement('app-home')
   export class AppHome extends LitElement {
     @property() message = 'Welcome!';
     @state() private loading = true;
   }
   ```

2. **Type Definitions**: Import types from `src/types/` for data models:
   ```typescript
   import type { Motorcycle, SpecialOffer } from '../types/motorcycle.js';
   ```

3. **No .ts Extensions**: Import statements use `.js` extension even for TypeScript files (Vite requirement):
   ```typescript
   import './pages/app-home.js'; // file is actually app-home.ts
   import { MotorcycleService } from '../services/motorcycle-service.js';
   ```

4. import '@shoelace-style/shoelace/dist/components/badge/badge.js';
   ```

2. **Shared Styles**: Export Lit `css` objects, import and spread in component's `static styles`:
   ```typescript
   import { styles } from './about-styles';
   static styles = [sharedStyles, styles]
   ```

3. **Global Styles**: [src/styles/global.css](src/styles/global.css) is imported in [app-index.ts](src/app-index.ts)

4. **Brand Colors**:
   - Primary: `#E1477E` (West Coast Motorcycles pink)
   - Use `var(--app-color-primary)` in components
   - Shoelace theme loaded from CDN with dark mode support
   import { styles } from './about-styles';
   static styles = [sharedStyles, styles]
   ```

3. **Global Styles**: [src/styles/global.css](src/styles/global.css) is imported in [app-index.ts](src/app-index.ts)

4. **CSS Custom Properties**: Header uses `var(--app-color-primary)` - check global.css for theme variables

###src/services/motorcycle-service.ts](src/services/motorcycle-service.ts) - Business data and API calls
- [src/types/motorcycle.ts](src/types/motorcycle.ts) - TypeScript interfaces for motorcycles, offers, etc.
- [public/sw.js](public/sw.js) - Custom service worker with widget support
- [vite.config.ts](vite.config.ts) - Build configuration, PWA plugin settings
- [public/manifest.json](public/manifest.json) - PWA manifest with brandings:
- 2 space indentation
- Single quotes
- Trailing commas (ES5)

## Key Files Reference

- [src/app-index.ts](src/app-index.ts) - Root component, router initialization
- [src/router.ts](src/router.ts) - Route configuration and `resolveRouterPath()` helper
- [public/sw.js](public/sw.js) - Custom service worker with widget support
- [vite.config.ts](vite.config.ts) - Build configuration, PWA plugin settings
- [public/manifest.json](public/manifest.json) - PWA manifest with window-controls-overlay

## Common Gotchas

- **PWA Registration**: Service worker registration happens via Vite PWA plugin (`injectRegister: false` means manual control)
- **Base URL**: Always use `resolveRouterPath()` for internal links to support deployment to sub-paths
- **Component Imports**: Import page components with `.js` extension (not `.ts`) in router config
- **Lit Lifecycle**: Use `firstUpdated()` for setup code that needs DOM access (runs once after first render)
