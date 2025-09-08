# Wedding Invitation Website

This is a simple, elegant wedding invitation website created for your sister's wedding. The website allows guests to view wedding details and RSVP online.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Wedding and engagement ceremony details with date, time, and location
- Interactive maps for ceremony locations
- RSVP form with data storage
- Admin page to view RSVP responses
- Countdown timer to the wedding day

## File Structure

- `index.html` - The main invitation page
- `location.html` - Page with maps and directions
- `admin.html` - Admin page to view RSVPs
- `css/style.css` - All styling for the website
- `js/script.js` - JavaScript functionality
- `images/` - Directory for images

## How to Use

1. **Customize the Content:**

   - Open `index.html` and update the names, dates, and locations
   - Modify the style in `css/style.css` if you want to change colors or layout

2. **Update Maps:**

   - In `location.html`, replace the Google Maps iframe src URLs with actual addresses
   - Update the "Get Directions" links with real addresses

3. **Deployment:**
   - Upload all files to a web hosting service
   - Share the URL with wedding guests

## Data Storage

The RSVP information is currently stored in the browser's localStorage. For a production site, you would want to:

1. Set up a server to receive and store RSVP data
2. Modify the JavaScript to send data to your server
3. Set up proper authentication for the admin page

## Browser Compatibility

This website works in all modern browsers including:

- Chrome
- Firefox
- Safari
- Edge

## Customization Tips

1. **Change Colors:**

   - The main color scheme is defined in `css/style.css`
   - The primary accent color is `#d4a373`

2. **Add Photos:**

   - Replace the "Photos coming soon" placeholder in the Our Story section
   - Add real photos of the couple in a grid layout

3. **Change Fonts:**
   - The website uses Google Fonts
   - Headings: 'Dancing Script'
   - Body text: 'Montserrat'

## Local Testing

To test the website locally, simply open the `index.html` file in a web browser.

---

Designed with ❤️ for your sister's wedding
