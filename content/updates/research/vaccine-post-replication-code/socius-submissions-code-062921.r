# Source code for Socius submission
# 06.25.2021

# SETUP-----------------------------------
##TODO: replace this with a valid Census API key 
api_key <- ""

library(tidyverse)
library(showtext)
library(extrafont)
library(svglite)
library(haven)
library(data.table)
library(fs)
library(here)
library(janitor)
library(lubridate)
library(tidycensus)
library(wCorr)

# set working directory
setwd('//Volumes/evictionlab/Evicted America/Olivia/Covid Evictions/')

# set fonts
font_add("GT Eesti Pro Display Medium", "GTEestiProDisplay-Medium.ttf")
font_add("GT Eesti Pro Display Bold", "GTEestiProDisplay-Bold.ttf")
font_add("Gotham Bold", "Gotham-Bold.otf")
font_add("Gotham Light", "Gotham-Light.otf")
font_add("Gotham Medium", "Gotham Medium Regular.ttf")

# set colors
elab_orange <- "#E24000"
elab_blue <- "#434878"
elab_green <- "#2C897F"
background_gray <- "#f4f7f9"
title_black <- "#23282b"
labels_gray <- "#7d7d7d"
background_gray <- "#f4f7f9"
orange_gradient1 <- "#F27636"
orange_gradient2 <- "#E04119"


#READ IN RAW EVICTION & VACCINE DATA-------
raw_df <- read_csv("socius-raw.csv", 
                   col_types = list("c", "c", "i", "i")) 
  

#CENSUS DATA  -----------------------------
#census api
census_api_key(api_key, install="TRUE", overwrite = TRUE)
tidycensus::load_variables(dataset = 'acs5', year=2019) -> all_vars
all_vars %>% filter(str_detect(name, "B01001_")) %>% pull(name) -> age_vars
# 2015-2019 5-year ACS
variables <- c("B01003_001", # population
               "B03002_003", # non-hisp white population
               "B03002_004", # Black population
               "B03002_012", # hispanic population 
               "B03002_006", # asian population 
               "B25003_003", # renter hh
               age_vars) 


zip2019 <- get_acs(geography= "zcta", variables = variables, output = "wide", year = 2019)

zip2019_clean <- zip2019 %>% 
  # remove totals by gender, overall total
  select(-B01001_026E, -B01001_002E, -B01001_001E) %>%
  rename(zip = NAME,
         pop_2019 = B01003_001E,
         white_2019 = B03002_003E,
         black_2019 = B03002_004E,
         hisp_2019 = B03002_012E,
         asian_2019 = B03002_006E,
         renter_hh_2019 = B25003_003E
  ) %>% 
  mutate(zip = str_replace(zip, "ZCTA5 ", "")) %>% 
  select(-ends_with('M')) %>% 
  # removing under 10 
  select(-B01001_003E, -B01001_004E, -B01001_027E, -B01001_028E) %>%
  mutate(over_10_pop = rowSums(select(.,starts_with('B01001')))) %>% 
  mutate(over_15_pop = over_10_pop - (B01001_005E+ B01001_029E)) %>% 
  mutate(over_18_pop = over_15_pop - (B01001_006E + B01001_030E)) %>% 
  select(-starts_with('B01001'))


#CREATE FINAL ANALYSIS DFS-----------------
plot_df <- raw_df %>%
  # join census data
  left_join(zip2019_clean %>% mutate(zip = as.character(zip)), by = "zip") %>%
  # create eviction filing rate and vax rate
  mutate(
    evict_pct = ifelse(eviction_count/renter_hh_2019==Inf, NA, 
                       eviction_count/renter_hh_2019),
    vax_pct = ifelse(fully_vaccinated/over_15_pop==Inf, NA, 
                     fully_vaccinated/over_15_pop)
  ) %>% 
  # filter those without eviction rate and vax rate
  filter(!is.na(evict_pct) & !is.na(vax_pct)) %>%
  # create race variables
  mutate(
    nonwhite_pct = ((pop_2019 - white_2019) * 100) / pop_2019,
    white_pct = (white_2019 / pop_2019) * 100,
    black_pct = (black_2019 / pop_2019) * 100,
    hisp_pct = (hisp_2019 / pop_2019) * 100,
    asian_pct = (asian_2019 / pop_2019) * 100,
    other_2019 = pop_2019 - (white_2019 + black_2019 + asian_2019 + hisp_2019),
    other_pct = (other_2019 / pop_2019) * 100
  ) %>%
  # create majority race variable
  mutate(
    majority_race = case_when(
      white_pct > 50 ~ "WHITE",
      black_pct > 50 ~ "BLACK",
      hisp_pct > 50 ~ "HISPANIC",
      asian_pct > 50 ~ "ASIAN",
      other_pct > 50 ~ "OTHER",
      TRUE ~ "NO MAJORITY"
    )
  ) %>% 
  # select variables that we need
  select(
    xsite,
    zip,
    eviction_count,
    evict_pct,
    fully_vaccinated,
    vax_pct,
    pop_2019,
    white_2019,
    black_2019,
    hisp_2019,
    asian_2019,
    other_2019,
    renter_hh_2019,
    nonwhite_pct,
    white_pct,
    black_pct,
    hisp_pct,
    asian_pct,
    other_pct, 
    majority_race,
    over_15_pop
  )


#DRAW PLOTS--------------------------------

# calculate weighted Pearson's r
weightedCorr(plot_df[plot_df$xsite=="AUSTIN",]$evict_pct, 
             plot_df[plot_df$xsite=="AUSTIN",]$vax_pct,
             method = "Pearson",
             weight = plot_df[plot_df$xsite=="AUSTIN",]$pop_2019)
# -0.1
weightedCorr(plot_df[plot_df$xsite=="DALLAS",]$evict_pct, 
             plot_df[plot_df$xsite=="DALLAS",]$vax_pct,
             method = "Pearson",
             weight = plot_df[plot_df$xsite=="DALLAS",]$pop_2019)
# -0.5
weightedCorr(plot_df[plot_df$xsite=="FORTWORTH",]$evict_pct, 
             plot_df[plot_df$xsite=="FORTWORTH",]$vax_pct,
             method = "Pearson",
             weight = plot_df[plot_df$xsite=="FORTWORTH",]$pop_2019)
# -0.2
weightedCorr(plot_df[plot_df$xsite=="HOUSTON",]$evict_pct, 
             plot_df[plot_df$xsite=="HOUSTON",]$vax_pct,
             method = "Pearson",
             weight = plot_df[plot_df$xsite=="HOUSTON",]$pop_2019)
# -0.3
weightedCorr(plot_df[plot_df$xsite=="INDIANAPOLIS",]$evict_pct, 
             plot_df[plot_df$xsite=="INDIANAPOLIS",]$vax_pct,
             method = "Pearson",
             weight = plot_df[plot_df$xsite=="INDIANAPOLIS",]$pop_2019)
# -0.6
weightedCorr(plot_df[plot_df$xsite=="NEW YORK",]$evict_pct, 
             plot_df[plot_df$xsite=="NEW YORK",]$vax_pct,
             method = "Pearson",
             weight = plot_df[plot_df$xsite=="NEW YORK",]$pop_2019)
# -0.5
weightedCorr(plot_df[plot_df$xsite=="PHILADELPHIA",]$evict_pct, 
             plot_df[plot_df$xsite=="PHILADELPHIA",]$vax_pct,
             method = "Pearson",
             weight = plot_df[plot_df$xsite=="PHILADELPHIA",]$pop_2019)
# -0.7
weightedCorr(plot_df[plot_df$xsite=="PHOENIX",]$evict_pct, 
             plot_df[plot_df$xsite=="PHOENIX",]$vax_pct,
             method = "Pearson",
             weight = plot_df[plot_df$xsite=="PHOENIX",]$pop_2019)
# -0.6
weightedCorr(plot_df[plot_df$xsite=="SOUTH BEND",]$evict_pct, 
             plot_df[plot_df$xsite=="SOUTH BEND",]$vax_pct,
             method = "Pearson",
             weight = plot_df[plot_df$xsite=="SOUTH BEND",]$pop_2019)
# -0.3

# then, hardcoding the pearson's R values to the titles of each facet
plot_df %>% 
  mutate(xsite = recode(xsite, 
                        "AUSTIN" = "AUSTIN (r=-0.1)",
                        "DALLAS" = "DALLAS (r=-0.5)",
                        "FORTWORTH" = "FORT WORTH (r=-0.2)",
                        "HOUSTON" = "HOUSTON (r=-0.3)",
                        "INDIANAPOLIS" = "INDIANAPOLIS (r=-0.6)",
                        "NEW YORK" = "NEW YORK (r=-0.5)", 
                        "PHILADELPHIA" = "PHILADELPHIA (r=-0.7)",
                        "PHOENIX" = "PHOENIX (r=-0.6)",
                        "SOUTH BEND" = "SOUTH BEND (r=-0.3)")) %>%
  ggplot(aes(x = evict_pct, y = vax_pct, color = majority_race)) + 
  geom_point(alpha = .5, size =3) + 
  facet_wrap(.~xsite,
             ncol = 3,
             scales = "free") +
  scale_y_continuous(labels = scales::percent, limits=c(0.2,.75)) +
  scale_x_continuous(labels = scales::percent) +
  geom_smooth(method = "lm", color = labels_gray, se = FALSE,
              mapping = aes(weight = pop_2019)) + 
  scale_color_manual(values = c("BLACK" = elab_orange,
                                "WHITE" = elab_green,
                                "HISPANIC" = elab_blue,
                                "ASIAN" = title_black,
                                "NO MAJORITY" = labels_gray)) + 
  theme(legend.position = "bottom",
        strip.text = element_text(size = 18, family = "Gotham Medium"),
        strip.background = element_rect(fill = background_gray,
                                        color = background_gray),
        legend.key = element_rect(fill = background_gray,
                                  color = background_gray),
        legend.text = element_text(size = 18,
                                   color = "#333333",
                                   family = "Gotham Medium",
                                   angle = 0),
        legend.background = element_rect(fill = background_gray),
        axis.ticks = element_blank(),
        axis.text.y = element_text(size = 12, family = "Gotham Medium"),
        axis.text.x = element_text(size = 12, family = "Gotham Medium"),
        panel.background = element_rect(fill = background_gray,
                                        color = background_gray),
        plot.background = element_rect(fill = background_gray,
                                       color = background_gray),
        panel.grid.major.y = element_line(color = "white",
                                          size = 0.6),
        panel.grid.minor.y = element_line(color = "white",
                                          size = 0.3),
        panel.grid.major.x = element_line(color = "white",
                                          size = 0.3),
        panel.grid.minor.x = element_blank(),
        legend.title = element_text(size = 20,
                                    color = "#333333",
                                    family = "GT Eesti Pro Display Bold",
                                    margin = margin(t = 0, r = 20, b = 0, l = 0)),
        axis.title.x = element_text(size = 22,
                                    color = "#333333",
                                    family = "GT Eesti Pro Display Bold",
                                    margin = margin(t = 20, r = 0, b = 0, l = 0)),
        axis.title.y = element_text(size = 22,
                                    color = "#333333",
                                    family = "GT Eesti Pro Display Bold",
                                    margin = margin(t = 0, r = 20, b = 0, l = 0))) + 
  labs(
    x = "Eviction Filing Rate",
    y = "Vaccination Rate",
    color = "Majority race"
    )
