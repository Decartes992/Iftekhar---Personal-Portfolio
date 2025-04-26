# Contact Page

Documentation for `src/pages/contact.astro`.

## Purpose
This file defines the content for the "Contact Me" page of the personal portfolio website. It provides visitors with various ways to get in touch with the portfolio owner.

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

A comment suggests considering adding a contact form in the future.

## Structure and Components
The page structure is simple, primarily consisting of standard HTML elements (`<h1>`, `<p>`, `<ul>`, `<li>`, `<a>`) wrapped by the `BaseLayout` component. An unordered list (`<ul>`) is used to present the contact details. No unique or custom components are used on this page, other than the `BaseLayout`.