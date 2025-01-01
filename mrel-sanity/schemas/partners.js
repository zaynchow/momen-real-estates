export default {
  name: "partners",
  title: "Partners",
  type: "document",

  fields: [
    {
      name: "partner_logos",
      title: "Partner Logos",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "image",
              type: "image",
              title: "Logo Image",
              options: { hotspot: true },
            },
            {
              name: "name",
              type: "string",
              title: "Partner Name",
            },
          ],
        },
      ],
    },
  ],
};
