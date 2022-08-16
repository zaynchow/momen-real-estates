export default {
  name: "content",
  title: "Content",
  type: "document",
  groups: [
    {
      name: "places",
      title: "Places",
    },
  ],
  fields: [
    {
      name: "page",
      title: "Page",
      type: "string",
    },

    {
      name: "slider_images",
      title: "Slider Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: "caption",
              type: "string",
              title: "Caption",
              options: {
                isHighlighted: true,
              },
            },
            {
              name: "subtitle",
              type: "string",
              title: "Subtitle",
              options: {
                isHighlighted: true,
              },
            },
          ],
        },
      ],
      options: { hotspot: true },
    },
    {
      name: "homepage_testimonials",
      title: "Testimonials",
      type: "array",
      validation: (Rule) => Rule.length(4),
      of: [
        {
          type: "reference",
          weak: true,
          to: [{ type: "testimonials" }],
        },
      ],
    },
    {
      name: "about_homepage",
      title: "Who We Are Text",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "play_link",
      title: "Tutorial Video Link",
      type: "url",
    },
    {
      name: "places",
      title: "Places",
      type: "array",
      validation: (Rule) => Rule.length(4),
      of: [
        {
          name: "location",
          title: "location",
          type: "reference",
          weak: true,
          to: [{ type: "location" }],
        },
      ],
    },
    {
      name: "projects",
      title: "Highlighted Projects",
      type: "array",
      validation: (Rule) => Rule.length(4),
      of: [
        {
          type: "reference",
          weak: true,
          to: [{ type: "projects" }],
        },
      ],
    },
    {
      name: "stats",
      title: "Statistics",
      type: "array",
      validation: (Rule) => Rule.length(4),
      of: [
        {
          name: "single_stat",
          title: "Single Statistic",
          type: "reference",
          weak: true,
          to: [{ type: "statistics" }],
        },
      ],
    },
  ],
};
