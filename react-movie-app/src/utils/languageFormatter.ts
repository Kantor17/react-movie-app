export default function formatLanguage(code: string) {
  const formatter = new Intl.DisplayNames(['en'], {
    type: 'language',
    fallback: 'code',
  });
  return formatter.of(code);
}
