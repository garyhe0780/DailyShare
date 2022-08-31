import { MiddlewareHandlerContext } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { User } from "../types/user.ts";
import { whitelist } from "../consts/whitelist.ts";

interface State {
  user: User;
}

export function handler(
  req: Request,
  ctx: MiddlewareHandlerContext<State>
) {
  if (whitelist.some((e) => req.url.includes(e))) {
    return ctx.next();
  }

  const maybeUser = getCookies(req.headers)["user"];
  if (maybeUser) {
    ctx.state.user = JSON.parse(atob(maybeUser));
    return ctx.next();
  }

  const url = new URL(req.url);
  url.pathname = "/login";

  return Response.redirect(url, 303);
}
