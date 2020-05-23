import React from 'react';
import { getMemberCardRowStyle } from '../utils/styling';

interface ContractMembersCardProps { 
    type: "constructor" | "views" | "payable" | "functions" | "events" | "fallback"
    members: any[]
}

export const ContractMembersCard = (props: ContractMembersCardProps) => {

    let renderMemberItems;
    if (props.members?.length) {
        renderMemberItems = props.members.map((member: any, i: number) =>
            <>
                <div key={i} className={getMemberCardRowStyle(props.type)} role="alert">
                    {member.name ?? member.type}
                </div>
            </>
        );
    } else { 
        renderMemberItems = <small>No {props.type} for this contract..</small> 
    }

    return (
        <>
        <div className="card mb-3">
            <div className="card-body">
                <h4 className="card-title text-capitalize">{props.type}</h4>
                {renderMemberItems}
            </div>
        </div>
        </>
    );
}