# Bebeto UI — Angular

> A small, modern portfolio built with Angular (standalone components). Clean, responsive, and optimized for performance.

## Development server

To start a local development server, run:

```bash
## Quick start ⚡

Prerequisites: Node.js (LTS) and npm

Install & run locally:

```bash
cd bebeto-angular
npm install
npm start       # dev server → http://localhost:4200
```

Build for production:

```bash
npm run build
# output: dist/bebeto-angular
```

Tests:

```bash
npm test
```

## Structure (important folders)

- `src/` — app source
	- `app/` — standalone feature components (hero, blog, portfolio, etc.)
	- `public/Assets/` — static images and assets

## Notes

- Uses Angular standalone components and signals for local state.
- Font Awesome is included for icons (see `angular.json` styles).
- Asset filenames should avoid spaces — prefer kebab-case (e.g., `hire-me.png`).

## Contributing

PRs welcome — please open issues for bugs or feature requests.

## License

MIT — feel free to use and adapt.

---
_Generated / edited for clarity and brevity_
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
