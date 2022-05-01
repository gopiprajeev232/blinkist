import { ComponentStory } from "@storybook/react";
import { ExtendedNav } from ".";

export default {
    title: 'Organisms/Extended Nav',
    component: ExtendedNav
}

const Template: ComponentStory<typeof ExtendedNav> = () => <ExtendedNav />

export const ExtNav = Template.bind({})
ExtNav.args = {
    
}