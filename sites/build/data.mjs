// Demo content for the verification site.
export const usp = [
  { icon: 'truck', label: 'Free delivery over £50', href: 'help.html' },
  { icon: 'store', label: 'Collect in 1 hour', href: 'help.html' },
  { icon: 'return', label: '30 day returns', href: 'help.html' },
  { icon: 'star', label: 'Rated Excellent', href: 'help.html' },
];

const col = (title, titleHref, labels) => ({ title, titleHref, links: labels.map(l => ({ label: l, href: 'product-listing.html' })) });
export const departments = [
  { id: 'technology', label: 'Technology', href: 'product-listing.html', columns: [col('TVs', 'product-listing.html', ['55 inch TVs', 'OLED TVs', 'Smart TVs', 'TV accessories']), col('Laptops', 'product-listing.html', ['Windows laptops', 'MacBooks', 'Chromebooks']), col('Headphones', 'product-listing.html', ['Wireless earbuds', 'Over-ear headphones'])], promo: { href: 'product-listing.html', title: 'Tech deals', imageSrc: '../img/promo.svg', imageRatio: 'landscape' } },
  { id: 'appliances', label: 'Appliances', href: 'washing-machines.html', columns: [col('Laundry', 'washing-machines.html', ['Washing machines', 'Tumble dryers', 'Washer dryers']), col('Kitchen', 'washing-machines.html', ['Fridge freezers', 'Dishwashers', 'Cookers'])] },
  { id: 'home', label: 'Home & Garden', href: 'product-listing.html', columns: [col('Furniture', 'product-listing.html', ['Sofas', 'Beds', 'Wardrobes']), col('Garden', 'product-listing.html', ['Garden furniture', 'BBQs', 'Lawnmowers'])] },
  { id: 'toys', label: 'Toys', href: 'product-listing.html', columns: [col('Brands', 'product-listing.html', ['LEGO', 'Barbie', 'Hot Wheels']), col('Age', 'product-listing.html', ['Under 3s', '3 to 5 years', '6 to 8 years'])] },
  { id: 'offers', label: 'Offers', href: 'product-listing.html' },
];

export const footer = {
  columns: [
    { title: 'Help', links: ['Contact us', 'Delivery', 'Returns', 'Track my order', 'FAQs'].map(l => ({ label: l, href: 'help.html' })) },
    { title: 'Our services', links: ['Click & Collect', 'Installation', 'Recycling', 'Protection plans', 'Gift cards'].map(l => ({ label: l, href: 'help.html' })) },
    { title: 'About us', links: ['About tin', 'Careers', 'Store finder', 'Press'].map(l => ({ label: l, href: 'help.html' })) },
    { title: 'Our policies', links: ['Privacy', 'Cookies', 'Terms and conditions', 'Accessibility', 'Modern slavery statement'].map(l => ({ label: l, href: 'help.html' })) },
  ],
  socialLinks: [{ icon: 'facebook', label: 'Facebook', href: 'https://facebook.com' }, { icon: 'instagram', label: 'Instagram', href: 'https://instagram.com' }, { icon: 'youtube', label: 'YouTube', href: 'https://youtube.com' }],
  paymentMethods: ['Visa', 'Mastercard', 'PayPal', 'Klarna'].map(n => ({ src: `../img/pay-${n.toLowerCase()}.svg`, alt: n })),
  legal: '© 2026 tin Retail Ltd. Registered in England and Wales, company number 01234567. tin Retail Ltd acts as a credit broker and is not a lender. Credit subject to status.',
};

const p = (productId, title, price, priceWas, ratingValue, ratingCount, extra = {}) => ({
  productId, title, price, priceWas, ratingValue, ratingCount, href: 'product-detail.html', imageSrc: `../img/product-${extra.img || 'tv'}.svg`,
  badges: priceWas ? [{ variant: 'promo', label: `Save £${priceWas - price}` }] : [],
  availability: [{ method: 'delivery', label: 'Delivery available' }, { method: 'collection', label: 'Collect today' }], ...extra,
});
export const tvs = [
  p('8812345', 'Samsung QE55Q60D 55 inch QLED 4K Smart TV', 349, 399, 4.6, 212, { features: ['55 inch QLED screen', '4K Ultra HD', 'Smart TV with apps'] }),
  p('8812346', 'LG OLED55B46LA 55 inch OLED 4K Smart TV', 899, 1099, 4.8, 96, { features: ['55 inch OLED screen', 'Dolby Vision', 'webOS'] }),
  p('8812347', 'Sony Bravia KD-50X75WL 50 inch 4K Smart TV', 449, undefined, 4.5, 58, { badges: [{ status: 'info', label: 'New' }] }),
  p('8812348', 'Hisense 43A6NTUK 43 inch 4K Smart TV', 229, 269, 4.3, 431),
  p('8812349', 'TCL 65C655K 65 inch QLED 4K Smart TV', 549, undefined, 4.4, 77),
  p('8812350', 'Samsung UE43DU7100 43 inch 4K Smart TV', 279, 299, 4.5, 1022),
  p('8812351', 'Philips 55PUS8309 55 inch Ambilight 4K TV', 499, 599, 4.6, 64),
  p('8812352', 'LG 32LQ63006LA 32 inch Full HD Smart TV', 189, undefined, 4.2, 305, { badges: [{ status: 'warning', label: 'Clearance' }] }),
  p('8812353', 'Toshiba 40LV2E63DB 40 inch Smart TV', 199, 229, 4.1, 148),
  p('8812354', 'Sony Bravia 8 65 inch OLED 4K Google TV', 1599, 1899, 4.9, 22),
  p('8812355', 'Panasonic TX-50MX600B 50 inch 4K TV', 379, undefined, 4.4, 91),
];
export const accessories = [
  p('4410001', 'One For All Tilting TV Wall Bracket 32 to 90 inch', 39.99, undefined, 4.7, 612, { img: 'bracket', badges: [] }),
  p('4410002', 'Belkin 2m 8K HDMI Cable', 24.99, undefined, 4.6, 208, { img: 'cable', badges: [] }),
  p('4410003', 'Sony HT-S100F 2 Channel Soundbar', 129, 149, 4.5, 1204, { img: 'soundbar' }),
  p('4410004', 'Amazon Fire TV Stick 4K', 44.99, 59.99, 4.7, 3050, { img: 'stick' }),
];
export const washers = [
  p('wm-101', 'Bosch Series 4 WGG24409GB 9kg 1400 Spin Washing Machine', 429, 499, 4.8, 1034, { img: 'washer', energyGrade: 'A', energyHref: '../img/energy-label.svg', ctaLabel: 'Add to basket', hasCompare: true, availability: [{ method: 'delivery', label: 'Free next day delivery' }], features: ['9kg drum', '1400rpm spin', 'Quick 15 minute wash'] }),
  p('wm-102', 'Hotpoint NSWM1045CWUKN 10kg 1400 Spin Washing Machine', 329, undefined, 4.6, 2210, { img: 'washer', energyGrade: 'B', energyHref: '../img/energy-label.svg', ctaLabel: 'Add to basket', hasCompare: true, availability: [{ method: 'delivery', label: 'Free next day delivery' }], features: ['10kg drum', 'Steam refresh', 'Anti-stain cycles'] }),
  p('wm-103', 'Samsung Series 6 WW90CGC04DAE 9kg Washing Machine', 399, 449, 4.7, 530, { img: 'washer', energyGrade: 'A', energyHref: '../img/energy-label.svg', ctaLabel: 'Add to basket', hasCompare: true, availability: [{ status: 'lowStock', method: 'delivery', label: 'Only 4 left, delivery Thursday' }], features: ['9kg drum', 'Ecobubble', 'SmartThings app'] }),
  p('wm-104', 'Beko Pro WY940P44EW 9kg 1400 Spin Washing Machine', 299, 349, 4.5, 812, { img: 'washer', energyGrade: 'C', energyHref: '../img/energy-label.svg', ctaLabel: 'Add to basket', hasCompare: true, availability: [{ method: 'delivery', label: 'Free next day delivery' }], features: ['9kg drum', 'SteamCure', 'AquaTech'] }),
];
export const categories = ['TVs', 'Laptops', 'Headphones', 'Washing machines', 'Fridge freezers', 'Vacuums', 'Sofas', 'Beds', 'Garden', 'LEGO', 'Fitness', 'Gifts'];
