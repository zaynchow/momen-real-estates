export default {
  name: "projects",
  title: "Projects",
  type: "document",

  fields: [
    {
      name: "name",
      title: "Project Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name", maxLength: 90 },
      validation: (rule) => rule.required(),
    },
    {
      name: "desc",
      title: "Description",
      type: "array",
      of: [{ type: "block" }, { type: "break" }],
      validation: (rule) => rule.required(),
    },
    {
      name: "project_area",
      title: "Area Name",
      type: "string",
      validation: (rule) => rule.required(),
    },
    {
      name: "city",
      title: "City",
      type: "string",
      validation: (rule) => rule.required(),
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

    {
      title: "Project Status",
      name: "status",
      type: "string",
      validation: (rule) => rule.required(),
      options: {
        list: [
          { title: "Ongoing", value: "Ongoing" },
          { title: "Completed", value: "Completed" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
    },
    {
      title: "Project Type",
      name: "type",
      type: "string",
      options: {
        list: [
          { title: "Apartment", value: "apartment" },
          { title: "House", value: "house" },
          { title: "Land", value: "land" },
        ],
        layout: "radio",
        direction: "horizontal",
      },
      initialValue: "apartment",
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
      name: "overview",
      title: "Project Overview",
      type: "array",
      of: [
        {
          title: "Single overview",
          name: "single_overview",
          type: "object",
          fields: [
            {
              title: "Icon",
              name: "icon",
              type: "iconPicker",
              options: {
                storeSvg: true,
              },
            },
            {
              title: "Overview Item Name",
              name: "overview_item_name",
              type: "string",
            },
            {
              title: "Overview Item Value",
              name: "overview_item_value",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "features",
      title: "Project Features",
      type: "array",
      of: [
        {
          title: "Single Feature",
          name: "single_feature",
          type: "object",
          fields: [
            {
              title: "Icon",
              name: "icon",
              type: "iconPicker",
              options: {
                storeSvg: true,
              },
            },
            {
              title: "Feature Name",
              name: "feature_name",
              type: "string",
            },
            {
              title: "Feature Value",
              name: "feature_value",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "floor_plans",
      title: "Floor Plans",
      type: "array",
      of: [
        {
          title: "Single Floor Plan",
          name: "single_floor_plan",
          type: "object",
          fields: [
            {
              title: "Floor/Unit Name",
              name: "unit_name",
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
            {
              title: "Floor/Unit Description",
              name: "desc",
              type: "string",
            },
            {
              name: "floor_image",
              title: "Floor/Unit Plan Image",
              type: "image",
              options: {
                hotspot: true,
              },
            },
          ],
        },
      ],
    },
    {
      name: "video",
      type: "url",
      title: "Project Video Link",
    },
    {
      name: "map_pos",
      title: "Map Position",
      type: "geopoint",
    },
  ],
};
