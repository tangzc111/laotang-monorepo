import { useCallback, useState } from 'react';

/**
 * useToggle
 * 便捷的布尔值切换。
 */
export const useToggle = (initialValue = false): [boolean, () => void, (next: boolean) => void] => {
	const [value, setValue] = useState<boolean>(initialValue);

	const toggle = useCallback(() => setValue((prev) => !prev), []);
	const set = useCallback((next: boolean) => setValue(next), []);

	return [value, toggle, set];
};
