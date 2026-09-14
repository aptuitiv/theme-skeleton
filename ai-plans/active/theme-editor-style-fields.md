# Plan: Add theme editor style fields to Skeleton

Created: 2026-09-12

**Goal:** Move hard-coded site styles (typography, colors, spacing, borders, shadows) into `src/config/theme-styles.json` so they can be changed in the Theme Editor, following the patterns already used in that file.

**How to use this plan:** Delete any item that shouldn't be a Theme Editor field. What's left gets built. Part A fixes existing fields that don't do anything today. It's separate from the new fields in Part B, so you can keep or drop it as a whole.

**Conventions for every new field**

- Render with `"type": "css-head"` and a `cssVariable`. Only use `cssSelector` when the element has no component CSS.
- In the CSS, use `var(--New-var, <current hard-coded value>)` so an empty field changes nothing on existing sites. The default in the JSON should match that fallback.
- Name variables after the component (`--SidebarBox-…`, `--Dropdown-…`). For small-screen values, add a separate `…Sm` field and variable, the same way `contentPaddingSm` / `--Content-padding-sm` work.
- Only use field types the themes already use: `color`, `size`, `padding`, `margin`, `border`, `borderRadius`, `typography`, `textShadow`, `fontSize`, `fontWeight`, `boxShadow`. `boxShadow` isn't in Skeleton yet. Copy its shape from Carmine's `headerStickyBoxShadow` (`Carmine/src/config/theme-styles.json:4077`); its default is an object `{ x, y, blur, spread, color }`. For shadows that should default to none, leave out `defaultValue` and use `none` as the CSS fallback.
- Add new fields at the end of the relevant group unless noted.

**Useful commands** (run in the Skeleton folder)

```bash
npm run build
npm run stylelint
npm run format-theme-json
```

---

## Part A — Existing fields that don't work

These fields are in theme-styles.json, but the CSS reads a different variable name, or the class they target doesn't exist in Skeleton's templates.

### Variable name mismatches

- [x] **Header padding.** `headerPadding` / `headerPaddingSm` output `--Header-padding` / `--Header-padding-sm`, but `css/components/header/header.css:14,40` reads `--Header-paddingVertical`, `--Header-paddingHorizontal`, and their `--sm` versions. Those come from a commented-out `:root` block, so the header currently has **no padding**. Change the CSS to `padding: var(--Header-padding-sm, 20px 0)` and `var(--Header-padding, 20px 0)` inside `@media (--m-lg)`, and delete the commented block.
- [x] **Footer spacing.** `footerSpacing` / `footerSpacingSm` (type `spacing`) output `--Footer-padding`, `--Footer-margin`, `--Footer-sm-padding`, and `--Footer-sm-margin`. `css/components/footer/footer.css:19,62` reads `--Footer-paddingVertical` etc., which are also commented out, so the footer currently has **no padding**. Change it to match Carmine's `footer.css`: `margin: var(--Footer-sm-margin, 0); padding: var(--Footer-sm-padding, 10px 0)`, and the non-`sm` versions at `--m-lg`.
- [x] **Sidebar nav links.** `sideNavBackground`, `sideNavBackgroundHover`, `sideNavTypography` (`--SidebarNav-*`), `sideNavCurrentColor`, and `sideNavParentTypography` (`--SidebarNav-parent-*`) aren't read anywhere. `css/components/navigation/sidebar.css:18-41` hard-codes `#333`, `font-weight: 300`, `padding: 4px 8px`, and `font-size: 24px` / `line-height: 30px` on the parent link. Replace those with the variables, keeping the current values as fallbacks.
- [x] **Heading text shadow.** `css/base/typography.css:184` misspells `--base-typograpy-h1-text-shadow` (missing "h"). Also, H2 and H3 have `useTextShadow: true`, but their CSS rules have no `text-shadow` line.
- [x] **Image Row gap.** `blockImageRowGap` is applied to `.ImageRow` at `css/components/image/image-row.css:37`, but the flex container is `.ImageRow-inner`, so the large-screen gap never takes effect.
- [x] **Pagination page-number gap.** `paginationPagesGapSize` (`theme-styles.json:4466`) targets `.Pagination` `gap`, the same as `paginationGapSize`. Point it at `.Pagination-pages` (or a `--Pagination-pages-gap` variable) and replace the hard-coded `gap: 10px` at `css/components/pagination/pagination.css:16`.
- [x] **Main nav fallbacks.** `css/components/navigation/mainnav.css:44` and the lines below it use `var(--a, --b)`, which isn't a valid fallback (it should be `var(--a, var(--b))`). Line 121 has `transprent`. `.MainNav` reads `--MainNav-lineHeight`, but the typography field outputs `--MainNav-line-height`.
- [x] **Wrapper with background image, dark.** `css/components/wrapper/wrapper-with-bg-image.css:57` hard-codes `color: #fff` instead of using `--Wrapper-wbgimage-background-dark-color`.
- [x] **File upload button.** `css/components/form/file.css:37,57` fall back to `--Button-color` / `--Button-color-hover`, which don't exist. They should be `--Button-typography-color` / `--Button-typography-color-hover`. Line 88 uses `--ButtonType-delete-color-hover`, which is never set.
- [x] **Recent posts line clamp.** `css/apps/blog/recent-posts.css` writes `line-clamp: var(--recentposts-abstract-lines, 3)` in lowercase. The field outputs `--RecentPosts-abstract-lines`.

### JSON issues

- [x] The **Popups** group uses `"sections"` instead of `"groups"` (`theme-styles.json:4819`). `"sections"` are ok and are rendered, but change to `"groups"` to follow conventions.
- [x] `alt1ButtonTypography` → `colorHover` defaults to `"#fffff"`, which has five f's and is invalid (`theme-styles.json:2324`).
- [x] `breadcrumbPaddingSm` is labeled "Padding". It should say "Padding (small screens)" (`theme-styles.json:2179`).

### Fields that target markup Skeleton doesn't have

For each one, either add the markup to the template or delete the field.

- [x] **Header → Text Logo** (`.Header-textLogo`, `--Header-text-logo-*`): there's no text logo markup in `snippets/header.twig` and no CSS. add text logo support similar to Carmine.
- [x] **Header → General typography** (`.Header-content`), **Header links** (`.Header-link`), **Social icons** (`.Header-socialLink`, `.Header-socialIcons`), and **Header buttons** (`.Header-button`): none of these classes are in the header template. Remove these styles.
- [x] **Main Navigation → Navigation Bar** (`navBarBackground`, `navBarPadding`, `navBarPaddingSm` → `--NavBar-*`): there's no NavBar element or CSS. Either wrap `.Header-nav` in a styled bar or remove the fields. Remove the fields.
- [x] **Footer → Footer credit** targets `.Footer-attributeLink` / `.Footer-attribution`, but `snippets/footer.twig:39` uses `.Footer-creditLink`. Update to be similar to Carmine.
- [x] **Sidebar Navigation → Secondary content** targets `.SidebarBox-secondary`, which isn't in any template. This is only in the Blog templates. Port the templates from Carmine if missing.

---

## Part B — New fields

Grouped by the theme-styles.json group they would go in. Each item lists the field name, type, variable, default (the current hard-coded value), and where that value is now.


### Typography

New **Blockquote** subgroup (`css/base/typography.css:71-73`):

- [x] `blockquoteBorderColor` (color) → `--base-typography-blockquote-border-color`, default `#ccc`
- [x] `blockquoteBorderWidth` (size) → `--base-typography-blockquote-border-width`, default `10px`
- [x] `blockquoteBackground` (color) → `--base-typography-blockquote-background`
- [x] `blockquotePadding` (padding) → `--base-typography-blockquote-padding`, default `0.5em 1em`
- [x] `blockquoteTypography` (typography, `useTextAlign: false`) → `--base-typography-blockquote`, for italic, larger, or colored quotes

Miscellaneous subgroup:

- [x] **Horizontal rule color** — `baseHorizontalRuleColor` (color) → `--base-typography-hrule-color`. Currently `color: inherit` in `hr`. It sits next to the existing rule-size field.

### Container Widths

- [x] **Side padding** — `containerPadding` (size) → `--Container-padding`, default `30px` (`css/components/container/container.css:27,31`, xl and up)
- [x] **Side padding (small screens)** — `containerPaddingSm` (size) → `--Container-padding-sm`, default `10px` (`container.css:17,22`)
- [x] Also update to follow the container.css pattern and usage in Carmine and Harvest.


### Footer

New **Social icons** subgroup. Carmine already has these fields (`footerSocial*`), so copy them. Skeleton's values are in `css/components/footer/footer.css:49-52`.

- [x] `footerSocialColor` / `footerSocialColorHover` (color)
- [x] `footerSocialBackground` / `footerSocialBackgroundHover` (color)
- [x] `footerSocialSize` (size), default `30px`
- [x] `footerSocialBorderRadius` (borderRadius), default `50%`
- [x] `footerSocialBorder` (border), default `2px solid` in the footer text color. Carmine doesn't have this one.

General subgroup:

- [x] `footerLogoMarginSm` (margin) → `--Footer-logo-margin-sm`, default `70px 0 0 0` (line 41, small screens only)

### Buttons

Add these to Default, Alternate, and Alternate 2, the same way the existing button fields work (`--Button-alt-*` falls back to `--Button-*`).

- [x] `defaultButtonBoxShadow` / `…BoxShadowHover` (boxShadow) → `--Button-box-shadow` / `--Button-box-shadow-hover`, default none
- [x] `alt1Button…` / `alt2Button…` versions → `--Button-alt-box-shadow…`, `--Button-alt2-box-shadow…`

Size variants subgroup:

- [x] `buttonIconGap` (size) → `--Button-icon-gap`, default `5px`, the space between the icon and text in `.Button--withIcon` (`css/components/button/button.css:185`)

### Forms

Text Field and Select Menu subgroups:

- [x] `textInputBorderColorFocus` (color) → `--TextInput-border-color-focus`. Needs a new `border-color` in `.TextInput:focus`.
- [x] `textInputPlaceholderColor` (color) → `--TextInput-placeholder-color`. Needs a new `::placeholder` rule.
- [x] `textInputFontSize` (fontSize) → `--TextInput-font-size`. Keep the 16px minimum on small screens in `base/base.css:133`, which stops iOS from zooming.
- [x] `selectMenuBorderColorFocus` (color) → `--SelectMenu-border-color-focus`

Checkbox subgroup:

- [x] `checkboxLabelGap` (size) → `--Checkbox-gap`, default `10px`, the space between the box and the label (`css/components/form/checkbox.css:11`)

### Messages

- [x] `messageBorder` (border) → `--Message-border`
- [x] `messageTypography` (typography, `useColor: false`), since the colors are already set per message type → `--Message`

### Popups

- [x] `modalBoxShadow` (boxShadow) → `--Modal-box-shadow`, default none (`.Modal-container`)
- [x] `modalScreenMargin` (size) → `--Modal-screen-margin`, default `20px`, the minimum space between the popup and the edge of the screen (`css/components/modal/modal.css:28`; the `max-height` calc on the next line needs to use it too)

### Notifications

- [x] `notificationMoreTypography` (typography, `useHover: true`, `useTextAlign: false`) → `--Notification-more`, for the "More" link (`css/components/notifications/notification.css:14-18`)
- [x] `notificationMoreGap` (size) → `--Notification-more-gap`, default `20px` (line 17)

### Tables

- [x] `tableHeaderTypography` (typography) → `--Table-header`. This would replace the separate `tableHeaderColor` and `tableHeaderFontWeight` fields and add font size and text transform. _Done differently: the two existing fields were kept so saved values aren't lost; the typography field has `useColor`/`useFontWeight` off and writes to the same `--Table-header-*` variables._
- [x] `tableMargin` (margin) → `--Table-margin`, default `0 0 20px 0` (`css/base/table.css:8`)

### Blocks - Accordion

- [x] `accordionIconThickness` (size) → `--Accordion-icon-thickness`, default `3px`, the thickness of the +/− lines (`css/components/accordion/accordion.css:59`)
- [x] `accordionItemBoxShadow` (boxShadow) → `--Accordion-item-box-shadow`, default none
- [x] `accordionItemBorderRadius` (borderRadius) → `--Accordion-item-border-radius`, default `0`. Added on request so the item shadow can have rounded corners. No `overflow: hidden`, so the heading's focus outline isn't clipped.

### Blocks - Banners

- [x] `bannerSliderTextPaginationBorderRadius` (borderRadius) → `--Banner-slider-text-border-radius`. The CSS already reads this variable (`css/components/banner/banner-slider.css`), but there's no field for it.
- [x] `bannerSliderDotSize` (size) → `--Banner-slider-dot-size`, default `17px` (`banner-slider.css:31`)
- [x] `bannerContentBoxShadow` (boxShadow) → `--Banner-content-box-shadow`, default none, for when the content box has a background color

### Blocks - Icon Grid

- [x] `blockIconGridBorderRadius` (borderRadius) → `--IconGrid-border-radius`
- [x] `blockIconGridBoxShadow` / `…Hover` (boxShadow) → `--IconGrid-box-shadow` / `--IconGrid-box-shadow-hover`, default none
- [x] Fixed the hover styles on request. Hover background, border, text color, and text decoration now fall back to their regular values. Before, hovering a linked item removed any style that had no hover value. `blockIconGridTypography` now has a `colorRender` that writes `--IconGrid-text-color`, so the hover text color can reach `.IconGrid-text`.

### Blocks - Image Gallery / Slider

Values are in `css/components/slider/slider.css`.

- [x] `blocksImageSliderArrowWidth` (size) → `--Slider-arrow-width`, default `50px`. Controls both the arrow width (line 55) and the slider's side padding (line 8).
- [x] `blocksImageSliderArrowBorderRadius` (borderRadius) → `--Slider-arrow-border-radius`, default `0` (line 51)

### Blocks - Image Grid

- [ ] `blockImageGridImageBorderRadius` (borderRadius) → `--ImageGridItem-image-border-radius`. Needs `overflow: hidden` on `.ImageGridItem-image`.
- [ ] `blockImageGridBoxShadow` (boxShadow) → `--ImageGridItem-box-shadow`, default none

### Blocks - Video

- [ ] `blockVideoToggleBorderRadius` (borderRadius) → `--Video-toggle-border-radius`, default `50%` (`css/components/video/video.css:20`)

### Blocks - Wrapper / Wrapper With Background Image

- [ ] `blockWrapperBorderRadius` (borderRadius) → `--Wrapper-border-radius`, for rounded color sections
- [ ] `blockWrapperBackgroundDarkLinkColor` / `…Hover` (color) → `--Wrapper-background-dark-link-color`. Right now `.Wrapper--bgDark *` (`css/components/wrapper/wrapper.css`) makes links the same color as the text, so links on dark backgrounds can't be told apart.
- [ ] The same link color pair for Wrapper With Background Image → `--Wrapper-wbgimage-background-dark-link-color`

### Blog - Recent Posts Block

- [ ] `blogRecentPostsCardBoxShadow` / `…Hover` (boxShadow). Target `.RecentPosts-card` with `cssSelector`, like the other card fields in this group.
- [ ] `blogRecentPostsCategoriesGap` (size) → `--RecentPosts-categories-gap`, default `20px` (`css/apps/blog/recent-posts.css:14`)

---

## Considered but not recommended

These are left out on purpose. Move any of them into Part B if you want them.

- **Form field spacing and grid gaps**: these come from Cacao utility classes in `templates/macros/form-macros.twig` (`mb-2`, `g-2`, `gx-2`), and the header and footer layout grids work the same way. Making them editable means template changes, not just CSS variables.
- **Breakpoints**: `@custom-media` values in `css/config/config.css` can't be CSS variables.
- **Z-index, transitions, and the reduced-motion rules**: these are about behavior, not look, and a bad value causes bugs.
- **Calendar cell minimum height** (`padding-top: 75%` trick in `css/apps/calendar/grid.css`) and the **table scroll hint** text (`css/components/table/table.css:18`): too specific to be worth a field.
