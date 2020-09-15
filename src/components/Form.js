import React from 'react'
import styled from 'styled-components'
import findAll from './helper/findAll'
import {
    TextInput as CTextInput,
    Switch as CSwitch,
    Radio as CRadio,
    Checkbox as CCheckbox,
    Select as CSelect
} from './'
import PropTypes from 'prop-types';

export default function Form(props) {
    /**
     * renders all text inputs
     * @param {Object} textInputs - object containing text input components and indexes
     */
    const renderTextInputs = textInputs => textInputs?.map(textInput => {
        const { child, index } = textInput;
        return { 
            child: <CTextInput {...child.props} key={Math.random()}>{child.props.children}</CTextInput>,
            index 
        }
    })
    
    /**
     * renders all switches
     * @param {Object} switches - object containing switch components and indexes
     */
    const renderSwitches = switches => switches?.map(cswitch => {
        const { child, index } = cswitch;
        return { 
            child: <CSwitch {...child.props} key={Math.random()}/>,
            index
        }
    })

    /**
     * renders all radios
     * @param {Object} radios - object containing radio components and indexes
     */
    const renderRadios = (radios, group) => radios?.map(radio => {
        const { child, index } = radio;
        return { 
            child: <CRadio {...child.props} name={group || child.props.name} key={Math.random()} />,
            index
        }
    })

    /**
     * renders all checkboxes
     * @param {Object} checkboxes - object containing checkbox components and indexes 
     */
    const renderCheckboxes = (checkboxes, group) => checkboxes?.map(checkbox => {
        const { child, index } = checkbox;
        return {
            child: <CCheckbox {...child.props} name={group || child.props.name} key={Math.random()} />,
            index
        }
    })

    /**
     * renders all selects
     * @param {Object} selects - object containing all select components and indexes 
     */
    const renderSelects = selects => selects?.map(select => {
        const { child, index } = select;
        return {
            child: <CSelect {...child.props} key={Math.random()} />, 
            index
        }
    })

    /** 
     * renders all groups
     * @param {Objects} groups - object containing all select compnents and indexes 
     */
    const renderGroups = groups => groups?.map(group => {
        const { child, index } = group;
        return {
            child: <FormGroup {...child.props} key={Math.random()}>
                { child.props.title ? <h3>{child.props.title}</h3> : null}
                { renderContent(child.props) }
            </FormGroup>,
            index
        }
    })

    /**
     * Renders all children with speacial components
     * @param {Object} props - props pertaining to the component being rendered 
     */
    const renderContent = cprops => {
        // components
        const components = findAll(cprops.children, [TextInput, Switch, Radio, Checkbox, Select, Group]);

        // individual components
        const TextInputs = renderTextInputs(components['TextInput']) || [];
        const Switches = renderSwitches(components['Switch']) || [];
        const Radios = renderRadios(components['Radio'], cprops.name) || [];
        const Checkboxes = renderCheckboxes(components['Checkbox'], cprops.name) || [];
        const Selects = renderSelects(components['Select']) || [];
        const Groups = renderGroups(components['Form.Group']) || [];
        const Others = components['other'] || [];
        const renderAll = [...TextInputs, ...Switches, ...Radios, ...Checkboxes, ...Selects, ...Groups, ...Others]
            .sort((a, b) => a.index - b.index);

        return renderAll.map(component => component.child)
    }

    return (
        <CForm {...props}>
            { renderContent(props) }
        </CForm>
    )
    
}

// create prototype components
const TextInput = () => null;
const Switch = () => null;
const Radio = () => null;
const Checkbox = () => null;
const Select = () => null;
const Group = () => null;

// set respective display names
TextInput.displayName = 'TextInput';
Switch.displayName = 'Switch';
Radio.displayName = 'Radio';
Checkbox.displayName = 'Checkbox';
Select.displayName = 'Select'
Group.displayName = 'Form.Group'

// assign group as subcomponent
Form.Group = Group;

// prop types
Form.propTypes = {
    /** Title of form*/
    title: PropTypes.string,
    /** Width of form */
    width: PropTypes.string,
    /** onSubmit */
    onSubmit: PropTypes.func,
    
}

const CForm = styled.form`
    display: inline-flex;
    flex-direction: column;
    width: ${props => props.width || 'auto'};
    & > label {
        margin: 10px;
    }
    & input[type="text"] {
        flex: 1;
    }
`
const FormGroup = styled.div`
    flex: 1;
    display: flex;
    flex-direction: ${props => props.split ? 'auto' : 'column'};
    margin-bottom: 15px;
    & label {
        margin: 5px 10px;
        flex: 1;
    }
    & input[type="text"] {
        width: 100%;
    }
    & h3 {
        margin: 0;
        margin-bottom: 15px;
    }
`