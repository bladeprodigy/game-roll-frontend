import React from "react";

export interface StringFormProps {
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}