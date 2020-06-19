# Eviction Lab Container Site

This repository is the container web site for https://evictionlab.org.

## Contributing

Clone this repo and run locally using Hugo v0.69.2

```
hugo server
```

Follow this branching flow when adding features or changes to the website:

* create a working branch off of the latest `staging`, named relative to what you're working on.  
  * any commits to your branch that are pushed to github will be auto deployed with a preview link at: branch-name--eviction-lab.netlify.app
* when your work is ready to go live, open pull request to merge your branch into the `staging` branch
  * confirm there are no conflicts, the build is successful, and reviewed by any team members if needed then merge.
  * once merged into `staging` it will trigger a build that can be previewed at https://staging.evictionlab.org/
* if everything looks good on the staging link, merge the `staging` branch into `production`, which will trigger a production build that deploys to https://evictionlab.org/

## Layouts

The template is based on small, content-agnostic partials that can be mixed and matched. The pre-built pages showcase just a few of the possible combinations. Refer to the `site/layouts/partials` folder for all available partials.

Use Hugo’s `dict` functionality to feed content into partials and avoid repeating yourself and creating discrepancies.

## CSS

The template uses a custom fork of Tachyons and PostCSS with cssnext and cssnano. To customize the template for your brand, refer to `src/css/imports/_variables.css` where most of the important global variables like colors and spacing are stored.
