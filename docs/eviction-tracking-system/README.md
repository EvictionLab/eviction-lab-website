# Eviction Tracking

This document outlines the weekly eviction reports functionality, found at [https://evictionlab.org/weekly-reports](https://evictionlab.org/weekly-reports). Functionality has been developed April / May 2020 to monitor city level eviction filings in response to COVID-19 and associated policies.

This is a technical guide about implementation.  See the [User Guide](./user-guide.md) for details about adding and maintaining reports.

## Associated Assets

- **Content Folder:** `/content/weekly-reports`

  Contains all content for the list page and individual reports.  The content structure relies on using shortcodes for the interactive elements.

- **Page Layouts:** `/themes/evictionlab/layouts/weekly-reports`

  Contains the list page and individual report page wrappers

- **Shortcodes Folder**: `/themes/evictionlab/layouts/shortcodes`

  Contains all of the shortcodes used in the reports

- **Editor Components**: `/static/admin/index.html`

  Contains the custom editor components to allow editing shortcode components  with Netlify CMS.

- **Application Assets**:  `/themes/evictionlab/assets/weekly-reports`

  Contains CSS and Javascript resources for the report list and single pages.

- **Data Folder**: `/uploads`

  Contains all data for creating the index page and individual reports.

- **Map Styles**: https://studio.mapbox.com/

  Using "Eviction Tracking" style created in mapbox studio under the `eviction-lab` account.

## Adding / Editing Reports

Adding and editing reports should be handled using the [CMS](https://eviction-lab.netlify.app/admin), which will automatically populate the required front matter.

### Front Matter

Front matter for each report should contain:

  - `h1`: full name of city (e.g. "El Paso, Texas")
  - `slug`: the URL friendly string to use, should be the city name with two letter state (e.g. "el-paso-tx"). 
    - **Note:** the city list page creates links to individual reports by "slugifying" the city name as it appears on the index page, so **slugs must follow this format** in order for links to resolve correctly.
  - `title`: title that will be used for the browser window 
  - `date`: date the page was last updated
  - `collection`: set to `true` for this page to show up in the "Eviction Tracking" collection in the CMS
  - `draft`: set to `true` to prevent this page from generating in production builds.

### Shortcodes

The content for each report should be created using the report shortcodes, which have custom editor components:

**Report Intro (`{{% report_intro %}}`)**
  - Attributes:
    - `id`: the associated ID for the row in the data file
    - `data`: the table CSV file containing stats breakdown for each city

**Report Chart (`{{% report_chart %}}`)**
  - Attributes:
    - `id`: the chart configuration ID corresponding to the chart type to show. Configurations are created in `/themes/evictionlab/assets/weekly-reports/app.js`. Current valid values are `avg` for the overall average chart and `race` for the neighborhood demographic chart.
    - `data`: the CSV file containing the chart data

**Report Map (`{{% report_map %}}`)**
  - Attributes:
    - `shapes`: the GeoJSON file containing the features for the map. Each feature should have a `GEOID` property that is matched with the `id` column in the CSV data.
    - `data`: the CSV data for the map


## Application Structure

The application assets (Javascript / CSS) are included on any page within the `weekly-reports` folder.

### Libraries

The following external libraries are included in `assets/weekly-reports/lib.min.js`:

  - D3 (v4.13.0): used for charts, date formatting, etc.
  - MapboxGL (v1.9.1): used for maps on report page
  - deepmerge (v4.2.2): used for building chart configurations
  - [jQuery tablesorter](https://github.com/Mottie/tablesorter): jquery plugin used to sort table on list page

### Application

All other functionality is in `assets/weekly-reports/app.js` and broken into modules inside of the `Elab` namespace:

  - `Elab.Utils`: provides utility functions used throughout the app
  - `Elab.Config`: provides functions for configurations that determine how data is parsed and how charts render.
  - `Elab.Chart`: provides functions for creating a chart report section
  - `Elab.Map`: provides functions for creating a map report section
  - `Elab.Table`: provides functions for creating the tables used on the list page and in the report intro. 
  - `Elab.Section`: Helper used to create map and chart sections and place footnotes accordingly.

Hugo handles processing and including the following assets:

  - **CSS:** run against PostCSS, minified, fingerprinted and linked in the header partial on any weekly report pages (list page included)
  - **Javascript:** app javascript is minified, bundled with the libraries,  fingerprinted, and included in the footer partial on any weekly report pages (list page included) 
