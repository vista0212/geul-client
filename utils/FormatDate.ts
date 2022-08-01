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
    formatString = formatString.replace(
      'MM',
      FormatDate.toString(date.getMonth() + 1),
    );
    formatString = formatString.replace(
      'dd',
      FormatDate.toString(date.getDate()),
    );
    formatString = formatString.replace(
      'hh',
      FormatDate.toString(date.getHours()),
    );
    formatString = formatString.replace(
      'mm',
      FormatDate.toString(date.getMinutes()),
    );
    formatString = formatString.replace(
      'ss',
      FormatDate.toString(date.getSeconds()),
    );
    return formatString;
  }

  private static toString(date: number): string {
    return date < 10 ? `0${date}` : date.toString();
  }
}
