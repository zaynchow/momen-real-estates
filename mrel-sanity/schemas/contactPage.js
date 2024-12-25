export default {
  name: "contact_page",
  title: "Contact Page",
  type: "document",

  fields: [
    {
      name: "hero_description",
      title: "Hero Description",
      type: "array",
      of: [{ type: "block" }, { type: "break" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "hero_image",
      title: "Hero Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
