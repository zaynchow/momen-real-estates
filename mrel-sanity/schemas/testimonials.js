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
      name: "person_img",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
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
