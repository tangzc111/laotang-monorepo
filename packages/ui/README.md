# @tzc/ui

基于 Radix UI + Tailwind 的 React 组件库，提供常用的 Button、Input、Switch、Badge 等组件。

## 安装

```bash
pnpm add @tzc/ui
# 或 npm / yarn
```

> 需要 React 17+，样式需手动引入：`import '@tzc/ui/dist/styles.css';`

## 使用示例

```tsx
import { Button, Input, Switch, Badge } from '@tzc/ui';
import '@tzc/ui/dist/styles.css';

export default function Demo() {
  return (
    <div className="space-y-4">
      <Button variant="primary">提交</Button>
      <Input label="邮箱" placeholder="you@example.com" />
      <Switch label="启用通知" defaultChecked />
      <Badge variant="success">已完成</Badge>
    </div>
  );
}
```

## 可用组件

- `Button`：支持 `variant`（primary/secondary/ghost）、`size`（sm/md/lg）、`asChild`。
- `Input`：支持 `label`、`hint`。
- `Switch`：Radix Switch 封装，支持 `label`。
- `Badge`：样式标记，支持 `variant`（default/success/warning）。
