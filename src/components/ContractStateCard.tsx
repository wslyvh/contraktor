import React from 'react';
import { ContractValue } from '.';

interface ContractStateCardProps { 
    members: any[]
}

export const ContractStateCard = (props: ContractStateCardProps) => {
    
    const renderMemberItems = props.members.map((member: any, i: number) => (
        <tr key={i}>
            <th scope="row">{member.name}</th>
            <td>
                <ContractValue value={member.value} />
            </td>
        </tr>)
    );

    let renderTable;
    if (props.members?.length) { 
        renderTable = (
            <table className="table">
                <tbody>
                    {renderMemberItems}
                </tbody>
            </table>)
    } else { 
        renderTable = <small>No state set for this contract..</small> 
    }

    return (
        <>
        <div className="card mb-3">
            <div className="card-body">
                <h4 className="card-title text-capitalize">Current state</h4>
                {renderTable}
            </div>
        </div>
        </>
    );
}