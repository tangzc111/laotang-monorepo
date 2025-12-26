// 电子邮箱正则（忽略大小写）
const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const urlSchemes = ["http:", "https:"];

// 判断字符串是否为邮箱
export const isEmail = (value: string): boolean => {
  return emailPattern.test(value.trim());
};

// 判断字符串是否为 http/https URL
export const isURL = (value: string): boolean => {
  try {
    const url = new URL(value);
    return urlSchemes.includes(url.protocol);
  } catch {
    return false;
  }
};

// 粗略判断电话号码（仅校验长度与数字/加号）
export const isPhone = (value: string): boolean => {
  const digits = value.replace(/[^\d+]/g, "");
  return digits.length >= 7 && digits.length <= 15;
};

// 判断值是否“为空”：null/undefined/空字符串/空数组/空集合/空对象
export const isEmpty = (value: unknown): boolean => {
  if (value === null || value === undefined) return true;
  if (typeof value === "string") return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (value instanceof Map || value instanceof Set) return value.size === 0;
  if (typeof value === "object") return Object.keys(value as object).length === 0;
  return false;
};
