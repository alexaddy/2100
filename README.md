# Coop building website

A small static site built with [Jekyll](https://jekyllrb.com/), hosted on
[GitHub Pages](https://pages.github.com/). Jekyll is built into GitHub Pages,
so there is **no CI workflow, no build step, no committed build artifacts** —
pushing Markdown to `main` is the whole deployment process.

## Local development

One-time setup (Homebrew):

```sh
brew install ruby
gem install jekyll webrick
```

Then, in the project folder:

```sh
bundle install
bundle exec jekyll serve
```

And open <http://localhost:4000>. (`bundle exec` runs Jekyll from the
Gemfile, so you don't need the gem bin directory on your PATH.)

> Local Ruby is only for previewing — GitHub Pages builds the site with its
> own Jekyll and ignores your local setup.

## Publishing

The site is served from the **`main` branch** (Settings → Pages: *Deploy from a
branch → `main` / root*). Commit and push:

```sh
git push origin main
```

GitHub Pages builds it automatically. Wait a minute or two, then check
<https://2100.coop> (or the default `https://<user>.github.io/<repo>` until
the domain is wired up).

## Custom domain

To use your own domain:

1. Ensure a file `CNAME` at the repository root contains exactly your domain
   (ours is `2100.coop`) and that it is committed.
2. In your DNS provider:
   - `coop.example.com` → CNAME to `<user>.github.io`
   - for a bare domain (`example.com`) use an A record pointing at GitHub's
     Pages IPs: `185.199.108.153`, `185.199.108.154`, `185.199.108.155`,
     `185.199.108.156`
3. GitHub picks the domain up automatically once `CNAME` is committed.
   SSL is provided automatically (takes up to ~30 minutes to activate).

> Note: `baseurl: /` in `_config.yml` is correct for the custom-domain setup.
> On the default `<user>.github.io/<repo>` URL (before the domain is active)
> the site lives under a sub-path and the stylesheet will not load — that is
> expected and goes away once the custom domain is live.

## Content guide

| What | Where |
| --- | --- |
| Announcements / meeting minutes | new file in `_posts/` named `YYYY-MM-DD-title.md` |
| About / house rules text | `about.md` |
| Upcoming events | `events.md` |
| Downloadable files | commit the file into `docs/`, add a row to `documents.md` |
| Board members & contacts | `contact.md` |
| Photos (hero / about / gallery / posts) | save the image in `assets/img/`, update the `src` in `index.md`, `about.md`, `gallery.md`, or the post |
| Site name / description | `_config.yml` |
| Styling | `assets/css/main.css` |

### Adding an announcement

Create `_posts/2026-11-15-water-works.md`:

```markdown
---
title: Water shut-off next Tuesday
description: One line shown in search results and links.
---

Full text here. Markdown works, including [links](events.html).
```

It appears automatically on the home page ("Latest announcements"), newest
first.

## Structure

```
├── _config.yml           # site name, description, settings
├── _layouts/default.html # shared header / nav / footer
├── _posts/               # announcements, newest first by filename date
├── assets/
│   ├── css/main.css      # all styling
│   ├── js/lightbox.js    # click-to-enlarge for the gallery
│   └── img/              # photos (hero, about, gallery, posts)
├── docs/                 # downloadable files (rules, minutes)
├── index.md              # home page (hero photo at the top)
├── about.md
├── gallery.md            # photo grid, click to enlarge
├── events.md
├── documents.md
├── contact.md
└── 404.html
```
