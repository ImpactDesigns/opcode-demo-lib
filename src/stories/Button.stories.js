import { Button } from '../components/Button'

export default {
    title: 'Button',
    component: Button
}

const Template = args => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
    label: 'Submit',
    buttonType: 'primary',
    onclick: function() {
        alert('primary button fired')
    }
}

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
    label: 'Click here',
    buttonType: 'secondary',
    onclick: function() {
        alert('secondary button fired')
    }
}