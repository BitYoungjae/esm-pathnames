interface importMeta {
    url: string;
}
/**
 * Extract __dirname and __filename from import.meta
 *
 * @param meta import.meta ex: getPathNames(import.meta)
 */
declare const getPathNames: (meta: importMeta) => {
    __filename: string;
    __dirname: string;
};
export { getPathNames };
//# sourceMappingURL=index.d.ts.map