import { defineField, defineType } from "sanity";

export const article = defineType({
  name: "article",
  title: "Articles / Blog",
  type: "document",
  icon: () => "📝",
  fields: [
    defineField({
      name: "title",
      title: "Titre de l'article",
      type: "string",
      validation: (Rule) => Rule.required().min(5).max(100),
    }),
    defineField({
      name: "slug",
      title: "Slug (URL)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Humour & Stand-up", value: "standup" },
          { title: "Podcast", value: "podcast" },
          { title: "Développement personnel", value: "developpement" },
          { title: "Entrepreneuriat", value: "entrepreneuriat" },
          { title: "Actualités", value: "actualites" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: "mainImage",
      title: "Image principale",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texte alternatif",
        },
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Résumé / Accroche",
      type: "text",
      rows: 3,
      description: "Court résumé affiché dans les listes d'articles (max 200 caractères)",
      validation: (Rule) => Rule.max(200),
    }),
    defineField({
      name: "body",
      title: "Contenu de l'article",
      type: "array",
      of: [
        {
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "Titre H2", value: "h2" },
            { title: "Titre H3", value: "h3" },
            { title: "Citation", value: "blockquote" },
          ],
          marks: {
            decorators: [
              { title: "Gras", value: "strong" },
              { title: "Italique", value: "em" },
            ],
            annotations: [
              {
                name: "link",
                type: "object",
                title: "Lien",
                fields: [
                  {
                    name: "href",
                    type: "url",
                    title: "URL",
                  },
                ],
              },
            ],
          },
        },
        {
          type: "image",
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: "featured",
      title: "Article mis en avant",
      type: "boolean",
      initialValue: false,
      description: "Afficher cet article en priorité sur la page principale",
    }),
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
      media: "mainImage",
    },
    prepare({ title, subtitle, media }) {
      const catLabels: Record<string, string> = {
        standup: "Stand-up",
        podcast: "Podcast",
        developpement: "Développement",
        entrepreneuriat: "Entrepreneuriat",
        actualites: "Actualités",
      };
      return {
        title,
        subtitle: catLabels[subtitle] || subtitle,
        media,
      };
    },
  },
  orderings: [
    {
      title: "Date (récent en premier)",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
  ],
});
