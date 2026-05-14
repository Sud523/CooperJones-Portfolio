import { asset } from "./paths";

export function resolveHref(href: string, external?: boolean): string {
  if (external || /^https?:\/\//i.test(href) || href.startsWith("mailto:")) {
    return href;
  }
  return asset(href);
}
