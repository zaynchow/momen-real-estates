// sanity.config.js
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./schemas/schema";
import { visionTool } from "@sanity/vision";
import { googleMapsInput } from "@sanity/google-maps-input";
import { iconPicker } from "sanity-plugin-icon-picker";

export default defineConfig({
  title: "mrel sanity",
  projectId: "s1ol1xzt",
  dataset: "production",
  plugins: [
    deskTool(),
    visionTool(),
    iconPicker(),
    googleMapsInput({
      apiKey: "AIzaSyAGussVUAxuUeKa3y1-SmS1hddouoRy4PA",
      defaultZoom: 11,
      defaultLocale: null,
      defaultLocation: {
        lat: 23.784191115813744,
        lng: 90.39324135976155,
      },
    }),
  ],
  tools: (prev) => {
    // 👇 Uses environment variables set by Vite in development mode
    if (import.meta.env.DEV) {
      return prev;
    }
    return prev.filter((tool) => tool.name !== "vision");
  },
  schema: {
    types: schemas,
  },
});
