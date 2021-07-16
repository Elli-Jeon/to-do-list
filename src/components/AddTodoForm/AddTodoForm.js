import styled from 'styled-components'

const AddTodoForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    font-size : 2rem;
    position : relative;
    min-height: 40rem;
    & > * {
        margin : 0.5rem 0;
    }
    & button {
        margin-bottom : 2.5rem;
    }
`;

export default AddTodoForm;