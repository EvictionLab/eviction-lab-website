/*
 * For generating geojson file for a county. Omit countyCode to include json for entire state (simply cleans up fields).
 *
 * Steps:
 * 1. find state shape zip by FIPS code on https://www2.census.gov/geo/tiger/TIGER_RD18/LAYER/TRACT/
 * 2. convert the shp file to geojson using the export feature of https://mapshaper.org/
 * 3. save that json to the same directory as this script
 * 4. run this script, eg:
 *    `node './scripts/createCountyJson.js './tl_rd22_47_tract.json' './static/uploads/nashville_shapes.json' '037'`
 * 5. delete the input json file before committing
 */

const fs = require("fs");
const input = process.argv[2];
const output = process.argv[3];
const countyCode = process.argv[4];
const fullStateJson = require(input);

const features = fullStateJson.features
  // if none provided, include entire state json
  .filter((f) => !countyCode || f.properties.COUNTYFP === countyCode)
  .map((f) => {
    if (f.properties.NAMELSAD) f.properties.NAME = f.properties.NAMELSAD;
    return {
      ...f,
      properties: {
        GEOID: f.properties.GEOID,
        // display name tends to be in NAMELSAD
        NAME: f.properties.NAMELSAD || f.properties.NAME,
      },
    };
  });

fs.writeFileSync(output, JSON.stringify({ ...fullStateJson, features }));
