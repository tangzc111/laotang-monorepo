import type { Draft } from 'immer';
import { freeze, produce } from 'immer';
import { useCallback, useState } from 'react';
export type DraftFunction<S> = (draft: Draft<S>) => void;
export type Updater<S> = (arg: S | DraftFunction<S>) => void;
export type ImmerHook<S> = [S, Updater<S>];
//函数的签名
export function useImmer<S = unknown>(initialValue: S | (() => S)): ImmerHook<S>;
export function useImmer<T>(initialValue: T) {
	const [val, updateValue] = useState(
		//不可变对象 对我们原始的状态进行冻结
		freeze(typeof initialValue === 'function' ? initialValue() : initialValue, true)
	);
	return [
		val,
		useCallback((updater: T | DraftFunction<T>) => {
			if (typeof updater === 'function') {
				//不可变对象
				updateValue(produce(updater as DraftFunction<T>));
			} else {
				updateValue(updater);
			}
		}, []),
	];
}
