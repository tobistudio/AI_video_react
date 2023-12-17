// Button props
export type IButtonProps = {
    onClick?: (e: React.ChangeEvent<HTMLButtonElement>) => void;
    border?: string;
    font?: string;
    size?: 'sm' | 'md' | 'lg';
    isicon?: boolean;
    className?: string;
    bg?: string;
    width?: number;
} & React.HTMLAttributes<HTMLElement>;