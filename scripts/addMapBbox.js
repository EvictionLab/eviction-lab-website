/*
 * ADD BBOX (so map zooms to correct area)
 * example usage (from this directory):
 *  node addMapBbox.js input.json output_shapes.json
 *
 * Assumes that all map features have a properties.bounds array.
 * To generate these, open the map in mapshaper, open the Console and run:
 *  each bounds=this.bounds
 * Then export as GEOJson
 */

const fs = require("fs");
const input = process.argv[2];
const output = process.argv[3];
const fullStateJson = require(input);

function addMapBbox(fullStateJson) {
  const bbox = fullStateJson.features.reduce(
    (accum, f) => {
      const fBounds = f.properties.bounds;
      if (!fBounds) {
        throw new Error(
          "\nNo bounds found for feature. See note above about adding using mapshaper.\n",
        );
      }
      // delete property, which is no longer needed
      delete f.properties.bounds;
      return [
        Math.min(accum[0], fBounds[0]),
        Math.min(accum[1], fBounds[1]),
        Math.max(accum[2], fBounds[2]),
        Math.max(accum[3], fBounds[3]),
      ];
    },
    [Infinity, Infinity, -Infinity, -Infinity],
  );

  fullStateJson.bbox = bbox;
  fs.writeFileSync(output, JSON.stringify(fullStateJson));
}

addMapBbox(fullStateJson);
