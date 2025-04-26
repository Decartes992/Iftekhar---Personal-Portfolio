# Resume & Skills Page

Documentation for `src/pages/resume.astro`.

## Purpose
This file defines the content for the "Resume & Skills" page of the personal portfolio website. It serves as a detailed overview of the portfolio owner's qualifications, including technical and soft skills, certifications, work history, academic projects, and educational background.

## Layout
The page uses the `BaseLayout.astro` component to provide a consistent header, footer, and basic page structure. The content specific to the resume page is placed within the `BaseLayout`.

## Content
The main content of the Resume & Skills page includes:
- A main heading: "Resume & Skills"
- Multiple sections (`<section>`) to organize information:
    - **Skills & Certifications:** Lists various technical skills (Software Development, Systems Engineering, etc.), product design skills (SolidWorks), technical communication, experience with electrical and mechanical equipment, and soft skills. Also lists certifications (Diploma of Engineering, Emergency First Aid).
    - **Work Experience:** Details the role as a Makerspace Coordinator at Dalhousie University, including responsibilities and achievements.
    - **Academic Projects:** Describes key academic projects, specifically the Low Orbit Reconnaissance Imagery Satellite (LORIS) project and the Subsea Infrastructure Sensory Pod project, highlighting contributions and technologies used.
    - **Education:** Provides details about the Bachelor of Engineering in Electrical Engineering with a Computer Option at Dalhousie University, including relevant activities.

A comment suggests adding a link to download a PDF resume.

## Structure and Components
The page structure is organized using `<section>` elements for major categories and `<article>` elements within those sections to group individual entries like work experiences or academic projects. Standard HTML list elements (`<ul>`, `<li>`) are used for listing skills, certifications, and details within experience/project entries. The `BaseLayout` component provides the overall page wrapper. No unique or custom components are used on this page, other than the `BaseLayout`.