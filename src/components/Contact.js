import styled from "styled-components";
import PropTypes from "prop-types"

export const Contact = ({ contact }) => {
    return (
        <>
            <StyledName>{contact.name}</StyledName>
            <StyledNumber>{contact.number}</StyledNumber>
            <StyledButton
                onClick={handleDelete}>
                Delete
            </StyledButton>
        </>
    )
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}