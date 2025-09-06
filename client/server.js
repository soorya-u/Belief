import { serve } from "bun";
import { join } from "path";

const publicDir = "./public";

serve({
  port: 5173,
  fetch: async (req) => {
    const url = new URL(req.url);
    let path = url.pathname === "/" ? "/index.html" : url.pathname;

    const file = Bun.file(join(publicDir, path));
    if (await file.exists())
      return new Response(file);
    return new Response(Bun.file(join(publicDir, "index.html")));
  },
});

console.log("🚀 React app running at http://localhost:5173");
