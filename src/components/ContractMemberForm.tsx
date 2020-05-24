import React, { useState, useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import { generate } from 'shortid';
import { FullContractWrapper } from '../types';

declare let refs: any;

interface ContractMemberFormProps { 
    contract: FullContractWrapper
    name: string
    readOnly?: boolean
    inputs?: any[]
}

export const ContractMemberForm = (props: ContractMemberFormProps) => {
    const context = useWeb3React();
    const [output, setOutput] = useState("");
    const [inputValues, setInputValues] = useState(props.inputs);

    useEffect(() => {
        const values = inputValues?.map(i => {
            return {
                ...i, 
                value: ""
            };
        })
        
        setInputValues(values);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    if (props.inputs?.length === 0) {
        return <></>
    }

    function handleChange(event: any) {
        if (!inputValues) return;

        inputValues[event.target.id].value = event.target.value;
    }

    async function onExecuteMember(e: any) {
        if (!inputValues) return;

        const args = [];
        for (let i = 0; i < inputValues?.length; i++) {
            const element = inputValues[i];
            args.push(element.value);
        }

        try { 
            let overrides: any = {}
            if (!props.readOnly) { 
                overrides = { gasLimit: 250000 }
            }
            const response = await props.contract.ethersContract.functions[props.name](...args, overrides);
            if (response?.hash) { 
                setOutput("Transaction send. Hash: " + response.hash)
            } else { 
                setOutput(response.toString())
            }
        } catch (ex) { 
            console.log("error", ex)
            if (props.readOnly) {
                setOutput("Error retrieving value.. Please validate your input arguments.")
            } else {
                setOutput("Error sending transaction.. " + ex.message)
            }
        }
    }

    const inputFields = inputValues?.map((input: any, index: any) => 
        <div key={generate()} className="form-group row">
            <label htmlFor={index} className="col-sm-2 col-form-label">
                {input.name} <small>({input.type})</small>
            </label>
            <div className="col-sm-10">
                <input type="text" className="form-control" id={index} defaultValue={input.value} onChange={handleChange} />
            </div>
        </div>
    )

    let executeButton = <></>
    if (context.account || props.readOnly) {
        executeButton = 
            <div className="form-group row">
                <label className="col-sm-2 col-form-label" />
                <div className="col-sm-10">
                    <button type="button" className="btn btn-info btn-sm" onClick={onExecuteMember}>
                        execute
                    </button>
                </div>
            </div>
    }

    let renderOutput = <></>
    if (output) { 
        renderOutput = <span>Result: <br/> {output}</span>
    }

    return (
        <div className="alert alert-light mt-3" role="alert">
            <strong>Parameters</strong>
            <hr />

            {inputFields}

            {executeButton}

            {renderOutput}
        </div>
    );
}