import type { Motorcycle, SpecialOffer, Tour, Testimonial, BusinessInfo } from '../types/motorcycle.js';

export class MotorcycleService {
  private static readonly BASE_URL = 'https://app.westcoastmotorcycles.co.za';

  static readonly BUSINESS_INFO: BusinessInfo = {
    name: 'West Coast Motorcycles',
    address: 'Shop 1, Marconi Centre, 460 Koeberg Road, Milnerton, Cape Town, 7441',
    phone: '+27 (0)21 551 3333',
    email: 'info@westcoastmotorcycles.co.za',
    coordinates: { lat: -33.8801, lng: 18.5019 }
  };

  static getMotorcycles(): Promise<Motorcycle[]> {
    return Promise.resolve([
      {
        id: '690da803ae2f477a7204f91f',
        name: '01 - HD Sportster 48 Custom',
        brand: 'Harley-Davidson',
        year: 2023,
        model: 'Sportster 48 Custom',
        category: 'cruiser',
        condition: 'Excellent',
        engineSize: '1200cc',
        location: 'Cape Town CBD',
        pricePerDay: 1050,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/04f5f1c44_19.jpg'
      },
      {
        id: '690da803ae2f477a7204f920',
        name: '02 - HD Street Bob 114',
        brand: 'Harley-Davidson',
        year: 2022,
        model: 'Street Bob 114',
        category: 'cruiser',
        condition: 'Excellent',
        engineSize: '1868cc',
        location: 'Cape Town CBD',
        pricePerDay: 1150,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/04f5f1c44_1.jpg'
      },
      {
        id: '690da803ae2f477a7204f921',
        name: '03 - HD Low Rider S 114',
        brand: 'Harley-Davidson',
        year: 2022,
        model: 'Low Rider S 114',
        category: 'cruiser',
        condition: 'Excellent',
        engineSize: '1868cc',
        location: 'Cape Town CBD',
        pricePerDay: 1200,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/e32f83ed0_5.jpg'
      },
      {
        id: '690da803ae2f477a7204f922',
        name: '04 - HD Forty-Eight 1200',
        brand: 'Harley-Davidson',
        year: 2021,
        model: 'Forty-Eight 1200',
        category: 'cruiser',
        condition: 'Excellent',
        engineSize: '1200cc',
        location: 'Cape Town CBD',
        pricePerDay: 1150,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/8ba8e5e45_8.jpg'
      },
      {
        id: '690da803ae2f477a7204f923',
        name: '05 - HD Iron 883',
        brand: 'Harley-Davidson',
        year: 2020,
        model: 'Iron 883',
        category: 'sportster',
        condition: 'Excellent',
        engineSize: '883cc',
        location: 'Cape Town CBD',
        pricePerDay: 950,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/2a2d8b321_6.jpg'
      },
      {
        id: '690da803ae2f477a7204f924',
        name: '06 - HD Heritage Classic',
        brand: 'Harley-Davidson',
        year: 2021,
        model: 'Heritage Classic',
        category: 'cruiser',
        condition: 'Excellent',
        engineSize: '1868cc',
        location: 'Cape Town CBD',
        pricePerDay: 1350,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/3f7a9c156_9.jpg'
      },
      {
        id: '690da803ae2f477a7204f925',
        name: '07 - HD Road King 114',
        brand: 'Harley-Davidson',
        year: 2022,
        model: 'Road King 114',
        category: 'touring',
        condition: 'Excellent',
        engineSize: '1868cc',
        location: 'Cape Town CBD',
        pricePerDay: 1450,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/e32f83ed0_5.jpg'
      },
      {
        id: '690da803ae2f477a7204f926',
        name: '08 - HD Street Glide',
        brand: 'Harley-Davidson',
        year: 2023,
        model: 'Street Glide',
        category: 'touring',
        condition: 'Excellent',
        engineSize: '1868cc',
        location: 'Cape Town CBD',
        pricePerDay: 1550,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/04f5f1c44_19.jpg'
      },
      {
        id: '690da803ae2f477a7204f927',
        name: '09 - HD Road Glide',
        brand: 'Harley-Davidson',
        year: 2022,
        model: 'Road Glide',
        category: 'touring',
        condition: 'Excellent',
        engineSize: '1868cc',
        location: 'Cape Town CBD',
        pricePerDay: 1600,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/fe6b53b33_17.jpg'
      },
      {
        id: '690da803ae2f477a7204f928',
        name: '10 - HD Pan America 1250',
        brand: 'Harley-Davidson',
        year: 2021,
        model: 'Pan America 1250',
        category: 'naked',
        condition: 'Excellent',
        engineSize: '1250cc',
        location: 'Cape Town CBD',
        pricePerDay: 1400,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/4f025640e_13.jpg'
      },
      {
        id: '690da803ae2f477a7204f929',
        name: '11 - HD Ultra Limited',
        brand: 'Harley-Davidson',
        year: 2023,
        model: 'Ultra Limited',
        category: 'touring',
        condition: 'Excellent',
        engineSize: '1868cc',
        location: 'Cape Town CBD',
        pricePerDay: 1700,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/dabbf4f26_14.jpg'
      },
      {
        id: '690da803ae2f477a7204f92a',
        name: '12 - HD Freewheeler',
        brand: 'Harley-Davidson',
        year: 2020,
        model: 'Freewheeler',
        category: 'trike',
        condition: 'Excellent',
        engineSize: '1868cc',
        location: 'Cape Town CBD',
        pricePerDay: 2800,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/eb7be738b_20.jpg'
      },
      {
        id: '690da803ae2f477a7204f92b',
        name: '13 - HD Street Glide Ultra',
        brand: 'Harley-Davidson',
        year: 2023,
        model: 'Street Glide Ultra',
        category: 'touring',
        condition: 'Excellent',
        engineSize: '1868cc',
        location: 'Cape Town CBD',
        pricePerDay: 1750,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/04f5f1c44_19.jpg'
      },
      {
        id: '690da803ae2f477a7204f92c',
        name: '14 - HD Low Rider',
        brand: 'Harley-Davidson',
        year: 2021,
        model: 'Low Rider',
        category: 'cruiser',
        condition: 'Excellent',
        engineSize: '1868cc',
        location: 'Cape Town CBD',
        pricePerDay: 1250,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/0813c148c_15.jpg'
      },
      {
        id: '690da803ae2f477a7204f92d',
        name: '15 - HD Breakout 114',
        brand: 'Harley-Davidson',
        year: 2022,
        model: 'Breakout 114',
        category: 'cruiser',
        condition: 'Excellent',
        engineSize: '1868cc',
        location: 'Cape Town CBD',
        pricePerDay: 1300,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/e32f83ed0_5.jpg'
      },
      {
        id: '690da803ae2f477a7204f92e',
        name: '16 - HD Softail Slim',
        brand: 'Harley-Davidson',
        year: 2021,
        model: 'Softail Slim',
        category: 'cruiser',
        condition: 'Excellent',
        engineSize: '1868cc',
        location: 'Cape Town CBD',
        pricePerDay: 1350,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/8ba8e5e45_8.jpg'
      },
      {
        id: '690da803ae2f477a7204f92f',
        name: '17 - HD Sportster S',
        brand: 'Harley-Davidson',
        year: 2023,
        model: 'Sportster S',
        category: 'sportster',
        condition: 'Excellent',
        engineSize: '1200cc',
        location: 'Cape Town CBD',
        pricePerDay: 1100,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/2a2d8b321_6.jpg'
      },
      {
        id: '690da803ae2f477a7204f930',
        name: '18 - HD Road Glide Limited',
        brand: 'Harley-Davidson',
        year: 2023,
        model: 'Road Glide Limited',
        category: 'touring',
        condition: 'Excellent',
        engineSize: '1868cc',
        location: 'Cape Town CBD',
        pricePerDay: 1800,
        available: true,
        image: 'https://base44.app/api/apps/690a9d739245cf8b1dfd0732/files/public/690a9d739245cf8b1dfd0732/3f7a9c156_9.jpg'
      }
    ]);
  }

  static getSpecialOffers(): Promise<SpecialOffer[]> {
    return Promise.resolve([
      {
        id: '1',
        title: 'INDYfest 2026 Promo',
        discount: '-R2250',
        description: 'Save R2250 on any 7+ day rental during INDYfest 2026',
        code: 'INDYFEST2026',
        daysLeft: 45,
        minOrder: 7,
        appliesTo: 'All motorcycles'
      },
      {
        id: '2',
        title: 'H.O.G. Members Discount',
        discount: '-10%',
        description: 'Harley Owners Group members get 10% off all rentals',
        code: 'HOGMEMBER',
        daysLeft: 365,
        minOrder: 1,
        appliesTo: 'All motorcycles'
      }
    ]);
  }

  static getTours(): Promise<Tour[]> {
    return Promise.resolve([
      {
        id: '1',
        name: 'Cape Point Grand Tour',
        description: 'Ride to the iconic Cape Point with stunning coastal views, wildlife, and the meeting of two oceans',
        duration: '6 hours',
        price: 1500,
        image: 'https://images.unsplash.com/photo-1581563886411-51539a983de1?w=600&q=80',
        included: ['Professional guide', 'Lunch stop', 'Cape Point entrance fee', 'Safety briefing']
      },
      {
        id: '2',
        name: 'Cape Winelands Adventure',
        description: 'Explore world-class vineyards in Stellenbosch and Franschhoek with a stop at a premium winery',
        duration: '8 hours',
        price: 1800,
        image: 'https://images.unsplash.com/photo-1559042615-cd4628902d4a?w=600&q=80',
        included: ['Professional guide', 'Wine tasting at 2 estates', 'Lunch', 'Scenic stops']
      },
      {
        id: '3',
        name: 'Atlantic Coastal Ride',
        description: 'Cruise along the spectacular Atlantic coastline from Hout Bay to Nordhoek with pristine beaches',
        duration: '4 hours',
        price: 1200,
        image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80',
        included: ['Professional guide', 'Coffee stop', 'Beach access', 'Photography stops']
      },
      {
        id: '4',
        name: 'Route 62 Epic Journey',
        description: 'Epic 12-hour adventure on the famous Route 62, passing through Montagu, Robertson, and Barrydale',
        duration: '12 hours',
        price: 2500,
        image: 'https://images.unsplash.com/photo-1519046904884-53103b34b206?w=600&q=80',
        included: ['Professional guide', 'Breakfast', 'Lunch', 'Multiple scenic stops', 'Hot springs visit']
      }
    ]);
  }

  static getTestimonials(): Promise<Testimonial[]> {
    return Promise.resolve([
      {
        id: '1',
        author: 'John Smith',
        text: 'Incredible experience riding a Harley in Cape Town. The guides were professional and the bikes were in perfect condition.',
        rating: 5,
        source: 'Google'
      },
      {
        id: '2',
        author: 'Sarah Johnson',
        text: 'Best vacation activity ever! The Cape Point tour was breathtaking and our guide made it even more special.',
        rating: 5,
        source: 'Google'
      },
      {
        id: '3',
        author: 'Michael Chen',
        text: 'West Coast Motorcycles offers exceptional service. Highly professional staff and well-maintained bikes.',
        rating: 5,
        source: 'Google'
      },
      {
        id: '4',
        author: 'Emma Davis',
        text: 'Rode through the Winelands on a beautiful Harley. The experience was unforgettable and perfectly organized.',
        rating: 5,
        source: 'Google'
      },
      {
        id: '5',
        author: 'David Wilson',
        text: 'Amazing company with top-notch bikes and outstanding customer service. Would definitely recommend!',
        rating: 5,
        source: 'Google'
      },
      {
        id: '6',
        author: 'Lisa Anderson',
        text: 'The Route 62 tour was epic! Stunning scenery, professional guides, and perfectly maintained motorcycles.',
        rating: 5,
        source: 'Google'
      },
      {
        id: '7',
        author: 'James Brown',
        text: 'Outstanding experience from start to finish. The team knows Cape Town like locals and rides like experts.',
        rating: 5,
        source: 'Google'
      },
      {
        id: '8',
        author: 'Patricia Lee',
        text: 'A dream come true! Riding a Harley along the Atlantic coast with professional guides was absolutely magical.',
        rating: 5,
        source: 'Google'
      }
    ]);
  }

  static getBookingUrl(bikeId: string): string {
    return `${this.BASE_URL}/booking?bikeId=${bikeId}`;
  }

  static getBrowseUrl(): string {
    return `${this.BASE_URL}/motorcycles`;
  }

  static getToursUrl(): string {
    return `${this.BASE_URL}/guidedtours`;
  }

  static getChauffeurUrl(): string {
    return `${this.BASE_URL}/chauffeurrides`;
  }
}
