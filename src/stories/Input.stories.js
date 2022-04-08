import { Input } from '../components/Input'

export default {
    title: 'Forms/Input',
    component: Input
}

const Template = args => <Input {...args} />

export const DefaultInput = Template.bind({})
DefaultInput.args = {
    type: 'text',
    label: 'Name',
    id: 'nameInput',
    classname: 'default-input',
    name: 'nameInput',
    placeholder: 'Name',
    disabled: false,
    required: false,
    blur: function(e) {
        // const { value } = e.target
        console.log('Blur has been fired.')
    }
}

export const DisabledInput = Template.bind({})
DisabledInput.args = {
    type: 'text',
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
    type: 'text',
    label: 'Name',
    id: 'nameInput',
    classname: 'default-input',
    name: 'nameInput',
    placeholder: 'Name',
    disabled: false,
    required: true,
    blur: function(e) {
        // const { value } = e.target
        console.log('Blur has been fired.')
    }
}