export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method Not Allowed" });
  }
  const accessKey = process.env.WEB3FORMS_KEY;
  if (!accessKey) {
    return res.status(503).json({
      ok: false,
      fallback: true,
      message: "Direct email relay active — opening email draft."
    });
  }
  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : (req.body || {});
    const payload = {
      access_key: accessKey,
      subject: body.subject || "New PLaCED Build Slot / Quote Request",
      from_name: "PLaCED Storefront (V10)",
      name: String(body.name || "").slice(0, 120),
      email: String(body.email || "").slice(0, 160),
      location: String(body.location || "").slice(0, 160),
      configuration: String(body.configuration || "").slice(0, 1500),
      message: String(body.message || "").slice(0, 3000)
    };
    const resp = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload)
    });
    const data = await resp.json();
    if (resp.ok && data.success) {
      return res.status(200).json({ ok: true });
    }
    return res.status(502).json({ ok: false, fallback: true, error: "Upstream relay rejected request" });
  } catch (err) {
    return res.status(500).json({ ok: false, fallback: true, error: "Relay error" });
  }
}