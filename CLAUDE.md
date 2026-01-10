# multiscaleflowx.github.io

Research group website for the Multiscale Flow X group at the University of Edinburgh.

## Tech Stack

- **Framework**: Jekyll (Ruby-based static site generator)
- **Styling**: Bootstrap 3.4.1 + custom CSS
- **Hosting**: GitHub Pages (auto-builds from source)

## Local Development

```bash
# Install dependencies (first time only)
bundle install

# Run local server
bundle exec jekyll serve --port 4012

# Preview at http://localhost:4012
```

## Project Structure

```
_includes/       # Reusable HTML partials (header, navbar, footer)
_layouts/        # Page templates
_posts/          # News posts (YYYY-MM-DD-title.md)
css/style.css    # Main stylesheet (includes dark mode)
js/dark-mode.js  # Dark mode toggle logic
images/          # All images (team photos, research, papers)
research/        # Research theme pages
team/            # Team member pages
papers/          # Publication pages
```

## Key Files

- `_config.yml` - Site configuration
- `_includes/header.html` - Head section (scripts, stylesheets)
- `_includes/top-navbar.html` - Navigation bar
- `css/style.css` - All custom styles including dark mode CSS variables

## Adding Content

### New team member
Create `team/firstname-lastname/index.html` with front matter.

### New publication
Create `papers/paper/short-name/index.html` with front matter.

### New news post
Create `_posts/YYYY-MM-DD-title.md` with front matter.

## Dark Mode

- CSS variables defined in `:root` and `[data-theme="dark"]`
- Navbar background handled via JavaScript (Bootstrap override)
- Toggle button in navbar, preference saved to localStorage
