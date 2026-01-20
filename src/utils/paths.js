// Utility to handle asset paths with basePath
const basePath = '/victoria-osteopathy';

export const getAssetPath = (path) => {
  if (path.startsWith('/')) {
    return `${basePath}${path}`;
  }
  return `${basePath}/${path}`;
};
