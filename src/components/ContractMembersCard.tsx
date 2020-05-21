import React from 'react';

interface ContractMembersCardProps { 
    type: "constructor" | "views" | "functions" | "events" | "fallback"
    members: any[]
}

export const ContractMembersCard = (props: ContractMembersCardProps) => {

    function memberStyle() { 
        if (props.type === "constructor")
            return "alert alert-secondary"
        
        if (props.type === "views")
            return "alert alert-primary"

        if (props.type === "functions")
            return "alert alert-success"
        
        if (props.type === "events")
            return "alert alert-warning"
    }

    let renderMemberItems;
    if (props.members?.length) {
        renderMemberItems = props.members.map((member: any, i: number) =>
            <div key={i} className={memberStyle()} role="alert">
                {member.name ?? member.type}
            </div>
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