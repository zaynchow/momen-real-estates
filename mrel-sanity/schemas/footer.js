export default {
  name: "footer",
  title: "Footer",
  type: "document",

  fields: [
    {
      name: "footer_text",
      title: "Footer Text",
      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
  ],
};
