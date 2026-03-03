# Eviction Tracking

This document outlines the weekly eviction reports functionality, found at [https://evictionlab.org/eviction-tracking](https://evictionlab.org/eviction-tracking). Functionality has been developed April / May 2020 to monitor city level eviction filings in response to COVID-19 and associated policies.

This is a technical guide about implementation. See the [User Guide](./user-guide.md) for details about adding and maintaining reports.

## Associated Assets

- **Content Folder:** `/content/eviction-tracking`

  Contains all content for the list page and individual reports. The content structure relies on using shortcodes for the interactive elements.

- **Page Layouts:** `/themes/evictionlab/layouts/eviction-tracking`

  Contains the list page and individual report page wrappers

- **Shortcodes Folder**: `/themes/evictionlab/layouts/shortcodes`

  Contains all of the shortcodes used in the reports

- **Editor Components**: `/static/admin/index.html`

  Contains the custom editor components to allow editing shortcode components with Netlify CMS.

- **Application Assets**: `/themes/evictionlab/assets/eviction-tracking`

  Contains CSS and Javascript resources for the report list and single pages.

- **Data Folder**: `/uploads`

  Contains all data for creating the index page and individual reports.

- **Map Styles**: https://studio.mapbox.com/

  Using "Eviction Tracking" style created in mapbox studio under the `eviction-lab` account.

### Front Matter

Front matter for each report should contain:

- `h1`: full name of city (e.g. "El Paso, Texas")
- `slug`: the URL friendly string to use, should be the city name with two letter state (e.g. "el-paso-tx").
  - **Note:** the city list page creates links to individual reports by "slugifying" the city name as it appears on the index page, so **slugs must follow this format** in order for links to resolve correctly.
- `title`: title that will be used for the browser window
- `date`: date the page was last updated
- `collection`: set to `true` for this page to show up in the "Eviction Tracking" collection in the CMS
- `draft`: set to `true` to prevent this page from generating in production builds.

## Adding Site Page

To add a site, create a new .md file in content/eviction-tracking/ (start by copying one, albuquerque-nm is a good choice as it contains all of the sections). Set `draft: false` to prevent the site from showing up on the live site if merged to production. Add the relevant csvs for the site and add it to site_metadata.csv (mark it as "draft" to prevent it from appearing in the landing page table on production), filing_data_by_site.csv, and main_landing_page_data.csv.

To generate {site}_shapes.json for the map element:
 1. find the shp file of the parent geography
  - for tract map, find state shape zip by FIPS code at: 
    https://www2.census.gov/geo/tiger/TIGER2020/TRACT/
  - for ZIP code map, download entire US at https://www2.census.gov/geo/tiger/TIGER2020/ZCTA5/
  - for counties: https://www2.census.gov/geo/tiger/TIGER2020/COUNTY/
 2. upload the entire zipped folder (or shp, prj, & dbf files) to https://mapshaper.org/
  - click cursor icon + "inspect features" and click a shape to examine properties
 3. open the Console
 4. filter & shape the data, something like the following:
  - GEOID=GEOID20 // if geos don't already gave a GEOID (each feature is expected to have a GEOID that aligns with client-provided _map.csv data 'id')
  - filter '"85003,...,85545".indexOf(GEOID) > -1' // filter using client-provided list of GEOIDs (often provided as {site}.csv)
  - each NAME=NAMELSAD10 // add NAME field, like so for zips, or for tracts eg "Census Tract 1.14" (formatted tract number)
    - if formatted name doesn't already exist on featurees, create it eg each NAME="ZCTA5 "+GEOID
  - filter-fields GEOID,NAME // filter to the necessary fields
 5. export as GeoJSON with command line option "bbox precision=0.001" and save the output to static/uploads

### Shortcodes

The content for each report should be created using the report shortcodes, which have custom editor components:

**Report Intro (`{{% report_intro %}}`)**

- Attributes:
  - `id`: the associated ID for the row in the data file
  - `data`: the table CSV file containing stats breakdown for each city

**Report Chart (`{{% report_chart %}}`)**

- Attributes:
  - `id`: the chart configuration ID corresponding to the chart type to show. Configurations are created in `/themes/evictionlab/assets/eviction-tracking/app.js`. Current valid values are `avg` for the overall average chart and `race` for the neighborhood demographic chart.
  - `data`: the CSV file containing the chart data

**Report Map (`{{% report_map %}}`)**

- Attributes:
  - `shapes`: the GeoJSON file containing the features for the map. Each feature should have a `GEOID` property that is matched with the `id` column in the CSV data.
  - `data`: the CSV data for the map

## Application Structure

The application assets (Javascript / CSS) are included on any page within the `eviction-tracking` folder.

### Libraries

The following external libraries are included in `assets/eviction-tracking/lib.min.js`:

- D3 (v4.13.0): used for charts, date formatting, etc.
- MapboxGL (v1.9.1): used for maps on report page
- deepmerge (v4.2.2): used for building chart configurations
- [jQuery tablesorter](https://github.com/Mottie/tablesorter): jquery plugin used to sort table on list page

### Application

All other functionality is in `assets/eviction-tracking/app.js` and broken into modules inside of the `Elab` namespace:

- `Elab.Utils`: provides utility functions used throughout the app
- `Elab.Config`: provides functions for configurations that determine how data is parsed and how charts render.
- `Elab.Chart`: provides functions for creating a chart report section
- `Elab.Map`: provides functions for creating a map report section
- `Elab.ListPage`: provides functions for creating the tables used on the list page and in the report intro.
- `Elab.Section`: Helper used to create map and chart sections and place footnotes accordingly.

Hugo handles processing and including the following assets:

- **CSS:** run against PostCSS, minified, fingerprinted and linked in the header partial on any weekly report pages (list page included)
- **Javascript:** app javascript is minified, bundled with the libraries, fingerprinted, and included in the footer partial on any weekly report pages (list page included)
