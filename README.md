# Avishek Roy Yash \| Portfolio

A professional, responsive personal portfolio website showcasing my work
as a **Full Stack Developer**, my skills in **UI/UX Design** and
**Digital Marketing**, and my academic interests and long-term career
goal in **AI/ML Engineering**.

Built with Next.js, React, Tailwind CSS, Framer Motion, and React Icons,
this portfolio brings together my technical skills, projects, education,
research, certifications, and contact information.

------------------------------------------------------------------------

## Overview

The portfolio is designed as a modern, single-page website with
dedicated sections for professional information and a separate Privacy
Policy page. It features a green visual identity, responsive layouts,
subtle animations, and light/dark theme support.

### Highlights

-   Responsive design for mobile, tablet, laptop, and desktop
-   Single-page navigation using section anchors
-   Separate Privacy Policy route at `/privacy`
-   Light/dark theme support
-   Subtle entrance and interaction animations
-   Profile image and project showcase
-   Skills, projects, experience, services, education, achievements, and
    certifications sections
-   Contact section for professional inquiries
-   Resume link/download support
-   Reusable React components
-   Next.js image optimization

## Tech Stack

  Area                Technologies
  ------------------- ---------------------------------------
  Framework           Next.js, React
  Language            JavaScript
  Frontend            HTML5, CSS3, Tailwind CSS
  Animation           Framer Motion
  Icons               React Icons
  Theme               next-themes, if configured
  Backend skills      Node.js, Express.js, REST APIs
  Database skills     MongoDB
  Development tools   Git, GitHub, VS Code, Postman, Vercel

> The portfolio presents my broader development skills. Not every
> technology listed above necessarily powers the portfolio itself.

## Website Sections

The homepage is assembled from reusable components in `app/page.jsx`.

  -----------------------------------------------------------------------
  Section                 Component               Purpose
  ----------------------- ----------------------- -----------------------
  Home                    `Hero`                  Introduction,
                                                  professional identity,
                                                  and profile links

  About                   `AboutPage`             Background, strengths,
                                                  interests, and career
                                                  direction

  Skills                  `SkillsPage`            Technical and
                                                  professional skills

  Projects                `ProjectsPage`          Selected development
                                                  projects

  Experience              `ExperiencePage`        Development, academic,
                                                  and related experience

  Services                `ServicesPage`          Services and areas of
                                                  work

  Education               `EducationPage`         Academic background

  Achievements            `AchievementsPage`      Achievements and
                                                  milestones

  Certifications          `CertificationsPage`    Certificates and
                                                  completed learning

  Contact                 `ContactPage`           Contact information and
                                                  inquiry form

  Privacy Policy          `/privacy`              Privacy information for
                                                  visitors
  -----------------------------------------------------------------------

### Navigation Anchors

-   `#home`
-   `#about`
-   `#skills`
-   `#projects`
-   `#experience`
-   `#services`
-   `#education`
-   `#achievements`
-   `#certificates`
-   `#contact`

Use these anchors for navigation within the homepage.

## Project Structure

The following is a representative structure based on the current
component imports. Adjust it to match the actual repository and preserve
exact filename casing.

``` text
portfolio/
├── app/
│   ├── page.jsx
│   ├── layout.jsx
│   ├── globals.css
│   └── privacy/
│       └── page.jsx
├── Component/
│   ├── Hero.jsx
│   ├── Navber.jsx
│   ├── projects.jsx
│   ├── footer.jsx
│   ├── AboutMe.jsx
│   ├── skills.jsx
│   ├── Experience.jsx
│   ├── Service.jsx
│   ├── Education.jsx
│   ├── Achivement.jsx
│   ├── Contact.jsx
│   └── Certification.jsx
├── public/
│   ├── images/
│   │   ├── profile/
│   │   └── projects/
│   └── resume/
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

-   Node.js version supported by your installed Next.js release
-   npm, pnpm, or yarn
-   Git

### 1. Clone the repository

Replace the repository URL if your repository uses a different name.

``` bash
git clone https://github.com/avishekroyyash/portfolio.git
```

### 2. Move into the project directory

``` bash
cd portfolio
```

### 3. Install dependencies

``` bash
npm install
```

### 4. Start the development server

``` bash
npm run dev
```

Open `http://localhost:3000` in your browser.

### 5. Build for production

``` bash
npm run build
```

Run the production build locally with:

``` bash
npm start
```

Available commands depend on the `scripts` defined in `package.json`.

## Configuration

### Profile Image and Resume

Place image assets and the resume inside the `public/` directory.
Reference public assets using a URL path relative to `public`, for
example:

``` jsx
<Image
  src="/images/profile/avishek-3d.png"
  alt="Avishek Roy Yash"
  width={700}
  height={800}
/>
```

If the resume is stored at `public/resume/Avishek-Roy-Yash-Resume.pdf`,
its public URL is:

``` text
/resume/Avishek-Roy-Yash-Resume.pdf
```

Ensure the file exists and the name matches the component link.

### Contact Form

If the contact form uses a third-party service such as FormSubmit,
configure it with the correct destination and review the provider's
privacy terms. Do not commit API keys, tokens, or other secrets to the
repository. Update the Privacy Policy if the form provider or data
practices change.

### Theme

The website supports light and dark appearance. If `next-themes` is
configured, ensure the provider is placed high enough in the app tree
and that the theme toggle is connected to it. Keep the implementation
consistent with the project's actual theme settings.

## Customization

1.  Update personal information and profile links in the relevant
    components.
2.  Replace sample project details with real descriptions, technologies,
    repository links, and live demos.
3.  Add profile and project images under `public/images/`.
4.  Add the correct resume PDF under `public/resume/` and update its
    link.
5.  Keep navigation anchors consistent with the IDs in `app/page.jsx`.
6.  Review the Privacy Policy to ensure it describes the website's
    actual data practices.
7.  Verify all content reflects current skills, projects, and
    experience.

## Deployment

This Next.js application can be deployed to a hosting platform that
supports Next.js, such as Vercel.

General workflow:

1.  Push the project to a Git repository.
2.  Import the repository into the hosting provider.
3.  Confirm that the framework is detected as Next.js.
4.  Configure required environment variables in the provider's project
    settings.
5.  Deploy and test navigation, images, resume links, contact form,
    theme toggle, and `/privacy`.

Refer to the hosting provider's current documentation for
platform-specific deployment instructions.

## Privacy

The portfolio includes a separate Privacy Policy page at `/privacy`.
Review it before deployment and ensure it accurately reflects the site's
use of contact forms, analytics, cookies, hosting, and third-party
services. This README is project documentation and does not replace the
Privacy Policy or legal advice.

## About Me

I'm **Avishek Roy Yash**, a Computer Science & Engineering student and
Full Stack Developer from Sylhet, Bangladesh. I build modern, responsive
web applications using technologies including JavaScript, React,
Next.js, Node.js, Express.js, and MongoDB.

I also have skills in **UI/UX Design** and **Digital Marketing**, and
I'm working toward a long-term career in **AI/ML Engineering**. I enjoy
learning new technologies, solving problems, and developing practical
solutions. I value hard work, patience, continuous learning, time
management, and effective collaboration, while also being comfortable
working independently.

## Connect

-   **GitHub:**
    [github.com/avishekroyyash](https://github.com/avishekroyyash)
-   **LinkedIn:**
    [linkedin.com/in/avishek-roy-yash](https://www.linkedin.com/in/avishek-roy-yash/)
-   **Email:** <avishekroyyash@gmail.com>
-   **Portfolio:** https://avishekrayyash.vercel.app.

## License

This is a personal portfolio project. If you reuse the structure or
code, replace personal details, images, resume files, and project
information with your own. Add a formal license file if you intend to
grant specific reuse permissions.

------------------------------------------------------------------------

*Designed and developed by Avishek Roy Yash.*
