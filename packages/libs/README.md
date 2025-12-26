# @tzc/libs

轻量的格式化与校验工具集合，适用于 JS/TS。

## 安装

```bash
pnpm add @tzc/libs
# 或 npm / yarn
```

## 使用示例

```ts
import { formatCurrency, formatNumber, formatDate, formatPercent } from '@tzc/libs';

formatCurrency(1234.5, { locale: 'zh-CN', currency: 'CNY' }); // ￥1,234.50
formatNumber(1234567.89, { maximumFractionDigits: 1 }); // 1,234,567.9
formatDate(new Date(), { locale: 'zh-CN', dateStyle: 'long', timeStyle: 'short' }); // 2024年...
formatPercent(0.1234); // 12.34%
```

## API

- `formatCurrency(value, options)`：按货币格式输出。
- `formatNumber(value, options)`：千分位数字格式化。
- `formatDate(value, options)`：日期/时间格式化。
- `formatPercent(value, options)`：百分比格式化。
