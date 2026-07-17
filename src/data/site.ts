/**
 * Generated site data — source of truth for static rendering.
 * Re-run the builder to regenerate this file with updated content.
 */

export const SITE_NAME = "prime yorg";

export interface PageData {
  title: string;
  slug: string;
  /** Derived URL path (Plan 014) — equals slug for a top-level page, "parentSlug/slug" for a
   *  subpage (e.g. "services/branding"). Routing matches on this, not slug. */
  path: string;
  excerpt: string | null;
  layout: Record<string, unknown>[];
}

export interface SiteIdentityData {
  navVariant: string;
  /** children (Plan 014): subpages of this top-level page, when it has any — the nav renders
   *  them as a dropdown instead of a flat link. */
  navLinks: { label: string; url: string; children?: { label: string; url: string }[] }[];
  navCtaButtons: { label: string; url: string }[];
  footerLinks: { label: string; url: string }[];
  footerText: string;
  footerVariant: string;
  logoUrl?: string;
}

export const SITE_PAGES: PageData[] = [
  {
    "title": "Home",
    "slug": "home",
    "excerpt": null,
    "layout": [
      {
        "__component": "shared.custom-block",
        "blockType": "hero-motion",
        "props": {
          "eyebrow": "Prime Yorg",
          "heading": "Creamier Moments, Perfected",
          "subheading": "A premium yogurt range with rich flavor and a silky finish. Crafted to turn an everyday spoonful into something worth savoring.",
          "primaryLabel": "View Products",
          "primaryHref": "/products",
          "imageAlt": "luxury yogurt bowl editorial",
          "imageSrc": "/images/d9chl8.jpg"
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "logo-cloud",
        "props": {
          "heading": "Served in select places",
          "items": [
            {
              "label": "Whole Foods Market"
            },
            {
              "label": "Erewhon"
            },
            {
              "label": "Waitrose"
            },
            {
              "label": "Dean & Deluca"
            },
            {
              "label": "Blue Bottle Café"
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "feature-icons",
        "props": {
          "heading": "Why Choose Our Yogurt",
          "subheading": "Creamy, real, and made to feel like a small luxury in every cup.",
          "items": [
            {
              "icon": "star",
              "title": "Silky, Creamy Texture",
              "description": "Lush and spoonable, with a smooth finish that feels indulgent from the first taste."
            },
            {
              "icon": "leaf",
              "title": "Real Ingredients",
              "description": "Made with thoughtful ingredients for clean flavor and a naturally satisfying yogurt experience."
            },
            {
              "icon": "shield-check",
              "title": "Probiotic Goodness",
              "description": "A feel-good daily choice with live cultures that support your routine without sacrificing taste."
            },
            {
              "icon": "truck",
              "title": "Locally Made Freshness",
              "description": "Prepared close to home for freshness you can taste in every batch, every day."
            },
            {
              "icon": "sparkles",
              "title": "An Easy Everyday Treat",
              "description": "A refined yogurt range that makes choosing simple, from a light favorite to a more indulgent moment."
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "stats-cards-trend",
        "props": {
          "eyebrow": "At a glance",
          "heading": "Creamy numbers, daily proof",
          "subheading": "Prime Yorg keeps the range focused, the texture lush, and the supply steady. Every figure reflects a yogurt made to feel premium from first spoonful to last.",
          "items": [
            {
              "icon": "activity",
              "value": "12,000+",
              "label": "cups batched daily",
              "trend": "+8% this month",
              "up": true
            },
            {
              "icon": "star",
              "value": "8",
              "label": "signature flavors",
              "trend": "Most-loved: Vanilla Bean",
              "up": true
            },
            {
              "icon": "globe",
              "value": "120+",
              "label": "stockists and delivery points",
              "trend": "Coverage expanding weekly",
              "up": true
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "feature-bento",
        "props": {
          "heading": "Signature Yogurt Range",
          "items": [
            {
              "title": "Vanilla Bean Silk",
              "description": "Velvety vanilla with a clean dairy finish and a quietly indulgent creaminess. A refined everyday favorite."
            },
            {
              "title": "Berry Lux",
              "description": "Bright mixed berries folded into smooth yogurt for a fresh, glossy bite. Sweet, vivid, and balanced."
            },
            {
              "title": "Greek Honey",
              "description": "Thick, rich yogurt with a delicate honeyed warmth. Made for a more luxurious spoonful."
            },
            {
              "title": "Mango Cream",
              "description": "Sun-ripened mango meets a lush, satin texture. Tropical, smooth, and softly decadent."
            },
            {
              "title": "Cocoa Velvet",
              "description": "Deep cocoa notes layered over creamy yogurt for a dessert-like finish. Bold, polished, and satisfying."
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "testimonial-masonry",
        "props": {
          "heading": "Customer Favorites",
          "testimonials": [
            {
              "quote": "Silky, rich, and never heavy. I keep coming back for the clean flavor and that lush, spoon-coating texture.",
              "authorName": "Maya L.",
              "authorRole": "Orders weekly"
            },
            {
              "quote": "It tastes like a small luxury in the middle of the day. The creaminess is beautifully balanced, and I reorder before I run out.",
              "authorName": "Daniel R.",
              "authorRole": "Reorders every week"
            },
            {
              "quote": "The texture is what won me over first, then the flavor. It feels premium, and the berry one has become my daily ritual.",
              "authorName": "Priya S.",
              "authorRole": "Returns for more each week"
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "faq-two-column",
        "props": {
          "eyebrow": "Buying Questions",
          "heading": "All the details, simply answered",
          "subheading": "From ingredients to delivery, here’s what to know before you choose your next pot of prime yorg.",
          "items": [
            {
              "question": "What’s in prime yorg?",
              "answer": "We keep it thoughtfully simple: premium milk, live cultures, and carefully chosen ingredients for a rich, creamy finish."
            },
            {
              "question": "How should I store it?",
              "answer": "Keep it refrigerated as soon as it arrives. For the best texture and taste, enjoy it cold."
            },
            {
              "question": "How long does it stay fresh?",
              "answer": "Each pot carries a clear use-by date. We recommend enjoying it at its best before then for the smoothest flavor and texture."
            },
            {
              "question": "Do you deliver chilled?",
              "answer": "Yes. Orders are packed to help maintain a cool, protected journey from us to your door."
            },
            {
              "question": "Is it suitable for lactose-sensitive customers?",
              "answer": "Some varieties may contain lactose. Please check each product label for the full ingredient and allergen details before ordering."
            },
            {
              "question": "How much sugar is in it?",
              "answer": "Sugar levels vary by flavor. You’ll find the nutrition information on every product page, so you can choose with confidence."
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "contact-split-form",
        "props": {
          "eyebrow": "Start Shopping",
          "heading": "Your next spoonful awaits",
          "subheading": "Order online, find a stockist nearby, or speak with us about wholesale. Prime Yorg brings a rich, creamy yogurt experience to every table.",
          "email": "contact@primeyorg. com",
          "phone": "+1 (555) 014-2200",
          "address": "Prime Yorg, 128 Creamery Lane, New",
          "primaryLabel": "Shop Yogurt"
        }
      }
    ],
    "path": "home"
  },
  {
    "title": "Products",
    "slug": "products",
    "excerpt": null,
    "layout": [
      {
        "__component": "shared.custom-block",
        "blockType": "hero-minimal",
        "props": {
          "eyebrow": "Products",
          "heading": "Creamy yogurt, beautifully chosen",
          "subheading": "Discover a focused range of rich, indulgent yogurt cups and tubs, crafted for everyday enjoyment with a premium finish.",
          "primaryLabel": "Browse the assortment",
          "primaryHref": "/products",
          "align": "left"
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "feature-list",
        "props": {
          "eyebrow": "All Yogurt Products",
          "heading": "A refined range, ready to enjoy",
          "subheading": "Explore Prime Yorg’s yogurt collection, from everyday favorites to richer, more indulgent choices.",
          "items": [
            {
              "icon": "sparkles",
              "title": "Classic Vanilla",
              "description": "Smooth, delicate, and beautifully balanced in a 150g cup. A timeless yogurt with a creamy finish and a quiet touch of sweetness."
            },
            {
              "icon": "shield",
              "title": "Greek Plain",
              "description": "Thick, protein-rich, and satisfyingly rich in a 200g tub. Clean flavor and velvety texture for breakfast, bowls, or cooking."
            },
            {
              "icon": "zap",
              "title": "Strawberry Luxe",
              "description": "Bright strawberry flavor folded into a silky 140g cup. A fresh, indulgent choice with a soft, dessert-like finish."
            },
            {
              "icon": "layers",
              "title": "Honey Almond",
              "description": "Creamy yogurt layered with golden honey notes and almond crunch in a 160g jar. Elegant, nutty, and deeply satisfying."
            },
            {
              "icon": "clock",
              "title": "Mango Silk",
              "description": "Lush mango yogurt in a 150g cup with a smooth tropical profile. Light, fruity, and made for an effortless treat."
            },
            {
              "icon": "rocket",
              "title": "Blackberry Cream",
              "description": "Deep berry flavor with a plush creaminess in a 140g cup. A fuller, more indulgent spoonful with a polished finish."
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "comparison-two-col",
        "props": {
          "heading": "Choose Your Style",
          "leftTitle": "Greek and Low-Fat",
          "rightTitle": "Drinkable and Dessert-Style",
          "leftItems": [
            "Greek: Thick, spoonable, and luxuriously tangy for a more substantial finish.",
            "Low-fat: Light in feel, with a clean creaminess that fits everyday routines."
          ],
          "rightItems": [
            "Drinkable: Smooth and refreshing, made for an easy sip anytime.",
            "Dessert-style: Silky, indulgent, and spoon-ready when you want a softer finish."
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "booking-hours-card",
        "props": {
          "eyebrow": "Ingredients and Nutrition",
          "heading": "Simple. Creamy. Carefully made.",
          "hoursTitle": "What’s inside",
          "hoursRows": [
            {
              "day": "Milk and cream",
              "hours": "For a rich, silky base."
            },
            {
              "day": "Live cultures",
              "hours": "Support a fresh, cultured finish."
            },
            {
              "day": "Sweetness level",
              "hours": "Balanced, never overly sweet."
            },
            {
              "day": "Everyday fit",
              "hours": "Easy at breakfast, after lunch, or as a small treat."
            }
          ],
          "locationTitle": "How it fits your day",
          "locationValue": "Made to enjoy straight from the spoon, with fruit, or as a refined pause between meals.",
          "bookTitle": "Clear, indulgent, easy to choose",
          "bookSubtitle": "Premium yogurt with a clean ingredient story and a taste that feels made for everyday moments.",
          "primaryLabel": "Explore products",
          "primaryHref": "/products"
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "feature-media-tabs",
        "props": {
          "eyebrow": "Best Ways to Enjoy",
          "heading": "Serve It Beautifully",
          "items": [
            {
              "label": "Breakfast",
              "title": "Morning Bowl",
              "body": "Layer yogurt with berries, oats, and honey for a breakfast that feels polished, creamy, and quietly indulgent.",
              "imageSrc": "/images/mdi3j8.jpg"
            },
            {
              "label": "Smoothies",
              "title": "Silken Blend",
              "body": "Blend with ripe fruit and ice for a smooth, rich sip that keeps the yogurt’s creaminess front and center.",
              "imageSrc": "/images/1jbois0.jpg"
            },
            {
              "label": "Snacks",
              "title": "Elegant Pause",
              "body": "Pair with almonds, granola, or sliced stone fruit for a refined snack that feels satisfying without excess.",
              "imageSrc": "/images/15scy7q.jpg"
            },
            {
              "label": "Dessert",
              "title": "Soft Finish",
              "body": "Serve with dark chocolate, roasted peaches, or a crisp biscuit for a dessert pairing that tastes considered and luxurious.",
              "imageSrc": "/images/ijm734.jpg"
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "faq-two-col-categorized",
        "props": {
          "heading": "Product Questions",
          "subheading": "Everything you need to know about our yogurt, from ingredients to storage, in one polished place.",
          "categories": [
            {
              "categoryName": "Allergens and Diets",
              "entries": [
                {
                  "question": "Which allergens should I check?",
                  "answer": "Please review the ingredient list on each product page. Our yogurts may contain dairy, and some flavors can include additional allergens."
                },
                {
                  "question": "Are your yogurts suitable for kids?",
                  "answer": "Yes, many are a lovely everyday option for children. For younger kids or specific needs, we recommend checking ingredients and serving sizes first."
                },
                {
                  "question": "Do you offer options for specific diets?",
                  "answer": "Some products may suit certain diets, but not every flavor fits every routine. Check the product details for ingredient and nutrition information before choosing."
                }
              ]
            },
            {
              "categoryName": "Freshness and Storage",
              "entries": [
                {
                  "question": "How should I store prime yorg?",
                  "answer": "Keep your yogurt refrigerated and chilled at all times. For the best creamy texture and flavor, return it to the fridge promptly after serving."
                },
                {
                  "question": "How fresh are the batches?",
                  "answer": "We make freshness a priority and move product quickly so it arrives at its best. Always check the use-by date on the pack for the most accurate guide."
                },
                {
                  "question": "How long does it stay good after opening?",
                  "answer": "Once opened, enjoy it soon and keep it refrigerated. The flavor and texture are best when the lid is replaced tightly and the yogurt stays cold."
                }
              ]
            },
            {
              "categoryName": "Ingredients and Texture",
              "entries": [
                {
                  "question": "What makes your yogurt feel premium?",
                  "answer": "We focus on a rich, creamy texture and a clean, indulgent taste. Each spoonful is designed to feel smooth, balanced, and worth savoring."
                },
                {
                  "question": "Do your products contain real fruit or flavoring?",
                  "answer": "Our range is made to highlight quality ingredients and a full, satisfying flavor. Check each product page for the exact recipe behind your favorite."
                },
                {
                  "question": "Are your yogurts suitable as an everyday treat?",
                  "answer": "Absolutely. prime yorg is crafted to make a simple yogurt moment feel a little more refined, whether it’s breakfast, a snack, or dessert."
                }
              ]
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "newsletter-signup",
        "props": {
          "eyebrow": "Order Yogurt",
          "heading": "Bring Home Prime Yorg",
          "subheading": "Shop the full range online, find us nearby, or reach out for bulk orders. However you enjoy it, every cup is made to feel polished and indulgent.",
          "primaryLabel": "Shop Yogurt",
          "body": "Prime Yorg is crafted for a rich, creamy finish that turns everyday yogurt into a small daily luxury. Choose your favorites, discover where to buy, or contact us for larger orders."
        }
      }
    ],
    "path": "products"
  },
  {
    "title": "Where to Buy",
    "slug": "where-to-buy",
    "excerpt": null,
    "layout": [
      {
        "__component": "shared.custom-block",
        "blockType": "hero-dual-heading",
        "props": {
          "eyebrow": "Find prime yorg near you",
          "heading": "Creamy yogurt, closer to home",
          "subheading": "Discover stockists carrying our premium range. Choose your favorite, then pick it up fresh from a nearby store.",
          "body": "Prime yorg brings rich flavor and a smooth, indulgent texture to everyday shopping. Use our store finder to see where premium yogurt is waiting nearby.",
          "primaryLabel": "Find a Store",
          "primaryHref": "/where-to-buy"
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "changelog",
        "props": {
          "eyebrow": "Purchase options",
          "heading": "Find Prime Yorg near you",
          "subheading": "Enjoy our yogurt from the supermarket shelf, a local stockist, or straight from our kitchen. Choose the option that suits your day best.",
          "items": [
            {
              "version": null,
              "date": null,
              "title": "Supermarket availability",
              "description": "Pick up Prime Yorg at selected supermarkets for a smooth, premium yogurt moment built into your weekly shop.",
              "tags": [
                "/where-to-buy",
                "/products"
              ]
            },
            {
              "version": null,
              "date": null,
              "title": "Local stockists",
              "description": "Visit trusted local stockists for fresh availability and a closer look at the full range.",
              "tags": [
                "/where-to-buy",
                "/contact"
              ]
            },
            {
              "version": null,
              "date": null,
              "title": "Direct pickup",
              "description": "Collect your yogurt directly from us for the freshest handoff and a more personal purchase experience.",
              "tags": [
                "/contact",
                "/about"
              ]
            },
            {
              "version": null,
              "date": null,
              "title": "Delivery options",
              "description": "Where available, choose delivery for a simple, chilled way to bring Prime Yorg home.",
              "tags": [
                "/faq",
                "/contact"
              ]
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "feature-bento-media",
        "props": {
          "heading": "Find Prime Yorg Nearby",
          "imageAlt": "premium grocery dairy aisle",
          "featuredLabel": "Nearest Stockist",
          "featuredTitle": "Creamy favorites close by",
          "featuredDescription": "Discover retailers carrying Prime Yorg, with neighborhood details and quick links for directions or a call ahead.",
          "primaryLabel": "Get Directions",
          "items": [
            {
              "icon": "📍",
              "title": "The Creamery Market",
              "description": "SoHo • Fresh deliveries daily. Call ahead for today’s stock and chilled pickup options."
            },
            {
              "icon": "🛒",
              "title": "Harbor Fine Foods",
              "description": "Tribeca • Open late. Ideal for grabbing a quiet, indulgent tub on the way home."
            },
            {
              "icon": "🥄",
              "title": "West End Grocer",
              "description": "Upper West Side • Everyday essentials, plus select Prime Yorg flavors in the dairy case."
            },
            {
              "icon": "🚗",
              "title": "Murray Hill Pantry",
              "description": "Murray Hill • Easy street access. Tap for directions before your next grocery run."
            }
          ],
          "imageSrc": "/images/76u9bf.jpg"
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "stats-inline",
        "props": {
          "heading": "Availability at a Glance",
          "stats": [
            {
              "value": "120+",
              "label": "Stockists",
              "suffix": null,
              "prefix": null
            },
            {
              "value": "18",
              "label": "Service areas",
              "suffix": null,
              "prefix": null
            },
            {
              "value": "Weekly",
              "label": "Restock frequency",
              "suffix": null,
              "prefix": null
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "testimonial-spotlight",
        "props": {
          "quote": "I pick up prime yorg on my way home, and it always tastes impossibly fresh. The texture is so silky, it feels like a small luxury in an ordinary day.",
          "authorName": "Maya L.",
          "authorRole": "Evening commuter, downtown shopper",
          "imageSrc": "/images/1s3lmg0.jpg"
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "faq-grid",
        "props": {
          "heading": "Store and Pickup Questions",
          "items": [
            {
              "question": "Do every store carry every flavor?",
              "answer": "Not always. Selection can vary by retailer, but our core favorites are stocked most often for an easy, premium pick."
            },
            {
              "question": "How often is stock refreshed?",
              "answer": "Many locations replenish regularly, though timing depends on the store. For the freshest availability, check with your local retailer."
            },
            {
              "question": "Can I request Prime Yorg near me?",
              "answer": "Yes. If your favorite store doesn’t carry us yet, ask their dairy buyer to bring Prime Yorg in and share our name."
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "cta-banner",
        "props": {
          "heading": "Find Your Nearest Shop",
          "description": "Use our store finder to discover prime yorg near you, check local stock, or ask for a retailer in your area. Fresh, creamy yogurt should be easy to reach.",
          "buttonText": "Find a Shop",
          "buttonUrl": "/where-to-buy"
        }
      }
    ],
    "path": "where-to-buy"
  },
  {
    "title": "About",
    "slug": "about",
    "excerpt": null,
    "layout": [
      {
        "__component": "shared.custom-block",
        "blockType": "hero-form-inline",
        "props": {
          "eyebrow": "Artisan dairy, refined",
          "heading": "Creamy yogurt, beautifully made",
          "subheading": "Prime Yorg crafts premium yogurt with rich flavor, silky texture, and a careful touch in every batch. A small daily treat, made to feel special.",
          "primaryLabel": "Explore products",
          "note": "Made with care for yogurt lovers who want quality, flavor, and a creamy finish in every spoonful."
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "content-spec-tables",
        "props": {
          "eyebrow": "Our Story",
          "heading": "From a Spoonful of Care",
          "items": [
            {
              "title": "How Prime Yorg Began",
              "headers": null,
              "rows": [
                {
                  "cells": [
                    "Prime Yorg started with a simple idea: yogurt should feel as good as it tastes, every day."
                  ]
                },
                {
                  "cells": [
                    "We set out to make a small range that favors richness, creaminess, and effortless"
                  ]
                }
              ]
            },
            {
              "title": "What Inspired the Recipe",
              "headers": null,
              "rows": [
                {
                  "cells": [
                    "We were inspired by the quiet pleasure of a truly good yogurt, the kind that turns an"
                  ]
                },
                {
                  "cells": [
                    "That led us to refine flavor and texture until each spoonful felt smooth, balanced, and"
                  ]
                }
              ]
            },
            {
              "title": "Why It Tastes Special",
              "headers": null,
              "rows": [
                {
                  "cells": [
                    "Our process is built around careful crafting, so the finish stays creamy and the flavor"
                  ]
                },
                {
                  "cells": [
                    "The result is a premium yogurt experience that feels polished from first taste to last."
                  ]
                }
              ]
            }
          ]
        }
      },
      {
        "__component": "shared.timeline",
        "heading": "Brand Milestones",
        "events": [
          {
            "date": "2021",
            "title": "First batch",
            "description": "We crafted our first small-batch yogurt with rich texture and clean, simple ingredients.",
            "icon": "🥛"
          },
          {
            "date": "2022",
            "title": "New flavors launched",
            "description": "Seasonal fruit and honey blends joined the lineup, bringing more choice to everyday cravings.",
            "icon": "🍓"
          },
          {
            "date": "2023",
            "title": "Expanded into stores",
            "description": "Prime Yorg reached select premium grocers, making our yogurt easier to find.",
            "icon": "🛒"
          },
          {
            "date": "2024",
            "title": "Entered new markets",
            "description": "We grew beyond our home base, introducing more customers to our signature taste.",
            "icon": "🌍"
          }
        ],
        "sectionBackground": "default",
        "dividerTop": "none",
        "dividerBottom": "none",
        "gradientHeading": false
      },
      {
        "__component": "shared.custom-block",
        "blockType": "stats-cards",
        "props": {
          "heading": "Jungle Green Momentum",
          "stats": [
            {
              "value": "10k+",
              "label": "Happy customers",
              "suffix": null,
              "prefix": null
            },
            {
              "value": "99. 9",
              "label": "Reliable uptime",
              "suffix": "%",
              "prefix": null
            },
            {
              "value": "4. 9",
              "label": "Trusted rating",
              "suffix": "/5",
              "prefix": null
            },
            {
              "value": "50",
              "label": "Live integrations",
              "suffix": "+",
              "prefix": null
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "team-photos",
        "props": {
          "heading": "People Behind the Yogurt",
          "members": [
            {
              "name": "Maya Patel",
              "role": "Founder and taste lead",
              "imageSrc": "/images/zgdj3r.jpg"
            },
            {
              "name": "Ethan Reed",
              "role": "Dairy operations lead",
              "imageSrc": "/images/1nru6tb.jpg"
            },
            {
              "name": "The Prime Yorg Family",
              "role": "Hands behind every batch",
              "imageSrc": "/images/1nru6tb.jpg"
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "testimonial-case-stat",
        "props": {
          "heading": "Why People Trust Us",
          "cards": [
            {
              "quote": "The texture is always silky, the flavor clean and full. It tastes like something made with care, not just produced in volume.",
              "authorName": "Maya L.",
              "authorRole": "Longtime customer",
              "statValue": "100%",
              "statLabel": "Creamy, consistent batches",
              "logoText": "Prime Yorg"
            },
            {
              "quote": "Our shelves needed a yogurt line that sold on quality alone. Prime Yorg delivers that polished look, dependable turn, and a product customers ask for again.",
              "authorName": "Daniel R.",
              "authorRole": "Retail buyer",
              "statValue": "Fast",
              "statLabel": "Personal, attentive support",
              "logoText": "Prime Yorg"
            },
            {
              "quote": "It feels indulgent enough for a treat, yet simple enough for every day. That balance is why I keep coming back.",
              "authorName": "Sofia T.",
              "authorRole": "Regular customer",
              "statValue": "5-star",
              "statLabel": "Everyday enjoyment",
              "logoText": "Prime Yorg"
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "contact-split-form",
        "props": {
          "eyebrow": "Visit, follow, or say hello",
          "heading": "Meet Us in Store",
          "subheading": "Find prime yorg at select stockists, discover your next favorite flavor, or reach out with a question.",
          "email": "hello@primeyorg. com",
          "phone": "+1 (555) 014-2024",
          "address": "Available at select stockists and",
          "primaryLabel": "Find a Stockist"
        },
        "sectionBackground": "muted",
        "headingColor": "#0F3D2E",
        "textColor": "#1F5C46",
        "buttonColor": "#1F5C46",
        "buttonTextColor": "#FFFFFF",
        "borderColor": "#2E7D60",
        "borderRadius": "0.75rem",
        "paddingY": "default"
      }
    ],
    "path": "about"
  },
  {
    "title": "Contact",
    "slug": "contact",
    "excerpt": null,
    "layout": [
      {
        "__component": "shared.custom-block",
        "blockType": "hero-inverse",
        "props": {
          "eyebrow": "Contact Prime Yorg",
          "heading": "Let’s Talk Yogurt",
          "subheading": "Questions about our products, custom orders, or partnerships? Reach out and we’ll respond with care.",
          "primaryLabel": "Contact Us",
          "primaryHref": "/contact",
          "secondaryLabel": "Explore Products",
          "secondaryHref": "/products",
          "imageAlt": "premium yogurt bowl",
          "imageSrc": "/images/nl08b0.jpg"
        },
        "backgroundColor": null,
        "headingColor": null,
        "textColor": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "borderColor": null,
        "borderRadius": null
      },
      {
        "__component": "shared.custom-block",
        "blockType": "cta-split",
        "props": {
          "heading": "Contact Prime Yorg",
          "description": "For orders, stockist details, or wholesale enquiries, reach out directly. We keep every conversation as smooth and attentive as our yogurt.",
          "primaryLabel": "Contact us",
          "primaryHref": "/contact"
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "feature1",
        "props": {
          "title": "Navy-toned pages that launch faster",
          "description": "A calm navy palette keeps layouts polished and easy to scan. Present content clearly, balance every section, and guide visitors to one action.",
          "imageAlt": "website feature dashboard mockup with navy color styling",
          "buttonPrimary": {
            "text": "See how it works",
            "href": "#"
          },
          "imageSrc": "/images/1bm7m5j.jpg"
        },
        "headingColor": null,
        "backgroundColor": null,
        "textColor": null,
        "buttonColor": null,
        "buttonTextColor": null,
        "borderColor": null,
        "borderRadius": null,
        "sectionBackground": null
      },
      {
        "__component": "shared.custom-block",
        "blockType": "cta-newsletter",
        "props": {
          "heading": "Message Us",
          "subheading": "Have a question about a flavor, a pack, or where to find prime yorg? Send us a note and we’ll respond with care.",
          "placeholder": "Tell us what you’re looking for",
          "primaryLabel": "Send Message",
          "primaryHref": "/contact",
          "note": "We read every message and reply with the same attention we give our yogurt."
        }
      }
    ],
    "path": "contact"
  },
  {
    "title": "FAQ",
    "slug": "faq",
    "excerpt": null,
    "layout": [
      {
        "__component": "shared.custom-block",
        "blockType": "hero-split-stat-card",
        "props": {
          "eyebrow": "FAQ",
          "heading": "Questions, beautifully answered",
          "subheading": "Find quick clarity on flavor, freshness, and what makes Prime Yorg feel a little more indulgent.",
          "primaryLabel": "Explore products",
          "primaryHref": "/products",
          "secondaryLabel": "Read FAQ",
          "secondaryHref": "/faq",
          "imageAlt": "premium yogurt spoon portrait",
          "imageSrc": "/images/8i86zl.jpg"
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "faq-split",
        "props": {
          "heading": "Customer Questions",
          "subheading": "Everything you need, answered with the same care as our yogurt. From ingredients to availability, here’s the essential guide.",
          "items": [
            {
              "question": "What makes Prime Yorg premium?",
              "answer": "Prime Yorg is crafted for a richer, creamier spoonful, with a refined finish that turns an everyday yogurt into a small indulgence."
            },
            {
              "question": "Which yogurt is right for me?",
              "answer": "Our range is intentionally focused, making it easy to choose between a simple daily favorite and a more indulgent treat."
            },
            {
              "question": "What flavors do you offer?",
              "answer": "We keep the selection curated and flavorful, with options designed to highlight smooth texture, clean taste, and satisfying richness."
            },
            {
              "question": "Is Prime Yorg suitable for everyday eating?",
              "answer": "Yes. It’s made to fit easily into daily routines while still feeling special enough to look forward to."
            },
            {
              "question": "How should I store it?",
              "answer": "Keep Prime Yorg refrigerated and return it to the fridge promptly after serving to preserve its texture and freshness."
            },
            {
              "question": "How long does it stay fresh?",
              "answer": "Check the best-before date on the pack. For the best taste and texture, enjoy it while it’s well chilled and within date."
            },
            {
              "question": "Do you deliver online orders?",
              "answer": "Availability depends on your location and selected products. Use our store finder or product page for the latest options."
            },
            {
              "question": "Where can I buy Prime Yorg?",
              "answer": "Prime Yorg is available through selected stores and partners. Check where to buy for the nearest availability."
            }
          ]
        }
      },
      {
        "__component": "shared.custom-block",
        "blockType": "cta-newsletter-gradient",
        "props": {
          "eyebrow": "Still Need Help?",
          "heading": "We’re Here to Help",
          "subheading": "Questions about a flavor, an ingredient, or where to find prime yorg? Our team is ready with clear answers and a smoother shopping path.",
          "primaryLabel": "Contact Us",
          "body": "If you’re deciding between favorites or looking for the nearest stockist, we can help. Check the store locator for nearby retailers, or reach out for product details and guidance. Either way, finding your next creamy favorite should feel effortless."
        }
      }
    ],
    "path": "faq"
  },
  {
    "title": "Privacy Policy",
    "slug": "privacy-policy",
    "excerpt": null,
    "layout": [
      {
        "__component": "shared.rich-text",
        "body": "<h1>Privacy Policy</h1><p><em>This is starter boilerplate, not legal advice — have a qualified professional review it before launch.</em></p><p>prime yorg respects your privacy. This policy describes what we collect and why.</p><h2>What we collect</h2><p>Information you provide directly (such as a contact form or newsletter signup) and basic usage analytics.</p><h2>How we use it</h2><p>To respond to enquiries, deliver requested services, and improve this site. We do not sell personal data.</p><h2>Cookies</h2><p>This site may use cookies for essential functionality and anonymous analytics.</p><h2>Your rights</h2><p>You may request access to, correction of, or deletion of your personal data at any time via the contact page.</p><p>Last updated: 2026.</p>"
      }
    ],
    "path": "privacy-policy"
  },
  {
    "title": "Terms of Service",
    "slug": "terms-of-service",
    "excerpt": null,
    "layout": [
      {
        "__component": "shared.rich-text",
        "body": "<h1>Terms of Service</h1><p><em>This is starter boilerplate, not legal advice — have a qualified professional review it before launch.</em></p><p>By using this website you agree to these terms.</p><h2>Use of this site</h2><p>Content is provided for general information. Do not misuse the site or attempt to disrupt its operation.</p><h2>Intellectual property</h2><p>All content on this site belongs to prime yorg unless stated otherwise.</p><h2>Liability</h2><p>The site is provided \"as is\" without warranties; to the extent permitted by law, liability for damages arising from its use is excluded.</p><h2>Changes</h2><p>These terms may be updated from time to time; continued use constitutes acceptance.</p><p>Last updated: 2026.</p>"
      }
    ],
    "path": "terms-of-service"
  }
];

export const SITE_IDENTITY: SiteIdentityData = {
  "navVariant": "logo-center",
  "navLinks": [
    {
      "label": "Home",
      "url": "/home"
    },
    {
      "label": "Products",
      "url": "/products"
    },
    {
      "label": "Where to Buy",
      "url": "/where-to-buy"
    },
    {
      "label": "About",
      "url": "/about"
    },
    {
      "label": "Contact",
      "url": "/contact"
    },
    {
      "label": "FAQ",
      "url": "/faq"
    }
  ],
  "navCtaButtons": [],
  "footerLinks": [
    {
      "label": "Home",
      "url": "/home"
    },
    {
      "label": "Products",
      "url": "/products"
    },
    {
      "label": "Where to Buy",
      "url": "/where-to-buy"
    },
    {
      "label": "About",
      "url": "/about"
    },
    {
      "label": "Contact",
      "url": "/contact"
    },
    {
      "label": "FAQ",
      "url": "/faq"
    }
  ],
  "footerText": "prime yorg",
  "footerVariant": "bordered-columns",
  "logoUrl": "https://hel1.your-objectstorage.com/sattva-cms-staging/product_showcase_thumb_3a2b5c5392.jpg",
  "proposedSiteName": null
};

export interface SiteCredit { name: string; url: string }

export const SITE_CREDITS: SiteCredit[] = [{"name":"Brooke Lark","url":"https://unsplash.com/@brookelark?utm_source=sattva-ai-builder&utm_medium=referral"},{"name":"Jaqueline Pelzer","url":"https://unsplash.com/@jaqui123456?utm_source=sattva-ai-builder&utm_medium=referral"},{"name":"Bakd&Raw by Karolin Baitinger","url":"https://unsplash.com/@bakdandraw?utm_source=sattva-ai-builder&utm_medium=referral"},{"name":"Omar:. Lopez-Rincon","url":"https://unsplash.com/@procopiopi?utm_source=sattva-ai-builder&utm_medium=referral"},{"name":"Craig Tidball","url":"https://unsplash.com/@devonshiremedia?utm_source=sattva-ai-builder&utm_medium=referral"},{"name":"Warren Umoh","url":"https://unsplash.com/@warrenumoh?utm_source=sattva-ai-builder&utm_medium=referral"},{"name":"joe boshra","url":"https://unsplash.com/@joestudios?utm_source=sattva-ai-builder&utm_medium=referral"},{"name":"1981 Digital","url":"https://unsplash.com/@1981digital?utm_source=sattva-ai-builder&utm_medium=referral"},{"name":"Supratik Deshmukh","url":"https://unsplash.com/@supratikdeshmukh?utm_source=sattva-ai-builder&utm_medium=referral"},{"name":"Jainath Ponnala","url":"https://unsplash.com/@jainath?utm_source=sattva-ai-builder&utm_medium=referral"},{"name":"Franki Chamaki","url":"https://unsplash.com/@franki?utm_source=sattva-ai-builder&utm_medium=referral"},{"name":"Matt Richmond","url":"https://unsplash.com/@mattrichmo?utm_source=sattva-ai-builder&utm_medium=referral"}];
