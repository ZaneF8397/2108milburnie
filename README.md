# Luxury Estate Showcase Website
## 2108 Milburnie Rd, Raleigh, NC 27610

A premium, fully-responsive single-property luxury real estate showcase website built with clean, semantic HTML5, modern CSS (Flexbox & Grid), and vanilla JavaScript.

---

## 📋 Project Structure

```
WEBSITE/
├── index.html          # Main HTML structure
├── style.css           # Complete styling & responsive design
├── app.js              # Tab management, price calculator, modals
├── images/             # Image assets (placeholder paths)
│   ├── hero-exterior.png
│   ├── render-kitchen.png
│   ├── render-living.png
│   ├── render-backyard.png
│   ├── floorplan-l1.png
│   ├── floorplan-l2.png
│   ├── elevation-front.png
│   ├── elevation-side.png
│   └── elevation-rear.png
└── README.md           # This file

```

---

## 🚀 Getting Started

### Prerequisites
- **VS Code** with Live Server extension (or any local web server)
- **Images folder** with the placeholder images listed above

### Quick Setup

1. **Open in VS Code**
   - Open the WEBSITE folder in VS Code

2. **Install Live Server** (if not already installed)
   - Install the Live Server extension from the VS Code marketplace

3. **Start Local Server**
   - Right-click on `index.html` → "Open with Live Server"
   - Or use the Live Server button in the bottom-right corner

4. **Add Images**
   - Create an `images/` folder in the project root
   - Add the required placeholder images (see Image Requirements below)

---

## 🎨 Design System

### Color Palette
- **Primary Charcoal**: `#1a1a1a` - Main text and backgrounds
- **Accent Gold**: `#d4af37` - Premium highlights and CTAs
- **Warm Cream**: `#f5f1e8` - Light backgrounds
- **Medium Gray**: `#8a8a8a` - Secondary text
- **Pure White**: `#ffffff` - Card and section backgrounds

### Typography
- **Serif (Headlines)**: Georgia, Garamond
- **Sans-serif (Body)**: System fonts (-apple-system, Segoe UI, Helvetica Neue)
- **Font Sizes**: Responsive scale from 16px to 64px

---

## 🖼️ Image Requirements

Create or replace the following placeholder images in the `images/` folder:

| Filename | Dimensions | Purpose |
|----------|-----------|---------|
| `hero-exterior.png` | 1920×1080 (or responsive) | Hero section background |
| `render-kitchen.png` | 600×450 | Chef's Kitchen render |
| `render-living.png` | 600×450 | Great Room render |
| `render-backyard.png` | 600×450 | Rear Oasis render |
| `floorplan-l1.png` | 800×600 | Level 1 floor plan |
| `floorplan-l2.png` | 800×600 | Level 2 floor plan |
| `elevation-front.png` | 600×450 | Front elevation blueprint |
| `elevation-side.png` | 600×450 | Side elevation blueprint |
| `elevation-rear.png` | 600×450 | Rear elevation blueprint |

---

## ⚙️ Features

### 1. Hero Section
- Cinematic hero image with premium overlay
- Animated headline and subheadline
- Quick-fact icons (2 Stories, ~2,200 Sq. Ft., Custom Finishes, Pre-Sale)
- "Explore Floor Plans" CTA button with smooth scroll navigation

### 2. Tabbed Portfolio Architecture
- Three interactive tabs: **3D Visual Renders**, **Floor Plans**, **Elevations**
- Smooth tab switching with CSS animations
- Active tab indicator with gold underline
- Keyboard navigation support (Arrow Left/Right)

### 3. Interactive C2P Upgrade Matrix
- Base package display: **$890,000** with description
- Custom upgrade checkboxes with dynamic pricing:
  - Attached Garage Package (+$45,000)
  - Solar Panel Integration (+$40,000)
  - Full Property Privacy Fence (+$8,000)
  - Turnkey Luxury Landscaping (+$8,000)
- **Live price calculator** with animated counter updates
- "Lock This Custom Configuration" button triggers modal

### 4. White-Glove Financing & Team Section
- **Asset Pipeline** column:
  - Developer & Governor: Footenote, LLC
  - Licensed General Contractor: Kevin Matthew Teti
- **Turnkey C2P Financing** column:
  - Preferred Lending Partner details
  - Approved Builder Status
  - Single-Close Advantage
  - 30-Day Underwriting Pipeline

### 5. Professional Footer
- Property address and legal disclaimer
- Contact information (Footenote, LLC)
- "Schedule Private Builder Consult" CTA button

### 6. Modal Popups
- **Lock Configuration Modal**: Confirmation when user locks custom selections
- **Schedule Consult Modal**: Contact form with name, email, phone, message fields

---

## 🎯 JavaScript Functionality

### Tab Switching
```javascript
initTabs()           // Initialize tab functionality
switchTab()          // Switch active tab with smooth animation
```

### Price Calculator
```javascript
initPriceCalculator()  // Initialize checkbox listeners
updatePrice()          // Recalculate total when options change
formatCurrency()       // Format numbers to USD currency
```

### Modal Management
```javascript
openModal(modalId)     // Open specified modal
closeModal(modalId)    // Close modal with ESC key support
handleConsultSubmit()  // Handle contact form submission
```

### Navigation
```javascript
smoothScroll(elementId)    // Smooth scroll to section
initSmoothScroll()         // Setup smooth scroll listeners
```

### Analytics & Logging
```javascript
logEvent(eventName, data)  // Optional event tracking
```

---

## 📱 Responsive Design

The website is **fully responsive** with breakpoints:

- **Desktop**: 1200px+ (full layout)
- **Tablet**: 768px - 1199px (adjusted grid columns)
- **Mobile**: < 768px (single-column, adjusted typography)

Key responsive adjustments:
- Hero section adapts from 100vh to 70vh on mobile
- Multi-column grids collapse to single column
- Typography scales down for smaller screens
- Sticky price summary box becomes static on tablets

---

## ♿ Accessibility Features

- **Semantic HTML5** elements (nav, section, footer, article)
- **ARIA support** for modals and interactive elements
- **Keyboard navigation** (Tab, Arrow keys for tabs, ESC for modals)
- **Focus states** on all interactive elements
- **Color contrast** meets WCAG AA standards
- **Prefers Reduced Motion** media query support for animations

---

## 🔧 Customization

### Modify Colors
Edit CSS variables at the top of `style.css`:
```css
:root {
    --color-accent: #d4af37;  /* Gold */
    --color-primary: #1a1a1a; /* Charcoal */
    /* ... */
}
```

### Adjust Pricing
Edit base price and options in `index.html`:
```html
<div class="base-package-price">$890,000</div>

<input type="checkbox" class="option-checkbox" data-price="45000">
```

---

## 🚀 Deployment to GitHub Pages

### Prerequisites
- **Git** installed on your system ([Download](https://git-scm.com/download/win))
- **GitHub account** (free at https://github.com)

### Step-by-Step Deployment

1. **Create a GitHub Repository**
   - Go to https://github.com/new
   - Repository name: `[your-username].github.io` (for personal site) or any name for project site
   - Set to Public
   - Click "Create repository"

2. **Initialize Git & Push to GitHub**
   ```bash
   # Navigate to project directory
   cd path/to/WEBSITE

   # Initialize git repository
   git init

   # Add all files
   git add .

   # Create initial commit
   git commit -m "Initial commit: luxury estate showcase website"

   # Add remote repository (replace USERNAME and REPO)
   git remote add origin https://github.com/USERNAME/REPO.git

   # Rename branch to main (GitHub default)
   git branch -M main

   # Push to GitHub
   git push -u origin main
   ```

3. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under "Source", select **main** branch
   - Click **Save**
   - Your site will be live at: `https://USERNAME.github.io/REPO` (or `https://USERNAME.github.io` if using `[username].github.io` repo)

4. **Verify Deployment**
   - Wait 1-2 minutes for GitHub to build
   - Visit your GitHub Pages URL to confirm the site is live

### Updating the Site
After making changes locally:
```bash
git add .
git commit -m "Update: [describe changes]"
git push origin main
```

### Troubleshooting
- **Site not showing**: Ensure repository is public and GitHub Pages is enabled
- **Old version showing**: Clear browser cache (Ctrl+Shift+Del) and wait a few minutes for GitHub to rebuild
- **Images not loading**: Check that image paths are relative (e.g., `images/file.jpg` not `/images/file.jpg`)

### Update Copy
Edit text content in `index.html` sections for:
- Headlines and subheadlines
- Property details
- Team bios
- Financing descriptions

---

## 📊 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

---

## 📈 Performance Optimizations

- **No external dependencies** (Pure vanilla JavaScript)
- **Efficient CSS** with custom properties for reusability
- **Intersection Observer** for scroll animations
- **CSS Grid & Flexbox** for optimal layout performance
- **Minimal JavaScript** footprint (~8KB unminified)

---

## 🔒 Security & Legal

All content is governed by **Footenote, LLC**. Construction execution managed via authorized GC (Kevin Matthew Teti).

Address: **409 N King Charles Rd, Raleigh, NC 27610**

---

## 📝 Code Quality

- **Clean, semantic HTML5** structure
- **BEM-inspired CSS class naming** (.upgrade-matrix, .tab-container, etc.)
- **Modular JavaScript** with clear function organization
- **Comprehensive comments** for easy maintenance
- **Production-ready** code with no console warnings

---

## 🚦 Quick Troubleshooting

| Issue | Solution |
|-------|----------|
| Images not showing | Check `images/` folder exists with correct filenames |
| Tabs not switching | Verify JavaScript is enabled in browser |
| Price counter not updating | Check checkbox `data-price` attributes are set |
| Modal not closing | Ensure modal IDs match button `onclick` references |
| Styles look off | Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R) |

---

## 📞 Support & Contact

For questions or customization requests, contact:

**Footenote, LLC**
409 N King Charles Rd
Raleigh, NC 27610

---

**Last Updated**: June 2026
**Version**: 1.0
**License**: Proprietary - Footenote, LLC
