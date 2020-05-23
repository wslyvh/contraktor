import React, { useState } from 'react';
import { getMemberCardRowStyle } from '../utils/styling';
import { ContractMemberForm } from './ContractMemberForm';
import { generate } from 'shortid';
import { FullContractWrapper } from '../types';

interface ContractMemberFunctionProps { 
    collapsible?: boolean
    contract: FullContractWrapper
    type: "constructor" | "views" | "payable" | "functions" | "events" | "fallback"
    member: any
}

export const ContractMemberFunction = (props: ContractMemberFunctionProps) => {
    const [show, setShow] = useState(false);

    let collapsablePanel = <></>
    if (show) { 
        collapsablePanel = <ContractMemberForm contract={props.contract} name={props.member.name} inputs={props.member.inputs} readOnly={props.type === "views"} />
    }

    let renderInputs = <></>
    if (props.member.inputs) {
        renderInputs = props.member.inputs.map((input: any, i: number) =>
            <small key={generate()} className="mr-1">{input.name} ({input.type})</small>
        );
    } 

    if (props.collapsible) { 
        return (
            <>
                <div className={getMemberCardRowStyle(props.type)} role="alert">
                    <div onClick={() => setShow(show ? false : true)}>
                        {props.member.name ?? props.member.type} {renderInputs}
                    </div>

                    {collapsablePanel}
                </div>
    
            </>
        );
    }

    return (
        <div className={getMemberCardRowStyle(props.type)} role="alert">
            {props.member.name ?? props.member.type} {renderInputs}
        </div>
    );
}