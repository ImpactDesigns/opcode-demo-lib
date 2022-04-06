import { Button } from '../components/Button'

export default {
    title: 'Form controls/Button',
    component: Button
}

const Template = args => <Button {...args} />

export const PrimaryButton = Template.bind({})
PrimaryButton.args = {
    label: 'Submit',
    buttonType: 'primary',
    className: 'primary-button',
    onclick: function() {
        alert('primary button fired')
    }
}

export const SecondaryButton = Template.bind({})
SecondaryButton.args = {
    label: 'Click here',
    buttonType: 'secondary',
    className: 'secondary-button',
    onclick: function() {
        alert('secondary button fired')
    }
}