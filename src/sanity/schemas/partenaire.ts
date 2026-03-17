import { defineField, defineType } from "sanity";

export const partenaire = defineType({
  name: "partenaire",
  title: "Partenaires",
  type: "document",
  icon: () => "🤝",
  fields: [
    defineField({
      name: "name",
      title: "Nom du partenaire",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 2,
    }),
    defineField({
      name: "website",
      title: "Site web",
      type: "url",
    }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Média / Radio", value: "media" },
          { title: "Institutionnel", value: "institutionnel" },
          { title: "Production / Scène", value: "production" },
          { title: "Entreprise", value: "entreprise" },
          { title: "Autre", value: "autre" },
        ],
      },
    }),
    defineField({
      name: "featured",
      title: "Partenaire mis en avant",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
    }),
  ],
  preview: {
    select: { title: "name", media: "logo" },
  },
});
