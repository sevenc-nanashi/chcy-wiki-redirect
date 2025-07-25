import { Hono } from "hono";

const app = new Hono();

const redirects = {
  "/": "/ja/",
  "/ja/publishing-chart": "/ja/publishing",
  "/ja/guideline": "/ja/guideline",
  "/ja/sus-extended-features": "/ja/sus-extended-features",
  "/ja/donation": "/ja/donation",
  "/en/welcome": "/en/",
  "/en/publishing-a-chart": "/en/publishing",
  "/en/guideline": "/en/guideline",
  "/en/extended-features": "/en/sus-extended-features",
  "/en/donation": "/en/donation",
};

app.get("*", (c) => {
  const path = c.req.path;
  if (redirects[path as keyof typeof redirects]) {
    return c.redirect(
      `https://cc.sevenc7c.com/wiki/${redirects[path as keyof typeof redirects]}`,
      301,
    );
  }
  if (path.startsWith("/ja/")) {
    return c.redirect("https://cc.sevenc7c.com/wiki/ja/404", 301);
  }
  return c.redirect("https://cc.sevenc7c.com/wiki/en/404", 301);
});

export default app;
