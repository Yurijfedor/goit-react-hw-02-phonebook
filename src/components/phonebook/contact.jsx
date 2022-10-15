import PropTypes from 'prop-types';

export const Contact = ({
  contactInfo: { name, number, id },
  onDeleteContact,
}) => {
  return (
    <>
      {name}: {number}
      <button data-id={id} onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contactInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  }),
};
