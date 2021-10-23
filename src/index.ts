import { fileURLToPath } from 'url';
import { dirname } from 'path';

/**
 * Extract __dirname and __filename from import.meta
 *
 * @param meta import.meta ex: getPathNames(import.meta)
 */
const getPathNames = (
  meta: ImportMeta,
  a: number
): { __filename: number; __dirname: string } => {
  const __filename = fileURLToPath(meta.url);
  const __dirname = dirname(__filename);

  return {
    
    __filename,
    __dirname,
  };
};

export { getPathNames };
