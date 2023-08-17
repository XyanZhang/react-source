import { Key, Props, Ref } from 'shared/ReactTypes';
import { WorkTag } from './workTags';
import { Flags, NoFlags } from './fiberFlags';

export class FiberNode {
	tag: number;
	key: any;
	pendingProps: Props;
	stateNode: null;
	type: null;
	ref: Ref;

	return: FiberNode | null;
	child: FiberNode | null;
	sibling: FiberNode | null;

	index: number;
	memoizedProps: Props | null;
	alternate: FiberNode | null;
	flags: Flags;

	constructor(tag: WorkTag, pendingProps: Props, key: Key) {
		this.tag = tag;
		this.key = key;
		this.pendingProps = pendingProps;
		//  用于连接其他的FiberNode
		this.stateNode = null;
		//
		this.type = null;

		// 构成树形结构
		// 指向父FiberNode
		this.return = null;
		// 指向第一个子FiberNode
		this.child = null;
		// 指向下一个兄弟FiberNode
		this.sibling = null;
		// 用于记录当前FiberNode在父FiberNode的子FiberNode中的位置
		this.index = 0;

		// 作为工作单元
		this.pendingProps = pendingProps;
		this.memoizedProps = null;

		this.alternate = null;
		// 副作用
		this.flags = NoFlags;
	}
}
