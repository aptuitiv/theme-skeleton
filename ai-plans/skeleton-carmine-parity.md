# Plan: Bring Skeleton up to date with Carmine

Created: 2026-09-12

**Goal:** Make Skeleton's blocks (templates, theme config, CSS, JS) and accessibility consistent with the Carmine theme. Header, footer, and navigation *layout and style* differences are expected and are not part of this plan unless listed.

**Scope rules**

- Only Skeleton changes. Carmine and Harvest are read-only references.
- Carmine is the source of truth unless an item says otherwise (a few Carmine files have bugs that must not be copied, see "Do not copy" below).
- Fixes needed in the other themes are tracked in each theme's own `ai-plans/block-and-accessibility-fixes.md`.
- Decision (2026-09-12): the missing blocks **will** be added to Skeleton. This supersedes the "Do not add to Skeleton" notes in `../theme-comparison.md` for columned-content, google-ratings-bar, and staff.

**Useful commands**

```bash
# Compare a Skeleton file with Carmine (run from the Themes folder)
diff -w -B Skeleton/src/<path> Carmine/src/<path>

# Show a Carmine commit referenced below
git -C Carmine show <hash>

# Build and lint (run in the Skeleton folder)
npm run build
npm run stylelint
npm run icons   # regenerates src/templates/snippets/svg-icons.twig after adding icons
```

---

## Do not copy from Carmine

- [ ] `Carmine/src/templates/404.twig` — nests `<main id="main">` inside narrow's `<main id="main">` (duplicate landmark and id). Keep Skeleton's 404.
- [ ] `Carmine/src/css/components/header/header.css` skip link styles — `z-index: 100` equals the sticky header's z-index, so the focused link can hide behind it. Use Harvest's `css/components/header/skip-to-main.css` instead.
- [ ] `Carmine/src/templates/blocks/image-row.twig:9` — `href="{image.url}"` (single braces, broken link) and `target="_blank"` with no warning. Fix while porting.
- [ ] `Carmine/src/templates/blocks/google-ratings-bar.twig` — each star icon is its own labelled image, so screen readers repeat "Star rating" five times. Fix while porting.
- [ ] `Carmine/src/js/main.js` — also imports `sticky-header.js`. Don't import it unless the sticky header is being ported.
- Note: Carmine's `image-grid.twig` syntax error (missing `{` on the `count4` line) has been fixed in Carmine, so image-grid can now be copied.

---

## Phase 1 — Block margin and width support

Skeleton's grid, heading, and html-code blocks ignore the block Margin and Width fields. Carmine commits: `265e272`, `81c6c37`.

- [ ] Confirm in the CMS that these block definitions have Margin and Width fields for Skeleton sites (the definitions live in the CMS, not the repo — `_export/src/theme.json` is legacy and gitignored).
- [x] `blocks/grid-2-columns.twig` — replace `<div class="Container Container--pad">` with `<div class="{{ macros.blockMargin(margin) }}{{ macros.blockWidth(width, true) }}">`
- [x] `blocks/grid-3-columns.twig` — same change
- [x] `blocks/grid-4-columns.twig` — same change (also add the missing newline at EOF)
- [x] `blocks/grid-5-columns.twig` — same change
- [x] `blocks/grid-6-columns.twig` — same change
- [x] Grid blocks — add `{% import 'macros/macros' as macros %}` at the top. Carmine's grid templates are missing it (bug from commit `265e272`, noted in Carmine's plan), so Skeleton's grids differ from Carmine by this one line.
- [x] `blocks/heading.twig` — add `{% import 'macros/macros' as macros %}` and the margin/width wrapper `<div>`
- [x] `blocks/html-code.twig` — add the import and the margin/width wrapper `<div>`
- [x] `blocks/image-grid.twig` — **bug fix**: remove `{% set width = 800 %}` and the `width:` values in `count2`–`count6` and every `{% set width = countN.width %}`. These overwrite the block's Width field, so `blockWidth()` gets a number and the Width setting never takes effect. Copy Carmine's (now fixed) file (commit `1745710`).

## Phase 2 — Autoplay video pause/play toggle (WCAG 2.2.2)

Autoplaying banner videos and video blocks without controls have no way to pause. Carmine commit: `a470cb2`.

- [x] `templates/macros/macros.twig` — add the `videoToggle(videoId, class)` macro
- [x] `templates/macros/banner.twig` — add `videoId`, `id` and `js-video` on the `<video>`, and the `macros.videoToggle(videoId, 'Banner-videoToggle')` call
- [x] `templates/blocks/video.twig` — add `hasControls`/`needsToggle`/`videoId`, the `Video` wrapper, `Video-player` class, and the toggle
- [x] `src/js/video.js` — copy from Carmine (includes `prefers-reduced-motion` handling)
- [x] `src/js/main.js` — `import video from './video';` and `video.init();` (do not add stickyHeader)
- [x] `src/css/components/video/index.css` and `video.css` — copy from Carmine
- [x] `src/css/components/index.css` — add `@import './video';`
- [x] `src/css/components/banner/banner.css` — add the `.Banner-videoToggle { z-index: 4; }` rule
- [x] `src/icons/pause.svg` and `play.svg` — copy from Carmine (the file watcher regenerated `svg-icons.twig`)
- [x] `src/config/theme-styles.json` — add the "Blocks - Video" group (7 `--Video-toggle-*` fields) in the same position as Carmine

## Phase 3 — Add the missing blocks

Skeleton's theme-styles.json already has the style groups for these blocks, but no CSS uses them.

**Columned Content**
- [x] `templates/blocks/columned-content.twig` — copy from Carmine
- [x] `css/components/column-content/` (`index.css`, `column-content.css`) — copy from Carmine
- [x] `css/components/index.css` — add `@import './column-content';`

**Google Ratings Bar**
- [x] `templates/blocks/google-ratings-bar.twig` — copy from Carmine, then fix the star labels. The visible text already states the rating, so the stars and number are wrapped in `aria-hidden="true"` and use `iconAriaHidden` instead of `iconImg`.
- [x] `css/components/google-rating-bar/` (`index.css`, `rating-bar.css`) — copy from Carmine
- [x] `css/components/index.css` — add `@import './google-rating-bar';`
- [x] `icons/star.svg`, `star-empty.svg`, `star-half.svg` — copy from Carmine
- [x] `config/theme-settings.json` — add the "Customer Reviews & Ratings" group (`customerRatingsBarAverageRating`, `customerRatingsBarTotalReviews`)
- [x] Single reviews link setting — the template now uses the "URL to view reviews" field in Settings (`customerRatingsBarReviewsLink`). Removed `googleRatingsBarReviewsLink` and its "Review link" subgroup from the "Blocks - Google Ratings Bar" styles group. This differs from Carmine until Carmine's plan item is done.

**Image Row**
- [x] `templates/blocks/image-row.twig` — copy from Carmine, then fix `href="{image.url}"` → `href="{{ image.url }}"`. Kept `target="_blank"`, added `rel="noopener"` and a `.visually-hidden` "(opens in a new window)" label.
- [x] `css/components/image/image-row.css` — copy from Carmine
- [x] `css/components/image/index.css` — add `@import './image-row.css';`

**Recent Blog Posts**
- [x] `templates/blocks/recent-blog-posts.twig` — copy from Carmine
- [x] `css/apps/blog/recent-posts.css` and `css/apps/blog/index.css` — copy from Carmine
- [x] `css/apps/index.css` + `@import './apps';` in `css/main.css` — imports only `blog` for now; `calendar` gets added in Phase 5; `gallery` left out (Skeleton has no gallery templates)
- [x] `icons/chevron-thin-right.svg` — copy from Carmine

**Staff**
- [x] `templates/blocks/staff.twig` — copy from Carmine (uses utility classes only, no CSS needed)

## Phase 4 — Accessibility (bring up to Carmine/Harvest)

- [x] **Skip link** — added `<a class="HeaderSkipToMain" href="#main">skip to main content …</a>` right after `_page.bodyStartCode()` in `snippets/header.twig` (same position as Carmine and Harvest)
- [x] **Skip link CSS** — copied Harvest's `css/components/header/skip-to-main.css` (z-index above the sticky header) and imported it in `css/components/header/index.css`. Uses Harvest's `HeaderSkipToMain` class and the existing `--Header-skipMain-*` variables from theme-styles.json
- [x] **`<nav>` landmark** — changed the existing `.Header-nav` `<div>` in `snippets/header.twig` to `<nav … id="navbar" aria-label="Main">`, and removed the duplicate `id="navbar"` from the `<ul>` in `navigation/main.twig`. The menu button's `aria-controls="navbar"` now points to the `<nav>`.
- [x] ~~`js/navigation/small-screen.js:15` — change `.js-mainNav` to `.js-navBar`~~ — not needed. Carmine's `NavBar` wrapper depends on Carmine's navigation layout (`bar.css`), which is out of scope. Skeleton keeps `js-mainNav` on the `<ul>`, so small-screen.js and accessibility.js are unchanged. (Carmine and Rivera have an accessibility.js bug from dropping `js-mainNav`; it's in their plans.)
- [x] ~~Check the nav CSS still applies after the wrapper change~~ — not needed. No wrapper was added, and `.Header-nav` is styled by class only.
- [x] **Logo alt fallback** — `headerLogo.alt.default(_core.settings.companyName)` in `snippets/header.twig`, and the same for the footer logo in `snippets/footer.twig`
- [x] Keep Skeleton's `.Footer a:focus-visible` rule (Skeleton is ahead of Carmine here)
- [x] Keep Skeleton's `<main id="main">` placement in 404 and the two-column layouts

## Phase 5 — Config, CSS, and template clean-up

- [x] `config/theme-styles.json` — change the 9 remaining `"default":` keys to `"defaultValue":` (Calendar groups; applied Carmine commit `eed9808`)
- [x] `config/theme-settings.json` — change the 2 remaining `"default":` keys to `"defaultValue":` (`headerLogoWidth`, `footerLogoWidth`)
- [x] `config/theme-styles.json` — remove the default `700` value from `tableCellFontWeight` (applied Carmine commit `b3dca07`)
- [x] `macros/form-macros.twig` — remove the duplicate `buildFieldDescription` macro (applied Carmine commit `91b5acd`)
- [x] `widgets/collections/notifications.twig` and `popups.twig` — remove the unused `Modal-slide` class (applied Carmine commit `1a86bc2`)
- [x] `css/components/message/message.css` — add `.Message--failure a { color: var(--Message-color-failure); }`
- [x] `config/theme-settings.json` — Social Icons group: add `"sidebarSize": "medium"` to match Carmine
- [x] **Calendar templates** — copied Carmine's `calendar/*.twig` (fixes the `{{ events|debug }}` output, the `<div class="h2">` event titles, and the `two-column.twig` layout that doesn't exist). Removed the undefined `u-margBottom4` class from `calendar/sidebar.twig` (noted in Carmine's plan).
- [x] **Calendar CSS** — copied `css/apps/calendar/` and added `@import './calendar';` to `css/apps/index.css`
- [ ] Optional: replace `js/fslightbox.js` with Carmine's copy (Skeleton's is a reformatted copy of the library)
- [x] Sidebar box CSS (`css/components/sidebar/`) — copied from Carmine and imported in `css/components/index.css`. Needed because Carmine's calendar sidebar templates use the `SidebarBox` classes; it also puts the Sidebar Navigation theme-styles variables (`--SidebarBox-heading-*`) to use.

## Phase 6 — Accessibility fixes shared by all themes (after Carmine parity)

Carmine has these problems too, so there's nothing to port — each needs a new fix. The same items are in each of the other themes' `ai-plans/block-and-accessibility-fixes.md`.

- [ ] **Accordion isn't keyboard-operable** — the heading is `<div class="Accordion-heading js-accordionHeading">` with only a click listener. Use a `<button>` with `aria-expanded` and `aria-controls` (`blocks/accordion.twig`, `js/accordion.js`). *High*
- [ ] **Mobile submenus hidden from screen readers** — submenu `<ul>` elements render with `aria-hidden="true"` and `aria-expanded="false"` (`navigation/main.twig:4`). The small-screen tap handler only toggles classes (`js/navigation/small-screen.js`), so an opened submenu stays hidden. Move `aria-expanded` to the toggle. *High*
- [ ] **Mobile menu** — no Escape to close, no focus trap, no focus return (`js/navigation/small-screen.js`). The `role="menubar"`/`menuitem` pattern is the wrong fit for site navigation; consider plain `<nav><ul>` with disclosure buttons.
- [ ] **Modals** — the close button `<button class="Modal-close" data-micromodal-close></button>` has no accessible name; the dialog has no `aria-labelledby`; the popup uses `disableFocus: true` so focus doesn't move into it; the notification icon has no `aria-hidden` (`widgets/collections/popups.twig`, `notifications.twig`).
- [ ] **Pagination** — wrap in `<nav aria-label="Pagination">`, add `aria-current="page"` to the current page, and change the chevron icons from `role="img"` to `aria-hidden="true"` (`snippets/pagination.twig`).
- [ ] **`iconImg` macro** outputs `<svg role="img" alt="…">` — `alt` isn't valid on `<svg>`. Use `aria-label` or a `<title>` (`macros/macros.twig`).
- [ ] **`rel="noopenner"` typo** — should be `noopener`.
- [ ] **`title` as the only label** on social and logo links; social links open in a new window with no warning.
- [ ] **Form errors** — `formErrorContainer` has no `role="alert"`/`aria-live`; `form.js` never sets `aria-invalid` or `aria-describedby` (`macros/form-macros.twig`, `js/form.js`).
- [ ] **Required marker** — add `aria-hidden="true"` to the `*` in labels (the `required` attribute already conveys it).
- [ ] **Upload previews** use `alt="Image"` (`macros/form-macros.twig`).
- [ ] **No `prefers-reduced-motion` CSS** — accordion transitions, Splide fade/autoplay, and `Modal-slide` ignore it; the image-gallery slider can autoplay with no pause control.
- [ ] **Video/audio** — no `<track>` captions or transcript option (`blocks/video.twig`, `blocks/audio.twig`).
- [ ] **Landmark labels** — footer navs and sidebar `<aside>` elements have no `aria-label`.
- [ ] **`lang="en"` is hardcoded** in `snippets/header.twig`.
- [ ] **Menu button** — visible "Menu" text differs from `aria-label="Navigation menu"`. Make the accessible name include the visible text.

## Not planned (layout/style differences — decide later)

- Header, footer, and main navigation layout, styles, and their theme-settings/theme-styles fields
- Sticky header (`sticky-header.js`, "Sticky Header" settings)
- Header buttons settings group
- Blog and gallery app templates and CSS, `full-width.twig` layout
- `css/config/config.css` (Skeleton-only nav breakpoint at 1050px)

## Verification

- [ ] `npm run build` completes and `npm run stylelint` shows no new warnings
- [ ] `diff -w -B` each ported file against Carmine — only the intended differences remain
- [ ] Every block renders in the CMS, including the Margin and Width options on grid, heading, html-code, and image-grid blocks
- [ ] Autoplaying banner and video blocks show a working pause/play button; the label switches between "Pause video" and "Play video"
- [ ] Keyboard check: Tab from page load shows the skip link first and it jumps to the main content; the menu is announced as a navigation landmark
- [ ] Mobile menu still opens and closes after the `.js-navBar` change
