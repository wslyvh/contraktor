import React from 'react';
import { ContractMemberFunction } from './';
import { generate } from 'shortid';
import { FullContractWrapper } from '../types';

interface ContractMembersCardProps { 
    collapsible?: false
    contract: FullContractWrapper
    type: "constructor" | "views" | "payable" | "functions" | "events" | "fallback"
    members: any[]
}

export const ContractMembersCard = (props: ContractMembersCardProps) => {

    let renderMemberItems;
    if (props.members?.length) {
        renderMemberItems = props.members.map((member: any, i: number) =>
            <ContractMemberFunction key={generate()} contract={props.contract} member={member} type={props.type} collapsible={(props.type !== "constructor" && props.type !== "events")} />
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