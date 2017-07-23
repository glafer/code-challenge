export function slugify(text) {
  return text.toString().toLowerCase()
    .replace(/([å,ä])/g, 'a')       // Replace å and ä with aa
    .replace(/(ö)/g, 'o')           // Replace ö with o 
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w-]+/g, '')       // Remove all non-word chars
    .replace(/--+/g, '-')         // Replace multiple - with single -
    .replace(/^-+/, '')             // Trim - from start of text
    .replace(/-+$/, '');            // Trim - from end of text
}