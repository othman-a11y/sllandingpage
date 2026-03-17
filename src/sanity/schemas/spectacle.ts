import { defineField, defineType } from "sanity";

export const spectacle = defineType({
  name: "spectacle",
  title: "Spectacles Stand-Up",
  type: "document",
  icon: () => "🎤",
  fields: [
    defineField({
      name: "title",
      title: "Nom du spectacle",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "subtitle",
      title: "Sous-titre",
      type: "string",
    }),
    defineField({
      name: "order",
      title: "Ordre d'affichage",
      type: "number",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
    }),
    defineField({
      name: "coverImage",
      title: "Affiche / Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "year",
      title: "Année",
      type: "string",
    }),
    defineField({
      name: "status",
      title: "Statut",
      type: "string",
      options: {
        list: [
          { title: "En tournée", value: "touring" },
          { title: "À venir", value: "upcoming" },
          { title: "Passé", value: "past" },
        ],
        layout: "radio",
      },
      initialValue: "upcoming",
    }),
    defineField({
      name: "ticketUrl",
      title: "Lien billetterie",
      type: "url",
    }),
    defineField({
      name: "upcomingDates",
      title: "Prochaines dates",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "date", type: "datetime", title: "Date" },
            { name: "venue", type: "string", title: "Lieu" },
            { name: "city", type: "string", title: "Ville" },
            { name: "ticketUrl", type: "url", title: "Lien billetterie" },
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "status",
      media: "coverImage",
    },
    prepare({ title, subtitle, media }) {
      const statusLabel: Record<string, string> = {
        touring: "En tournée",
        upcoming: "À venir",
        past: "Passé",
      };
      return { title, subtitle: statusLabel[subtitle] || subtitle, media };
    },
  },
});
