# Redirects

This document outlines how to create and edit page redirects within the Eviction Lab website.

## Client-side Page Redirects

Client-side redirects can impact SEO and are preferred for:

  - temporary pages 
  - creating shortcut links that redirect to an existing page
  
> Note: client-side redirects should be added to robots.prod.txt so they do not impact SEO.


## Creating a Client-side Redirect

  - Clone this repository if you have not yet done so.
  - Create a folder in the `/content` directory that corresponds to the URL.  (e.g. creating `/content/ets-media` will create a redirect at the URL evictionlab.org/ets-media)
  - Inside the folder create an `_index.md` file with the following front matter:

```
---
title: "Redirecting... | Eviction Lab"
type: redirect
redirectUrl: https://cms-dev--eviction-lab.netlify.app/weekly-reports
---
```

  - enter the URL you want the page to redirect to in the `redirectUrl` field and save
  - open `/themes/evictionlab/layouts/robots.prod.txt` and add a `Disallow:` rule for the page you created. (e.g. `Disallow: /ets-media`)



## Server-side Page Redirects

Server-side redirects are preferred for:

  - permanent changes in the site structure

### Creating a Server-side Redirect

Server-side redirects are managed on the `eviction-lab-website` bucket.  The redirect rules are written in XML as documented in the [S3 Developer Guide](https://docs.aws.amazon.com/AmazonS3/latest/dev/how-to-page-redirect.html#advanced-conditional-redirects).

To add a rule or edit existing rules: 

  - Log into the AWS console and go to the S3 Management Console.  
  - Find the `eviction-lab-website` bucket and click on it
  - Click the "Properties" tab
  - Select the "Static Website Hosting" card
  - On the form that appears, add or edit the XML in the "Redirection Rules" field.

> Note: Use the `eviction-lab-website-staging` bucket to test the redirect on the staging domain first.

### Example

This example creates a server-side redirect for the file `https://evictionlab.org/docs/report-old-file.pdf`.  Any time someone requests this file, they will be redirected to the file provided in the redirect: `https://evictionlab.org/docs/report-v2.pdf`

```
<RoutingRules>
  <RoutingRule>
    <Condition>
      <KeyPrefixEquals>docs/report-old-file.pdf</KeyPrefixEquals>
    </Condition>
    <Redirect>
      <ReplaceKeyWith>docs/report-v2.pdf</ReplaceKeyWith>
    </Redirect>
  </RoutingRule>
</RoutingRules>
```
