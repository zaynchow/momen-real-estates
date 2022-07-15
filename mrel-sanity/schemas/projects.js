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
  ],
};
