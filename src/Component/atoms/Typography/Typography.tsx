import React, { ReactNode } from 'react';

export interface TypographyProps {
    /**
     * value you can provide h1,h2,p
     */
    variant?: string
    color?: string,
    fontSize?: string,
    children: ReactNode,
    style?: object
}

export const Typography = ({
                               variant = 'p', children, color = 'black', fontSize = '', style = {},
                               ...props
                           }: TypographyProps) => {


    let styles : any = {
        ...style,
        color: color,
    }

    if(fontSize==='')
        styles['fontSize'] = fontSize

    const getVariant = () => {

        if (variant === 'h1')
            return <h1 {...props} style={styles}>{children}</h1>
        else if (variant === 'h2')
            return <h2 {...props} style={styles}>{children}</h2>
        if (variant === 'h3')
            return <h3 {...props} style={styles}>{children}</h3>
        else if (variant === 'h4')
            return <h4 {...props} style={styles}>{children}</h4>
        if (variant === 'h5')
            return <h5 {...props} style={styles}>{children}</h5>
        return <p {...props} style={styles}>{children}</p>
    }

    return (
        getVariant()
    );
};
