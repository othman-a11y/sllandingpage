import { groq } from "next-sanity";
import { client } from "./client";

// Articles
export async function getArticles(limit = 10) {
  return client.fetch(
    groq`*[_type == "article"] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      category,
      publishedAt,
      excerpt,
      featured,
      mainImage { asset->, alt }
    }`,
    { limit }
  );
}

export async function getFeaturedArticles(limit = 3) {
  return client.fetch(
    groq`*[_type == "article" && featured == true] | order(publishedAt desc) [0...$limit] {
      _id,
      title,
      slug,
      category,
      publishedAt,
      excerpt,
      mainImage { asset->, alt }
    }`,
    { limit }
  );
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(
    groq`*[_type == "article" && slug.current == $slug][0] {
      _id,
      title,
      slug,
      category,
      publishedAt,
      excerpt,
      body,
      mainImage { asset->, alt }
    }`,
    { slug }
  );
}

// Episodes
export async function getLatestEpisodes(limit = 5) {
  return client.fetch(
    groq`*[_type == "episode"] | order(number desc) [0...$limit] {
      _id,
      number,
      title,
      description,
      publishedAt,
      duration,
      urlYoutube,
      urlSpotify,
      urlApple,
      featured,
      coverImage { asset-> }
    }`,
    { limit }
  );
}

// Spectacles
export async function getSpectacles() {
  return client.fetch(
    groq`*[_type == "spectacle"] | order(order asc) {
      _id,
      title,
      subtitle,
      description,
      year,
      status,
      ticketUrl,
      upcomingDates,
      coverImage { asset-> }
    }`
  );
}

// Partenaires
export async function getPartenaires() {
  return client.fetch(
    groq`*[_type == "partenaire"] | order(order asc) {
      _id,
      name,
      description,
      website,
      category,
      featured,
      logo { asset-> }
    }`
  );
}
