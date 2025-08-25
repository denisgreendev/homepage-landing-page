# One-Page Sneaker Store Website

This is a responsive one-page product page for an online sneaker store.
The website is based on a Figma design provided by the client.

---

## How to Run the Project Locally

### Option 1: Using VS Code
1. Open the project in **Visual Studio Code**
2. Install the **Live Server** extension
3. Click the **"Go Live"** button in the bottom right corner
4. The site will open in your default browser

### Option 2: Online (to be added later)
https://denisgreendev.github.io/shopify-school-homepage-denys-hryniuk

---

## Technologies Used

- **HTML5**
- **SCSS**
- **Vanilla JavaScript**
- **Google Fonts**
- **SVG and raster images**
- No frameworks, libraries, or bundlers used

> This is a fully front-end project. No backend, APIs, or databases are involved — all content and images are stored locally.

---

## Project Structure

```
Project Root
├── assets
│   ├── script.js
│   ├── style.scss
│   └── style.css
├── image
│   ├── banner
│   ├── header
│   └── products
│       ├── dark_sneakers
│       ├── red_sneakers
│       └── white_sneakers
├── index.html
└── README.md
```


## Page Structure

The site includes **7 main sections** and **2 pop-up windows**:

1. **Header** — responsive navigation with burger menu
2. **Banner slider** — main promo image slider
3. **Popular products slider**
4. **Product selection section** — color and size options with dynamic image slider
5. **FAQ accordion**
6. **Feedback form**
7. **Footer** — transforms into accordion on mobile
8. **Pop-up for registration** — appears 1 second after page load offering a discount

---

## Interactivity & Visual Effects

- Smooth transitions, hover effects
- Scroll-triggered animations
- Multiple sliders (products, banner)
- Pop-up windows
- Burger menu functionality
- Active state styling for selected sizes/colors
- Accordions (FAQ and mobile footer)
- Feedback form with input handling

---

## Development Details

- Fully responsive for all major screen sizes
- Different CSS techniques were **intentionally used across sections** to demonstrate flexibility and adaptability
- This is especially relevant for **Shopify development**, where developers often maintain or edit sections created by others
- All assets are local — no CDN, no API calls

---

## Product Slider Logic

Instead of the common approach of loading all product images at once and detecting the current color from the image state,
the site loads **only the images for the selected color**.

Benefits of this approach:
- Better performance and faster load times
- Less memory usage in the browser
- More predictable and maintainable code structure

---

## What I Would Improve With More Time

- Add **preloader animations** or placeholder content for better UX during loading
- Implement **pixel-perfect layout**
- Use **SVGs throughout the entire site**
- Improve **JS logic** so that size selections are remembered per color variant
- Replace Google Fonts with **locally hosted fonts** for better stability
- Refactor the product selection section to **load data dynamically from a server** (e.g. using a `product` array like in Liquid)
- Conduct a full **refactor of SCSS and JavaScript** for reusability
- Improve **burger menu design and animation**

---

## Most Challenging Part

The most difficult part was creating the **product variant slider**,
especially without relying on familiar Shopify/Liquid product data structures.

I had to manually implement logic that dynamically updates images and selections based on user interaction.

---

## What I Learned

- Strengthened my skills in **responsive layout**
- Learned to better structure SCSS and JavaScript code
- Deepened my understanding of translating Figma designs into live code
- Practiced solving problems without relying on frameworks or templating engines

---

## Notes

> The site design was provided as a Figma layout by the client.
> Development time: **approximately 25–30 hours**

---



