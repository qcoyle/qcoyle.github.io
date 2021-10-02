# README

## File Name Formatting

File + directory names: Separate words with hyphens rather than underscores: `my-file.html` and not `my_file.html`. [Mozilla docs](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files#an_aside_on_casing_and_spacing)

## Notes files

### Conventions
- Title using Title heading
- Linked of contents - no numbers
- Headings
  - Heading 1 for sections. Only the first word capitalized
  - Heading 2 for terms, in **bold**
  - Heading 3 for code (in a code font i.e. `courier new`)
- 2 breaks after each section heading
- 1 break after each term heading

#### Sources
- If only one source, list below title. No header
- If multiple sources, list at bottom with a section header

### Exporting from Google docs

#### Before export
1. Check that no terms missed headings
2. Refresh table of contents. Look it over
3. Add page numbers

#### After export
1. Create directory, replace-file-title-spaces-with-hyphens
2. Add raw html (as `index.html`) and images into new directory
3. Add `<title>` to first element of `<head>` as file title
4. Remove `https://www.google.com/url?q=` and `&amp` data from all url's
5. Save without formatting to reduce file size: Command Palette --> File: Save without Formatting