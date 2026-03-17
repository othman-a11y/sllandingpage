/**
 * Route vers le studio Sanity intégré.
 * Accessible à : /studio
 * Protéger avec une authentification en production.
 */
"use client";

import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

export default function StudioPage() {
  return <NextStudio config={config} />;
}
