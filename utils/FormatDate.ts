export class FormatDate {
  private static readonly MINUTE = 60000;
  private static readonly HOUR = FormatDate.MINUTE * 60;
  private static readonly DAY = FormatDate.HOUR * 24;

  static format(dateString: string, formatString: string): string {
    const now = new Date().getTime();
    const date = new Date(dateString);
    const distance = now - date.getTime();

    if (distance < FormatDate.MINUTE) {
      return '방금 전';
    }

    if (distance < FormatDate.HOUR) {
      return `${Math.floor(distance / FormatDate.MINUTE)}분 전`;
    }

    if (distance < FormatDate.DAY) {
      return `${Math.floor(distance / FormatDate.HOUR)}시간 전`;
    }

    formatString = formatString.replace('yyyy', date.getFullYear().toString());
    formatString = formatString.replace('MM', (date.getMonth() + 1).toString());
    formatString = formatString.replace('dd', date.getDate().toString());
    formatString = formatString.replace('hh', date.getHours().toString());
    formatString = formatString.replace('mm', date.getMinutes().toString());
    formatString = formatString.replace('ss', date.getSeconds().toString());
    return formatString;
  }
}
