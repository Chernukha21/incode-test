import React from "react";
import {CSS} from '@dnd-kit/utilities';
import Issue from "./Issue.tsx";
import {Issue as IssueItem} from "../types/types.ts"
import {useDraggable} from "@dnd-kit/core";

interface SortableItemProps {
    issue: IssueItem;
}

export function SortableItem({ issue }: SortableItemProps) {
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,

    } = useDraggable({ id: issue.id });

    const style: React.CSSProperties = {
        transform: CSS.Translate.toString(transform),
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            <Issue issue={issue} />
        </div>
    );
}