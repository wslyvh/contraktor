import React, { useState } from 'react';
import { getMemberCardRowStyle } from '../utils/styling';

interface ContractMemberFunctionProps { 
    collapsible?: boolean
    type: "constructor" | "views" | "payable" | "functions" | "events" | "fallback"
    member: any
}

export const ContractMemberFunction = (props: ContractMemberFunctionProps) => {
    const [show, setShow] = useState(false);

    let collapsablePanel = <></>
    if (show) { 
        collapsablePanel =  <></>
    }

    let renderInputs = <></>
    if (props.member.inputs) {
        renderInputs = props.member.inputs.map((input: any, i: number) =>
            <>
                <small key={i} className="mr-1">{input.name} ({input.type})</small>
            </>
        );
    } 

    if (props.collapsible) { 
        return (
            <>
                <div key={props.type} className={getMemberCardRowStyle(props.type)} role="alert" onClick={() => setShow(show ? false : true)}>
                    {props.member.name ?? props.member.type} {renderInputs}
                </div>
    
                {collapsablePanel}
            </>
        );
    }

    return (
        <div key={props.type} className={getMemberCardRowStyle(props.type)} role="alert">
            {props.member.name ?? props.member.type} {renderInputs}
        </div>
    );
}