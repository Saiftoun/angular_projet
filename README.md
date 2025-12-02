# E-Commerce Angular Application

## Description
Modern and responsive e-commerce application built with Angular that displays products fetched from an external API (FakeStore API). Features include product filtering by category, cart functionality, and a sleek user interface powered by Bootstrap.

## Features
- 📦 Display products from external API
- 🔍 Filter products by category
- 🛒 Shopping cart functionality
- 📱 Fully responsive design
- 🎨 Modern UI with Bootstrap
- 🚀 Fast navigation with Angular routing

## Technologies Used
- Angular (latest version)
- TypeScript
- Bootstrap 5
- FakeStore API
- RxJS

## Prerequisites
Before running this project, make sure you have:
- Node.js (v14 or higher)
- npm (Node Package Manager)
- Angular CLI

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/Saiftoun/angular_projet.git
cd angular_projet
```

### 2. Install dependencies
```bash
npm install
```

### 3. Install Bootstrap
```bash
npm install bootstrap
```

## Running the Application

### Development Server
```bash
ng serve
```
Navigate to `http://localhost:4200/` in your browser. The application will automatically reload when you make changes to the source files.

### Build for Production
```bash
ng build
```
The build artifacts will be stored in the `dist/` directory.

## Project Structure
```
src/
├── app/
│   ├── products/
│   │   ├── components/
│   │   │   ├── all-products/
│   │   │   └── products-details/
│   │   └── services/
│   │       └── products.service.ts
│   ├── carts/
│   │   └── components/
│   │       └── cart/
│   ├── shared/
│   │   └── header/
│   └── app.routes.ts
└── environments/
    └── environment.ts
```

## Available Routes
- `/products` - View all products
- `/cart` - Shopping cart
- `/details` - Product details
- Default redirect to `/products`

## API Integration
This application uses the **FakeStore API** to fetch product data:
- Base URL: `https://fakestoreapi.com/`
- Endpoints used:
  - `GET /products` - Fetch all products
  - `GET /products/categories` - Fetch all categories
  - `GET /products/category/{category}` - Fetch products by category

## Key Functionalities

### Product Display
- Displays products in a responsive grid layout
- Shows product image, title, description, and price

### Category Filtering
- Dropdown menu to filter products by category
- Option to view all products or specific categories

### Navigation
- Header with navigation links
- Smooth routing between pages

## Screenshots
*(Add screenshots of your application here)*

## Future Enhancements
- Add product details page
- Implement shopping cart with add/remove functionality
- User authentication
- Order history
- Payment integration

## Author
Saiftoun

## License
This project is open source and available under the MIT License.

## Support
For issues or questions, please open an issue on GitHub.
