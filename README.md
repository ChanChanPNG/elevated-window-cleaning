# Elevated Window Cleaning

A complete, responsive static website for GitHub and Vercel. No framework, npm install, database, build process, or environment variables required.

## Included

- `index.html`: homepage, services, owners, service areas, FAQs.
- `our-cleaning-process.html`: cleaning methods and conditional one-week rain touch-up policy.
- `christmas-light-installation.html`: holiday service page.
- `request-a-quote.html`: the supplied live GHL form and direct-form fallback.
- `thank-you.html`: optional destination for successful GHL form submissions.
- `styles.css`, `site.js`, `assets/`: shared styles, accessible mobile menu and downloaded original images.
- `vercel.json`, `robots.txt`, `sitemap.xml`: deployment settings and search metadata.

The website has no Jobber links, client login, public booking calendar, invented reviews, prices, or credentials. The public brand name is singular; the existing domain remains elevatedwindowcleanings.com.

## Upload to GitHub

1. Extract this ZIP.
2. Create a GitHub repository, for example `elevated-window-cleaning`.
3. Upload the **contents** of the extracted project directory. `index.html`, `styles.css`, and `vercel.json` should be directly at the repository root, alongside the `assets` folder.
4. Commit the files. GitHub's web upload supports dragging files and the assets folder into the upload area.

If using Git locally, from the extracted project directory:

```bash
git init
git add .
git commit -m "Build Elevated Window Cleaning website"
git branch -M main
git remote add origin YOUR_GITHUB_REPOSITORY_URL
git push -u origin main
```

## Deploy on Vercel

1. Import the GitHub repository as a new Vercel project.
2. Select framework preset **Other**.
3. Set Root Directory to the directory containing `index.html` (the repository root if uploaded as above).
4. Leave Build Command and Install Command unset; set Output Directory to `.` if Vercel requires an explicit directory.
5. Deploy, then use the generated preview URL to review the site.
6. In the project’s Domains settings, add `elevatedwindowcleanings.com` and `www.elevatedwindowcleanings.com`. Follow the exact DNS records Vercel supplies and select the preferred hostname.
7. Preserve existing email-related DNS records while moving the website. Confirm the new site works before changing the live domain.

Future commits trigger new deployments when the repository is connected. A GitHub/Vercel deployment has not been performed for this delivery.

## Local preview

Run from this directory:

```bash
python3 -m http.server 8000
```

Open http://localhost:8000. Most pages also work by opening `index.html` directly, but use an HTTP server for the best form test.

## GHL connection

The quote page uses the supplied form:

- Form ID: `U6V9kGttCNPBlK6HOwji`
- Form URL: `https://api.leadconnectorhq.com/widget/form/U6V9kGttCNPBlK6HOwji`
- Embed loader: `https://link.msgsndr.com/js/form_embed.js`

All quote buttons go to `request-a-quote.html`. The form is hosted by GHL; fields, validation, consent text, confirmation, notifications and workflows are controlled in GHL. Its supplied attributes are retained, with a descriptive accessible title and an initial 745px height so it renders before the resizing script runs. The form may grow when its own script loads. There is a direct link and phone fallback if it cannot load.

This website does **not** send form data to a custom endpoint or independently trigger a workflow. Confirm that `101. EWC - Website Quote Request` is triggered by this exact form. Merely embedding the form does not configure GHL workflows.

Set `EWC Quote Request Page URL` to `https://elevatedwindowcleanings.com/request-a-quote.html` after launch. Keep the booking calendar URL inside `403. EWC - Quote Accepted`; no public booking link is included.

Owners manually review the request, price/send quotes, record acceptance, mark jobs completed, and review/send invoices. GHL handles the configured follow-up, booking link after acceptance, payment follow-up, review request and repeat-service reminder. These workflows must be built and tested in the client subaccount; this source package does not create them.

Optional: configure GHL’s successful-submit redirect to `https://elevatedwindowcleanings.com/thank-you.html`. This page is only a confirmation destination, not proof of a submission; it does not trigger automations. If you retain the native GHL confirmation, no redirect is needed.

## Before launch

- Review all business claims, service coverage and rain touch-up wording with the owners.
- In GHL, replace the internal test form name if desired and review the displayed fields and styling.
- Verify the embedded form’s privacy-policy/terms links and approved consent wording. Those are managed in GHL; this package does not invent legal policies.
- Submit one clearly identified test request yourself. Verify the contact, field mapping, consent state, sales opportunity, owner notification and follow-up. No test lead was submitted during development.
- Confirm no booking link is sent before owner-recorded quote acceptance.
- Test on desktop and a real phone, including navigation, form height, consent, successful submission and confirmation.
- Test each old URL, click-to-call, email, and holiday links after deployment.
- Check domain, sitemap and metadata if deploying to a different permanent domain. Canonical production image and sitemap URLs currently target the existing domain.
- The original site images are bundled locally. They are relatively small, so high-resolution originals would improve sharpness on large displays.

## Editing

Edit HTML for copy. Change the palette variables at the top of `styles.css` for colors. Shared header/footer markup appears in each HTML file, so update every page when changing navigation or contact details. Google Fonts load externally with system fallbacks; original photographs and logo are bundled locally.

## Validation performed

JavaScript syntax checked with Node. Local HTML links, image references and sitemap paths checked programmatically. Required form ID, embed loader, supplied attributes, brand name and absence of Jobber/client-login links checked. Browser visual QA and end-to-end GHL workflow validation were not available in this session; complete the launch checklist before connecting the live domain.
