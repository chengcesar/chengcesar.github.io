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

