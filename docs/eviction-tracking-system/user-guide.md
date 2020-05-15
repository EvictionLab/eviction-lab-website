# Eviction Tracking System

## Getting Started

In order to add or edit pages in the eviction tracking system you will need a [Github account](https://github.com/join). If you do not have one, sign up and request access by providing your Github username to one of the Hyperobjekt team members. Once given access, you can login to the content management system using your Github account.

- [Access the Content Management System](https://eviction-lab.netlify.app/admin/)

## Editing a Page

To edit content or data on the city list page:

- Login to the [Content Management System](https://eviction-lab.netlify.app/admin/)
- To update the ETS city list page:
  - Select "Pages" from the collections menu on the left
  - Select "Weekly Reports" from the list of pages that loads
- To update an individual city report page:
  - Select "Weekly Reports" from the collections menu on the left
  - Select the city page from the list of report pages
- After selecting a page you can modify the published status along with headings and page body content.

## Previewing Edits

Once you have edited a page and you want to preview the edits:

- Press "Save" at the top of the page you have edited
- Once the entry is saved, press the "back" arrow on the top left of the page.
- Select "Workflow" from the menu at the top of the page
  - You will see a list of pages that are currently being edited and their status (Draft, In Review, Ready)
- Click on the entry you would like to preview
  - At the top of the page you should see a "View Preview" link that will open a preview of the page with your changes.
  - **Note:** the preview takes some time to build, and you may not see the "View Preview" link immediately. If you don't see it, wait a minute and refresh the page.

## Publishing Changes

Once you have changes that are ready to publish to the site:

- Go to "Workflow" in the top menu from the home screen of the CMS
- Drag the page you want to publish from either "Draft" or "In Review" column and drop it into the "Ready" column.
- Hover over the page and then press "Publish Changes"

Alternatively, you can also publish a page by:

- Selecting the page you want to publish
- Pressing the "Set Status" button in the top menu bar and selecting "Ready"
- Pressing the "Publish" button in the top menu bar and selecting "Publish Now"

Once you have published a page it will trigger a build of the staging site. This usually takes a couple minutes to complete, and when finished you will see your changes on https://staging.evictionlab.org/

After this is complete, your pages will go live on th evictionlab.org website by:

- waiting until the next scheduled publish of the site occurs (every 12 hours, 6am / 6pm EST)
- requesting the Hyperobjekt team force an update

## Table, Chart, and Map Data

The tables, charts, and maps used on the Eviction Tracking System are built from CSV files. You can upload CSV files in the "Media" section of the content management system and then specify which file to use on the individual pages.

### Table CSV File

The table file is used to populate the table on the list page and to populate the stats in the intro of each report page. The CSV should have the following columns:

- `id`: census code for county or metropolitan area
- `name`: city name for the table
- `week_filings`: number of filings in the last week
- `week_diff`: a decimal value representing the % compared to average for the weekly filings
- `week_date`: first day of the week that `week_filings` is for (mm/dd/yyyy)
- `month_filings`: number of filings in the last month
- `month_diff`: a decimal value representing the % compared to average for the monthly filings
- `month_date`: start day of the month that `month_filings` is for (mm/dd/yyyy)
- `cumulative_filings`: number of filings since `cumulative_date`
- `cumulative_date`: start date for cumulative count (mm/dd/yyyy)
- `cumulative_diff`: decimal value for difference from average (1.23 = 123%)
- `end_moratorium_date`: date for end of moratorium (mm/dd/yyyy)
- `start_moratorium_date`: date for start of moratorium (mm/dd/yyyy)

### Filings Bar Chart CSV File

- `month`: month for the data point
- `month_last_day`: last day of the month data has been collected for, if partial
- `month_filings`: number of filings for the month
- `percentage_diff`: decimal value for difference from average for the month
- `avg_filings`: average number of filings for the month

### Map CSV File

- `id`: census tract / zip code corresponsing to the shape file
- `month_date`: start day for the month that `month_diff` is for (dd/mm/yyyy)
- `month_diff`: decimal value for difference from average for the month (1.23 = 123%)
- `racial_majority`:` racial majority for the area

### Filings by Neighborhood Demographics CSV File

- `group`: racial group for the data point
- `month`: month for the data point
- `month_last_day`: last day of the month data has been collected for, if partial
- `month_filings`: number of filings for the month
- `month_diff`: decimal value for difference from average for the month
- `avg_filings`: average number of filings for the month
