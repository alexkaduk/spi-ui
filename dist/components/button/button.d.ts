import { default as React, FC, PropsWithChildren } from 'react';
export declare const Button: FC<PropsWithChildren<Props>>;
export interface Props {
    children: React.ReactNode;
    className?: string;
    fontSize?: string;
}
