# lab3-multipage
Lab 3 - Multipage
Group Members
1.	Chisomo Y Banja
2.	Temwani A Banda

Page Descriptions
1. Home Page (index.html)
This is the main landing page of the website. It features a navigation bar, a hero section, and a brief introduction. Flexbox is used to structure the layout, ensuring a clean and responsive design across different screen sizes.
2. Services Page (services.html)
This page showcases the services provided, arranged neatly using CSS Grid. Each service is displayed in a structured format with an image, a title, and a short description. The grid layout ensures that services appear in two columns on larger screens and wrap into a single column on smaller devices.
3. Contact Page (contact.html)
The contact page includes a form where users can send messages. It consists of labeled input fields for name, email, and message, along with a submit button. The form is styled for accessibility and adjusts well to different screen sizes.

Summary of Features Used
1. CSS Selectors
•	Universal selector (* { }) to reset default styles for consistency.
•	Class selectors (.grid-container, .service-card) to structure and style sections.
•	Element selectors (nav ul, h1, p) to apply styles directly to specific elements.
2. Layout Techniques (Flexbox & Grid)
•	Flexbox: Used in the navigation bar and some content sections to maintain alignment and spacing.
•	CSS Grid: Applied in .grid-container to organize service items in two columns that wrap onto the next row when necessary.
3. Responsive Design (Media Queries)
The website adapts to different screen sizes using media queries:
•	Desktop: Two-column service layout (grid-template-columns: repeat(2, 1fr);).
•	Tablet: Services adjust to a single-column layout for better readability.
•	Mobile: The layout ensures proper spacing (width: 90%; margin: 0 auto;).
4. Animations & Transitions
•	Hover effects: When hovering over a service card, it slightly enlarges (.service-card:hover { transform: scale(1.05); }), making it more interactive.
•	Button effects: Buttons change color on hover to improve user experience.


