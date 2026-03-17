import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, phone, subject, message } = body;

    // Validation basique
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs requis manquants" }, { status: 400 });
    }

    // === Option 1: Resend (recommandé) ===
    // Décommentez et configurez RESEND_API_KEY dans .env.local
    /*
    const { Resend } = await import("resend");
    const resend = new Resend(process.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: "Sarah Linda Site <noreply@votredomaine.com>",
      to: ["sarah@votredomaine.com"],
      replyTo: email,
      subject: `[Contact Site] ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #D4AF37; border-bottom: 2px solid #D4AF37; padding-bottom: 10px;">
            Nouveau message depuis le site
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px; font-weight: bold; color: #666;">Nom :</td><td style="padding: 8px;">${name}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #666;">Email :</td><td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold; color: #666;">Téléphone :</td><td style="padding: 8px;">${phone || "Non renseigné"}</td></tr>
            <tr style="background: #f9f9f9;"><td style="padding: 8px; font-weight: bold; color: #666;">Objet :</td><td style="padding: 8px;">${subject}</td></tr>
          </table>
          <div style="margin-top: 20px; padding: 15px; background: #f5f5f5; border-left: 4px solid #D4AF37; border-radius: 4px;">
            <strong>Message :</strong><br/>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="margin-top: 20px; color: #999; font-size: 12px;">
            Message reçu depuis sarahlinda.fr
          </p>
        </div>
      `,
    });
    */

    // === Option 2: Formspree (fallback sans configuration) ===
    // Remplacez VOTRE_FORM_ID par votre ID Formspree
    /*
    const formspreeRes = await fetch("https://formspree.io/f/VOTRE_FORM_ID", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ name, email, phone, subject, message }),
    });
    if (!formspreeRes.ok) throw new Error("Formspree error");
    */

    // Log temporaire (à remplacer par l'une des options ci-dessus)
    console.log("📧 Nouveau contact:", { name, email, phone, subject, message: message.substring(0, 50) + "..." });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
