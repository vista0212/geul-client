export class FormatDate {
  static format(dateString: string, formatString: string): string {
    const date = new Date(dateString);
    formatString = formatString.replace('YYYY', date.getFullYear().toString());
    formatString = formatString.replace('MM', (date.getMonth() + 1).toString());
    formatString = formatString.replace('DD', date.getDate().toString());
    return formatString;
  }
}
