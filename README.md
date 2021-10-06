# README

## File Name Formatting

File + directory names: Separate words with hyphens rather than underscores: `my-file.html` and not `my_file.html`. [Mozilla docs](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files#an_aside_on_casing_and_spacing)

<br>

## Notes files

### Staying Consistent
#### Headings
- Title using Title heading
- Linked of contents - no numbers
- Headings
  - Heading 1 for sections. Uses title capitalization
  - Heading 2 for terms, in **bold** (so that I know it's been marked a header). Only first word capitalized
  - Heading 3 for code (in a code font i.e. `courier new`)

#### Newlines
- 2 breaks after each section heading
- 1 break after each term heading

#### `Code blocks`
- One line: in `courier new`
- Multiple lines: 
  - Pasted from editor (i.e. VS Code)
  - Indented to line up with the line or bullet above

#### Sources
- If only one source, list below title. No header. `Source: Source Name`
- If multiple sources, list at bottom under a `Sources` section 
  - Bulleted list
  - List the whole url (`https://...`)
  - No breaks between bullets

<br>

### Exporting html from Google docs

#### Before export
1. Check that no terms missed headings
2. Refresh table of contents. Look it over
3. Export raw html file

#### After export - quinncoyle.com
1. Create notes directory (i.e. `mkdir notes/learn-git`)
2. Add raw html (as `index.html`) and images into new directory
3. Add `<title>` to first element of `<head>` as file title
4. Remove `https://www.google.com/url?q=` and `&amp` trackers from all url's
5. Save without formatting to reduce file size: Command Palette --> File: Save without Formatting
6. Add reference link + button to `notes/index.html`

#### After export - Google drive
1. Move Google drive file into published folder