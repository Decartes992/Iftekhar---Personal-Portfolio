# Contact Page

Documentation for `src/pages/contact.astro`.

## Purpose
This file defines the content for the "Contact Me" page of the personal portfolio website. It provides visitors with various ways to get in touch with the portfolio owner and submit a contact form.

## Layout
The page uses the `BaseLayout.astro` component to provide a consistent header, footer, and basic page structure. The content specific to the contact page is placed within the `BaseLayout`.

## Content
The main content of the Contact Me page includes:
- A main heading: "Contact Me"
- An introductory paragraph encouraging visitors to reach out.
- A list of contact details:
    - Email address with a `mailto` link.
    - Phone number.
    - LinkedIn profile link that opens in a new tab.
    - Location (City, Province, Postal Code).
- A contact form for direct inquiries.

## Contact Form Component
The contact form is implemented as a React component located at `src/components/ContactForm.jsx`. This component handles:
- The form structure with fields for Name, Email, Subject, and Message.
- Client-side validation for required fields and email format.
- Displaying validation errors.
- Initiating the form submission process by preparing the data and (intended to) send it to the `/api/contact` endpoint upon successful validation.
- Displaying submission status messages (success/error) based on the (simulated) API response.
- The component uses Tailwind CSS for styling.

## Contact API Route
Form submissions, initiated by the `ContactForm` component, are handled by an Astro API route located at `src/pages/api/contact.ts`. This route:
- **Method:** Accepts `POST` requests.
- **Data Handling:** Reads form data (`name`, `email`, `subject`, `message`) from the request.
- **Server-Side Validation:**
    - Checks if all fields (`name`, `email`, `subject`, `message`) are present. Returns a `400 Bad Request` response with a JSON message if any are missing.
    - Validates the `email` format using a regular expression (`/\S+@\S+\.\S+/`). Returns a `400 Bad Request` response with a JSON message if the format is invalid.
- **Email Sending (Resend):**
    - Uses the `resend` library, initialized with the `RESEND_API_KEY` environment variable.
    - Calls `resend.emails.send` to send the email.
    - **Note:** The code uses placeholder addresses (`from: 'onboarding@resend.dev'`, `to: 'your-email@example.com'`). These **must** be replaced with your actual verified Resend domain and the desired recipient email address for the form to work correctly in production.
- **Responses:**
    - Returns a `200 OK` response with a JSON success message upon successful email sending.
    - Returns a `500 Internal Server Error` response with a JSON error message if the `resend.emails.send` call fails.

## Structure and Components
The page structure includes standard HTML elements and the `BaseLayout` component. It incorporates the `ContactForm` React component, rendered on the client side using `client:load`. The contact details are presented using an unordered list (`<ul>`).