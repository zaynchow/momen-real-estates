export default {
  name: "projects",
  title: "Projects",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Project Name",
      type: "string",
    },
    {
      title: "Project Status",
      name: "status",
      type: "string",
      options: {
        list: [
          { title: "Ongoing", value: "Ongoing" },
          { title: "Completed", value: "Completed" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      title: "Project Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Apartment", value: "apartment" },
          { title: "House", value: "house" },
          { title: "Land", value: "land" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "apartment",
    },
    {
      name: "images",
      title: "Project Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 90 },
    },
    {
      name: "project_area",
      title: "Area Name",
      type: "string",
    },
    {
      name: "city",
      title: "City",
      type: "string",
    },
    {
      name: "bedrooms",
      title: "Number of Bedrooms",
      type: "number",
    },
    {
      name: "bathrooms",
      title: "Number of Bathrooms",
      type: "number",
    },
    {
      name: "area",
      title: "Size(in sqft)",
      type: "number",
    },
    {
      name: "map_pos",
      title: "Map Position",
      type: "geopoint",
    },
  ],
};
