# Local Hosting Guide

## The CORS Issue

When you open HTML files directly in your browser (using `file://` protocol), modern browsers block JavaScript from loading external files like JSON for security reasons. This is why the publications page appears empty when you just click on `index.html`.

## Solutions

### Option 1: Use the Fixed JavaScript (Recommended)
I've updated `publications/publications.js` to embed the data directly, so it works when opening files directly. This should work now!

### Option 2: Host Locally with a Simple Server

If you want to use the original JSON approach or test the site properly, you can run a local server:

#### Using Python (if you have Python installed):

**Python 3:**
```bash
cd /path/to/your/website/folder
python -m http.server 8000
```

**Python 2:**
```bash
cd /path/to/your/website/folder
python -m SimpleHTTPServer 8000
```

Then open: `http://localhost:8000`

#### Using Node.js (if you have Node.js installed):

Install a simple server:
```bash
npm install -g http-server
```

Then run:
```bash
cd /path/to/your/website/folder
http-server
```

#### Using PHP (if you have PHP installed):
```bash
cd /path/to/your/website/folder
php -S localhost:8000
```

#### Using Live Server (VS Code Extension):
If you use VS Code, install the "Live Server" extension, then right-click on `index.html` and select "Open with Live Server".

## What Each Method Does

- **Direct file opening** (`file://`): Limited by CORS, some features won't work
- **Local server** (`http://localhost`): Full functionality, mimics real web hosting
- **Embedded data**: Works with direct file opening, no server needed

## Current Status

The publications should now work when you open `index.html` directly because I've embedded the data in the JavaScript file. No server needed!