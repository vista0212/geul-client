import { isArray } from '@utils/isArray';

export function toQueryString(queryObject?: object): string {
  if (!queryObject) {
    return '';
  }

  return (
    '?' +
    Object.entries(queryObject)
      .map(([key, value]) => {
        if (isArray(value)) {
          value = value.join(',');
        }

        if (!value || !value.length) {
          return;
        }

        return encodeURIComponent(key) + '=' + encodeURIComponent(value);
      })
      .filter((v) => v)
      .join('&')
  );
}
