# Eviction Lab Container Site

This repository is the container web site for https://evictionlab.org.

## Contributing

Clone this repo and run locally using Hugo v0.80

```
hugo server -D
```

> Note: use the `-D` flag to ensure that pages marked as "draft" are generated for development purposes. Draft pages will not be included in the staging / production build, but will be included on any Netlify builds.

### New Features

Follow this branching flow when adding features or changes to the website:

- create a working branch off of the latest `development`, named relative to what you're working on.
  - any commits to your branch that are pushed to github will be auto deployed with a preview link at: branch-name--eviction-lab.netlify.app
- when your work is ready for preview, open pull request to merge your branch into the `development` branch
  - perform the necessary review of the feature, and if approved merge it into the `development` branch
- when the new features in the `development` branch are ready to be deployed to the live site, merge `development` into `staging`
  - this will trigger a build that can be previewed at https://staging.evictionlab.org/, make sure everything looks right on the staging domain and either:
    - Wait for the autodeploy (daily at 3AM/3PM ET)
    - manually merge `staging` to `production`

### Content Updates / Hotfixes

When making content updates, use the CMS or use the following flow:

- create a branch off of the latest `staging` branch, named accordingly.
- add your hotfix or update in the branch and then merge back into `staging`
  - review the change at https://staging.evictionlab.org/ and confirm everything is working as expected
- wait for the automated deploy (daily at 3AM/3PM ET) or manually merge `staging` into `production`
- for hotfixes, cherry pick the commit containing the hotfix into the `development` branch.

## Layouts

The template is based on small, content-agnostic partials that can be mixed and matched. The pre-built pages showcase just a few of the possible combinations. Refer to the `site/layouts/partials` folder for all available partials.

Use Hugo’s `dict` functionality to feed content into partials and avoid repeating yourself and creating discrepancies.

## CSS

The template uses a custom fork of Tachyons and PostCSS with cssnext and cssnano. To customize the template for your brand, refer to `src/css/imports/_variables.css` where most of the important global variables like colors and spacing are stored.
