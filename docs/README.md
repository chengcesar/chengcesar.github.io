# Projects Documentation

This folder contains all project documentation in a Docusaurus-like structure.

## Structure

Each project has its own folder with only a Markdown file:
```
docs/
  project-01/
    index.md      # Markdown content for the project
  project-02/
    index.md
  ...
```

All projects are rendered using a single centralized template: `project.html` in the root directory.

## Adding a New Project

1. Create a new folder: `docs/project-XX/` (where XX is the project number)
2. Create `index.md` with your project content in Markdown format
3. Update the link in `index.html` to point to `project.html?project=project-XX`

## Editing Project Content

Simply edit the `index.md` file in the project's folder. The centralized `project.html` template will automatically load and render the Markdown content using the marked.js library.

## How It Works

- The gallery links point to `project.html?project=project-XX`
- The `project.html` template reads the URL parameter and loads the corresponding `docs/project-XX/index.md` file
- No need to maintain individual HTML files for each project!

## Markdown Features

You can use standard Markdown syntax:
- Headers (#, ##, ###)
- Bold and italic text
- Lists (ordered and unordered)
- Links and images
- Code blocks
- Tables
- Blockquotes

## Image Placeholders

You can add placeholder images between sections with 1-column or 2-column layouts using HTML (which is supported in Markdown):

### 1-Column Layout

Insert a single full-width image:

```html
<div class="img-placeholder-1col">
<img src="../../assets/gallery-placeholder.svg" alt="Description">
</div>
```

Or use your own image:

```html
<div class="img-placeholder-1col">
<img src="path/to/your/image.jpg" alt="Description">
</div>
```

### 2-Column Layout

Insert two images side by side (automatically stacks on mobile):

```html
<div class="img-placeholder-2col">
<img src="../../assets/gallery-placeholder.svg" alt="Description 1">
<img src="../../assets/gallery-placeholder.svg" alt="Description 2">
</div>
```

Or use your own images:

```html
<div class="img-placeholder-2col">
<img src="path/to/image1.jpg" alt="Description 1">
<img src="path/to/image2.jpg" alt="Description 2">
</div>
```

**Note:** When using images from your project folder, use relative paths like `cover.png` or `images/photo.jpg` instead of `../../assets/`.
