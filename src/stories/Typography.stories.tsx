import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { Typography, TypographyProps as Props } from "../Component/atoms/Typography/Typography";

const meta: Meta = {
    title: "Atoms/Typography",
    component: Typography,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: "A custom typography component",
            },
        },
    }
};

export default meta;


const Template: StoryFn<Props> = (args) => <Typography {...args}/>;

export const h1 = Template.bind({});
h1.args = {
    variant: "h1",
    children: "h1",
};

export const h2 = Template.bind({});
h2.args = {
    variant: "h2",
    children: "h2",
};
export const h3 = Template.bind({});
h3.args = {
    variant: "h3",
    children: "h3",
};

export const h4 = Template.bind({});
h4.args = {
    variant: "h4",
    children: "h4",
};

export const h5 = Template.bind({});
h5.args = {
    variant: "h5",
    children: "h5",
};

export const Default = Template.bind({});
Default.args = {
    variant: "p",
    children: "p",
    style: {
        color: "red",
        fontSize : "20px"
    }
};


