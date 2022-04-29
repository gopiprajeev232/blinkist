import { ComponentStory, Story } from "@storybook/react";
import { SearchBarComponent } from ".";
import {ReactComponent as SearchIcon} from '../../../images/searchicon.svg'

export default {
    title: 'Molecules/Search Bar',
    component: SearchBarComponent
}

const Template: ComponentStory<typeof SearchBarComponent> = args => <SearchBarComponent />

export const SearchBar = Template.bind({})
SearchBar.args = {

}