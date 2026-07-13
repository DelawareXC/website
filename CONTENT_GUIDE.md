# Content editing guide

The site generates public pages from typed records in `src/data/`. Editors do not need to change page templates to add an interview, trail, archive item, or update.

Before adding public content, confirm that historical claims, spelling, dates, consent, rights, access information, source information, alt text, and sensitive information have been reviewed. Keep `placeholder: true` until a record has passed the project's publication process.

## Add an oral history

Open `src/data/oral-histories.ts` and copy the sample object inside `oralHistories`.

1. Give the record a unique, lowercase `slug` using words and hyphens. This becomes `/oral-histories/your-slug/`.
2. Select one of the defined `category` values.
3. Complete the role, affiliation, years active, interview date, summary, related trails, and keywords fields.
4. Add a reviewed portrait to `public/assets/` and provide meaningful alt text.
5. Add video and transcript URLs only when those resources are published and accessible. Otherwise omit the optional fields.
6. Set `placeholder: false` only after narrator permission and editorial, rights, transcript, context, privacy, and accessibility review.

## Add a trail

Open `src/data/trails.ts` and copy the sample object inside `trails`.

1. Add a unique `slug`; it becomes `/trails-maps/your-slug/`.
2. Enter a verified name, location, distance, terrain description, and historical significance statement.
3. Add one or more reviewed photograph objects with a source path, meaningful alt text, and caption.
4. Add a map URL only when the route and map have been verified and approved for publication.
5. List related interviews and write current access or accessibility notes.
6. Set `placeholder: false` only after historical, geographic, access, safety, property, rights, and accessibility review.

Trail records are historical resources, not navigation advice. Editors must preserve the visible notice that visitors independently verify routes, access, and conditions.

## Add an archive item

Open `src/data/archive-items.ts` and copy the sample object inside `archiveItems`.

1. Add a unique `slug`; it becomes `/archive/your-slug/`.
2. Assign a stable, unique `itemId` according to the future project numbering policy.
3. Select one of the defined archive categories.
4. Record the title, date, creator, affiliation, description, collection, source, related people, and related places.
5. Add a display image with meaningful alt text. Add `assetUrl` only if a reviewed digital object is publicly available.
6. Write an item-specific rights statement. Do not assume that physical ownership, donation, digitization, or catalog publication grants reuse rights.
7. Set `placeholder: false` only after provenance, description, rights, privacy, attribution, file, and accessibility review.

## Add a project update

Open `src/data/updates.ts` and copy the sample object inside `updates`.

1. Add a unique `slug` for future linking support.
2. Enter the public title, publication date, update type, and concise summary.
3. Do not describe unconfirmed holdings, statistics, partnerships, interviewees, or project milestones as established facts.
4. Set `placeholder: false` after editorial review.

## Verify changes

Run:

```sh
pnpm build
```

Confirm that the new listing card and generated detail page appear, links resolve, images include useful alt text, headings remain logical, and no build errors or warnings are introduced.
