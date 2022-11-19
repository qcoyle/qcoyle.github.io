# Converting Google Doc to Markdown
In google docs:
* Open google doc --> extensions --> Docs to Markdown
* Copy the text

In webpage directory:
* cd file-name.md
* touch file-name.md
* Paste the contents in
* Find and replace: ` \{(?<=\{).*?(?=\})\}` --> ""
* Find the [TOC] tag. Command pallete --> Markdown Table of Contents

In index.html:
```
<!DOCTYPE html>
<html lang="en">
<head>
    <link href='/static/default-writing-styles.css' rel='stylesheet'>
</head>
<script type="module" src="https://cdn.jsdelivr.net/gh/zerodevx/zero-md@1/src/zero-md.min.js"></script>
<zero-md src="file-name.md"></zero-md>
</html>

```