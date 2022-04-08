import { Input } from '../components/Input'

export default {
    title: 'Forms/Input',
    component: Input
}

const Template = args => <Input {...args} />

export const DefaultInput = Template.bind({})
DefaultInput.args = {
    label: 'Label',
    placeholder: 'Placeholder'
}