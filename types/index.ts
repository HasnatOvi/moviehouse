import {MouseEventHandler} from "react";

export interface CustomButtonProps{
    title: string;
    containerStyles?: string;
    handleClick?:
        MouseEventHandler<HTMLButtonElement>
}

export interface MovieDetailsProps{
    title: string;
    description: string;
    ratting: number;
    genres?:string[];
    language?:string[];
    download:boolean;
}