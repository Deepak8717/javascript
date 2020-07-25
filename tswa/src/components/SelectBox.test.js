import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import SelectBox from './SelectBox';

describe('SelectBox', () => {
    test('should render', () => {
        const characters = [{ id: '1', name: 'Lucas'}, { id: '2', name: 'Yoda'}];
        const { getByText, getByDisplayValue } = render(<SelectBox characters={characters} currentCharacterId={'1'} />);
        
        expect(getByDisplayValue('Lucas')).toBeInTheDocument();
        
        expect(getByText('Yoda')).toBeInTheDocument();
        expect(getByText('Lucas')).toBeInTheDocument();
    });

    test('should handle onchange', () => {
        const characters = [{ id: '1', name: 'Lucas'}, { id: '2', name: 'Yoda'}];
        const mockFn = jest.fn();
        const { getByDisplayValue } = render(<SelectBox characters={characters} currentCharacterId={'2'} onCharacterSelected={mockFn} />);
        fireEvent.change(getByDisplayValue('Yoda'), { target: { value: '1' } });
        expect(mockFn).toHaveBeenCalledWith('1');
    });
});




