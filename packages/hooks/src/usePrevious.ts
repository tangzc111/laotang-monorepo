import { useEffect, useRef } from 'react';

/**
 * usePrevious
 * 获取上一轮渲染的值。
 */
export const usePrevious = <T>(value: T): T | undefined => {
	const ref = useRef<T>();

	useEffect(() => {
		ref.current = value;
	}, [value]);

	return ref.current;
};
