export default {
  name: "staff",
  title: "Staff",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "designation",
      title: "Designation",
      type: "string",
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
