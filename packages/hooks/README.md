# @tzc/hooks

可复用的 React Hooks 集合，包含 `useImmer`、`useLocalStorage`、`usePrevious`、`useToggle` 等常用状态工具。

## 安装

```bash
pnpm add @tzc/hooks
# 或 npm / yarn
```

> 需要 React 17+，并依赖 peer dependency `immer`。

## 使用示例

```tsx
import React from 'react';
import { useImmer, useLocalStorage, usePrevious, useToggle } from '@tzc/hooks';

export default function Demo() {
  const [state, update] = useImmer({ count: 0 });
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const prevTheme = usePrevious(theme);
  const [on, toggle, setOn] = useToggle(false);

  return (
    <div>
      <button onClick={() => update(draft => draft.count++)}>count: {state.count}</button>
      <button onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}>
        theme: {theme} (prev: {prevTheme ?? 'none'})
      </button>
      <button onClick={toggle}>toggle: {on ? 'on' : 'off'}</button>
      <button onClick={() => setOn(true)}>set on</button>
    </div>
  );
}
```

## 可用 Hooks

- `useImmer`：基于 immer 的不可变状态更新。
- `useLocalStorage`：状态与 `localStorage` 同步，支持 storage 事件。
- `usePrevious`：获取上一轮渲染的值。
- `useToggle`：布尔值快捷切换。
