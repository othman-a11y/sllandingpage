import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

/**
 * Webhook appelé par Sanity à chaque publication de contenu.
 * Configurer dans Sanity : Settings > API > Webhooks
 * URL : https://votresite.com/api/revalidate?secret=VOTRE_SECRET
 */
export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const { _type } = body;

    // Revalidate les pages concernées selon le type de document modifié
    switch (_type) {
      case "article":
        revalidatePath("/");
        revalidatePath("/blog");
        revalidatePath("/blog/[slug]", "page");
        break;
      case "episode":
        revalidatePath("/podcast");
        break;
      case "spectacle":
        revalidatePath("/stand-up");
        break;
      case "partenaire":
        revalidatePath("/podcast");
        break;
      default:
        revalidatePath("/");
    }

    return NextResponse.json({ revalidated: true, type: _type });
  } catch {
    return NextResponse.json({ message: "Error revalidating" }, { status: 500 });
  }
}
