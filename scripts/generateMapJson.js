/*
 * General tips for generating a new _shapes.json file:
 *
 * 1. find the shp file of the parent geography
 *  - for tract map, find state shape zip by FIPS code at: 
 *    https://www2.census.gov/geo/tiger/TIGER2020/TRACT/
 *  - for zip code map, download entire US at https://www2.census.gov/geo/tiger/TIGER2020/ZCTA5/
 *  - (counties: https://www2.census.gov/geo/tiger/TIGER2020/COUNTY/)
 * 2. upload the shp, prj, & dbf files to https://mapshaper.org/
 *
 * USING MAPSHAPER (RECOMMENDED):
 * 3. open the Console
 * 4. filter/shape the data, something like the following:
 *  - GEOID=GEOID20 // if geos don't already gave a GEOID (each feature is expected to have a GEOID that aligns with client-provided _map.csv data 'id')
 *  - filter '"85003,...,85545".indexOf(GEOID) > -1' // filter by some property, eg GEOID by known list of zips
 *  - each NAME=NAMELSAD10 // add NAME field, like so for zips, or for tracts eg "Census Tract 1.14" (formatted tract number)
 *    - if formatted name doesn't already exist on featurees, create it eg NAME="ZCTA5 "+GEOID
 *  - filter-fields GEOID,NAME // filter to the necessary fields
 * 5. export as GeoJSON and save the json to static/uploads
 * 6. to generate the map bbox, (keep mapshaper open and) see addMapBbox.js
 *
 * USING THIS SCRIPT:
 * 3. export as GeoJSON and save the json to this directory
 * 4. run this script, eg (from this directory):
 *     node ./generateMapJson.js ./tl_rd22_44_tract.json providence_shapes.json 
 * 5. to generate the map bbox, see addMapBbox.js
 * 6. move the output to static/uploads and delete the input json file
 */

const fs = require("fs");
const input = process.argv[2];
const output = process.argv[3];
const fullStateJson = require(input);

// UPDATE these as necessary
const countyCode = "007";
const includedGeoids = [
  47037010903, 47037019106, 47037011700, 47037011001, 47037010602, 47037011600, 47037016000,
  47037010601, 47037015900, 47037010801, 47037014200, 47037018304, 47037018101, 47037013800,
  47037015637, 47037018204, 47037016200, 47037010302, 47037019008, 47037010303, 47037019401,
  47037019108, 47037015630, 47037010103, 47037019116, 47037015501, 47037013702, 47037012701,
  47037010904, 47037015636, 47037010702, 47037011900, 47037019105, 47037015805, 47037015619,
  47037015100, 47037014400, 47037013600, 47037015626, 47037014300, 47037015625, 47037011300,
  47037010201, 47037016100, 47037019003, 47037011400, 47037018904, 47037015629, 47037019503,
  47037016600, 47037018411, 47037018000, 47037011002, 47037019300, 47037015618, 47037012600,
  47037015405, 47037012100, 47037012200, 47037012801, 47037019402, 47037019004, 47037010404,
  47037010301, 47037010901, 47037015615, 47037015622, 47037015502, 47037015623, 47037015404,
  47037010501, 47037019200, 47037015628, 47037015806, 47037019112, 47037017100, 47037015634,
  47037015614, 47037015627, 47037013701, 47037017200, 47037015613, 47037019600, 47037018205,
  47037015632, 47037017901, 47037018801, 47037015402, 47037019118, 47037018412, 47037010401,
  47037018410, 47037018901, 47037018303, 47037019502, 47037010105, 47037012802, 47037018407,
  47037010104, 47037010502, 47037013202, 47037010701, 47037015609, 47037019111, 47037010202,
  47037015620, 47037015200, 47037013500, 47037019117, 47037010403, 47037015635, 47037018905,
  47037019119, 47037019121, 47037016500, 47037019120, 47037017402, 47037011800, 47037018404,
  47037015804, 47037016700, 47037015624, 47037019501, 47037980100, 47037019110, 47037018203,
  47037013900, 47037018700, 47037011200, 47037017401, 47037019109, 47037017300, 47037013300,
  47037015401, 47037015300, 47037010106, 47037017902, 47037012702, 47037015700, 47037017000,
  47037016300, 47037014800, 47037018902, 47037015633, 47037018602, 47037013201, 47037018408,
  47037016800, 47037016400, 47037013001, 47037010802, 47037017500, 47037018500, 47037013100,
  47037011100, 47037018405, 47037018302, 47037011500, 47037017800, 47037019007, 47037018409,
  47037018102, 47037015617, 47037013400, 47037019115, 47037016900, 47037980200, 47037017701,
  47037018201, 47037017702, 47037018803, 47037018804, 47037018601,
];

function generateMapJson() {
  const features = fullStateJson.features
    // .filter((f) => !countyCode || f.properties.COUNTYFP === countyCode)
    .filter((f) => includedGeoids.includes(Number(f.properties.GEOID)))
    .map((f) => ({
      ...f,
      properties: {
        GEOID: f.properties.GEOID,
        // display name tends to be in NAMELSAD
        NAME: f.properties.NAMELSAD || f.properties.NAME,
      },
    }));
  console.log(`Retained ${features.length} of ${fullStateJson.features.length} features.`);
  fs.writeFileSync(output, JSON.stringify({ ...fullStateJson, features }));
}

generateMapJson(fullStateJson);
