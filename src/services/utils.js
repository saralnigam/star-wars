export function extractIdFromUrl(url) {
  const resourceUrl = new URL(url);

  const pathname = resourceUrl.pathname.split('/');
  return pathname[pathname.length - 2];
}

export function extractPageData(response, resourceFormatter = null) {
  const results = {};
  const pageResourceIds = response.map((resource) => {
    const resourceId = extractIdFromUrl(resource.url);
    results[resourceId] = typeof (resourceFormatter) === 'function' ? resourceFormatter(resource) : resource;
    return resourceId;
  });

  return {
    results,
    pageResourceIds,
  };
}
