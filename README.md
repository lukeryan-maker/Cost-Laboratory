# CLAV Pricing and Cost Laboratory

Mission 3 interactive planning tool for the CLAV clavicle-padded sports undershirt concept. All calculations, workspace persistence, and Word/JSON exports run in the browser. There are no paid APIs, accounts, remote scripts, or runtime dependencies.

## Run and build

Use Node 18+ for `node test.mjs` and `node build.mjs`. Preview with `python3 -m http.server 8765`, then visit http://localhost:8765. GitHub Pages can serve the root folder of the main branch directly; dist is the equivalent production build. Every asset uses relative paths.

## Workflow

Edit costs and product quantities, compare scenarios and competitor prices, evaluate the model, write a rationale, and confirm. Major warnings require acknowledgment. Changes invalidate the previous evaluation and prevent updated final downloads until evaluated and confirmed again. Confirmation is session-local; download both final reports before leaving. Working inputs and saved scenarios persist in local storage. Back up and restore via workspace JSON.

## Scope and assumptions

Monthly USD operating model, outsourced production and US direct online sales, one shirt per order. Sales are assumptions, not forecasts. One-time startup cash is separate. Explicit straight-line equipment depreciation enters fixed operating costs. Opening inventory cash is not double-counted as an expense. Founder compensation is an economic allowance. Taxes, financing, inventory timing and Canadian landed costs are outside this model.

Percentage payment costs respond to price. Fixed annual costs divide by 12. Per-unit costs are multiplied by units. Shared variable costs apply to all units; product-specific costs only to their assigned product. Shared fixed overhead is allocated by revenue or unit share for product reports and counted exactly once at business level. Multi-product break-even uses the entered sales mix; aggregate rounded units may not preserve an integer product mix exactly.

## Evidence

Mission 1 competitor_data.json was supplied by the user and retains the original October 27, 2026 observations, availability caveats, and the preliminary $49–$69 range. The live original site identifies the working brand CLAV. Shopify's official pricing page checked October 30, 2026 supplies the $29 monthly equivalent under annual Basic billing and advertised starting 2.9% + $0.30 payment benchmark. This is a published option, not a supplier quote or industry average. Other amounts are estimated or illustrative planning assumptions, explicitly labeled. No injury-prevention claim is validated.

Original site: https://lukeryan-maker.github.io/Creative-Website/
Original repository inferred from that supplied URL: https://github.com/lukeryan-maker/Creative-Website
Laboratory repository: https://github.com/lukeryan-maker/Cost-Laboratory

## Architecture

- index.html / style.css: responsive graphite and lime dashboard
- model.js: pure financial engine, presets, validation, rule-based risk evaluation
- app.js: browser UI, persistence, charts, scenario management and confirmation
- report.js: immutable decision snapshot and genuine OOXML DOCX in a standard ZIP container
- competitor_data.json: bundled source research
- test.mjs: independent arithmetic and export tests
- build.mjs: reproducible dependency-free static build

Reports separate customer-facing descriptions/prices from private financial information. Do not publish final decision exports automatically. Mission 4 is not implemented.
