import React from "react";
import {Icons, IconProps} from '.'
import {Story, Meta} from '@storybook/react'
import ArrowDropDown from '../../../images/dropdownarrow.svg'
import SearchIcon from '../../../images/searchicon.svg'
import BlinkistLogo from '../../../images/blinkistlogo.svg'

export default {
    title: 'Atoms/Icon',
    component: Icons
}

const Template: Story<IconProps> = (args) => <Icons {...args} />

export const Blinkist = Template.bind({})
Blinkist.args = {
    source: BlinkistLogo
}