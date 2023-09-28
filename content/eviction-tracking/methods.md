---
draft: false
cascade:
  title: Eviction Tracking System | Methods
  description: Real time eviction tracking in U.S. cities during COVID-19.
  fbImage: /images/assets/graphics/ets-bg-social.png
  twImage: /images/assets/graphics/ets-bg-social.png
  socialDescription: We’ve built the first nationwide database of evictions.
h1: Methods
layout: content
date: 2023-09-28T00:00:00.000Z
---
# Methods

Initial site selection for the Eviction Tracking System (ETS) was based on (1) the availability of valid baseline data in the given county and (2) the availability of eviction filing data through public-facing court websites. We briefly explain both criteria.

## Valid Baseline Data

Individual-level eviction records between 2000 and 2018 have been collected by The Eviction Lab, LexisNexis Risk Solutions, and American Information Research Services and then compiled by the Eviction Lab at Princeton University. Records were cleaned, stripped of duplicates and commercial eviction cases, geocoded, and validated against publicly-available data sources published by county- and state-court systems.

Data validation was conducted at the individual level where the Eviction Lab could secure state court data. This process involved merging and comparing the data using case numbers and court numbers. To validate our estimates of eviction case volume, we also compared our counts directly to state-reported county-level statistics on eviction filings. These aggregate estimates were considered reliable if the total number of filings in a county fell between 86 and 114 percent of the county courts’ publicly reported total for that year.

Within counties, years that were not marked as valid data points between the first and last years of availability were imputed if there were no more than two consecutive years of missing data. When only one year of data was missing within a county between two years of valid data, the case volume was imputed using the average of the preceding and following years. When two consecutive years of data were missing, we linearly interpolated between the last known and reliable value and the next known and reliable value.

These externally-validated data represent the baseline against which 2020-2022 data are compared. County-level years of data available for baseline comparison vary as a function of external validation. For example, in Richmond, VA, we compare against just 2016 data, whereas in Hamilton County, OH (Cincinnati) we can compare against average filings between 2012 and 2016. 

Using these data, we compiled a set of 73 of the 200 largest U.S. metropolitan areas in which at least 50% of Census tracts had valid data for at least one year between 2012 and 2016. Within each of those metropolitan areas we identified the counties with valid data during that period (n=224). We systematically checked for the availability of publicly-accessible eviction filing data through court web systems. We prioritized counties with larger renter populations and with higher eviction and eviction filing rates. We also aimed to select cities and counties that had instituted a range of eviction moratoria and renter protections in response to the COVID-19 pandemic.

In other sites, additional baseline data were provided by partner organizations. For example, {{< extlink "BASTA Austin" "http://www.bastaaustin.org/" >}} and {{< extlink "Open Austin" "https://www.open-austin.org/" >}} provided baseline data for Travis County, TX. The {{< extlink "CREATE Lab" "https://www.cmucreatelab.org/home" >}} at Carnegie Mellon University provided both baseline and 2020 data for Allegheny County, PA. Sources for each ETS site can be found on [individual site pages](https://evictionlab.org/eviction-tracking/). Similar cleaning procedures, and validation where possible, was conducted on baseline data for these sites as well. 

## 2020-2022 Eviction Filing Data

Data about eviction cases are accessed through public-facing websites by each county or jurisdiction that we are monitoring. We, or our partners, query these websites each week and collect the case filings into a dataset for analysis. From there, we geocode the defendant/property address and add Census tract details. Four jurisdictions – Richmond, VA, Travis County, TX, Allegheny County, PA, and New York City, NY – only provide data on defendant zip code, not the full address. One site, New Orleans, LA, only has address-level data available in certain portions of the site. The data we collect is necessarily limited to information made publicly available by each jurisdiction, but this approach offers an accurate method for understanding eviction case volume.

## Eviction Hotspots

Our research shows that [a small set of buildings and landlords](https://evictionlab.org/top-evicting-landlords-drive-us-eviction-crisis/) account for an outsized share of all evictions. To better understand how landlords have responded to the pandemic, we put together a list of the top-evicting addresses. We matched the addresses listed in our eviction filing court data to parcel data, which describes buildings and their owners, that we obtained from {{< extlink "Regrid" "https://regrid.com/" >}} and other public sources. Because large apartment complexes will sometimes stretch across multiple land parcels, we consolidated adjacent parcels that had the same ownership but were not single-family residential. After consolidation, we merged parcel data with data containing a full list of addresses for a given area, either from {{< extlink "OpenAddresses.io" "https://openaddresses.io/" >}} or another publicly available source. The merge was done first by linking data with the same address, and then by performing a spatial join. This produced a crosswalk of parcels to addresses in a given ETS site. 

We cleaned and geocoded defendant addresses in [Eviction Tracking System](https://evictionlab.org/eviction-tracking/) (ETS) filing data. We then joined the ETS data to the crosswalk of parcels and addresses through a series of merges. The process of merging ETS data to the crosswalk differed slightly depending on the site. Generally, we first directly joined the ETS data to the crosswalk of parcels and addresses by street address and city name. For eviction filings that remained unmatched to a parcel, we performed a spatial join between the geocoded ETS address and the parcel geometry. Finally, for filings still unmatched, we joined the eviction filing data to the parcel crosswalk based on spatial proximity: a filing would match if within 25 feet of a parcel. We kept only unique matches between ETS eviction filings and parcels; filings that matched to multiple parcels were left unmatched. 

We counted the number of eviction filings at each parcel, along with the plaintiff name most often associated with a given parcel address in the eviction filing data. Filings that were unmatched to a parcel were also grouped and tabulated by address, and are included in our counts of top evictors.

## Imputing Defendant Race/Ethnicity and Gender

In most ETS sites, we are able to use defendant (tenant) names and addresses from eviction case filings to impute (estimate) their likely race/ethnicity and gender. A detailed description of the underlying methods can be found in our [previous published work describing demographic disparities in eviction risk](https://evictionlab.org/demographics-of-eviction/) (as well as in [pandemic-specific analyses](https://evictionlab.org/us-eviction-filing-patterns-2020/)). Here we detail the processes employed for estimates displayed on the ETS.

To impute race/ethnicity, we used a Bayesian predictor algorithm—{{< extlink "the wru package in R" "https://github.com/kosukeimai/wru" >}}—that calculated the conditional probability of a defendant’s race/ethnicity on the basis of their first and last names and the racial/ethnic composition of the Census tract in which they lived. We used both first and last names when available, and only surnames if the former was not listed. If valid 2010 Census tract was not available for a given case, we did not impute race/ethnicity. 

The gender of a given name is imputed based on the corresponding name-year frequency in the Social Security Administration (SSA) baby name list. Since the SSA does not list name-years that appear fewer than five times, and the list contains only name-years for individuals born in the US or naturalized within a few months of birth, we rely on {{< extlink "Gender API" "https://gender-api.com/en/" >}} for all names without a corresponding name-year in the SSA list.

The probability of each name-year in the SSA baby name list being female is derived via beta-binomial conjugate updating with empirical Bayes for each name across all years it appears in the SSA list (since 1900), and the 95% interval is calculated for robustness. Following {{< extlink "Silver and McCann" "https://fivethirtyeight.com/features/how-to-tell-someones-age-when-all-you-know-is-her-name/" >}}, an actuarial lifetable is used to find the probability that a defendant name-year was born into each name-year cohort in the SSA baby name list. The joint probability of these distributions is then calculated and the point estimate taken for every defendant name-year that can be found in the SSA baby name list.

For defendant name-years that are omitted from the SSA baby name list, Gender API is assumed to represent the total count of living individuals in the US with that name. Therefore the probability of being female for names imputed with Gender API is assumed to follow a binomial distribution, again allowing for the collection of a 95% interval. Names that cannot be imputed via either method are given a probability of being female of 50%. This likely results in a conservative bias in estimates of the share of defendants who are female. The scale of this bias is associated with the size of the Black population and quality/transparency of record-keeping. 

Once all defendant names in a site for the past year have been given a probability of being female, the mean across all probabilities is taken. 

Baseline renter demographics were generated by calculating the percentage of adult renters belonging to the given demographic group in each site with data pulled from the 2019 five-year ACS sample using {{< extlink "IPUMS" "https://usa.ipums.org/usa/" >}}. Baseline demographic numbers for Albuquerque, Charleston and Greenville were pulled from the 2011 five-year ACS sample due to data availability.

AAPI defendants are grouped in the "Other" category due to high margins of error relative to point estimates.

Gender and race imputations rely on an imperfect process of assigning probabilities of identities to individuals based on names and geographies. Error is not equally distributed among demographic groups. People who are non-binary are always misgendered by gender imputation algorithms, and research has shown that people who are transgender and women are more likely to be misgendered (for example, see {{< extlink "Lockhart, King and Munsch" "https://doi.org/10.1038/s41562-023-01587-9" >}}. Despite recent improvements from {{< extlink "Imai and Khanna" "https://www-cambridge-org.ezproxy.princeton.edu/core/services/aop-cambridge-core/content/view/9DC8EBA269C25B1C606040196A3CB779/S1047198700010962a.pdf/improving-ecological-inference-by-predicting-individual-ethnicity-from-voter-registration-records.pdf" >}} and {{< extlink "Rosenman, Olivella and Imai" "https://www.nature.com/articles/s41597-023-02202-2" >}}, studies have also shown that imputations algorithms will see higher rates of false negatives for those who are Black, Latinx, and Asian - for example, incorrectly classifying a person who self-identifies as Black as non-Black. In the aggregate, this means that we likely underestimate the share of renters of color being filed against for eviction. False negative rates for Black individuals reported by {{< extlink "Imai, Olivella, and Rosenman" "https://www.science.org/doi/full/10.1126/sciadv.adc9824" >}} are roughly 20% on a dataset of voter registration records, but those rates increase dramatically, approaching 100%, in higher-income Census tracts according to research from {{< extlink "Argyle and Barber" "https://www.cambridge.org/core/journals/american-political-science-review/article/abs/misclassification-and-bias-in-predictions-of-individual-ethnicity-from-administrative-records/18E20B8D196D734401DCB96C83E492F7" >}}.

Please contact research@evictionlab.org with any questions or concerns on these estimates.

