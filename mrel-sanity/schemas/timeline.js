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
      of: [
        {
          name: "project_name",
          title: "Project Name",
          type: "string",
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
