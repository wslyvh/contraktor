
import React from 'react';

interface ErrorProps { 
  type: "primary" | "secondary" | "success" | "danger" | "warning" | "info"
  message: string;
}

export const Notification = (props: ErrorProps) => {
  return (
    <>
      <div className={`alert alert-${props.type}`} role="alert">
        {props.message}
      </div>
    </>
  );
}