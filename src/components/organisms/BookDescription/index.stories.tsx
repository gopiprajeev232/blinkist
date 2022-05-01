import { ComponentStory } from "@storybook/react";
import { BookDescription } from ".";
import {MemoryRouter} from 'react-router-dom'

export default {
    title: "Organisms/Book Description",
    component: BookDescription
}

let Template: ComponentStory<typeof BookDescription> = () => <BookDescription />

export const BookDescriptionTest = Template.bind({})
BookDescriptionTest.args = {

}