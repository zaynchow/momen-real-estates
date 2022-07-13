export default {
  name: "homepage",
  title: "homepage",
  type: "document",
  fields: [
    {
      name: "slider_images",
      title: "slider-images",
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
      name: "hero_text",
      title: "hero-text",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 90 },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
  ],
};
