/**
 * Process markdown footnote syntax in HTML content
 * Converts [^1] to clickable superscript links and generates footnote section
 * @param {string} html - The HTML content to process
 * @returns {string} - Processed HTML with footnotes
 */
export function processFootnotes(html) {
  if (!html) return html;
  
  /** @type {{ id: string, index: number }[]} */
  const footnoteRefs = [];
  /** @type {Map<string, string>} */
  const footnoteDefsMap = new Map();
  
  /** @type {RegExpExecArray | null} */
  let match;
  
  // The markdown processor converts [^id]: content into a link where:
  // - The link text is "^id"
  // - The href contains URL-encoded definition content
  // We extract the plain text content from the href
  
  const linkRegex = /<a\s+href="([^"]+)"[^>]*>\^([^<]+)<\/a>/gi;
  
  while ((match = linkRegex.exec(html)) !== null) {
    const href = match[1];
    const id = match[2];
    
    try {
      let decoded = decodeURIComponent(href);
      // Remove the path prefix (e.g., "/blogs/")
      const pathMatch = decoded.match(/^\/[^/]+\/(.+)$/);
      if (pathMatch) {
        decoded = pathMatch[1];
      }
      
      // Just use the decoded content as plain text
      // If it's a URL, make it clickable
      let content = decoded.trim();
      if (content.match(/^https?:\/\//i)) {
        content = `<a href="${content}" target="_blank" rel="noopener">${content}</a>`;
      }
      
      footnoteDefsMap.set(id, content);
    } catch {
      // If decoding fails, skip
    }
  }
  
  // Also try to match raw [^id]: definitions that weren't converted
  const rawDefRegex = /\[\^([^\]]+)\]:\s*(.+?)(?=\n\[\^|\n\n|$)/gis;
  while ((match = rawDefRegex.exec(html)) !== null) {
    if (!footnoteDefsMap.has(match[1])) {
      let content = match[2].trim();
      // If it's a URL, make it clickable
      if (content.match(/^https?:\/\//i)) {
        content = `<a href="${content}" target="_blank" rel="noopener">${content}</a>`;
      }
      footnoteDefsMap.set(match[1], content);
    }
  }
  
  let processedHtml = html;
  
  // Replace footnote reference links with superscript numbers
  let refIndex = 0;
  
  // Split by code tags to preserve code blocks
  const parts = processedHtml.split(/(<code>.*?<\/code>)/gi);
  
  processedHtml = parts.map(part => {
    if (part.match(/^<code>.*<\/code>$/i)) {
      return part;
    }
    
    // Replace <a> tags with ^id text
    let result = part.replace(/<a\s+href="[^"]*"[^>]*>\^([^<]+)<\/a>/gi, (_match, id) => {
      const existing = footnoteRefs.find(r => r.id === id);
      if (existing) {
        return `<sup class="footnote-ref"><a href="#fn-${id}" id="fnref-${id}">[${existing.index}]</a></sup>`;
      }
      refIndex++;
      footnoteRefs.push({ id: String(id), index: refIndex });
      return `<sup class="footnote-ref"><a href="#fn-${id}" id="fnref-${id}">[${refIndex}]</a></sup>`;
    });
    
    // Also replace raw [^id] references
    result = result.replace(/\[\^([^\]]+)\](?!\s*:)/g, (_match, id) => {
      const existing = footnoteRefs.find(r => r.id === id);
      if (existing) {
        return `<sup class="footnote-ref"><a href="#fn-${id}" id="fnref-${id}">[${existing.index}]</a></sup>`;
      }
      refIndex++;
      footnoteRefs.push({ id: String(id), index: refIndex });
      return `<sup class="footnote-ref"><a href="#fn-${id}" id="fnref-${id}">[${refIndex}]</a></sup>`;
    });
    
    return result;
  }).join('');
  
  // Remove any remaining raw definitions
  processedHtml = processedHtml.replace(/\[\^([^\]]+)\]:\s*.+?(?=\n|$)/gi, '');
  processedHtml = processedHtml.replace(/<p>\s*<\/p>/g, '');
  
  // Generate footnotes section
  if (footnoteRefs.length > 0) {
    const footnotesHtml = `
<section class="footnotes">
  <hr class="footnotes-separator" />
  <ol class="footnotes-list">
    ${footnoteRefs.map(({ id, index }) => {
      const content = footnoteDefsMap.get(id) || 'Footnote not found';
      return `<li id="fn-${id}" class="footnote-item">
        <span class="footnote-content">${content}</span>
        <a href="#fnref-${id}" class="footnote-backref">↩</a>
      </li>`;
    }).join('\n    ')}
  </ol>
</section>`;
    
    processedHtml += footnotesHtml;
  }
  
  return processedHtml;
}
