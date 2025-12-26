import { useCallback, useEffect, useRef, useState } from 'react';

type Initializer<T> = T | (() => T);
type Updater<T> = T | ((prev: T) => T);

const isBrowser = typeof window !== 'undefined';

const readStorage = <T>(key: string, fallback: Initializer<T>): T => {
	if (!isBrowser) return typeof fallback === 'function' ? (fallback as () => T)() : fallback;
	try {
		const raw = window.localStorage.getItem(key);
		if (raw === null) return typeof fallback === 'function' ? (fallback as () => T)() : fallback;
		return JSON.parse(raw) as T;
	} catch {
		return typeof fallback === 'function' ? (fallback as () => T)() : fallback;
	}
};

/**
 * useLocalStorage
 * 同步状态到 localStorage，跨标签页监听 storage 事件保持一致。
 */
export const useLocalStorage = <T>(key: string, initialValue: Initializer<T>): [T, (value: Updater<T>) => void] => {
	const initializerRef = useRef(initialValue);
	const [storedValue, setStoredValue] = useState<T>(() => readStorage(key, initializerRef.current));

	useEffect(() => {
		setStoredValue(readStorage(key, initializerRef.current));
	}, [key]);

	useEffect(() => {
		if (!isBrowser) return;
		const handleStorage = (event: StorageEvent) => {
			if (event.key === key) {
				setStoredValue(readStorage(key, initializerRef.current));
			}
		};
		window.addEventListener('storage', handleStorage);
		return () => window.removeEventListener('storage', handleStorage);
	}, [key]);

	const setValue = useCallback(
		(value: Updater<T>) => {
			setStoredValue((prev) => {
				const resolved = typeof value === 'function' ? (value as (prev: T) => T)(prev) : value;
				if (isBrowser) {
					try {
						window.localStorage.setItem(key, JSON.stringify(resolved));
					} catch {
						// ignore write errors
					}
				}
				return resolved;
			});
		},
		[key]
	);

	return [storedValue, setValue];
};
