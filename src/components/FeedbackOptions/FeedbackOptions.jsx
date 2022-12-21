import PropTypes from 'prop-types';
import { ListButton, ItemButton } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <ListButton>
      {options.map(option => (
        <ItemButton key={option}>
          <button name={option} onClick={onLeaveFeedback}>
            {option.slice(0, 1).toUpperCase() +
              option.slice(1, option.length).toLowerCase()}
          </button>
        </ItemButton>
      ))}
    </ListButton>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
