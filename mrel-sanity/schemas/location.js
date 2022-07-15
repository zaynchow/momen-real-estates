export default {
  name: "location",
  title: "Location",
  type: "document",

  fields: [
    {
      name: "location_name",
      title: "Location Name",
      type: "string",
    },
    {
      name: "location_img",
      title: "Location Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
  ],
};
