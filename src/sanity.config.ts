import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "sarah-linda",
  title: "Sarah Linda – Administration",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Sarah Linda CMS")
          .items([
            S.listItem()
              .title("📝 Articles / Blog")
              .child(S.documentTypeList("article")),
            S.listItem()
              .title("🎙️ Épisodes Podcast")
              .child(S.documentTypeList("episode")),
            S.listItem()
              .title("🎤 Spectacles Stand-Up")
              .child(S.documentTypeList("spectacle")),
            S.listItem()
              .title("🤝 Partenaires")
              .child(S.documentTypeList("partenaire")),
          ]),
    }),
    visionTool(),
  ],
  schema: {
    types: schemaTypes,
  },
});
