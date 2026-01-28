import { getContentDirectories, getContentByDirectory, getAllContent } from 'statue-ssg/cms/content-processor';
import { siteConfig } from '../../site.config.js';

/** @type {import('./$types').LayoutServerLoad} */
export function load() {
  // Get content directories
  const directories = getContentDirectories();

  // Enhance directories with subpages data for consistent footer
  const enhancedDirectories = directories.map(directory => {
    // Get content from this directory
    const directoryContent = getContentByDirectory(directory.name);

    // Extract pages as subpages
    const subpages = directoryContent.map((content) => ({
      title: content.metadata.title,
      url: content.url
    }));

    // Return enhanced directory object
    return {
      ...directory,
      subpages
    };
  });

  // Get all content for search (only in dev mode or if needed)
  let searchableContent = [];
  try {
    const allContent = getAllContent();
    searchableContent = allContent.map((content) => ({
      title: content.metadata.title || '',
      url: content.url,
      description: content.metadata.description || '',
      directory: content.directory || ''
    }));
  } catch (e) {
    // If getAllContent fails, just use empty array
    console.warn('Could not load content for search:', e);
  }

  return {
    globalDirectories: enhancedDirectories,
    searchConfig: siteConfig.search || null,
    navbarConfig: siteConfig.navbar || null,
    searchableContent
  };
} 