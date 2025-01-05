export default {
  name: "timeline",
  title: "Timeline",
  type: "document",

  fields: [
    {
      name: "year",
      title: "Year",
      type: "number",
    },
    {
      name: "projects",
      title: "Projects",
      type: "array",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "project_name",
              type: "string",
              title: "Project Name",
            },
            {
              name: "location",
              type: "string",
              title: "Location",
            },
          ],
        },
      ],
    },
    {
      name: "img",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
