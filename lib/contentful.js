import { createClient } from 'contentful';

const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const PREVIEW_TOKEN = process.env.REACT_APP_PREVIEW_TOKEN;

export function getPostsList({ limit = 8, skip = 0, categories = [] }) {
  if (!SPACE_ID || !ACCESS_TOKEN) return null;

  const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
  });

  return client.getEntries({
    limit,
    skip,
    'fields.categories[in]': categories.join(),
    content_type: 'blogPost',
    order: '-fields.publishDate',
    select: 'fields.categories,fields.heroImage,fields.slug,fields.title,fields.publishDate,fields.tags,fields.description',
  });
}

export function getRelatedPosts({ limit, tags, excludeSlug }) {
  if (!SPACE_ID || !ACCESS_TOKEN) return null;

  const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
  });

  return client.getEntries({
    limit,
    content_type: 'blogPost',
    select:
      'fields.categories,fields.heroImage,fields.slug,fields.title,fields.publishDate,fields.tags',
    'fields.tags[in]': tags.join(),
    'fields.slug[ne]': excludeSlug,
  });
}

export function getAllCategories() {
  const client = createClient({
    space: SPACE_ID,
    accessToken: ACCESS_TOKEN,
  });

  return client.getEntries({
    content_type: 'blogPost',
    select: 'fields.categories',
  });
}

export function getPostBySlug({ slug, preview }) {
  if (!preview && (!SPACE_ID || !ACCESS_TOKEN)) return null;
  if (preview && !PREVIEW_TOKEN) return null;

  const client = createClient({
    space: SPACE_ID,
    accessToken: preview ? PREVIEW_TOKEN : ACCESS_TOKEN,
    host: preview ? 'preview.contentful.com' : 'cdn.contentful.com',
  });

  return client.getEntries({ content_type: 'blogPost', 'fields.slug': slug });
}
