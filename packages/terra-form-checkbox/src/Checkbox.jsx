import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import 'terra-base/lib/baseStyles';
import styles from './Checkbox.scss';
import CheckboxUtil from './CheckboxUtil';

const cx = classNames.bind(styles);

const propTypes = {
  /**
    * Whether or not the checkbox element is checked. Use this to generate a controlled Checkbox Element.
    */
  checked: PropTypes.bool,
  /**
    * The checked property of the Input element. Use this to generate an uncontrolled Checkbox Element.
    */
  defaultChecked: PropTypes.bool,
  /**
    * The id of the checkbox.
    */
  id: PropTypes.string,
  /**
    * Additional attributes for the input object.
    */
  inputAttrs: PropTypes.object,
  /**
    * Whether the checkbox element is disabled.
    */
  disabled: PropTypes.bool,
  /**
    * Whether the checkbox element is inline.
    */
  isInline: PropTypes.bool,
  /**
    * Whether the label is hidden.
    */
  isLabelHidden: PropTypes.bool,
  /**
    * Text of the label.
    */
  labelText: PropTypes.node.isRequired,
  /**
    * Additional objects for the text object.
    */
  labelTextAttrs: PropTypes.object,
  /**
    * Name of the input attribute.
    */
  name: PropTypes.string,
  /**
   * Function to trigger when focus is lost from the checkbox.
   */
  onBlur: PropTypes.func,
  /**
    * Function to trigger when user clicks on the checkbox. Provide a function to create a controlled input.
    */
  onChange: PropTypes.func,
  /**
   *  Function to trigger when user focuses on the checkbox.
   */
  onFocus: PropTypes.func,
  /**
    * The value of the input element.
    */
  value: PropTypes.string,
};

const defaultProps = {
  checked: undefined,
  defaultChecked: undefined,
  id: undefined,
  inputAttrs: {},
  disabled: false,
  isInline: false,
  isLabelHidden: false,
  labelText: null,
  labelTextAttrs: {},
  name: null,
  onBlur: undefined,
  onChange: undefined,
  onFocus: undefined,
  value: undefined,
};

const Checkbox = ({
    checked,
    defaultChecked,
    inputAttrs,
    id,
    disabled,
    isInline,
    isLabelHidden,
    labelText,
    labelTextAttrs,
    name,
    onBlur,
    onChange,
    onFocus,
    value,
    ...customProps
  }) => {
  const controlInputAttrs = Object.assign({}, inputAttrs);

  if (checked !== undefined) {
    controlInputAttrs.checked = checked;
  } else {
    controlInputAttrs.defaultChecked = defaultChecked;
  }

  const checkboxClasses = cx([
    'checkbox',
    { 'is-inline': isInline },
    customProps.className,
  ]);

  const selectContainer = cx([
    'select-container',
  ]);

  const labelClasses = cx([
    'label',
    { 'is-disabled': disabled },
    labelTextAttrs.className,
  ]);

  const inputClasses = cx([
    'native-input',
    inputAttrs.className,
  ]);

  const labelTextClasses = cx([
    'label-text',
    { 'is-hidden': isLabelHidden },
    { 'is-mobile': CheckboxUtil.isConsideredMobileDevice() },
  ]);

  let labelTextContainer = null;
  if (isLabelHidden) {
    controlInputAttrs['aria-label'] = labelText;
    labelTextContainer = <span {...labelTextAttrs} className={labelTextClasses} />;
  } else {
    labelTextContainer = <span {...labelTextAttrs} className={labelTextClasses}>{labelText}</span>;
  }

  return (
    <div className={checkboxClasses}>
      <div className={selectContainer}>
        <label htmlFor={id} className={labelClasses}>
          <input
            {...controlInputAttrs}
            type="checkbox"
            id={id}
            disabled={disabled}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={onFocus}
            onBlur={onBlur}
            className={inputClasses}
          />
          {labelTextContainer}
        </label>
      </div>
    </div>
  );
};

Checkbox.propTypes = propTypes;
Checkbox.defaultProps = defaultProps;

export default Checkbox;