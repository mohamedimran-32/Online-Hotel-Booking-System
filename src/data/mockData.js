export const popularDestinations = [
    {
        id: 1,
        name: 'Goa',
        image: '/images/destinations/goa.png',
        description: 'Beaches, sun, and sand'
    },
    {
        id: 2,
        name: 'Kerala',
        image: '/images/destinations/kerala.png',
        description: 'God\'s own country'
    },
    {
        id: 3,
        name: 'Dubai',
        image: '/images/destinations/dubai.png',
        description: 'Luxury shopping and architecture'
    },
    {
        id: 4,
        name: 'Paris',
        image: '/images/destinations/paris.png',
        description: 'City of Love'
    },
    {
        id: 5,
        name: 'Bangalore',
        image: '/images/destinations/dest_bangalore.jpg',
        description: 'Silicon Valley of India'
    },
    {
        id: 6,
        name: 'Chennai',
        image: '/images/destinations/dest_chennai.jpg',
        description: 'Gateway to South India'
    },
    {
        id: 7,
        name: 'Coimbatore',
        image: '/images/destinations/dest_coimbatore.jpg',
        description: 'Home of the Adiyogi Shiva Statue and Isha Yoga Center'
    }
];

export const hotels = [
    {
        id: 1,
        name: 'Grand Hyatt Goa',
        location: 'Goa',
        price: 15000,
        rating: 4.8,
        stars: 5,
        thumbnail: '/images/hotels/grand_hyatt.png',
        images: [
            '/images/hotels/grand_hyatt.png',
            '/images/destinations/goa.png', // Reusing beach image
            '/images/hotels/grand_hyatt.png' // Duplicate for gallery effect
        ],
        amenities: ['Pool', 'Spa', 'WiFi', 'Beach Access', 'Bar'],
        description: 'Overlooking the Bambolim Bay, this luxury hotel is 7 km from the Goa University and 25 km from the Dabolim Airport.',
        rooms: [
            { type: 'Standard King', price: 15000, capacity: 2 },
            { type: 'Ocean View Suite', price: 25000, capacity: 2 },
            { type: 'Presidential Suite', price: 50000, capacity: 4 }
        ]
    },
    {
        id: 2,
        name: 'Taj Exotica',
        location: 'Goa',
        price: 22000,
        rating: 4.9,
        stars: 5,
        thumbnail: '/images/destinations/goa.png', // Fallback to destination image
        images: [
            '/images/destinations/goa.png',
            '/images/hotels/grand_hyatt.png' // Sharing resources for demo
        ],
        amenities: ['Pool', 'Spa', 'WiFi', 'Private Beach', 'Gym'],
        description: 'Mediterranean-style resort along the Benaulim Beach.',
        rooms: [
            { type: 'Garden Villa', price: 22000, capacity: 2 },
            { type: 'Sea View Villa', price: 35000, capacity: 2 }
        ]
    },
    {
        id: 3,
        name: 'Ritz Carlton',
        location: 'Dubai',
        price: 45000,
        rating: 4.7,
        stars: 5,
        thumbnail: '/images/destinations/dubai.png', // Fallback to destination image
        images: [
            '/images/destinations/dubai.png',
            '/images/hero/banner.png' // Luxury vibe
        ],
        amenities: ['Pool', 'Spa', 'WiFi', 'City View', 'Fine Dining'],
        description: 'Luxury hotel in the heart of Dubai Financial District.',
        rooms: [
            { type: 'Deluxe Room', price: 45000, capacity: 2 },
            { type: 'Club Room', price: 60000, capacity: 2 }
        ]
    },
    {
        id: 4,
        name: 'Budget Stay',
        location: 'Kerala',
        price: 2500,
        rating: 3.5,
        stars: 3,
        thumbnail: '/images/destinations/kerala.png', // Fallback
        images: ['/images/destinations/kerala.png'],
        amenities: ['WiFi', 'Parking', 'Breakfast'],
        description: 'Affordable stay for backpackers.',
        rooms: [
            { type: 'Standard Room', price: 2500, capacity: 2 }
        ]
    },
    {
        id: 5,
        name: 'Parisian Charm Hotel',
        location: 'Paris',
        price: 18000,
        rating: 4.5,
        stars: 4,
        thumbnail: '/images/destinations/paris.png',
        images: ['/images/destinations/paris.png', '/images/hero/banner.png'],
        amenities: ['WiFi', 'Breakfast', 'City View', 'Near Metro'],
        description: 'Charming boutique hotel near the Eiffel Tower.',
        rooms: [
            { type: 'Classic Room', price: 18000, capacity: 2 },
            { type: 'Deluxe Room', price: 24000, capacity: 2 }
        ]
    },
    {
        id: 6,
        name: 'Eiffel View Luxury',
        location: 'Paris',
        price: 45000,
        rating: 4.9,
        stars: 5,
        thumbnail: '/images/destinations/paris.png',
        images: ['/images/destinations/paris.png', '/images/hero/banner.png'],
        amenities: ['Pool', 'Spa', 'Fine Dining', 'Concierge'],
        description: 'Experience Paris in luxury with stunning views of the Eiffel Tower.',
        rooms: [
            { type: 'Executive Suite', price: 45000, capacity: 2 },
            { type: 'Royal Suite', price: 75000, capacity: 4 }
        ]
    },
    {
        id: 7,
        name: 'Kerala Backwater Resort',
        location: 'Kerala',
        price: 8000,
        rating: 4.6,
        stars: 4,
        thumbnail: '/images/destinations/kerala.png',
        images: ['/images/destinations/kerala.png'],
        amenities: ['Boating', 'Ayurveda Spa', 'WiFi', 'Restaurant'],
        description: 'Relax in the serene backwaters of Kerala.',
        rooms: [
            { type: 'Lake View Room', price: 8000, capacity: 2 },
            { type: 'Cottage', price: 12000, capacity: 3 }
        ]
    },
    {
        id: 8,
        name: 'Dubai Marina Hotel',
        location: 'Dubai',
        price: 35000,
        rating: 4.7,
        stars: 5,
        thumbnail: '/images/destinations/dubai.png',
        images: ['/images/destinations/dubai.png'],
        amenities: ['Rooftop Pool', 'Gym', 'Mall Access', 'WiFi'],
        description: 'Modern hotel located in the bustling Dubai Marina.',
        rooms: [
            { type: 'Marina View', price: 35000, capacity: 2 },
            { type: 'Suite', price: 55000, capacity: 4 }
        ]
    },
    {
        id: 9,
        name: 'Goa Beach Shack',
        location: 'Goa',
        price: 3500,
        rating: 4.2,
        stars: 3,
        thumbnail: '/images/destinations/goa.png',
        images: ['/images/destinations/goa.png'],
        amenities: ['Beachfront', 'Bar', 'Live Music'],
        description: 'Right on the sand, experience the true Goa vibe.',
        rooms: [
            { type: 'Hut', price: 3500, capacity: 2 }
        ]
    },
    {
        id: 10,
        name: 'The Leela Palace',
        location: 'Bangalore',
        price: 22000,
        rating: 4.9,
        stars: 5,
        thumbnail: '/images/hotels/grand_hyatt.png',
        images: ['/images/hotels/grand_hyatt.png', '/images/destinations/paris.png'],
        amenities: ['Pool', 'Spa', 'WiFi', 'City View', 'Fine Dining'],
        mapEmbedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75581.87054443588!2d77.59297391832904!3d13.05983963504521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1400b4fad589%3A0x741c251de3642c1d!2sLeela%20Palace%20Rd%2C%20Kodihalli%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1765171099187!5m2!1sen!2sin',
        description: 'A modern palace hotel in the midst of the IT hub.',
        rooms: [
            { type: 'Deluxe Room', price: 22000, capacity: 2 },
            { type: 'Royal Club', price: 30000, capacity: 2 }
        ]
    },
    {
        id: 11,
        name: 'MG Road Inn',
        location: 'Bangalore',
        price: 4500,
        rating: 4.0,
        stars: 3,
        thumbnail: '/images/destinations/paris.png',
        images: ['/images/destinations/paris.png'],
        amenities: ['WiFi', 'Central Location', 'Breakfast'],
        description: 'Comfortable stay right in the heart of Bangalore.',
        rooms: [
            { type: 'Standard Room', price: 4500, capacity: 2 }
        ]
    },
    {
        id: 12,
        name: 'ITC Grand Chola',
        location: 'Chennai',
        price: 18000,
        rating: 4.8,
        stars: 5,
        thumbnail: 'https://placehold.co/400x300/ff5722/ffffff?text=ITC+Grand+Chola',
        images: ['https://placehold.co/800x600/ff5722/ffffff?text=Grand+Chola+Ext'],
        amenities: ['Pool', 'Spa', 'WiFi', 'Luxury', 'Dining'],
        description: 'A tribute to the Chola Dynasty, this hotel defines luxury in Chennai.',
        rooms: [
            { type: 'Executive Club', price: 18000, capacity: 2 }
        ]
    },
    {
        id: 13,
        name: 'Residency Towers',
        location: 'Coimbatore',
        price: 6500,
        rating: 4.5,
        stars: 4,
        thumbnail: 'https://placehold.co/400x300?text=Residency+Towers',
        images: ['https://placehold.co/800x600?text=Residency+Towers'],
        amenities: ['WiFi', 'Pool', 'Restaurant', 'Gym'],
        description: 'Premium business hotel in Coimbatore.',
        rooms: [
            { type: 'Superior Room', price: 6500, capacity: 2 }
        ]
    },
    {
        id: 14,
        name: 'Coco Shambhala',
        location: 'Goa',
        price: 45000,
        rating: 4.9,
        stars: 5,
        thumbnail: '/images/destinations/goa.png',
        images: ['/images/destinations/goa.png'],
        amenities: ['Private Villa', 'Plunge Pool', 'Jungle View', 'Butler'],
        description: 'Exclusive luxury villas nestled in the tropical jungle.',
        rooms: [
            { type: 'Jungle Villa', price: 45000, capacity: 4 }
        ]
    },
    {
        id: 15,
        name: 'Atlantis The Palm',
        location: 'Dubai',
        price: 60000,
        rating: 4.8,
        stars: 5,
        thumbnail: '/images/hero/banner.png',
        images: ['/images/hero/banner.png'],
        amenities: ['Waterpark', 'Aquarium', 'Beach', 'Fine Dining'],
        description: 'Iconic ocean-themed resort on the Palm Jumeirah.',
        rooms: [
            { type: 'Ocean Room', price: 60000, capacity: 2 },
            { type: 'Underwater Suite', price: 120000, capacity: 2 }
        ]
    },
    {
        id: 16,
        name: 'Le Meurice',
        location: 'Paris',
        price: 85000,
        rating: 5.0,
        stars: 5,
        thumbnail: '/images/destinations/paris.png',
        images: ['/images/destinations/paris.png'],
        amenities: ['Palace Status', 'Michelin Dining', 'Spa', 'Tuileries View'],
        description: 'One of the most famous and elegant hotels in the world.',
        rooms: [
            { type: 'Superior Room', price: 85000, capacity: 2 }
        ]
    },
    {
        id: 17,
        name: 'Taj West End',
        location: 'Bangalore',
        price: 16000,
        rating: 4.7,
        stars: 5,
        thumbnail: '/images/destinations/dest_bangalore.jpg',
        images: ['/images/destinations/dest_bangalore.jpg'],
        amenities: ['Heritage', 'Gardens', 'Pool', 'Tennis'],
        description: 'A lush garden sanctuary in the middle of Bangalore.',
        rooms: [
            { type: 'Luxury Room', price: 16000, capacity: 2 }
        ]
    },
    {
        id: 18,
        name: 'Radisson Blu',
        location: 'Chennai',
        price: 9000,
        rating: 4.4,
        stars: 5,
        thumbnail: '/images/destinations/dest_chennai.jpg',
        images: ['/images/destinations/dest_chennai.jpg'],
        amenities: ['Airport Shuttle', 'Spa', 'Business Center'],
        description: 'Convenient luxury hotel near the international airport.',
        rooms: [
            { type: 'Business Class', price: 9000, capacity: 2 }
        ]
    }
];
