import { Input } from '../components/Input'

export default {
    title: 'Forms/Input',
    component: Input
}

const Template = args => <Input {...args} />

export const DefaultInput = Template.bind({})
DefaultInput.args = {
    label: 'Name',
    id: 'nameInput',
    classname: 'default-input',
    name: 'nameInput',
    placeholder: 'Name',
    disabled: false,
    required: false
}

export const DisabledInput = Template.bind({})
DisabledInput.args = {
    label: 'Name',
    id: 'nameInput',
    classname: 'default-input',
    name: 'nameInput',
    placeholder: 'Name',
    disabled: true,
    required: false
}

export const RequiredInput = Template.bind({})
RequiredInput.args = {
    label: 'Name',
    id: 'nameInput',
    classname: 'default-input',
    name: 'nameInput',
    placeholder: 'Name',
    disabled: false,
    required: true
}