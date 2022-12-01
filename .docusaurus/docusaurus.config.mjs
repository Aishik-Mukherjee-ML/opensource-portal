/*
 * AUTOGENERATED - DON'T EDIT
 * Your edits in this file will be overwritten in the next build!
 * Modify the docusaurus.config.js file at your site's root instead.
 */
export default {
  "title": "OpenSource @ Maplelabs",
  "tagline": "At MapleLabs we contribute back.",
  "url": "https://my-first-docusaurus-test-site.com",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/maple-favicon.png",
  "organizationName": "maplelabs",
  "projectName": "Open-source",
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "path": "i18n",
    "localeConfigs": {}
  },
  "presets": [
    [
      "classic",
      {
        "blog": {
          "showReadingTime": true,
          "blogSidebarCount": 0
        },
        "theme": {
          "customCss": [
            "/Users/aishik/Documents/GitHub/opensource-portal/src/css/custom.css"
          ]
        }
      }
    ]
  ],
  "themeConfig": {
    "colorMode": {
      "disableSwitch": true,
      "defaultMode": "light",
      "respectPrefersColorScheme": false
    },
    "navbar": {
      "title": "Open Source",
      "logo": {
        "alt": "Maple Labs Logo",
        "src": "img/MapleLabs-Logo.jpg"
      },
      "items": [
        {
          "to": "/projects",
          "position": "right",
          "label": "Projects"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "html": "\n                <a href=\"https://www.maplelabs.com\" target=\"_blank\" rel=\"noreferrer noopener\">\n                  <img src=\"/img/maple-favicon.png\" alt=\"Maplelabs\" width=\"20\" height=\"20\" />\n                </a>\n              "
        },
        {
          "html": "<a href=\"https://www.maplelabs.com\" target=\"_blank\" rel=\"noreferrer noopener\" uk-icon=\"discord\"/>"
        },
        {
          "html": "<a href=\"https://in.linkedin.com/company/maplelabs-cloud-solutions\" target=\"_blank\" rel=\"noreferrer noopener\" uk-icon=\"linkedin\"/>"
        },
        {
          "html": "<a href=\"https://www.instagram.com/maplelabs\" target=\"_blank\" rel=\"noreferrer noopener\" uk-icon=\"instagram\"/>"
        }
      ],
      "copyright": "Copyright © 2022 MapleLabs. All rights reserved."
    },
    "prism": {
      "theme": {
        "plain": {
          "color": "#393A34",
          "backgroundColor": "#f6f8fa"
        },
        "styles": [
          {
            "types": [
              "comment",
              "prolog",
              "doctype",
              "cdata"
            ],
            "style": {
              "color": "#999988",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "namespace"
            ],
            "style": {
              "opacity": 0.7
            }
          },
          {
            "types": [
              "string",
              "attr-value"
            ],
            "style": {
              "color": "#e3116c"
            }
          },
          {
            "types": [
              "punctuation",
              "operator"
            ],
            "style": {
              "color": "#393A34"
            }
          },
          {
            "types": [
              "entity",
              "url",
              "symbol",
              "number",
              "boolean",
              "variable",
              "constant",
              "property",
              "regex",
              "inserted"
            ],
            "style": {
              "color": "#36acaa"
            }
          },
          {
            "types": [
              "atrule",
              "keyword",
              "attr-name",
              "selector"
            ],
            "style": {
              "color": "#00a4db"
            }
          },
          {
            "types": [
              "function",
              "deleted",
              "tag"
            ],
            "style": {
              "color": "#d73a49"
            }
          },
          {
            "types": [
              "function-variable"
            ],
            "style": {
              "color": "#6f42c1"
            }
          },
          {
            "types": [
              "tag",
              "selector",
              "keyword"
            ],
            "style": {
              "color": "#00009f"
            }
          }
        ]
      },
      "darkTheme": {
        "plain": {
          "color": "#F8F8F2",
          "backgroundColor": "#282A36"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "builtin"
            ],
            "style": {
              "color": "rgb(189, 147, 249)"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "rgb(80, 250, 123)"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "rgb(255, 85, 85)"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "rgb(255, 184, 108)"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "rgb(248, 248, 242)"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "rgb(255, 121, 198)"
            }
          },
          {
            "types": [
              "keyword",
              "variable"
            ],
            "style": {
              "color": "rgb(189, 147, 249)",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "rgb(98, 114, 164)"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      },
      "additionalLanguages": [],
      "magicComments": [
        {
          "className": "theme-code-block-highlighted-line",
          "line": "highlight-next-line",
          "block": {
            "start": "highlight-start",
            "end": "highlight-end"
          }
        }
      ]
    },
    "docs": {
      "versionPersistence": "localStorage",
      "sidebar": {
        "hideable": false,
        "autoCollapseCategories": false
      }
    },
    "metadata": [],
    "tableOfContents": {
      "minHeadingLevel": 2,
      "maxHeadingLevel": 3
    }
  },
  "scripts": [
    "https://cdn.jsdelivr.net/npm/uikit@3.15.14/dist/js/uikit.min.js",
    "https://cdn.jsdelivr.net/npm/uikit@3.15.14/dist/js/uikit-icons.min.js"
  ],
  "stylesheets": [
    "https://cdn.jsdelivr.net/npm/uikit@3.15.14/dist/css/uikit.min.css"
  ],
  "baseUrlIssueBanner": true,
  "onDuplicateRoutes": "warn",
  "staticDirectories": [
    "static"
  ],
  "customFields": {},
  "plugins": [],
  "themes": [],
  "headTags": [],
  "clientModules": [],
  "titleDelimiter": "|",
  "noIndex": false,
  "markdown": {
    "mermaid": false
  }
};
