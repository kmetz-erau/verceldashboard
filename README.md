# Energy Lens

Static Vercel-ready energy dashboard. Upload a DuckDB-format `.db` or `.duckdb` file and the dashboard reads it locally in the browser using DuckDB-WASM. Nothing is sent to an application server.

## Deploy with GitHub + Vercel

1. Create a GitHub repository and upload `index.html`, `app.js`, `styles.css`, and `README.md`.
2. In Vercel, choose **Add New Project**, import the repository, and leave the framework preset as **Other**.
3. Leave Build Command blank and set Output Directory to `.`.
4. Deploy.

The app also accepts CSV files for electric bills, gas, demand, building, meter, and account reference data. SQLite files should be exported to DuckDB or CSV first.

## Supported database tables

The loader looks for: `fpl_bills`, `electric_history`, `fpl_demand`, `demand_history`, `gas_history`, `gas_bills`, `electric_account_mapping`, `gas_account_mapping`, `buildings`, and `meters`.

Column names are matched flexibly for dates, costs, kWh, therms, building IDs, area, account numbers, meters, and peak demand.
