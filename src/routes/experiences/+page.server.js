import { getContentByDirectory } from 'statue-ssg/cms/content-processor';

// Make this page prerendered as a static page
export const prerender = true;

/** @type {import('./$types').PageServerLoad} */
export function load() {
  // Get content from experiences directory
  const experiences = getContentByDirectory('experiences');
  
  // Sort experiences by date (most recent first)
  const sortedExperiences = experiences.sort((a, b) => {
    const dateA = a.metadata?.date ? new Date(a.metadata.date).getTime() : 0;
    const dateB = b.metadata?.date ? new Date(b.metadata.date).getTime() : 0;
    return dateB - dateA;
  });

  return {
    experiences: sortedExperiences
  };
}
