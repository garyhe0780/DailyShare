import { HandlerContext } from "$fresh/server.ts";
import { supabase } from "../../db/supabase.ts";
import { Article } from "../../types/article.ts";

export const handler = {
  async POST(req: Request) {
    const body = await req.json();
    if (!body) return new Response(JSON.stringify({ status: false }));

    const { title, content, plain_title, plain_content, id } = body;
    if (id) {
      await supabase
        .from<Article>("articles")
        .update({
          title,
          content,
          plain_content,
          plain_title,
        })
        .eq("id", id);
    } else {
      await supabase.from<Article>("articles").insert({
        title,
        content,
        plain_content,
        plain_title,
      });
    }

    return new Response("OK");
  },
  async PUT(req: Request) {
    const body = await req.json();
    if (!body) return new Response(JSON.stringify({ status: false }));

    const { title, content, plain_title, plain_content, id } = body;
    if (id) {
      await supabase
        .from<Article>("articles")
        .update({
          title,
          content,
          plain_content,
          plain_title,
        })
        .eq("id", id);
    } else {
      await supabase.from<Article>("articles").insert({
        title,
        content,
        plain_content,
        plain_title,
      });
    }

    return new Response("OK");
  },
};
