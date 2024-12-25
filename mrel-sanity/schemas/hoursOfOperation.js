export default {
  name: "hours_of_operation",
  title: "Hours of Operation",
  type: "document",
  fields: [
    {
      name: "office_address",
      title: "Office Address",
      type: "string",
    },
    {
      name: "sunday_to_thursday_hours",
      title: "Sunday to Thursday Hours",
      type: "string",
    },
    {
      name: "friday_hours",
      title: "Friday Hours",
      type: "string",
    },
    {
      name: "saturday_hours",
      title: "Saturday Hours",
      type: "string",
    },
  ],
};
