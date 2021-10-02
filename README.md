# README

## File Name Formatting

File names: Separate words with hyphens rather than underscores: `my-file.html` and not `my_file.html`. [Mozilla docs](https://developer.mozilla.org/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files#an_aside_on_casing_and_spacing)

## Notes files

### Conventions
- Title using Title heading
- Linked of contents - no numbers
- Headings
  - Heading 1 for sections
  - Heading 2 for terms, in **bold**
  - Heading 3 for code (in a code font i.e. `courier new`)
- 2 breaks after each section heading
- 1 break after each term heading

### Exporting from Google docs

#### Before export
1. Check that no terms missed headings
2. Refresh table of contents
3. Add page numbers

#### After export
1. Create directory, replace-file-title-spaces-with-hyphens
2. Add raw html (as `index.html`) and images into new directory
3. Update &amp links to standard links
4. Add `<title>` to first element of `head` as file title