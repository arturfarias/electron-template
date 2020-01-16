# electron-template

**Architecture.**

A basic Electron application needs just these files:

- `package.json` - Project Details and Dependencies (node.js).
- `main.js` - Initializes the application window,  is also responsible for all **main process** settings.
- `pages` - Contains an index directory which has the **html, css and js** files for the composition of the homepage, for new pages  is recommended to create a new directory with the same structure.
- `preload` - Directory containing the project **preload files**.
- `static` - Directory for **images** and other project **static files**.
- `tests` - Directory containing the **test files**.


## To Use

Use [Git](https://git-scm.com) to clone this repository

```bash
# Clone this repository
git clone https://github.com/arturfarias/electron-template ProjectName
# Go into the repository
cd ProjectName
# Install dependencies
npm install
# Run the app
npm start
```

## License

[CC0 1.0 (Public Domain)](LICENSE.md)
