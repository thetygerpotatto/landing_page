import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'> & { slug: string };

/** Projects for one language, sorted by `order`, drafts hidden. */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const all = await getCollection('projects', (p) => p.id.startsWith(`${lang}/`) && !p.data.draft);
  return all
    .map((p) => ({ ...p, slug: p.id.slice(lang.length + 1) }))
    .sort((a, b) => a.data.order - b.data.order);
}
