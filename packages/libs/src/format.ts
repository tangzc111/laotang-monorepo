// 货币格式化选项
export type CurrencyFormatOptions = {
  locale?: string;
  currency?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
};

// 将数字按货币格式输出，例如 ￥1,234.00
export const formatCurrency = (
  value: number | string,
  {
    locale = "en-US",
    currency = "USD",
    minimumFractionDigits,
    maximumFractionDigits,
  }: CurrencyFormatOptions = {}
): string => {
  const amount = typeof value === "string" ? Number(value) : value;
  const options: Intl.NumberFormatOptions = {
    style: "currency",
    currency,
  };

  if (minimumFractionDigits !== undefined) {
    options.minimumFractionDigits = minimumFractionDigits;
  }
  if (maximumFractionDigits !== undefined) {
    options.maximumFractionDigits = maximumFractionDigits;
  }

  return new Intl.NumberFormat(locale, options).format(amount);
};

// 数字格式化选项
export type NumberFormatOptions = {
  locale?: string;
  minimumFractionDigits?: number;
  maximumFractionDigits?: number;
  useGrouping?: boolean;
};

// 将数字按千分位分隔输出
export const formatNumber = (
  value: number | string,
  {
    locale = "en-US",
    minimumFractionDigits,
    maximumFractionDigits,
    useGrouping = true,
  }: NumberFormatOptions = {}
): string => {
  const amount = typeof value === "string" ? Number(value) : value;
  const options: Intl.NumberFormatOptions = {
    useGrouping,
  };

  if (minimumFractionDigits !== undefined) {
    options.minimumFractionDigits = minimumFractionDigits;
  }
  if (maximumFractionDigits !== undefined) {
    options.maximumFractionDigits = maximumFractionDigits;
  }

  return new Intl.NumberFormat(locale, options).format(amount);
};

// 日期格式化选项
export type DateFormatOptions = {
  locale?: string;
  dateStyle?: "full" | "long" | "medium" | "short";
  timeStyle?: "full" | "long" | "medium" | "short";
};

// 将日期对象或时间戳格式化为可读字符串
export const formatDate = (
  value: Date | number | string,
  { locale = "en-US", dateStyle = "medium", timeStyle }: DateFormatOptions = {}
): string => {
  const date = value instanceof Date ? value : new Date(value);
  const options: Intl.DateTimeFormatOptions = { dateStyle };

  if (timeStyle) {
    options.timeStyle = timeStyle;
  }

  return new Intl.DateTimeFormat(locale, options).format(date);
};

// 将小数按百分比输出（默认保留两位小数）
export const formatPercent = (
  value: number,
  { locale = "en-US", maximumFractionDigits = 2 }: NumberFormatOptions = {}
): string => {
  return new Intl.NumberFormat(locale, {
    style: "percent",
    maximumFractionDigits,
  }).format(value);
};
