import React, { useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../context/AppContext';

const CurrencyDropdown = () => {
    const { dispatch, currency } = useContext(AppContext);

    const currencyOptions = [
        { value: '$', label: '$ Dollar' },
        { value: '£', label: '£ Pound' },
        { value: '€', label: '€ Euro' },
        { value: '₹', label: '₹ Rupee'},
    ];

    const handleCurrencyChange = (selectedOption) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selectedOption.value,
        });
    };

    const customStyles = {
        option: (provided, state) => ({
            ...provided,
            backgroundColor: state.isFocused ? 'white' : 'lightgreen',
            color: state.isFocused ? 'black' : 'inherit',
        }),
        control: (provided) => ({
            ...provided,
            backgroundColor: 'lightgreen',
        }),
    };

    return (
        <Select
        value={currency ? { value: currency, label: currencyOptions.find(opt => opt.value === currency)?.label } : null}
            onChange={handleCurrencyChange}
            options={currencyOptions}
            styles={customStyles}
            placeholder="Select a Currency..."
        />
    );
};

export default CurrencyDropdown;