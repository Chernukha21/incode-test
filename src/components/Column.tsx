import React from "react";
import {SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import {SortableItem} from "./SortableItem.tsx";
import {useDroppable} from "@dnd-kit/core";
import {Issue} from '../types/types.ts';

type ColumnProps =  {
    title: string;
    id: string;
    issues: Issue[];
}


const Column: React.FC<ColumnProps> = ({ title, issues, id }) => {
    const { setNodeRef } = useDroppable({ id });

    return (
        <SortableContext items={issues?.map(issue => issue.id)} strategy={verticalListSortingStrategy}>
            <div ref={setNodeRef} style={{backgroundColor: '#CED4DA'}} className="p-3 border border-black">
                <h2>{title}</h2>
                {issues?.map((issue) => (
                    <SortableItem key={issue.id} issue={issue} />
                ))}
            </div>
        </SortableContext>
    );
};

export default Column;