# Creative Builders — Static Website
Open `index.html` directly in a browser. No build step.

## Images
Demo images load from Unsplash (concept imagery, not company projects). If one fails, a local SVG placeholder shows. To use real images, place files in `images/` (`logo.png`, `hero-villa.jpg`, `project-1..3.jpg`, `cad-floor-plan.jpg`, `blueprint.jpg`, `about-house.jpg`) and change the `src` in `index.html` / `U()` & `IMG` in `js/script.js`.

## Before publishing
- Confirm service names/scope and the secondary number 9654566484 (commented out in the contact section).
- WhatsApp uses `919947150142` (+91). Edit `PHONE` in `js/script.js`.
- Form: no backend connected. Set `FORM_ENDPOINT` in `js/script.js` to a secure form service; until then it offers a WhatsApp send link.
- Replace the CSS/SVG logo with `images/logo.png` if desired.
