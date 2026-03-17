import { defineField, defineType } from "sanity";

export const episode = defineType({
  name: "episode",
  title: "Épisodes Podcast",
  type: "document",
  icon: () => "🎙️",
  fields: [
    defineField({
      name: "number",
      title: "Numéro d'épisode",
      type: "number",
      validation: (Rule) => Rule.required().positive().integer(),
    }),
    defineField({
      name: "title",
      title: "Titre de l'épisode",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "coverImage",
      title: "Image de couverture",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "duration",
      title: "Durée (ex: 45 min)",
      type: "string",
    }),
    defineField({
      name: "urlYoutube",
      title: "Lien YouTube",
      type: "url",
    }),
    defineField({
      name: "urlSpotify",
      title: "Lien Spotify",
      type: "url",
    }),
    defineField({
      name: "urlApple",
      title: "Lien Apple Podcasts",
      type: "url",
    }),
    defineField({
      name: "featured",
      title: "Épisode mis en avant",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      number: "number",
      media: "coverImage",
    },
    prepare({ title, number, media }) {
      return {
        title: `#${number} – ${title}`,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Numéro (récent en premier)",
      name: "numberDesc",
      by: [{ field: "number", direction: "desc" }],
    },
  ],
});
