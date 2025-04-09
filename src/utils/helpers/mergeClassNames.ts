export function mergeClassNames(
  ...classes: (string | undefined | false | null)[]
): string {
  return classes.filter(Boolean).join(' ')
}
