/*
 * General tips for generating a new _shapes.json file:
 *
 * 1. find the shp file of the parent geography
 *  - for tract map, find state shape zip by FIPS code at: 
 *    https://www2.census.gov/geo/tiger/TIGER2010/TRACT/2010/ (EL still using 2010 shapes)
 *  - for zip code map, download entire US at https://www2.census.gov/geo/tiger/TIGER2010/ZCTA5/2010/
 *  - (counties: https://www2.census.gov/geo/tiger/TIGER2010/COUNTY/2010/)
 * 2. upload the shp, prj, & dbf files to https://mapshaper.org/
 *
 * USING MAPSHAPER (RECOMMENDED):
 * 3. open the Console
 * 4. filter/shape the data, something like the following:
 *  - GEOID=GEOID10 // each feature will be expected to have a GEOID to align with client-provided _map.csv data ('id' column)
 *  - filter '"85003,...,85545".indexOf(GEOID) > -1' // filter by some property, eg GEOID by known list of zips
 *  - each NAME=NAMELSAD10 // add NAME field, like so for zips, or for tracts eg "Census Tract 1.14" (formatted tract number)
 *    - if formatted name doesn't already exist on featurees, create it eg NAME="ZCTA5 "+GEOID
 *  - filter-fields GEOID,NAME // filter to the necessary fields
 * 5. export as GeoJSON and save the json to static/uploads
 * 6. to generate the map bbox, (keep mapshaper open and) see addMapBbox.js
 *
 * USING THIS SCRIPT (FOR COUNTY TRACT MAPS):
 * 3. export as GeoJSON and save the json to the same directory as this script
 * 4. run this script, eg (from this directory):
 *     node ./scripts/generateMapJson.js tl_rd22_44_tract.json providence_shapes.json '007'
 *    NOTE: Omit countyCode to include json for entire state (simply cleans up fields).
 * 5. move the output to static/uploads and delete the input json file before committing
 * 6. to generate the map bbox, see addMapBbox.js
 */

const fs = require("fs");
const input = process.argv[2];
const output = process.argv[3];
const countyCode = process.argv[4];
const fullStateJson = require(input);

function generateMapJson() {
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
}

generateMapJson(fullStateJson);
