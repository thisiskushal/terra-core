import React from 'react';
import TagSelect from 'terra-form-select/lib/TagSelect';
import classNames from 'classnames/bind';
import styles from '../FormSelectDocCommon.module.scss';

const cx = classNames.bind(styles);

const DisabledExample = () => (
  <TagSelect placeholder="Select a color" disabled className={cx('form-select')} defaultValue={['red', 'white', 'blue']}>
    <TagSelect.Option value="blue" display="Blue" />
    <TagSelect.Option value="green" display="Green" />
    <TagSelect.Option value="purple" display="Purple" />
    <TagSelect.Option value="red" display="Red" />
    <TagSelect.Option value="violet" display="Violet" />
    <TagSelect.Option value="white" display="White" />
  </TagSelect>
);

export default DisabledExample;
