export default {
  name: "about_page",
  title: "About Page",
  type: "document",

  fields: [
    {
      name: "our_story",
      title: "Our Story",

      type: "array",
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      name: "why_us",
      title: "Why Us",
      type: "array",
      of: [
        {
          name: "single_why_us",
          type: "string",
        },
      ],
    },
    {
      name: "highlights",
      title: "About Page Highlights",
      type: "array",
      validation: (Rule) => Rule.length(3),
      of: [
        {
          type: "reference",
          weak: true,
          to: [{ type: "statistics" }],
        },
      ],
    },
  ],
};
