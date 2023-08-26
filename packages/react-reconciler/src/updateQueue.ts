import { Action } from 'shared/ReactTypes';

export interface Update<State> {
	action: Action<State>;
}

export interface UpdateQueue<State> {
	shared: {
		pending: Update<State> | null;
	};
}

export const createUpdate = <State>(action: Action<State>) => {
	return {
		action,
	};
};

export const createUpdateQueue = <Action>() => {
	return {
		shared: {
			pending: null,
		},
	} as UpdateQueue<Action>;
};

export const enqueueUpdate = <Action>(
	updateQueue: UpdateQueue<Action>,
	update: Update<Action>,
) => {
	updateQueue.shared.pending = update;
};
export const processUpdateQueue = <State>(
	baseState: State,
	pendingUpdate: Update<State> | null,
): { memorizedState: State } => {
	const result: ReturnType<typeof processUpdateQueue<State>> = {
		memorizedState: baseState,
	};
	if (pendingUpdate !== null) {
	}
	return result;
};
