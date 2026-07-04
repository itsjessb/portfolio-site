# jessicabargenquast.com

Personal portfolio site for Jessica Bargenquast. Plain HTML and CSS — no framework, no build step. Every page is a normal file you can open and edit in any text editor.

## Files

| File | What it is |
|---|---|
| `index.html` | Home page |
| `about.html` | About page (story + certifications + headshot) |
| `case-studies.html` | Blue Yonder case study |
| `resume.html` | Web resume + PDF download button |
| `insights.html` | Blog page (has a commented-out post template inside — open the file and follow the instructions) |
| `contact.html` | Contact page (Netlify Forms — see below) |
| `css/styles.css` | All styling for every page |
| `assets/` | Resume PDF and images |

## How to edit text

1. Open the `.html` file for the page you want to change.
2. Find the text you want to edit (Ctrl+F helps).
3. Change it, save, refresh your browser.

The header/nav at the top of each page is **copy-pasted into every file** — if you add or rename a page, update the `<nav>` block in all six files.

## Add your headshot

Save your headshot photo as `assets/headshot.jpg` (exactly that name). The About page will pick it up automatically. Until then it shows a "JB" placeholder.

## Update the resume PDF

Replace `assets/Jessica-Bargenquast-Resume.pdf` with a new file of the same name.

## Preview locally

Just double-click `index.html` — it opens in your browser and everything works.

## Contact form

The contact page uses **Netlify Forms**, so your email address never appears anywhere in the site code (bots can't harvest it). The form starts working automatically once the site is live on Netlify — no extra account needed.

- Submissions appear in the Netlify dashboard under **Forms**.
- To get them emailed to you: Netlify → **Forms → Form notifications → Add notification → Email**, and enter whatever address you like. You can change that address anytime without touching the site.
- The form does **not** work when previewing locally — that's expected.

## Deploy (Netlify + GitHub)

1. Push this folder to a GitHub repository.
2. In Netlify: **Add new site → Import an existing project → GitHub**, pick the repo.
3. Leave build settings empty (there's no build) — publish directory is the repo root.
4. In Netlify **Domain settings**, add `jessicabargenquast.com` and follow the DNS instructions.

After that, every push to GitHub redeploys the site automatically.
