export default {
  name: "testimonials",
  title: "Testimonials",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Full Name",
      type: "string",
    },
    {
      name: "affiliations",
      title: "Affiliations",
      type: "string",
    },
    {
      name: "desc",
      title: "Description",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
