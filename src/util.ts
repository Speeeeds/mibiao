export const domainDescriptionKey = (d: string) => {
    return 'description.' + d.toLowerCase().replaceAll('.', '_');
}